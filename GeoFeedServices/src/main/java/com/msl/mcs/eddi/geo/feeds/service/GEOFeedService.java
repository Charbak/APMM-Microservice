package com.msl.mcs.eddi.geo.feeds.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;
import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.common.Constants.SERVICE_ENDPOINT;
import com.msl.mcs.eddi.geo.feeds.common.CustomizedRestTemplate;
import com.msl.mcs.eddi.geo.feeds.config.ServiceProperties;
import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.GeoBatchVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoMessageVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoStagingFeedTagVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoStagingFeedVO;

/**
 * <code>GEOFeedService</code> is services related to GEO feed messages or batch
 * 
 * @author SUMANPattanaik
 *
 */
@Service
public class GEOFeedService {
	static final Logger logger = LoggerFactory.getLogger(GEOFeedService.class);
	
	private RestTemplate restTemplate = new CustomizedRestTemplate();
	
	@Autowired
	ServiceProperties services;

	/**
	 * Validate Batch for parsing. checks whether batches are in sequence or
	 * not(if ignor batch sequence is not set to true) also checks if messages
	 * are received in sequence or not.
	 * 
	 * @param mqBatchVO
	 *            processed
	 * @return List<Object>
	 * @throws ServiceException
	 */
	public List<Object> validateBatch(GeoBatchVO mqBatchVO) throws ServiceException {
		logger.debug("IN validateBatch");
		boolean valid = true;
		List<Object> returnList = new ArrayList<Object>();
		// check if ignore batch sequence is set as Y or N for the batch
		if (mqBatchVO.getIgnoreBatchSequence().equals(Constants.DO_NOT_IGNORE_BATCH_SEQ)
				&& mqBatchVO.getBatchId() != 1L) {// N is set
			logger.debug("Batch validation: Checking batch sequence.");
			try {
				boolean IsBatchSeq = runQueryBatchSeqNum(mqBatchVO);
				if (!IsBatchSeq) {
					logger.error("Batch validation:Batch out of sequence having extract time>>>."
							+ mqBatchVO.getExtractTime());
					mqBatchVO.setProcessedState(Constants.INVALID_STATE);
					mqBatchVO.setErrorCode(Constants.INVALID_BATCH_SEQ_ERROR_CODE);
					mqBatchVO.setCustomData(Constants.CUSTOM_DATA_ERROR_BATCH_SEQ_MISSING);
					updateBatchProcessedState(mqBatchVO);
					valid = false;
					returnList.add(valid);
					return returnList;
				}
			} catch (ServiceException exp) {
				logger.error("Batch validation:Batch sequence missing", exp);
				throw new ServiceException(exp.getMessage(), exp);
			}
		} else {
			logger.debug("Batch validation: Ignoring batch sequence.");
		}
		// Run query to determine that there are no gaps in the message
		// sequence (ie all sequence numbers are present)
		logger.debug("Batch validation: Checking message sequence numbers are correct.");
		try {
			returnList = runQueryAllMessagesReceivedSeqNum(mqBatchVO.getExtractTime(), mqBatchVO.getMsgId(),
					mqBatchVO.getVersion());
			boolean isMessageSeq = (Boolean) returnList.get(0);
			if (!isMessageSeq) {
				logger.error("Messages are missing/repeated from the batch having extract time>>>."
						+ mqBatchVO.getExtractTime());
				mqBatchVO.setProcessedState(Constants.ERROR_STATE);
				mqBatchVO.setCustomData(Constants.CUSTOM_DATA_ERROR_MISSING_MESSAGES);
				mqBatchVO.setErrorCode(Constants.INVALID_MESSAGES_ERROR_CODE);
				updateBatchProcessedState(mqBatchVO);
				// done to parse a batch even when messages are not in sequence.
				// Or messages are missing or repeated.
				valid = true;
			}
		} catch (ServiceException exp) {
			logger.error("ServiceException in validateBatch", exp);
			throw exp;
		}
		returnList.set(0, valid);
		return returnList;
	}

	/**
	 * Read Geo Batch List To Display UI.
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
	 * @throws ServiceException
	 */
	@SuppressWarnings("unchecked")
	public List<Object> getGeoBatchList(String processStateListFilter, int noOfDays, int batch, String pageSize,
			String txtCurr) throws ServiceException {

		logger.debug("IN getGeoBatchList");
		List<Object> batchList = new ArrayList<Object>();
		try {
			UriComponentsBuilder builder = UriComponentsBuilder
					.fromUriString(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.GET_BATCH_LIST)))
					// Add query parameter
					.queryParam("stateFilter", processStateListFilter).queryParam("noOfDays", noOfDays)
					.queryParam("count", batch).queryParam("pageSize", pageSize).queryParam("pageNo", txtCurr);

			batchList = restTemplate.getForObject(builder.toUriString(), List.class);
		} catch (Exception e) {
			logger.error("Exception in getGeoBatchList", e.getLocalizedMessage());
			throw new ServiceException(e.getLocalizedMessage());
		} // EndTryCatch
		return batchList;
	}// EndMethod

	/**
	 * Read all Messages for a Batch.
	 * 
	 * @param batchId
	 *            int
	 * @param extractTime
	 *            int
	 * @param pageSize
	 *            String
	 * @param txtCurr
	 *            String
	 * @return List<Object>
	 * @throws ServiceException
	 */
	@SuppressWarnings("unchecked")
	public List<Object> getMessageLog(int batchId, String extractTime, String pageSize, String txtCurr)
			throws ServiceException {

		logger.debug("IN getMessageLog");
		List<Object> messageList = new ArrayList<Object>();
		try {
			UriComponentsBuilder builder = UriComponentsBuilder
					.fromUriString(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.GET_MESSAGE_LOG)))
					// Add query parameter
					.queryParam("batchId", batchId).queryParam("extractTime", extractTime)
					.queryParam("pageSize", pageSize).queryParam("pageNo", txtCurr);

			messageList = restTemplate.getForObject(builder.toUriString(), List.class);

		} catch (Exception exp) {
			logger.error("DAO Exception in getMessageLog", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
		return messageList;
	}// EndMethod

	/**
	 * Run staging insert MQ message
	 * 
	 * @param stagingVO
	 */
	public void processGeoStaging(GeoStagingFeedVO stagingVO) throws ServiceException {
		logger.debug("IN processGeoStaging");
		try {
			runStagingInsertMQMessage(constructGeoMessageVO(stagingVO));
		} catch (ServiceException exp) {
			logger.error("Service Exception in processGeoStaging", exp);
			throw exp;
		} // EndTryCatch
	}// EndMethod

	/**
	 * calls dao Method to insert a new Batch when a message is received with
	 * end marker.
	 * 
	 * @param vo
	 *            GeoMessageVO
	 * @throws ServiceException
	 */
	public void insertNewBatch(GeoMessageVO vo) throws ServiceException {
		logger.debug("IN insertNewBatch");
		GeoBatchVO mqBatchVO = new GeoBatchVO();

		mqBatchVO.setMsgId(vo.getMsgId());
		mqBatchVO.setVersion(vo.getVersion());
		mqBatchVO.setExtractTime(vo.getExtractTime());
		mqBatchVO.setPrevExtractTime(vo.getPrevExtractTime());
		mqBatchVO.setProcessedState(vo.getProcessedState());
		mqBatchVO.setCreateDate(new Timestamp(System.currentTimeMillis()));
		mqBatchVO.setIgnoreBatchSequence(Constants.N);
		// handle custom data
		mqBatchVO.setCustomData(Constants.NEW_BATCH);

		try {
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.INSERT_GEO_BATCH)), mqBatchVO,
					GeoBatchVO.class);
			logger.info("Inserted New batch: " + mqBatchVO.toString());
		} catch (Exception exp) {
			logger.error("Exception in insertNewBatch", exp.getLocalizedMessage());
			throw new ServiceException(exp);
		}
	}

	/**
	 * Update Ignor Message Sequence for a batch.
	 * 
	 * @param batchId
	 * @return
	 * @throws ServiceException
	 */
	public boolean updateSequenceMarker(int batchId) throws ServiceException {

		logger.debug("IN updateSequenceMarker");
		boolean status = false;
		try {
			status = restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_BATCH_STATE)), batchId,
					Boolean.class);
		} catch (Exception exp) {
			logger.error("DAO Exception in updateSequenceMarker", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
		return status;
	}// EndMethod

	/**
	 * Update a message's processed State according to its processing.
	 * 
	 * @param extractTime
	 *            Timestamp
	 * @param msgNumber
	 *            Long
	 * @param state
	 *            Long
	 * @param logMessage
	 *            Long
	 * @throws ServiceException
	 */
	public void updateMessageProcessedState(Timestamp extractTime, Long msgNumber, String state, String logMessage)
			throws ServiceException {
		logger.debug("IN updateMessageProcessedState");
		try {
			MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
			map.add("extractTime", extractTime);
			map.add("msgNumber", msgNumber);
			map.add("processedDate", state);
			map.add("log", logMessage);
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_MESSAGE_STATE)), map,
					Void.class);

		} catch (Exception exp) {
			logger.error("DAO Exception in updateMessageProcessedState", exp);
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * Update a batch's processed state according to its processing.
	 * 
	 * @param mqBatch
	 *            GeoBatchVO
	 * @return
	 * @throws ServiceException
	 */
	public boolean updateBatchProcessedState(GeoBatchVO mqBatch) throws ServiceException {
		boolean status = false;
		logger.debug("IN updateBatchProcessedState");
		try {
			// rest template to call datasource
			status = restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_BATCH_STATE)), mqBatch,
					Boolean.class);
		} catch (Exception exp) {
			logger.error("Service Exception in updateBatchProcessedState", exp.getLocalizedMessage());
			throw new ServiceException(exp.getMessage());
		} // EndTryCatch
		return status;
	}// EndMethod

	/**
	 * Run staging insert MQ message
	 * 
	 * @param stagingVO
	 */
	public void runStagingInsertMQMessage(GeoMessageVO messageVO) throws ServiceException {
		logger.debug("IN runStagingInsertMQMessage");
		try {
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.INSERT_GEO_MESSAGE)), messageVO,
					GeoMessageVO.class);
			logger.info("Inserted MQ message: " + messageVO.toString());

			if (messageVO.getEndMarker().equalsIgnoreCase(Constants.END_MARKER_YES)) {
				insertNewBatch(messageVO);
			} // EndIf

		} catch (Exception exp) {
			logger.error("Exception in runStagingInsertMQMessage", exp.getLocalizedMessage());
			throw new ServiceException(exp.getMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * Read batch according to processed state. and return list of BatchVo.
	 * 
	 * @param processedState
	 *            String
	 * @param msgId
	 *            String
	 * @param version
	 *            String
	 * @return List<GeoBatchVO>
	 * @throws ServiceException
	 */
	@SuppressWarnings("unchecked")
	public List<GeoBatchVO> runGetBatchesByState(String processedState, String msgId, String version)
			throws ServiceException {
		List<GeoBatchVO> batchList = new ArrayList<GeoBatchVO>();
		logger.debug("IN runGetBatchesByState");
		try {
			UriComponentsBuilder builder = UriComponentsBuilder
					.fromUriString(
							CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.RUN_GETBATCH_BYSTATE)))
					// Add query parameter
					.queryParam("processState", processedState).queryParam("msgId", msgId)
					.queryParam("version", version);

			batchList = restTemplate.getForObject(builder.toUriString(), List.class);

		} catch (Exception exp) {
			logger.error("Service Exception in runGetBatchesByState", exp.getLocalizedMessage());
			throw new ServiceException(exp.getMessage());
		}
		return batchList;
	}

	/**
	 * Read Next Message of a batch to process. this method is called a number
	 * of times to read all messages of a batch.
	 * 
	 * @param extractTime
	 *            Timestamp
	 * @param msgId
	 *            String
	 * @param version
	 *            String
	 * @param msgNumber
	 *            int
	 * @return GeoMessageVO
	 * @throws ServiceException
	 */
	public GeoMessageVO runGetNextBatchMessageToProcess(Timestamp extractTime, String msgId, String version,
			int msgNumber) throws ServiceException {
		GeoMessageVO geoMsgVo = null;
		logger.debug("IN runGetNextBatchMessageToProcess");
		try {
			UriComponentsBuilder builder = UriComponentsBuilder
					.fromUriString(
							CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.RUN_GETBATCH_BYSTATE)))
					// Add query parameter
					.queryParam("extractTime", extractTime).queryParam("msgId", msgId).queryParam("version", version)
					.queryParam("msgNumber", msgNumber);

			geoMsgVo = restTemplate.getForObject(builder.toUriString(), GeoMessageVO.class);

		} catch (Exception exp) {
			logger.error("DAO Exception in runGetNextBatchMessageToProcess", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
		return geoMsgVo;
	}// EndMethod

	/**
	 * Check whether current batch is in sequence with previous batch or not.
	 * 
	 * @param mqBatchVO
	 * @return
	 * @throws ServiceException
	 */
	private boolean runQueryBatchSeqNum(GeoBatchVO mqBatchVO) throws ServiceException {
		boolean status = false;
		logger.debug("IN runQueryBatchSeqNum");
		try {
			status = restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.RUNQUERY_NEXT_BATCH)), mqBatchVO,
					Boolean.class);
		} catch (Exception exp) {
			logger.error("DAO Exception in runQueryBatchSeqNum", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}
		return status;
	}// EndMethod

	/**
	 * Calls Dao Method to check whether all messages for a batch are in
	 * Sequence or not.
	 * 
	 * @param extractTime
	 *            Timestamp
	 * @param msgId
	 *            String
	 * @param version
	 *            String
	 * @return List<Object>
	 * @throws ServiceException
	 */
	@SuppressWarnings("unchecked")
	private List<Object> runQueryAllMessagesReceivedSeqNum(Timestamp extractTime, String msgId, String version)
			throws ServiceException {
		logger.debug("IN runQueryAllMessagesReceivedSeqNum");
		List<Object> sequenceList = new ArrayList<Object>();
		try {
			UriComponentsBuilder builder = UriComponentsBuilder
					.fromUriString(CommonHelper
							.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.VALIDATE_MESSAGE_SEQUENCE)))
					// Add query parameter
					.queryParam("extractTime", extractTime).queryParam("msgId", msgId).queryParam("version", version);

			sequenceList = restTemplate.getForObject(builder.toUriString(), List.class);

		} catch (Exception exp) {
			logger.error("DAO Exception in runQueryAllMessagesReceivedSeqNum: " + exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
		return sequenceList;
	}// EndMethod

	/**
	 * Generate Geo Message Vo from GeoFeed.
	 * 
	 * @param stagingVO
	 *            GeoStagingFeedVO
	 * @return GeoMessageVO
	 * @throws ServiceException
	 */
	private GeoMessageVO constructGeoMessageVO(GeoStagingFeedVO geoVO) throws ServiceException {

		logger.debug("IN constructGeoMessageVO");

		// get the tag001 ("There can be only one" - Highlander)
		GeoStagingFeedTagVO tag001 = (GeoStagingFeedTagVO) geoVO.getTag001s().get(0);

		GeoMessageVO vo = new GeoMessageVO();
		vo.setMsgId(geoVO.getMsgId());
		vo.setVersion(geoVO.getVersion());
		vo.setMsgNumber(geoVO.getMessageNumber());
		vo.setExtractTime(new Timestamp(geoVO.getExtractTime().getTime()));
		if (geoVO.getPrevExtractTime() == null) {
			vo.setPrevExtractTime(null);
		} else {
			vo.setPrevExtractTime(new Timestamp(geoVO.getPrevExtractTime().getTime()));
		}
		vo.setEndMarker(geoVO.getEndMarker());
		vo.setMessage(tag001.getMessage());
		vo.setProcessedState(Constants.NEW_STATE);
		vo.setLog(Constants.UNPROCESSED);
		vo.setProcessedDate(new Timestamp(CommonHelper.getCurrentSQLDate().getTime()));
		vo.setReceivedDate(new Timestamp(CommonHelper.getCurrentSQLDate().getTime()));

		return vo;
	}// EndMethod
}// EndClass
