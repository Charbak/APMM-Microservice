package com.msl.mcs.eddi.geo.feeds.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;
import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.common.Constants.SERVICE_ENDPOINT;
import com.msl.mcs.eddi.geo.feeds.common.CustomizedRestTemplate;
import com.msl.mcs.eddi.geo.feeds.config.ServiceProperties;
import com.msl.mcs.eddi.geo.feeds.exceptions.BaseException;
import com.msl.mcs.eddi.geo.feeds.exceptions.MessagingException;
import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.GeoBatchVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoMessageVO;
import com.scs.util.messaging.decoder.vo.MessageVO;
import com.scs.util.messaging.decoder.vo.TagVO;

@Service
public class GeoFeedProcessorService {
	private final Logger logger = LoggerFactory.getLogger(GeoFeedProcessorService.class);

	@Autowired
	ServiceProperties services;

	@Autowired
	TagProcessorService tagService;

	@Autowired
	GeoMessageParserService geoMsgParserSvc;
	
	@Autowired
	ObjectMapper mapper;

	private RestTemplate restTemplate = new CustomizedRestTemplate();
	
	/**
	 * Handle notification
	 */
	public void handleNotification() {
		logger.debug("Geo Feed Parser : handling scheduler notification");

		GeoBatchVO nextMQBatchToProcessVO = null;
		try {
			// find new batch for processing
			nextMQBatchToProcessVO = findNextGeoBatch();
			// new batch found
			if (nextMQBatchToProcessVO != null) {
				// validate batch
				List<Object> returnedList = validateBatch(nextMQBatchToProcessVO);
				boolean validateBatch = (Boolean) returnedList.get(0);
				if (validateBatch) {
					// update batch status as validated
					nextMQBatchToProcessVO.setProcessedState(Constants.VALIDATED_STATE);
					nextMQBatchToProcessVO.setErrorCode(Constants.NO_ERROR_CODE);
					nextMQBatchToProcessVO.setCustomData(Constants.CUSTOM_DATA_VALIDATED);
					updateBatchProcessedState(nextMQBatchToProcessVO);
					logger.debug("Geo Feed Parser : batch in process");
					processMessages(nextMQBatchToProcessVO, ((Integer) returnedList.get(1)).intValue());
				} else {
					logger.debug("Geo Listener : batch incomplete");
				} // EndIfElse
			} else {// no new batch found for processing
				logger.debug("Geo Listener :no new batch or message found");
			} // EndIfElse
		} catch (BaseException e) {
			logger.error("AbstractBaseException caught in handleNotification", e.getLocalizedMessage());
		} finally {

		} // EndTryCatchFinally
	}// EndMethod

	/**
	 * Method to find next batch to process.
	 * 
	 * @return Next Batch of GEO data for processing
	 * @throws AbstractBaseException
	 */
	private GeoBatchVO findNextGeoBatch() throws BaseException {

		logger.debug("Geo Feed Parser : searching next batch to process");
		GeoBatchVO mqBatchVO = null;
		List<GeoBatchVO> batchList = new ArrayList<GeoBatchVO>();
		// Retrieve new batches
		try {
			UriComponentsBuilder builder = UriComponentsBuilder
					.fromUriString(
							CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.RUN_GETBATCH_BYSTATE)))
					// Add query parameter
					.queryParam("processState", Constants.NEW_STATE).queryParam("msgId", Constants.MSGID)
					.queryParam("version", Constants.VERSION);

			JsonNode geobatches  = restTemplate.getForObject(builder.toUriString(), JsonNode.class);
			
			batchList = mapper.convertValue(geobatches, new TypeReference<List<GeoBatchVO>>() {});

		} catch (Exception e) {
			logger.error("IN findNextGeoBatch Exception caught while getting next batch to process",
					e.getLocalizedMessage());
			throw new BaseException(e.getLocalizedMessage());
		}
		// Check if we have found NEW batches...
		if (!CommonHelper.isNullOrEmpty(batchList)) {
			// Select the first new batch and return
			mqBatchVO = batchList.get(0);
			logger.debug("Geo Feed Parser : batch no: " + batchList.get(0).getBatchId() + " found");
		} else {
			logger.debug("No Batch with Process State NEW Found");
		} // EndIf
		return mqBatchVO;
	}// EndMethod

	/**
	 * Method to process all messages of a batch.
	 * 
	 * @param mqBatch
	 *            GeoBatchVO
	 * @throws ServiceException
	 */
	private void processMessages(GeoBatchVO mqBatch, int maxNumber) throws ServiceException {

		logger.debug("Inside processMessages");
		int corruptMessages = 0;
		int msgNumber = Constants.PROCESS_MESSAGE_NO_START;
		boolean notDone = true;
		GeoMessageVO vo;
		while (notDone) {
			// Get the next message
			try {
				vo = runGetNextBatchMessageToProcess(mqBatch.getExtractTime(), mqBatch.getMsgId(), mqBatch.getVersion(),
						msgNumber);
			} catch (ServiceException e) {
				logger.error("IN processMessage Exception Caught while getting next message to process", e.getLocalizedMessage());
				throw e;
			}

			if (vo == null || vo.getMessage() == null) {
				notDone = msgNumber > maxNumber ? false : notDone;
			} else {

				StringBuffer msgBuffer = new StringBuffer(vo.getMessage());

				try {
					handleMessage(msgBuffer.toString(), mqBatch.getExtractTime(), msgNumber);
				} catch (ServiceException e) {
					logger.error("IN processMessage Exception Caught while handling Message", e.getLocalizedMessage());
					corruptMessages++;
					// throw e;
				}
			}

			if (!notDone) {
				if (corruptMessages > 0) {
					try {
						mqBatch.setProcessedState(Constants.COMPLETED_STATE);
						mqBatch.setErrorCode(Constants.ERROR_CODE_FEW_MESSAGE_CORRUPT);
						mqBatch.setCustomData(Constants.CUSTOM_DATA_COMPLETED_WITH_ERROR + corruptMessages
								+ Constants.CUSTOM_DATA_COMPLETED_WITH_ERROR1);
						updateBatchProcessedState(mqBatch);
					} catch (ServiceException e) {
						logger.error("IN processMessage Exception Caught while updating Batch processed State", e.getLocalizedMessage());
						throw e;
					}
				} else {
					try {
						mqBatch.setCustomData(Constants.CUSTOM_DATA_COMPLETED);
						mqBatch.setErrorCode(Constants.NO_ERROR_CODE);
						mqBatch.setProcessedState(Constants.COMPLETED_STATE);
						updateBatchProcessedState(mqBatch);
					} catch (ServiceException e) {
						logger.error("IN processMessage Exception Caught while updating Batch processed State", e.getLocalizedMessage());
						throw e;
					}
				}
			}
			msgNumber++;
		}
	}

	/**
	 * It performs the initial message validations then calls loadMessage to
	 * load in DB
	 * 
	 * @param messageString
	 *            String
	 * @param extractTime
	 *            String
	 * @param msgNumber
	 *            int
	 * @throws ServiceException
	 */
	private void handleMessage(String messageString, Timestamp extractTime, int msgNumber) throws ServiceException {

		// single message handler
		logger.debug("Inside handle message");
		// STEP 1. Parse Message
		MessageVO msgVO = null;
		try {
			msgVO = geoMsgParserSvc.parseMessage(messageString);
		} catch (MessagingException e) {
			logger.debug("Unable to read message at method geoMsgParser.parseMessage", e.getLocalizedMessage());
			updateMessageProcessedState(extractTime, (long) msgNumber, Constants.ERROR_STATE,
					Constants.MESSAGE_ERROR_GEO);
			throw new ServiceException("Unable to read message at method geoMsgParser.parseMessage:"+ e.getLocalizedMessage());
		} catch (Exception e) {
			logger.error("Exception in getGeoBatchList", e.getLocalizedMessage());
			updateMessageProcessedState(extractTime, (long) msgNumber, Constants.ERROR_STATE,
					Constants.MESSAGE_ERROR_GEO);
			throw new ServiceException(e.getLocalizedMessage());
		}

		if ((msgVO.getHeader() != null) && (msgVO.getTags() != null)) {
			try {
				List<String> receivedCountryOrLoadPorts = loadMessage(msgVO);

				if (receivedCountryOrLoadPorts == null || receivedCountryOrLoadPorts.isEmpty()) {
					try {
						updateMessageProcessedState(extractTime, (long) msgNumber, Constants.COMPLETED_STATE,
								Constants.NON_RELEVANT);
					} catch (ServiceException e) {
						logger.error("Exception caught while updating Message Processed State", e.getLocalizedMessage());
						throw e;
					}
				} else {
					try {
						updateMessageProcessedState(extractTime, (long) msgNumber, Constants.COMPLETED_STATE,
								receivedCountryOrLoadPorts.toString());
					} catch (ServiceException e) {
						logger.error("Exception caught while updating Message Processed State", e.getLocalizedMessage());
						throw e;
					}
				}

			} catch (ServiceException e) {
				logger.error("Exception caught while loading Message", e.getLocalizedMessage());
				throw e;
			}
		} else {
			try {
				updateMessageProcessedState(extractTime, (long) msgNumber, Constants.ERROR_STATE,
						Constants.MESSAGE_ERROR_GEO);
			} catch (ServiceException e) {
				logger.error("Exception caught while updating Message Processed State", e.getLocalizedMessage());
				throw e;
			}
			logger.error("GEO_ERROR_0015 : Message is null");

		}
	}

	/**
	 * This method loads the message data into Database after parsing Tags.
	 * 
	 * @param msgVO
	 *            MessageVO
	 * @throws ServiceException
	 */
	@SuppressWarnings("unchecked")
	private List<String> loadMessage(MessageVO msgVO) throws ServiceException {
		logger.debug("Loading Message");

		// iterate through the collection and process each tag
		List<String> receivedCountryOrLoadPorts = new ArrayList<String>();
		Iterator<TagVO> tagIterator = msgVO.getTags().iterator();
		while (tagIterator.hasNext()) {
			TagVO tagVO = (TagVO) tagIterator.next();
			try {
				// process the tag
				String receivedCountryOrLoadPort = tagService.processTag(tagVO);
				if (receivedCountryOrLoadPorts != null)
					receivedCountryOrLoadPorts.add(receivedCountryOrLoadPort);
			} catch (Exception e) {
				logger.error("Exception in loadMessage" + e.getLocalizedMessage());
			}
		}
		return receivedCountryOrLoadPorts;
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
			// rest template to call data source
			status = restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_BATCH_STATE)), mqBatch,
					Boolean.class);
		} catch (Exception exp) {
			logger.error("Service Exception in updateBatchProcessedState", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
		return status;
	}// EndMethod

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
							CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.PROCESS_NEXT_BATCH)))
					// Add query parameter
					.queryParam("extractTime", extractTime.toString()).queryParam("msgId", msgId).queryParam("version", version)
					.queryParam("msgNumber", msgNumber);

			geoMsgVo = restTemplate.getForObject(builder.toUriString(), GeoMessageVO.class);

		} catch (Exception exp) {
			logger.error("DAO Exception in runGetNextBatchMessageToProcess", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
		return geoMsgVo;
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
			logger.error("DAO Exception in updateMessageProcessedState", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod
	
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
				logger.error("Batch validation:Batch sequence missing", exp.getLocalizedMessage());
				throw new ServiceException(exp.getLocalizedMessage());
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
			logger.error("ServiceException in validateBatch", exp.getLocalizedMessage());
			throw exp;
		}
		returnList.set(0, valid);
		return returnList;
	}
	

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
					.queryParam("extractTime", extractTime.toString()).queryParam("msgId", msgId).queryParam("version", version);

			sequenceList  = restTemplate.getForObject(builder.toUriString(), List.class);
			
//			sequenceList = mapper.convertValue(geobatches, new TypeReference<List<Object>>() {});

		} catch (Exception exp) {
			logger.error("DAO Exception in runQueryAllMessagesReceivedSeqNum: " + exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		} // EndTryCatch
		return sequenceList;
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
	
}// EndClass
