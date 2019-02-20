package com.msl.mcs.eddi.geo.store.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * GeoMessage entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "geo_message")
public class GeoMessage implements java.io.Serializable {

	// Fields

	/**
	 * serial version Id
	 */
	private static final long serialVersionUID = 7591393984242114104L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "msg_id")
	private String msgId;
	
	@Column(name = "version")
	private String version;
	
	@Column(name = "msg_number")
	private Long msgNumber;
	
	@Column(name = "extract_time")
	private Timestamp extractTime;
	
	@Column(name = "prev_extract_time")
	private Timestamp prevExtractTime;
	
	@Column(name = "end_marker")
	private String endMarker;
	
	@Column(name = "message")
	private String message;
	
	@Column(name = "processed_state", length = 3)
	private String processedState;
	
	@Column(name = "log", length = 2000)
	private String log;
	
	@Column(name = "recieved_date", length = 11)
	private Timestamp receivedDate;
	
	@Column(name = "processed_date", length = 11)
	private Timestamp processedDate;

	// Constructors

	/** default constructor */
	public GeoMessage() {
	}

	/** minimal constructor */
	public GeoMessage(Long id) {
		this.id = id;
	}

	/** full constructor */
	public GeoMessage(Long id, String msgId, String version, Long msgNumber,
			Timestamp extractTime, Timestamp prevExtractTime, String endMarker,
			String message, String processedState, String log,
			Timestamp receivedDate, Timestamp processedDate) {
		this.id = id;
		this.msgId = msgId;
		this.version = version;
		this.msgNumber = msgNumber;
		this.extractTime = extractTime;
		this.prevExtractTime = prevExtractTime;
		this.endMarker = endMarker;
		this.message = message;
		this.processedState = processedState;
		this.log = log;
		this.receivedDate = receivedDate;
		this.processedDate = processedDate;
	}

	// Property accessors
	
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMsgId() {
		return this.msgId;
	}

	public void setMsgId(String msgId) {
		this.msgId = msgId;
	}

	public String getVersion() {
		return this.version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public Long getMsgNumber() {
		return this.msgNumber;
	}

	public void setMsgNumber(Long msgNumber) {
		this.msgNumber = msgNumber;
	}

	public Timestamp getExtractTime() {
		return this.extractTime;
	}

	public void setExtractTime(Timestamp extractTime) {
		this.extractTime = extractTime;
	}

	public Timestamp getPrevExtractTime() {
		return this.prevExtractTime;
	}

	public void setPrevExtractTime(Timestamp prevExtractTime) {
		this.prevExtractTime = prevExtractTime;
	}

	public String getEndMarker() {
		return this.endMarker;
	}

	public void setEndMarker(String endMarker) {
		this.endMarker = endMarker;
	}

	public String getMessage() {
		return this.message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getProcessedState() {
		return this.processedState;
	}

	public void setProcessedState(String processedState) {
		this.processedState = processedState;
	}

	public String getLog() {
		return this.log;
	}

	public void setLog(String log) {
		this.log = log;
	}

	public Timestamp getReceivedDate() {
		return this.receivedDate;
	}

	public void setReceivedDate(Timestamp receivedDate) {
		this.receivedDate = receivedDate;
	}

	public Timestamp getProcessedDate() {
		return this.processedDate;
	}

	public void setProcessedDate(Timestamp processedDate) {
		this.processedDate = processedDate;
	}

}