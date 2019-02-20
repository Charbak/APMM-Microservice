package com.msl.mcs.eddi.geo.feeds.service;

import java.text.ParseException;
import java.util.List;
import java.util.Vector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;
import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.common.Constants.SERVICE_ENDPOINT;
import com.msl.mcs.eddi.geo.feeds.common.CustomizedRestTemplate;
import com.msl.mcs.eddi.geo.feeds.config.GeoProperties;
import com.msl.mcs.eddi.geo.feeds.config.ServiceProperties;
import com.msl.mcs.eddi.geo.feeds.exceptions.MessagingException;
import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.AbstractVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoStagingFeedTagVO;
import com.msl.mcs.eddi.geo.feeds.model.GeoStagingFeedVO;

/**
 * <code>GeoRecieverService</code> is reciever or listner to recieve feeds and process
 * @author SUMANPattanaik
 *
 */
@Service
public class GeoRecieverService {
	static final Logger logger = LoggerFactory.getLogger(GeoRecieverService.class);

	@Autowired
	ServiceProperties services;

	@Autowired
	private GeoProperties geoProperties;

	/**
	 * Listen message received in the queue and process
	 * 
	 * @param message
	 */
	@RabbitListener(queues = "${eddi.queue.geo}")
	public void onMessage(String message) {
		try {
			// Determine the message Key
			String key = determineKey(message, geoProperties.getMsgIdentifiers());

			// Call the components onMessage to decode the message and build
			// a businessVO
			AbstractVO vo = processMessage(message, key);

			logger.info("Processing feed: " + vo.toString());

			processFeedVO((GeoStagingFeedVO) vo);

		} catch (MessagingException me) {
			logger.error("MessagingException IN onMessage", me.getLocalizedMessage());
		} catch (ServiceException se) {
			logger.error("ServiceException IN onMessage", se.getLocalizedMessage());
		} catch (Exception e) {
			logger.error("Exception IN onMessage", e.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * Determine message keys
	 * 
	 * @param msg
	 *            String
	 * @param messageIdentifiers
	 *            List
	 * @return String
	 * @throws MessagingException
	 */
	private String determineKey(String msg, List<String> messageIdentifiers) throws MessagingException {
		// The GeoFeed key is made up of the messageId and version, which
		// are the first two fields in the message, fixed length.
		String msgKey = Constants.EMPTY_STRING;
		try {
			for (String key : messageIdentifiers) {
				if (msg.contains(key)) {
					msgKey = key;
					break;
				} // EndIf
			} // EndFor
			if (msgKey.equals(Constants.EMPTY_STRING)) {
				throw new MessagingException(
						"Message key not recognized. Recognized message identifiers: " + messageIdentifiers.toString());
			} // EndIf

		} catch (Exception je) {
			throw new MessagingException("JMSException message: " + je.toString(), je);
		} // EndTryCatch
		return msgKey;
	}// EndMethod

	/**
	 * 
	 * @param message
	 * @param key
	 * @return
	 */
	private GeoStagingFeedVO processMessage(String message, String key) throws MessagingException {
		GeoStagingFeedVO stagingVO = new GeoStagingFeedVO();
		GeoStagingFeedTagVO tag = new GeoStagingFeedTagVO();

		String fieldStr;
		int startIndex = 0;
		int endIndex = 0;

		String dateFormat = geoProperties.getDateFormat();
		// Message Id
		endIndex = startIndex + geoProperties.getMsgIdLength();

		String id = message.substring(startIndex, endIndex).trim();
		if (CommonHelper.isNullOrEmpty(id)) {
			// Id is missing - mandatory field
			logger.error(
					"MsgID value is missing from the given message.  MsgID is a mandatory field.  Message: " + message);
			throw new MessagingException("MsgID value is missing from the given message.  MsgID is a mandatory field.");
		} // EndIf

		// Version
		startIndex = endIndex;
		endIndex = startIndex + geoProperties.getVersionLength();
		String version = message.substring(startIndex, endIndex).trim();
		if (CommonHelper.isNullOrEmpty(version)) {
			// Version is missing - mandatory field
			logger.error("VERSION missing from the given message.  VERSION is a mandatory field.  Message: " + message);
			throw new MessagingException("VERSION is missing from the given message.  VERSION is a mandatory field.");

		} // EndIf

		// Check id and version correct
		if (!((id + version).equalsIgnoreCase(key))) {
			logger.error("Unrecognized message key.  Recognized key: " + key + ".  Given key: " + (id + version)
					+ ". Message: " + message);
			throw new MessagingException(
					"Unrecognized message key.  Recognized key: " + key + ".  Given key: " + (id + version));
		} // EndIf
		stagingVO.setMsgId(id);
		stagingVO.setVersion(version);

		// Receiver
		startIndex = endIndex;
		endIndex = startIndex + geoProperties.getRecieverLength();
		fieldStr = message.substring(startIndex, endIndex);
		if (CommonHelper.isNullOrEmpty(fieldStr)) {
			// Receiver is missing - mandatory field
			logger.error(
					"Receiver missing from the given message.  Receiver is a mandatory field.  Message: " + message);
			throw new MessagingException("Receiver is missing from the given message.  Receiver is a mandatory field.");

		} // EndIf
			// don't need to store Receiver info

		// Extract Time
		startIndex = endIndex;
		endIndex = startIndex + geoProperties.getExtractTimeLength();
		fieldStr = message.substring(startIndex, endIndex);
		if (CommonHelper.isNullOrEmpty(fieldStr)) {
			// ExtractTime is missing - mandatory field
			logger.error("ExtractTime missing from the given message.  ExtractTime is a mandatory field.  Message: "
					+ message);
			throw new MessagingException(
					"ExtractTime is missing from the given message.  ExtractTime is a mandatory field.");

		} // EndIf
		try {
			stagingVO.setExtractTime(CommonHelper.getDateFromString(dateFormat, fieldStr));
		} catch (Exception e) {
			logger.error("ExtractTime could not be parsed into a date.  Given string: " + fieldStr + ", date format: "
					+ dateFormat + ".  Message: " + message, e);
			throw new MessagingException("ExtractTime could not be parsed into a date.  Given string: " + fieldStr
					+ ", date format: " + dateFormat, e);

		} // EndTryCatch

		// Prev Extract Time
		startIndex = endIndex;
		endIndex = startIndex + geoProperties.getPrevExtractTimeLength();
		fieldStr = message.substring(startIndex, endIndex).trim();
		if (CommonHelper.isNullOrEmpty(fieldStr)) {
			// PrevExtractTime is missing - OPTIONAL field for initial load
			stagingVO.setPrevExtractTime(null);
		} else {
			try {
				stagingVO.setPrevExtractTime(CommonHelper.getDateFromString(dateFormat, fieldStr));
			} catch (ParseException e) {
				logger.error("PrevExtractTime could not be parsed into a date.  Given string: " + fieldStr
						+ ", date format: " + dateFormat + ".  Message: " + message, e);
				throw new MessagingException("PrevExtractTime could not be parsed into a date.  Given string: "
						+ fieldStr + ", date format: " + dateFormat, e);
			} // EndTryCatch
		} // EndIfElse

		// Message Number
		startIndex = endIndex;
		endIndex = startIndex + geoProperties.getMessageNumberLength();
		fieldStr = message.substring(startIndex, endIndex).trim();
		if (CommonHelper.isNullOrEmpty(fieldStr)) {
			// MessageNumber is missing - mandatory field
			logger.error("MessageNumber missing from the given message.  MessageNumber is a mandatory field.  Message: "
					+ message);
			throw new MessagingException(
					"MessageNumber is missing from the given message.  MessageNumber is a mandatory field.");
		} // EndIf
		String msgNumber = fieldStr.replace(Constants.CHAR_PLUS, Constants.CHAR_ZERO);
		try {
			stagingVO.setMessageNumber(Integer.parseInt(msgNumber));
		} catch (NumberFormatException e) {
			logger.error("MessageNumber could not be parsed into a numeric value.  Given string: " + fieldStr
					+ ".  Message: " + message, e);
			throw new MessagingException(
					"MessageNumber could not be parsed into a numeric value.  Given string: " + fieldStr, e);
		} // EndTryCatch

		// End Marker
		startIndex = endIndex;
		endIndex = startIndex + geoProperties.getEndMarkerLength();
		fieldStr = message.substring(startIndex, endIndex);
		if (CommonHelper.isNullOrEmpty(fieldStr)) {
			// EndMarker is blank - OPTIONAL field
			stagingVO.setEndMarker(Constants.END_MARKER_NO);
		} // EndIf
		stagingVO.setEndMarker(fieldStr);
		if (!stagingVO.getEndMarker().equals(Constants.END_MARKER_YES)
				&& !stagingVO.getEndMarker().equals(Constants.END_MARKER_NO)) {
			logger.error("EndMarker is not valid.  Given string: " + fieldStr + ". Message: " + message);
			throw new MessagingException(
					"EndMarker is not valid.  Given string: " + fieldStr + ". Message: " + message);

		} // EndIf

		// Number of Records
		startIndex = endIndex;
		endIndex = startIndex + geoProperties.getRecordsCountLength();
		fieldStr = message.substring(startIndex, endIndex).trim();
		if (CommonHelper.isNullOrEmpty(fieldStr)) {
			// NumberOfRecords is missing - mandatory field
			logger.error(
					"NumberOfRecords missing from the given message.  NumberOfRecords is a mandatory field.  Message: "
							+ message);
			throw new MessagingException(
					"NumberOfRecords is missing from the given message.  NumberOfRecords is a mandatory field.");
		} // EndIf

		try {
			stagingVO.setNumberOfRecords(Integer.parseInt(fieldStr));
		} catch (NumberFormatException e) {
			logger.error("NumberOfRecords could not be parsed into a numeric value.  Given string: " + fieldStr
					+ ".  Message: " + message, e);
			throw new MessagingException(
					"NumberOfRecords could not be parsed into a numeric value.  Given string: " + fieldStr, e);
		} // EndTryCatch

		// Set the tag001 details - the whole message undecoded
		tag.setMessage(message);

		// Put the full VO together
		Vector<GeoStagingFeedTagVO> tags = new Vector<GeoStagingFeedTagVO>();
		tags.add(tag);
		stagingVO.setTag001s(tags);

		return stagingVO;
	}// EndMethod

	/**
	 * process geo feed through service
	 * 
	 * @param stagingVO
	 * @throws ServiceException
	 */
	private void processFeedVO(GeoStagingFeedVO stagingVO) throws ServiceException {
		try {
			RestTemplate restTemplate = new CustomizedRestTemplate();
			String serviceUrl = services.getService(SERVICE_ENDPOINT.PROCESS_GEO_SVC);
			restTemplate.postForObject(CommonHelper.getRestURLTSPath(serviceUrl), stagingVO, GeoStagingFeedVO.class);
			logger.info("Feed processed to the service : " + serviceUrl);
		} catch (HttpServerErrorException | HttpClientErrorException hsee) {
			logger.error("Server Error: " + hsee.getResponseBodyAsString());
		} catch (RestClientException rae) {
			logger.error("Server Error: " + rae.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod
}// EndClass
