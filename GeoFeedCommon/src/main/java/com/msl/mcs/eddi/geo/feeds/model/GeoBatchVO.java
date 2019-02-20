package com.msl.mcs.eddi.geo.feeds.model;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Vo to generate Geo Monitoring Screen. This Vo is used by data store to send
 * data to populate Geo Monitor Screen.
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class GeoBatchVO extends AbstractVO {

	/**
	 * serial version Id
	 */
	private static final long serialVersionUID = 3122902525609337399L;
	private long id;
	private String msgId;
	private String version;
	private Timestamp extractTime;
	private Timestamp prevExtractTime;
	private Timestamp createDate;
	private String ignoreBatchSequence;
	private String processedState;
	private String errorCode;
	private String customData;
	private Timestamp processedDate;

	/**
	 * Returns the createDate.
	 * 
	 * @return Date
	 */
	public Timestamp getCreateDate() {
		return createDate;
	}

	/**
	 * Returns the customData.
	 * 
	 * @return String
	 */
	public String getCustomData() {
		return customData;
	}

	/**
	 * Returns the errorCode.
	 * 
	 * @return String
	 */
	public String getErrorCode() {
		return errorCode;
	}

	/**
	 * Returns the extractTime.
	 * 
	 * @return Date
	 */
	public Timestamp getExtractTime() {
		return extractTime;
	}

	/**
	 * Returns the prevExtractTime.
	 * 
	 * @return Date
	 */
	public Timestamp getPrevExtractTime() {
		return prevExtractTime;
	}

	/**
	 * Returns the id.
	 * 
	 * @return long
	 */
	public long getBatchId() {
		return id;
	}

	/**
	 * Returns the id.
	 * 
	 * @return String
	 */
	public String getStringBatchId() {
		return ((Long) id).toString();
	}

	/**
	 * Returns the ignoreBatchSequence.
	 * 
	 * @return String
	 */
	public String getIgnoreBatchSequence() {
		return ignoreBatchSequence;
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
	 * Returns the processedDate.
	 * 
	 * @return Date
	 */
	public Timestamp getProcessedDate() {
		return processedDate;
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
	 * Sets the createDate.
	 * 
	 * @param createDate
	 *            The createDate to set
	 */
	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	/**
	 * Sets the customData.
	 * 
	 * @param customData
	 *            The customData to set
	 */
	public void setCustomData(String customData) {
		this.customData = customData;
	}

	/**
	 * Sets the errorCode.
	 * 
	 * @param errorCode
	 *            The errorCode to set
	 */
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
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
	 * Sets the prevExtractTime.
	 * 
	 * @param prevExtractTime
	 *            The prevExtractTime to set
	 */
	public void setPrevExtractTime(Timestamp prevExtractTime) {
		this.prevExtractTime = prevExtractTime;
	}

	/**
	 * Sets the id.
	 * 
	 * @param id
	 *            The id to set
	 */
	public void setBatchId(long id) {
		this.id = id;
	}

	/**
	 * Sets the ignoreBatchSequence.
	 * 
	 * @param ignoreBatchSequence
	 *            The ignoreBatchSequence to set
	 */
	public void setIgnoreBatchSequence(String ignoreBatchSequence) {
		this.ignoreBatchSequence = ignoreBatchSequence;
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
	 * Sets the processedDate.
	 * 
	 * @param processedDate
	 *            The processedDate to set
	 */
	public void setProcessedDate(Timestamp processedDate) {
		this.processedDate = processedDate;
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

	public String toString() {
		StringBuffer sb = new StringBuffer(202);
		sb.append("MQBatchVO: \n - id:");
		sb.append(id);
		sb.append("\n - msgId: ");
		sb.append(msgId);
		sb.append("\n - version: ");
		sb.append(version);
		sb.append("\n - extractTime: ");
		sb.append(extractTime);
		sb.append("\n - prevExtractTime: ");
		sb.append(prevExtractTime);
		sb.append("\n - createDate: ");
		sb.append(createDate);
		sb.append("\n - processedState: ");
		sb.append(processedState);
		sb.append("\n - errorCode: ");
		sb.append(errorCode);
		sb.append("\n - ignoreBatchSequence: ");
		sb.append(ignoreBatchSequence);
		sb.append("\n - customData: ");
		sb.append(customData);
		sb.append("\n - processedDate: ");
		sb.append(processedDate);

		return sb.toString();
	}

}
