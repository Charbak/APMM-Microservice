package com.msl.mcs.eddi.geo.feeds.model;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Store details related to schedulers. and used to get lock on data base.
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class LockerVO extends AbstractVO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5265041067152970044L;
	private String lockerName;
	private String nodeName;
	private Long maxLockerDuration;
	private Timestamp lastAccessed;
	private String lockRequired;

	/**
	 * @return the lockerName
	 */
	public String getLockerName() {
		return lockerName;
	}

	/**
	 * @param lockerName
	 *            the lockerName to set
	 */
	public void setLockerName(String lockerName) {
		this.lockerName = lockerName;
	}

	/**
	 * @return nodeName
	 */
	public String getNodeName() {
		return nodeName;
	}

	/**
	 * @param nodeName
	 */
	public void setNodeName(String nodeName) {
		this.nodeName = nodeName;
	}

	/**
	 * @return the maxLockerDuration
	 */
	public Long getMaxLockerDuration() {
		return maxLockerDuration;
	}

	/**
	 * @param maxLockerDuration the maxLockerDuration to set
	 */
	public void setMaxLockerDuration(Long maxLockerDuration) {
		this.maxLockerDuration = maxLockerDuration;
	}

	/**
	 * @return lastAccessed time.
	 */
	public Timestamp getLastAccessed() {
		return lastAccessed;
	}

	/**
	 * @param lastAccessed
	 */
	public void setLastAccessed(Timestamp lastAccessed) {
		this.lastAccessed = lastAccessed;
	}

	/**
	 * @return lock achievement or release required.
	 */
	public String getLockRequired() {
		return lockRequired;
	}

	/**
	 * @param lockRequired
	 */
	public void setLockRequired(String lockRequired) {
		this.lockRequired = lockRequired;
	}

	/**
	 * @param lockerName
	 * @param nodeName
	 * @param maxLockerDuration
	 * @param lastAccessed
	 * @param lockRequired
	 */
	public LockerVO(String lockerName, String nodeName, Long maxLockerDuration, Timestamp lastAccessed,
			String lockRequired) {
		super();
		this.lockerName = lockerName;
		this.nodeName = nodeName;
		this.maxLockerDuration = maxLockerDuration;
		this.lastAccessed = lastAccessed;
		this.lockRequired = lockRequired;
	}

	/**
	 * default constructor
	 */
	public LockerVO() {

	}

}
