package com.msl.mcs.eddi.geo.feeds.model;

import java.sql.Date;
import java.util.Vector;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GeoStagingFeedVO extends AbstractVO {
	private static final long serialVersionUID = -7084749681641508778L;
	private String msgId;
	private String version;
	private Date extractTime;
	private Date prevExtractTime;
	private int messageNumber;
	private String endMarker;
	private int numberOfRecords;

	private Vector<GeoStagingFeedTagVO> tag001s;

	/**
	 * @return msgId
	 */
	public String getMsgId() {
		return msgId;
	}

	/**
	 * @param msgId
	 */
	public void setMsgId(String msgId) {
		this.msgId = msgId;
	}

	/**
	 * @tag Header
	 * @field version
	 * @required-value "000005"
	 */
	/**
	 * @return version
	 */
	public String getVersion() {
		return version;
	}

	/**
	 * @param version
	 */
	public void setVersion(String version) {
		this.version = version;
	}

	/**
	 * @tag Header
	 * @field EndMarker
	 */
	public String getEndMarker() {
		return endMarker;
	}

	/**
	 * @param endMarker
	 */
	public void setEndMarker(String endMarker) {
		this.endMarker = endMarker;
	}

	/**
	 * @tag Header
	 * @date-format "yyyy-MM-dd-HH.mm.ss.SSSSSS"
	 * @field ExtractTime
	 */
	public Date getExtractTime() {
		return extractTime;
	}

	/**
	 * @param extractTime
	 */
	public void setExtractTime(Date extractTime) {
		this.extractTime = extractTime;
	}

	/**
	 * @tag Header
	 * @field MessageNumber
	 */
	public int getMessageNumber() {
		return messageNumber;
	}

	/**
	 * @param messageNumber
	 */
	public void setMessageNumber(int messageNumber) {
		this.messageNumber = messageNumber;
	}

	/**
	 * @tag Header
	 * @field NumberOfRecords
	 */
	public int getNumberOfRecords() {
		return numberOfRecords;
	}

	/**
	 * @param numberOfRecords
	 */
	public void setNumberOfRecords(int numberOfRecords) {
		this.numberOfRecords = numberOfRecords;
	}

	/**
	 * @tag Header
	 * @date-format "yyyy-MM-dd-HH.mm.ss.SSSSSS"
	 * @field PrevExtractTime
	 */
	/**
	 * @return prevExtractTime
	 */
	public Date getPrevExtractTime() {
		return prevExtractTime;
	}

	/**
	 * @param prevExtractTime
	 */
	public void setPrevExtractTime(Date prevExtractTime) {
		this.prevExtractTime = prevExtractTime;
	}

	/**
	 * @tag TAG001
	 * @factory vo="StagingFeedTagVO"
	 */
	public Vector<GeoStagingFeedTagVO> getTag001s() {
		return tag001s;
	}

	/**
	 * @param tag001s
	 */
	public void setTag001s(Vector<GeoStagingFeedTagVO> tag001s) {
		this.tag001s = tag001s;
	}

	/**
	 * Checks if the StagingFeedVO is empty.
	 * 
	 * @return boolean Indicating if empty or not.
	 */
	public boolean isEmpty() {
		if (msgId == null && version == null && tag001s == null) {
			return true;
		}
		return false;
	}
}
