package com.msl.mcs.eddi.geo.store.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * GeoBatch entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "geo_batch")
public class GeoBatch implements java.io.Serializable {

	// Fields

	/**
	 * serial version Id
	 */
	private static final long serialVersionUID = -8981081692661116655L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "geo_batch_id")
	private Long geoBatchId;
	
	@Column(name = "extract_time")
	private Timestamp extractTime;
	
	@Column(name = "processed_state")
	private String processedState;
	
	@Column(name = "msg_id")
	private String msgId;
	
	@Column(name = "create_date")
	private Timestamp createDate;
	
	@Column(name = "version")
	private String version;
	
	@Column(name = "error_code")
	private String errorCode;
	
	@Column(name = "custom_data")
	private String customData;
	
	@Column(name = "processed_date")
	private Timestamp processedDate;
	
	@Column(name = "prev_extract_time")
	private Timestamp prevExtractTime;
	
	@Column(name = "ignore_batch_sequence")
	private String ignoreBatchSequence;

	// Constructors

	/** default constructor */
	public GeoBatch() {
	}

	/** minimal constructor */
	public GeoBatch(Long geoBatchId, Timestamp extractTime,
			String processedState, String msgid, Timestamp createDate,
			String version) {
		this.geoBatchId = geoBatchId;
		this.extractTime = extractTime;
		this.processedState = processedState;
		this.msgId = msgid;
		this.createDate = createDate;
		this.version = version;
	}

	/** full constructor */
	public GeoBatch(Long geoBatchId, Timestamp extractTime,
			String processedState, String msgid, Timestamp createDate,
			String version, String errorCode, String customData,
			Timestamp processedDate, Timestamp prevExtractTime,
			String ignoreBatchSequence) {
		this.geoBatchId = geoBatchId;
		this.extractTime = extractTime;
		this.processedState = processedState;
		this.msgId = msgid;
		this.createDate = createDate;
		this.version = version;
		this.errorCode = errorCode;
		this.customData = customData;
		this.processedDate = processedDate;
		this.prevExtractTime = prevExtractTime;
		this.ignoreBatchSequence = ignoreBatchSequence;
	}

	// Property accessors
	public Long getGeoBatchId() {
		return this.geoBatchId;
	}

	public void setGeoBatchId(Long geoBatchId) {
		this.geoBatchId = geoBatchId;
	}

	public Timestamp getExtractTime() {
		return this.extractTime;
	}

	public void setExtractTime(Timestamp extractTime) {
		this.extractTime = extractTime;
	}

	public String getProcessedState() {
		return this.processedState;
	}

	public void setProcessedState(String processedState) {
		this.processedState = processedState;
	}

	public String getMsgId() {
		return this.msgId;
	}

	public void setMsgId(String msgid) {
		this.msgId = msgid;
	}

	public Timestamp getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	public String getVersion() {
		return this.version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getErrorCode() {
		return this.errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	public String getCustomData() {
		return this.customData;
	}

	public void setCustomData(String customData) {
		this.customData = customData;
	}

	public Timestamp getProcessedDate() {
		return this.processedDate;
	}

	public void setProcessedDate(Timestamp processedDate) {
		this.processedDate = processedDate;
	}

	public Timestamp getPrevExtractTime() {
		return this.prevExtractTime;
	}

	public void setPrevExtractTime(Timestamp prevExtractTime) {
		this.prevExtractTime = prevExtractTime;
	}

	public String getIgnoreBatchSequence() {
		return this.ignoreBatchSequence;
	}

	public void setIgnoreBatchSequence(String ignoreBatchSequence) {
		this.ignoreBatchSequence = ignoreBatchSequence;
	}

}