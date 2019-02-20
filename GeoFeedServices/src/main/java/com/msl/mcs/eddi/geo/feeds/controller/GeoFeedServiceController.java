package com.msl.mcs.eddi.geo.feeds.controller;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.GeoBatchVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoMessageVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoStagingFeedVO;
import com.msl.mcs.eddi.geo.feeds.service.GEOFeedService;

/**
 * <code>GeoFeedServiceController</code> is GEO Feed service controller
 * 
 * @author SUMANPattanaik
 *
 */
@RefreshScope
@RestController
@RequestMapping("/geo")
public class GeoFeedServiceController {

	@Autowired
	private GEOFeedService feedService;

	/**
	 * process Staging Vo to store in Database.
	 * 
	 * @param stagingVO
	 *            StagingFeedVO
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/processgeo/{id}", method = RequestMethod.POST)
	public void processGeoStaging(@PathVariable("id") long id, @RequestBody GeoStagingFeedVO stagingVO) throws ServiceException {
		feedService.processGeoStaging(stagingVO);
	}// EndMethod

	/**
	 * Insert GeoMessageVo in DataBase.
	 * 
	 * @param vo
	 *            GeoMessageVO
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/insertgeomessage/{id}", method = RequestMethod.POST)
	public void runStagingInsertMQMessage(@PathVariable("id") long id,@RequestBody GeoMessageVO vo) throws ServiceException {
		feedService.runStagingInsertMQMessage(vo);
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
	@RequestMapping(value = "/validatebatch/{id}", method = RequestMethod.POST)
	public List<Object> validateBatch(@PathVariable("id") long id,@RequestBody GeoBatchVO mqBatchVO) throws ServiceException {
		return feedService.validateBatch(mqBatchVO);
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
	@RequestMapping(value = "/getbatchbystate/{id}", method = RequestMethod.GET)
	public List<GeoBatchVO> runGetBatchesByState(@PathVariable("id") long id,@RequestParam("processedState") java.lang.String processedState,
			@RequestParam("msgId") String msgId, @RequestParam("version") String version) throws ServiceException {
		return feedService.runGetBatchesByState(processedState, msgId, version);
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
	@RequestMapping(value = "/rungetnextbatchmessage/{id}", method = RequestMethod.GET)
	public GeoMessageVO runGetNextBatchMessageToProcess(@PathVariable("id") long id,@RequestParam Timestamp extractTime, @RequestParam String msgId,
			@RequestParam String version, @RequestParam int msgNumber) throws ServiceException {
		return feedService.runGetNextBatchMessageToProcess(extractTime, msgId, version, msgNumber);
	}// EndMethod

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
	@RequestMapping(value = "/getgeobatchlist/{id}", method = RequestMethod.GET)
	public List<Object> getGeoBatchList(@PathVariable("id") long id,@RequestParam String processStateListFilter, @RequestParam int noOfDays,
			@RequestParam int batch, @RequestParam String pageSize, @RequestParam String txtCurr)
			throws ServiceException {
		return feedService.getGeoBatchList(processStateListFilter, noOfDays, batch, pageSize, txtCurr);
	}// EndMethod

	/**
	 * Update a batch's processed state according to its processing.
	 * 
	 * @param mqBatch
	 * @param state
	 * @param code
	 * @param errorCode
	 * @return
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/updatebatchstate/{id}", method = RequestMethod.PUT)
	public boolean updateBatchProcessedState(@PathVariable("id") long id,@RequestBody GeoBatchVO mqBatch) throws ServiceException {
		return feedService.updateBatchProcessedState(mqBatch);
	}// EndMethod

	/**
	 * Read all Messages for a Batch.
	 * 
	 * @param batchId
	 *            int
	 * @param extractTime
	 *            int
	 * @return List<GeoMessageVO>
	 * @param pageSize
	 *            String
	 * @param txtCurr
	 *            String
	 * @return List<Object>
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/getmessagelog/{id}", method = RequestMethod.GET)
	public List<Object> getMessageLog(@PathVariable("id") long id,@RequestParam int batchId, @RequestParam String extractTime,
			@RequestParam String pageSize, @RequestParam String txtCurr) throws ServiceException {
		return feedService.getMessageLog(batchId, extractTime, pageSize, txtCurr);
	}// EndMethod

	/**
	 * Update Ignore Message Sequence for a batch.
	 * 
	 * @param batchId
	 * @return
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/updatemarkersequence/{id}", method = RequestMethod.POST)
	public boolean updateSequenceMarker(@PathVariable("id") long id,@RequestParam int batchId) throws ServiceException {
		return feedService.updateSequenceMarker(batchId);
	}// EndMethod

	/**
	 * calls dao Method to insert a new Batch when a message is received with
	 * end marker.
	 * 
	 * @param vo
	 *            GeoMessageVO
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/insertbatchbymessage/{id}", method = RequestMethod.POST)
	public void insertNewBatch(@PathVariable("id") long id,@RequestBody GeoMessageVO vo) throws ServiceException {
		feedService.insertNewBatch(vo);
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
	@RequestMapping(value = "/updatemessagestate/{id}", method = RequestMethod.PUT)
	public void updateMessageProcessedState(@PathVariable("id") long id,@RequestParam Timestamp extractTime, @RequestParam Long msgNumber,
			@RequestParam String state, @RequestParam String logMessage) throws ServiceException {
		feedService.updateMessageProcessedState(extractTime, msgNumber, state, logMessage);
	}// EndMethod
}// EndMethod
