package com.msl.mcs.eddi.geo.feeds.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
//@PropertySource("classpath:geo.properties")
@ConfigurationProperties
public class GeoProperties {
	@Value("#{'${geo.message.identifiers}'.split(',')}")
	private List<String> msgIdentifiers = new ArrayList<String>();

	@Value("${geo.message.date.format}")
	private String dateFormat;

	@Value("${geo.length.message.id}")
	private int msgIdLength;

	@Value("${geo.length.version}")
	private int versionLength;

	@Value("${geo.length.receiver}")
	private int recieverLength;

	@Value("${geo.length.extract.time}")
	private int extractTimeLength;

	@Value("${geo.length.prev.extract.time}")
	private int prevExtractTimeLength;

	@Value("${geo.length.message.number}")
	private int messageNumberLength;

	@Value("${geo.length.end.marker}")
	private int endMarkerLength;

	@Value("${geo.length.number.of.records}")
	private int recordsCountLength;
	
	/**
	 * @return the identifierSet
	 */
	public List<String> getMsgIdentifiers() {
		return msgIdentifiers;
	}//EndMethod

	/**
	 * @return the dateFormat
	 */
	public String getDateFormat() {
		return dateFormat;
	}//EndMethod

	/**
	 * @return the msgIdLength
	 */
	public int getMsgIdLength() {
		return msgIdLength;
	}//EndMethod

	/**
	 * @return the versionLength
	 */
	public int getVersionLength() {
		return versionLength;
	}//EndMethod

	/**
	 * @return the recieverLength
	 */
	public int getRecieverLength() {
		return recieverLength;
	}//EndMethod

	/**
	 * @return the extractTimeLength
	 */
	public int getExtractTimeLength() {
		return extractTimeLength;
	}//EndMethod
	
	/**
	 * @return the prevExtractTimeLength
	 */
	public int getPrevExtractTimeLength() {
		return prevExtractTimeLength;
	}//EndMethod

	/**
	 * @return the messageNumberLength
	 */
	public int getMessageNumberLength() {
		return messageNumberLength;
	}//EndMethod

	/**
	 * @return the endMarkerLength
	 */
	public int getEndMarkerLength() {
		return endMarkerLength;
	}//EndMethod

	/**
	 * @return the recordsCountLength
	 */
	public int getRecordsCountLength() {
		return recordsCountLength;
	}//EndMethod
}// EndClass
