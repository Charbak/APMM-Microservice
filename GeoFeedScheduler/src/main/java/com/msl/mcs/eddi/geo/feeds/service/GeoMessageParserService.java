package com.msl.mcs.eddi.geo.feeds.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.exceptions.MessagingException;
import com.scs.util.messaging.decoder.FixedLengthStringMessageDecoder;
import com.scs.util.messaging.decoder.InvalidMessageException;
import com.scs.util.messaging.decoder.vo.MessageVO;
import com.scs.util.messaging.factory.MessageDecoderFactory;
import com.scs.util.messaging.format.MessageFormatException;

/**
 * <code></code> is the geo message parsing service
 * @author SUMANPattanaik
 *
 */
@Service
public class GeoMessageParserService {
	static final Logger logger = LoggerFactory.getLogger(GeoMessageParserService.class);
	private FixedLengthStringMessageDecoder decoder = null;

	/**
	 * Constructor for GeoMessageParser
	 * 
	 * @throws MessagingException
	 */
	public GeoMessageParserService() throws MessagingException {
		logger.debug("IN GeoMessageParser");
		try {

			decoder = (FixedLengthStringMessageDecoder) MessageDecoderFactory.getMessageDecoder(Constants.DECODER_FILE);

		} catch (MessageFormatException e) {
			logger.error("MessageFormatException in GeoMessageParser", e.getLocalizedMessage());
			throw new MessagingException(e);
		} catch (Exception e) {
			logger.error("Exception in GeoMessageParser",e.getLocalizedMessage());
			throw new MessagingException(e);
		} // EndTryCatch
	}// EndMethod

	/**
	 * Method to execute the Message Parser process.
	 * 
	 * @param messageString
	 * @return
	 * @throws MessagingException
	 */
	public MessageVO parseMessage(String messageString) throws MessagingException {

		logger.debug("IN parseMessage");
		MessageVO messageBean = new MessageVO();
		try {
			messageBean = decoder.readMessage(messageString);
			decoder.validateMessage(messageBean);
		} catch (InvalidMessageException e) {
			logger.error("InvalidMessageException in parseMessage", e.getLocalizedMessage());
			throw new MessagingException(e);
		} // EndTryCatch
		return messageBean;
	}// EndMethod
}// EndClass
