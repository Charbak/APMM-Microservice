package com.msl.mcs.eddi.geo.store.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.exceptions.DataAccessException;
import com.msl.mcs.eddi.geo.feeds.model.GeoBatchVO;
import com.msl.mcs.eddi.geo.store.em.EMContainer;
import com.msl.mcs.eddi.geo.store.entity.GeoBatch;

@Service
public class GeoBatchStoreService {
	
	private EntityManager em = EMContainer.getEntityManager();
	
	/**
	 * Insert GEO batch to store
	 * 
	 * @param geoBatchVO
	 */
	public void insertGeoBatch(GeoBatchVO geoBatchVO) {

		GeoBatch geoBatch = new GeoBatch();

		geoBatch.setMsgId(geoBatchVO.getMsgId());
		geoBatch.setVersion(geoBatchVO.getVersion());
		geoBatch.setExtractTime(geoBatchVO.getExtractTime());
		geoBatch.setPrevExtractTime(geoBatchVO.getPrevExtractTime());
		geoBatch.setCreateDate(geoBatchVO.getCreateDate());
		geoBatch.setIgnoreBatchSequence(geoBatchVO.getIgnoreBatchSequence());
		geoBatch.setProcessedState(geoBatchVO.getProcessedState());
		geoBatch.setErrorCode(geoBatchVO.getErrorCode());
		geoBatch.setCustomData(geoBatchVO.getCustomData());
		geoBatch.setProcessedDate(geoBatchVO.getProcessedDate());
		
	    em.persist(geoBatch);
	    em.flush();
	}// EndMethod
	
	/**
	 * Update a batch's processed State as it is processed.
	 * 
	 * @param mqBatch
	 * @return boolean
	 */
	public boolean updateBatchProcessedState(GeoBatchVO mqBatch) {
		GeoBatch geoObj = getGeoBatch(mqBatch.getBatchId());
		if(geoObj != null) {
			geoObj.setProcessedState(mqBatch.getProcessedState());
			if(geoObj!=null && geoObj.getErrorCode()!=null && geoObj.getErrorCode().equals(Constants.INVALID_MESSAGES_ERROR_CODE)){
				 
			}else{
				geoObj.setCustomData(mqBatch.getCustomData());
				geoObj.setErrorCode(mqBatch.getErrorCode());
			}
			geoObj.setProcessedDate(new Timestamp(new Date().getTime()));
		}
		em.merge(geoObj);
		em.flush();
		return true;
	}
	
	/**
	 * this method return Batch object for a batch Id.
	 * 
	 * @param batchId
	 *            long
	 * @return GeoBatch
	 */
	private GeoBatch getGeoBatch(long batchId) {
		GeoBatch obj = new GeoBatch();
		obj = em.find(GeoBatch.class, batchId);
		return obj;
	}
	
	/**
	 * Updates If Ignore sequence is set to true from UI.
	 * 
	 * @param batchId
	 * @return boolean
	 * @throws DaoException
	 */
	public boolean updateSequenceMarker(int batchId) {
		GeoBatch geoObj = getGeoBatch(batchId);
		geoObj.setIgnoreBatchSequence(Constants.Y);
		if(geoObj.getProcessedState().equalsIgnoreCase(Constants.INVALID_STATE)) {
			geoObj.setProcessedState(Constants.NEW_STATE);
		}
		em.merge(geoObj);
		em.flush();
		return true;
	}
	
	/**
	 * Read a batch from database according to its state.
	 * 
	 * @param processedState
	 *            String
	 * @param msgId
	 *            String
	 * @param version
	 *            String
	 * @return List<GeoBatchVO>
	 */
	@SuppressWarnings("unchecked")
	public List<GeoBatchVO> runGetBatchesByState(String processedState,
			String msgId, String version){
		List<GeoBatchVO> rst = new ArrayList<GeoBatchVO>();
		Query jpaQuery = em.createNamedQuery("select gbat from GeoBatch gbat where gbat.processedState>=?1 and gbat.msgId=?2 and gbat.version=?3");
		jpaQuery.setParameter(1, processedState);
		jpaQuery.setParameter(2, msgId);
		jpaQuery.setParameter(3, version);
		
		List<GeoBatch> geoMessages= jpaQuery.getResultList();
		
		GeoBatchVO tmp;
		for (GeoBatch tmpBatch : geoMessages) {
			tmp = new GeoBatchVO();
			tmp.setBatchId(tmpBatch.getGeoBatchId());
			tmp.setMsgId(tmpBatch.getMsgId());
			tmp.setVersion(tmpBatch.getVersion());
			tmp.setExtractTime(tmpBatch.getExtractTime());
			tmp.setCreateDate(tmpBatch.getCreateDate());
			tmp.setIgnoreBatchSequence(tmpBatch.getIgnoreBatchSequence());
			tmp.setPrevExtractTime(tmpBatch.getPrevExtractTime());
			tmp.setProcessedState(tmpBatch.getProcessedState());
			tmp.setProcessedDate(tmpBatch.getProcessedDate());
			rst.add(tmp);
		}
		return rst;
	}
	
	/**
	 * Checks whether batches are received in sequence.
	 * 
	 * @param mqBatchVO
	 *            GeoBatchVO
	 * @return boolean
	 */
	public boolean runQueryBatchSeqNum(GeoBatchVO mqBatchVO) throws DataAccessException{
		boolean rst = false;
		GeoBatch obj = new GeoBatch();
		int initialSeqNum = 50;
		long prevBatchId = mqBatchVO.getBatchId()-initialSeqNum; //-1 was previous value
		if(prevBatchId > 0)
			obj = em.find(GeoBatch.class, prevBatchId); 
		
		if (obj == null) {
			mqBatchVO.setProcessedState(Constants.INVALID_STATE);
			mqBatchVO.setErrorCode(Constants.INVALID_BATCH_SEQ_ERROR_CODE);
			mqBatchVO.setCustomData(Constants.GEO_QUERY_ERROR_BATCHNOT_FOUND1
					+ (prevBatchId)
					+ Constants.GEO_QUERY_ERROR_BATCHNOT_FOUND2);
			updateBatchProcessedState(mqBatchVO);
			
			throw new DataAccessException(
					Constants.GEO_QUERY_ERROR_BATCHNOT_FOUND1
							+ (prevBatchId)
							+ Constants.GEO_QUERY_ERROR_BATCHNOT_FOUND2);
		}
		if (mqBatchVO.getPrevExtractTime() == null
				|| mqBatchVO.getPrevExtractTime().equals(
						obj.getExtractTime())|| mqBatchVO.getPrevExtractTime().getTime() < obj.getExtractTime().getTime() )
			rst = true;
		else
			rst = false;
		return rst;
	}
	
	/**
	 * Read All Batches from DataBase to display on GEO UI.
	 * 
	 * @param processStateListFilter
	 *            String
	 * @param noOfDays
	 *            int
	 * @param batch
	 *            int
	 * @param pageSize
	 *            String
	 * @param txtCurr
	 *            String
	 * @return List<Object> List<Object>
	 * @throws DaoException
	 */
	@SuppressWarnings("unchecked")
	public List<Object> getGeoBatchList(String processStateListFilter,
			int noOfDays, int batch,String pageSize,String txtCurr){
		List<GeoBatchVO> listJobs = new ArrayList<GeoBatchVO>();
		List<Object> returnList = new ArrayList<Object>();
		List<GeoBatch> result;
		
		int size=Integer.parseInt(pageSize);
		int pageNo=Integer.parseInt(txtCurr);
		
		int totalRecords;
		StringBuilder queryRecords=new StringBuilder(Constants.GEO_QUERY_GEO_BATCH_LIST1);
		StringBuilder queryCount=new StringBuilder(Constants.GEO_QUERY_GEO_BATCH_LIST_COUNT);
		

		StringBuilder qr=new StringBuilder(Constants.EMPTY_STRING);
		StringBuilder qrR;
		StringBuilder qrC;
		
		if (!processStateListFilter.equalsIgnoreCase(Constants.ALL)) {
			qr = qr.append(Constants.GEO_QUERY_GEO_BATCH_LIST2)
					.append(processStateListFilter)
							.append(Constants.SINGLE_INVERTED_WITH_AND);
		}
		if (noOfDays != -1) {
			qr = qr.append(Constants.GEO_QUERY_GEO_BATCH_LIST3).append(noOfDays
					).append(Constants.BLANK_SPACE);
		}

		qrR = queryRecords.append(qr);
		qrC=queryCount.append(qr);

		if (qrR.length()>4 && qrR.substring(qrR.length() - 4).equals(Constants.COLON_AND)) {
			qrR = new StringBuilder(qrR.substring(0, qrR.length() - 4));
		} else if (qrR.length()>6 && qrR.substring(qrR.length() - 6).equals(
				Constants.GEO_QUERY_GEO_BATCH_LIST4)) {
			qrR = new StringBuilder(qrR.substring(0, qrR.length() - 6));
		}
		
		if (qrC.length()>4 && qrC.substring(qrC.length() - 4).equals(Constants.COLON_AND)) {
			qrC = new StringBuilder(qrC.substring(0, qrC.length() - 4));
		} else if (qrC.length()>6 && qrC.substring(qrC.length() - 6).equals(
				Constants.GEO_QUERY_GEO_BATCH_LIST4)) {
			qrC = new StringBuilder(qrC.substring(0, qrC.length() - 6));
		}
		
		qrR=qrR.append(Constants.GEO_QUERY_GEO_BATCH_LIST5);
		
		Query queryR = em.createQuery(qrR.toString());
		Query queryC=em.createQuery(qrC.toString());
		
		int startIndex=(pageNo-1)*size;
		queryR.setMaxResults(size);
		queryR.setFirstResult(startIndex);


		result = (List<GeoBatch>) queryR.getResultList();
		
		totalRecords = ((Long)queryC.getSingleResult()).intValue(); 
		if(totalRecords>batch && batch>0){
			totalRecords=batch;
		}
		
		GeoBatchVO tempVO;
		for (GeoBatch v : result) {
			tempVO = new GeoBatchVO();

			tempVO.setBatchId(v.getGeoBatchId());
			tempVO.setExtractTime(v.getExtractTime());
			tempVO.setProcessedState(v.getProcessedState());
			tempVO.setMsgId(v.getMsgId());
			tempVO.setVersion(v.getVersion());
			tempVO.setCreateDate(v.getCreateDate());
			tempVO.setIgnoreBatchSequence(v.getIgnoreBatchSequence());
			tempVO.setErrorCode(v.getErrorCode());
			tempVO.setCustomData(v.getCustomData());
			tempVO.setProcessedDate(v.getProcessedDate());
			tempVO.setPrevExtractTime(v.getPrevExtractTime());

			listJobs.add(tempVO);
		}
		returnList.add(listJobs);
		returnList.add(totalRecords);
		return returnList;
	}

}//EndClass
