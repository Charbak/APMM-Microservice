package com.msl.mcs.eddi.geo.store.controller;

import java.net.URLDecoder;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.msl.mcs.eddi.geo.feeds.exceptions.DataAccessException;
import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.CityVO;
import com.msl.mcs.eddi.geo.feeds.model.CountryVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoBatchVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoMessageVO;
import com.msl.mcs.eddi.geo.feeds.model.LoadPortVO;
import com.msl.mcs.eddi.geo.feeds.model.LockerVO;
import com.msl.mcs.eddi.geo.feeds.restparams.TimestampParam;
import com.msl.mcs.eddi.geo.store.service.CityStoreService;
import com.msl.mcs.eddi.geo.store.service.CountryStoreService;
import com.msl.mcs.eddi.geo.store.service.GeoBatchStoreService;
import com.msl.mcs.eddi.geo.store.service.GeoMessageStoreService;
import com.msl.mcs.eddi.geo.store.service.LoadPortStoreService;
import com.msl.mcs.eddi.geo.store.service.LockerStoreService;

@RestController
@RefreshScope
@RequestMapping("/geostore")
public class GeoDataStoreController {
	@Autowired
	private GeoMessageStoreService messageStoreSvc;

	@Autowired
	private GeoBatchStoreService batchStoreSvc;

	@Autowired
	private CountryStoreService countryStoreSvc;

	@Autowired
	private CityStoreService cityStoreSvc;

	@Autowired
	private LoadPortStoreService loadPortStoreSvc;
	
	@Autowired
	private LockerStoreService lockerStoreSvc;

	/**
	 * Insert GEO message information
	 * 
	 * @param id
	 * @param geoMessageVO
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/insertmessage/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertGeoMessageVO(@PathVariable("id") long id, @RequestBody GeoMessageVO geoMessageVO)
			throws DataAccessException {
		try {
			messageStoreSvc.insertGeoMessage(geoMessageVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Insert GEO batch information
	 * 
	 * @param id
	 * @param geoBatchVO
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/insertbatch/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertGeoBatchVO(@PathVariable("id") long id, @RequestBody GeoBatchVO geoBatchVO)
			throws DataAccessException {
		try {
			batchStoreSvc.insertGeoBatch(geoBatchVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod
	
	/**
	 * Update a batch's processed state according to its processing.
	 * 
	 * @param mqBatch
	 * @return
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/updatebatchstate/{id}", method = RequestMethod.POST)
	public boolean updateBatchProcessedState(@PathVariable("id") long id,@RequestBody GeoBatchVO mqBatch) throws DataAccessException {
		try{
			return batchStoreSvc.updateBatchProcessedState(mqBatch);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}// EndMethod
	
	/**
	 * Run get batch by state
	 * 
	 * @param mqBatch
	 * @param state
	 * @param code
	 * @param errorCode
	 * @return
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/rungetbatchbystate/{id}", method = RequestMethod.GET)
	public List<GeoBatchVO> runGetBatchesByState(@PathVariable("id") long id, @RequestParam("processState") String processedState,
			@RequestParam("msgId") String msgId, @RequestParam("version") String version) throws DataAccessException {
		try{
			return batchStoreSvc.runGetBatchesByState(processedState, msgId, version);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}// EndMethod
	
	/**
	 * Run query batch seqence number
	 * 
	 * @param mqBatch
	 * @param state
	 * @param code
	 * @param errorCode
	 * @return
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/runquerybatchseqnum/{id}", method = RequestMethod.POST)
	public boolean runQueryBatchSeqNum(@PathVariable("id") long id,@RequestBody GeoBatchVO mqBatch) throws DataAccessException {
		try{
			return batchStoreSvc.runQueryBatchSeqNum(mqBatch);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}// EndMethod
	
	/**
	 * Update batch seqence number
	 * 
	 * @param batchId
	 * @return
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/updateseqnencemarker/{id}", method = RequestMethod.POST)
	public boolean updateSequenceMarker(@PathVariable("id") long id,@RequestParam int batchId) throws DataAccessException {
		try{
			return batchStoreSvc.updateSequenceMarker(batchId);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}// EndMethod

	/**
	 * Retrieves next batch MQGeoMessageVO to process.
	 * 
	 * @param extractTime
	 * @param msgId
	 * @param version
	 * @param msgNumber
	 * @param processedState
	 * 
	 * @return GeoMessageVO
	 * @throws DaoException
	 */
	@SuppressWarnings("deprecation")
	@RequestMapping("/getnextbatchmessagetoprocess/{id}")
	public GeoMessageVO getNextBatchMessageToProcess(@PathVariable("id") long id,
			@RequestParam("extractTime") String extractTime, @RequestParam("msgId") String msgId,
			@RequestParam("version") String version, @RequestParam("msgNumber") String msgNumber)
			throws DataAccessException {

		GeoMessageVO geoMsg = null;
		try {
			geoMsg = messageStoreSvc.getNextBatchMessageToProcess(Timestamp.valueOf(URLDecoder.decode(extractTime)), msgId, version,
					Integer.parseInt(msgNumber));
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return geoMsg;
	}// EndMethod

	/**
	 * Update message processing state
	 * 
	 * @param id
	 * @param extractTime
	 * @param msgNumber
	 * @param processedDate
	 * @param log
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/updatemessageprocessedstate/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> updateMessageProcessedState(@PathVariable("id") long id,
			@RequestParam("extractTime") String extractTime, @RequestParam("msgNumber") String msgNumber,
			@RequestParam("processedDate") String processedDate, @RequestParam("log") String log)
			throws DataAccessException {
		try {
			messageStoreSvc.updateMessageProcessedState(Timestamp.valueOf(URLDecoder.decode(extractTime)), Long.valueOf(msgNumber), processedDate, log);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod
	
	/**
	 * validate message sequence
	 * 
	 * @param id
	 * @param extractTime
	 * @param msgNumber
	 * @param processedDate
	 * @param log
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/validatemessagesequence/{id}", method = RequestMethod.GET)
	public List<Object> validateMessageSequence(@PathVariable("id") long id,
			@RequestParam("extractTime") String extractTime, @RequestParam("msgId") String msgId,
			@RequestParam("version") String version)
			throws DataAccessException {
		try {
			return messageStoreSvc.validateMessageSequence(Timestamp.valueOf(URLDecoder.decode(extractTime)), msgId, version);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}// EndMethod
	
	/**
	 * Get GEO batch list
	 * @param id
	 * @param processStateListFilter
	 * @param noOfDays
	 * @param batch
	 * @param pageSize
	 * @param txtCurr
	 * @return
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/getbatchlist/{id}", method = RequestMethod.GET)
	public List<Object> getGeoBatchList(@PathVariable("id") long id,
			@RequestParam("stateFilter") String processStateListFilter,
			@RequestParam("noOfDays") int noOfDays, @RequestParam("count") int batch,
			@RequestParam("pageSize") String pageSize,@RequestParam("pageNo") String txtCurr)
			throws DataAccessException {
		try {
			return batchStoreSvc.getGeoBatchList(processStateListFilter, noOfDays, batch, pageSize, txtCurr);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}// EndMethod getMessageLog
	
	/**
	 * Get message log
	 * @param id
	 * @param batchId
	 * @param extractTime
	 * @param pageSize
	 * @param txtCurr
	 * @return
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/getmessagelog/{id}", method = RequestMethod.GET)
	public List<Object> getMessageLog(@PathVariable("id") long id,
			@RequestParam("batchId") int batchId, 
			@RequestParam("extractTime") String extractTime,
			@RequestParam("pageSize") String pageSize,@RequestParam("pageNo") String txtCurr)
			throws DataAccessException {
		try {
			return messageStoreSvc.getMessageLog(batchId, extractTime, pageSize, txtCurr);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}// EndMethod

	/**
	 * Inserts Country Received from GEO MESSAGE.
	 * 
	 * @param countryVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/insertcountry/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO)
			throws DataAccessException {
		try {
			countryStoreSvc.insertCountry(countryVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Updates Country Received from GEO MESSAGE.
	 * 
	 * @param countryVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/updatecountry/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> updateCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO)
			throws DataAccessException {
		try {
			countryStoreSvc.updateCountry(countryVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Updates Country Received from GEO MESSAGE.
	 * 
	 * @param countryVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/deletecountry/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO)
			throws DataAccessException {
		try {
			countryStoreSvc.deleteCountry(countryVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Insert or update Country Received from GEO MESSAGE.
	 * 
	 * @param countryVO
	 *            CountryVo
	 * @throws DaoException
	 */
	@RequestMapping(value = "/forcedinsertcountry/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> forcedInsertCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO)
			throws DataAccessException {
		try {
			countryStoreSvc.forcedInsertCountry(countryVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Inserts City Received from GEO MESSAGE.
	 * 
	 * @param cityVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/insertcity/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws DataAccessException {
		try {
			cityStoreSvc.insertCity(cityVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Updates City Received from GEO MESSAGE.
	 * 
	 * @param cityVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/updatecity/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws DataAccessException {
		try {
			cityStoreSvc.updateCity(cityVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Updates City Received from GEO MESSAGE.
	 * 
	 * @param cityVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/deletecity/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws DataAccessException {
		try {
			cityStoreSvc.deleteCity(cityVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Insert or update City Received from GEO MESSAGE.
	 * 
	 * @param cityVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/forcedinsertcity/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> forcedInsertCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws DataAccessException {
		try {
			cityStoreSvc.forcedInsertCity(cityVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Inserts Load Port Received from GEO MESSAGE.
	 * 
	 * @param loadPortVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/insertloadport/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertLoadPort(@PathVariable("id") long id, @RequestBody LoadPortVO loadPortVO)
			throws DataAccessException {
		try {
			loadPortStoreSvc.insertLoadPort(loadPortVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Updates Load Port Received from GEO MESSAGE.
	 * 
	 * @param loadPortVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/updateloadport/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateLoadPort(@PathVariable("id") long id, @RequestBody LoadPortVO loadPortVO)
			throws DataAccessException {
		try {
			loadPortStoreSvc.updateLoadPort(loadPortVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Updates Load Port Received from GEO MESSAGE.
	 * 
	 * @param loadPortVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/deleteloadport/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteLoadPort(@PathVariable("id") long id, @RequestBody LoadPortVO loadPortVO)
			throws DataAccessException {
		try {
			loadPortStoreSvc.deleteLoadPort(loadPortVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod

	/**
	 * Insert or update Load Port Received from GEO MESSAGE.
	 * 
	 * @param loadPortVO
	 * @throws DaoException
	 */
	@RequestMapping(value = "/forcedinsertloadport/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> forcedInsertLoadPort(@PathVariable("id") long id, @RequestBody LoadPortVO loadPortVO)
			throws DataAccessException {
		try {
			loadPortStoreSvc.forcedInsertLoadPort(loadPortVO);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod
	
	/**
	 * Insert locker information
	 * 
	 * @param id
	 * @param lockerVo
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/insertlock/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertLockVO(@PathVariable("id") long id, @RequestBody LockerVO lockerVo)
			throws DataAccessException {
		try {
			lockerStoreSvc.insertLockEntry(lockerVo);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}// EndMethod
	
	/**
	 * delete a locker entry from locker Config
	 * 
	 * @param lockerName
	 *            String
	 * @throws DataAccessException
	 * 
	 */
	@RequestMapping(value = "/flushlock/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> flushLock(@PathVariable("id") long id, @RequestParam("lockerName") String lockerName) throws DataAccessException {
		try {
			lockerStoreSvc.flushLock(lockerName);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}//EndMethod
	
	/**
	 * Check lock status by locker name
	 * 
	 * @param lockerVo
	 * @return
	 */
	@RequestMapping(value = "/checklockerstatus/{id}", method = RequestMethod.POST)
	public String checkLockStatusByLockerName(@PathVariable("id") long id, @RequestBody LockerVO lockerVo) throws DataAccessException {
		try {
			return lockerStoreSvc.checkLockStatusByLockerName(lockerVo);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}//EndMethod
	
	/**
	 * method to Get a lock on locker. this method is called by various
	 * scheduler to achieve lock.
	 * 
	 * @param LockerVO
	 *            LockerVO
	 * @throws DataAccessException
	 * 
	 */
	@RequestMapping(value = "/getlock/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> getLock(@PathVariable("id") long id, @RequestBody LockerVO lockerVo) throws DataAccessException {
		try {
			lockerStoreSvc.getLock(lockerVo);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}//EndMethod
	
	/**
	 * Method to modify last accessed time for a locker. this method is called
	 * by various scheduler to edit last accessed time.
	 * 
	 * @param lockerVo
	 *            LockerVO
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/editlastaccessed/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> editLastAccessed(@PathVariable("id") long id, @RequestBody LockerVO lockerVo) throws DataAccessException {
		try {
			lockerStoreSvc.editLastAccessed(lockerVo);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}//EndMethod
	
	/**
	 * Method to get last accessed date for the scheduler
	 * 
	 * @param lockerName
	 *            of type String
	 * @return last accessed date of type Date
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/getlastaccessed/{id}", method = RequestMethod.GET)
	public Date getLastAccessed(@PathVariable("id") long id, @RequestParam("lockerName") String lockerName) throws DataAccessException {
		try {
			return lockerStoreSvc.getLastAccessed(lockerName);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
	}//EndMethod

	/**
	 * method to Release lock on locker name. this method is called by various
	 * schedulers to release lock after completing its work.
	 * 
	 * @param LockerVO
	 *            lockerVo
	 * @throws DataAccessException
	 */
	@RequestMapping(value = "/releaselock/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> releaseLock(@PathVariable("id") long id, @RequestBody LockerVO lockerVo) throws DataAccessException {
		try {
			lockerStoreSvc.releaseLock(lockerVo);
		} catch (Exception e) {
			throw new DataAccessException(e);
		} // EndTryCatch
		return new ResponseEntity<Void>(HttpStatus.OK);
	}//EndMethod
}// EndClass
