package com.msl.mcs.eddi.geo.store.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;
import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.model.GeoMessageVO;
import com.msl.mcs.eddi.geo.store.em.EMContainer;
import com.msl.mcs.eddi.geo.store.entity.GeoMessage;

@Service
public class GeoMessageStoreService {
	private EntityManager em = EMContainer.getEntityManager();

	/**
	 * Insert GEO message to store
	 * 
	 * @param geoMessageVO
	 */
	public void insertGeoMessage(GeoMessageVO geoMessageVO) {

		GeoMessage geoMessage = new GeoMessage();

		geoMessage.setMsgId(geoMessageVO.getMsgId());
		geoMessage.setVersion(geoMessageVO.getVersion());
		geoMessage.setMsgNumber(geoMessageVO.getMsgNumber());
		geoMessage.setExtractTime(geoMessageVO.getExtractTime());
		geoMessage.setPrevExtractTime(geoMessageVO.getPrevExtractTime());
		geoMessage.setEndMarker(geoMessageVO.getEndMarker());
		geoMessage.setMessage(geoMessageVO.getMessage());
		geoMessage.setProcessedState(geoMessageVO.getProcessedState());
		geoMessage.setLog(geoMessageVO.getLog());
		geoMessage.setReceivedDate(geoMessageVO.getReceivedDate());
		geoMessage.setProcessedDate(geoMessageVO.getProcessedDate());
		
	    em.persist(geoMessage);
	    em.flush();
	}// EndMethod
	
	/**
	 * 
	 * @param extractTime
	 * @param msgId
	 * @param version
	 * @param msgNumber
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GeoMessageVO getNextBatchMessageToProcess(Timestamp extractTime,
			String msgId, String version, int msgNumber) {
		GeoMessageVO messageVO =  new GeoMessageVO();
		
		Query jpaQuery = em.createNamedQuery("select gmsg from GeoMessage gmsg where gmsg.extractTime>=?1 and gmsg.msgId=?2 and gmsg.version=?3 and gmsg.msgNumber=?4");
		jpaQuery.setParameter(1, (extractTime));
		jpaQuery.setParameter(2, msgId);
		jpaQuery.setParameter(3, version);
		jpaQuery.setParameter(4, msgNumber);
		
		List<GeoMessage> geoMessages= jpaQuery.getResultList();
		
		if(!CommonHelper.isNullOrEmpty(geoMessages)){
			GeoMessage geoMessage = geoMessages.get(0);
			messageVO.setId(geoMessage.getId());
			messageVO.setVersion(geoMessage.getVersion());
			messageVO.setMsgNumber(geoMessage.getMsgNumber());
			messageVO.setExtractTime(geoMessage.getExtractTime());
			messageVO.setPrevExtractTime(geoMessage.getPrevExtractTime());
			messageVO.setEndMarker(geoMessage.getEndMarker());
			messageVO.setMessage(geoMessage.getMessage());
			messageVO.setProcessedDate(geoMessage.getProcessedDate());
			messageVO.setReceivedDate(geoMessage.getReceivedDate());
			messageVO.setProcessedDate(geoMessage.getProcessedDate());
		}
		
		return messageVO;
	}
	
	public void updateMessageProcessedState(Timestamp extractTime,
			Long msgNumber, String state, String logMessage) {
		
		GeoMessageVO messageVO =  new GeoMessageVO();
		
		Query jpaQuery = em.createNamedQuery("select gmsg from GeoMessage gmsg where gmsg.extractTime>=?1 and gmsg.msgNumber=?2");
		jpaQuery.setParameter(1, extractTime);
		jpaQuery.setParameter(2, msgNumber);
		
		messageVO = (GeoMessageVO) jpaQuery.getSingleResult();
		
		if(!CommonHelper.isNullOrEmpty(messageVO)){
			messageVO.setProcessedState(state);
			messageVO.setProcessedDate(new Timestamp(new Date().getTime()));
			messageVO.setLog(logMessage);
			em.merge(messageVO);
			em.flush();
		}
		
	}
	
	@SuppressWarnings("unchecked")
	public List<Object> validateMessageSequence(Timestamp extractTime, String msgId,
			String version) {
		boolean valid = false;
		long leastMsgNumber = 0L;
		long maxMsgNumber = 0L;
		List<Object> returnList=new ArrayList<Object>();
		
		//removed  order by gmsg.msgNumber
		Query jpaQuery = em.createNamedQuery("select gmsg from GeoMessage gmsg where gmsg.extractTime>=?1 and gmsg.msgId=?2 and gmsg.version=?3");
		jpaQuery.setParameter(1, extractTime);
		jpaQuery.setParameter(2, msgId);
		jpaQuery.setParameter(3, version);
		
		List<GeoMessage> geoMessages= jpaQuery.getResultList();
		
		long actualNumMessages = 0L;
		long expectedNumMessages;
		
		if(!CommonHelper.isNullOrEmpty(geoMessages)){
			leastMsgNumber = (Long)geoMessages.get(0).getMsgNumber();
			maxMsgNumber = (Long)geoMessages.get(geoMessages.size() - 1).getMsgNumber(); 
			actualNumMessages = geoMessages.size();
		}
		expectedNumMessages = (maxMsgNumber - leastMsgNumber) + 1L;
		if (expectedNumMessages == actualNumMessages) {
			valid = true;
		} else {
			valid = false;
		}
		returnList.add(valid);
		returnList.add(maxMsgNumber);
		return returnList;
	}
	
	/**
	 * Read All messages for a Batch to display on UI.
	 * 
	 * @param batchId
	 *            int
	 * @param extractTime
	 *            String
	 * @param pageSize
	 *            String
	 * @param txtCurr
	 *            String
	 * @return List<Object>
	 */
	@SuppressWarnings("rawtypes")
	public List<Object> getMessageLog(int batchId, String extractTime,String pageSize,String txtCurr){
		List<GeoMessageVO> listJobs = new ArrayList<GeoMessageVO>();
		List<Object> returnList = new ArrayList<Object>();
		List result;
		
		int size=Integer.parseInt(pageSize);
		int pageNo=Integer.parseInt(txtCurr);
		
		int totalRecords=0;
		
		String qrR;
		String qrC;
		
		qrR = Constants.GEO_QUERY_MESSAGELOG1 + extractTime
				+ Constants.GEO_QUERY_MESSAGELOG2;
		qrC= Constants.GEO_QUERY_MESSAGELOG_COUNT + extractTime
		+ Constants.SINGLE_INVERTED;
		
		Query queryR = em.createQuery(qrR);
		queryR.setFirstResult((pageNo-1)*size);
		queryR.setMaxResults(size);
		result = queryR.getResultList();
		
		Query queryC = em.createQuery(qrC);
		totalRecords = ((Long)queryC.getSingleResult()).intValue(); 
		
		GeoMessageVO tempVO;
		Object[] record ;
		int resultSize=result.size();
		
		for (int i= 0; i<resultSize; i++) {
			
			record = (Object[]) result.get(i);
			tempVO = new GeoMessageVO();

			tempVO.setMsgNumber((Long)record[0]);
			tempVO.setExtractTime((Timestamp)record[1]);
			tempVO.setPrevExtractTime((Timestamp)record[2]);
			tempVO.setEndMarker((String)record[3]);
			tempVO.setProcessedState((String)record[4]);
			tempVO.setReceivedDate((Timestamp)record[5]);
			tempVO.setProcessedDate((Timestamp)record[6]);
			tempVO.setMessage((String)record[7]);

			listJobs.add(tempVO);
		}
		
		returnList.add(listJobs);
		returnList.add(totalRecords);
		return returnList;
	}

}// EndClass
