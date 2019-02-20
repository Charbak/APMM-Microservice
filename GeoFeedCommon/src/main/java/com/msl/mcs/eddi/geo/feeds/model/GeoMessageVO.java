package com.msl.mcs.eddi.geo.feeds.model;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Vo to generate Geo Message Log Screen. This Vo is used by data store to send
 * data to populate Geo Message Log Screen.
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class GeoMessageVO extends AbstractVO {

	/**
	 * serial version Id
	 */
	private static final long serialVersionUID = 1142817265735075392L;
	private long id;
	private String msgId;
	private String version;
	private long msgNumber;
	private Timestamp extractTime;
	private String endMarker;
	private String message;
	private String processedState;
	private String log;
	private Timestamp receivedDate;
	private Timestamp processedDate;

	private Timestamp prevExtractTime;

	/**
	 * Returns the endMarker.
	 * 
	 * @return String
	 */
	public String getEndMarker() {
		return endMarker;
	}

	/**
	 * Returns the extractTime.
	 * 
	 * @return Timestamp
	 */
	public Timestamp getExtractTime() {
		return extractTime;
	}

	/**
	 * Returns the id.
	 * 
	 * @return long
	 */
	public long getId() {
		return id;
	}

	/**
	 * Returns the message.
	 * 
	 * @return String
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * Returns the msgId.
	 * 
	 * @return String
	 */
	public String getMsgId() {
		return msgId;
	}

	/**
	 * Returns the msgNumber.
	 * 
	 * @return long
	 */
	public long getMsgNumber() {
		return msgNumber;
	}

	/**
	 * Returns the msgNumber.
	 * 
	 * @return String
	 */
	public String getStringMsgNumber() {
		return ((Long) msgNumber).toString();
	}

	/**
	 * Returns the processedDate.
	 * 
	 * @return Timestamp
	 */
	public Timestamp getProcessedDate() {
		return processedDate;
	}

	/**
	 * Returns the receivedDate.
	 * 
	 * @return Timestamp
	 */
	public Timestamp getReceivedDate() {
		return receivedDate;
	}

	/**
	 * Returns the log.
	 * 
	 * @return String
	 */
	public String getLog() {
		return log;
	}

	/**
	 * Returns the processedState.
	 * 
	 * @return String
	 */
	public String getProcessedState() {
		return processedState;
	}

	/**
	 * Returns the version.
	 * 
	 * @return String
	 */
	public String getVersion() {
		return version;
	}

	/**
	 * Returns the prevExtractTime.
	 * 
	 * @return prevExtractTime
	 */
	public Timestamp getPrevExtractTime() {
		return prevExtractTime;
	}

	/**
	 * Sets the endMarker.
	 * 
	 * @param endMarker
	 *            The endMarker to set
	 */
	public void setEndMarker(String endMarker) {
		this.endMarker = endMarker;
	}

	/**
	 * Sets the extractTime.
	 * 
	 * @param extractTime
	 *            The extractTime to set
	 */
	public void setExtractTime(Timestamp extractTime) {
		this.extractTime = extractTime;
	}

	/**
	 * Sets the id.
	 * 
	 * @param id
	 *            The id to set
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * Sets the message.
	 * 
	 * @param message
	 *            The message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * Sets the msgId.
	 * 
	 * @param msgId
	 *            The msgId to set
	 */
	public void setMsgId(String msgId) {
		this.msgId = msgId;
	}

	/**
	 * Sets the msgNumber.
	 * 
	 * @param msgNumber
	 *            The msgNumber to set
	 */
	public void setMsgNumber(long msgNumber) {
		this.msgNumber = msgNumber;
	}

	/**
	 * Sets the processedDate.
	 * 
	 * @param processedDate
	 *            The processedDate to set
	 */
	public void setProcessedDate(Timestamp processedDate) {
		this.processedDate = processedDate;
	}

	/**
	 * Sets the receivedDate.
	 * 
	 * @param receivedDate
	 *            The receivedDate to set
	 */
	public void setReceivedDate(Timestamp receivedDate) {
		this.receivedDate = receivedDate;
	}

	/**
	 * Sets the processedCode.
	 * 
	 * @param processedCode
	 *            The processedCode to set
	 */
	public void setLog(String log) {
		this.log = log;
	}

	/**
	 * Sets the processedState.
	 * 
	 * @param processedState
	 *            The processedState to set
	 */
	public void setProcessedState(String processedState) {
		this.processedState = processedState;
	}

	/**
	 * Sets the version.
	 * 
	 * @param version
	 *            The version to set
	 */
	public void setVersion(String version) {
		this.version = version;
	}

	/**
	 * Sets the PrevExtractTime.
	 * 
	 * @param PrevExtractTime
	 *            The PrevExtractTime to set
	 */
	public void setPrevExtractTime(Timestamp prevExtractTime) {
		this.prevExtractTime = prevExtractTime;
	}

	public String toString() {
		StringBuffer sb = new StringBuffer(203);

		sb.append("MQMessageVO: \n - id:");
		sb.append(id);
		sb.append("\n - msgId: ");
		sb.append(msgId);
		sb.append("\n - version: ");
		sb.append(version);
		sb.append("\n - msgNumber: ");
		sb.append(msgNumber);
		sb.append("\n - extractTime: ");
		sb.append(extractTime);
		sb.append("\n - prevExtractTime: ");
		sb.append(prevExtractTime);
		sb.append("\n - endMarker: ");
		sb.append(endMarker);
		sb.append("\n - message: ");
		sb.append(message);
		sb.append("\n - processedState: ");
		sb.append(processedState);
		sb.append("\n - Log: ");
		sb.append(log);
		sb.append("\n - processedDate: ");
		sb.append(processedDate);
		sb.append("\n - receivedDate: ");
		sb.append(receivedDate);

		return sb.toString();
	}
}
