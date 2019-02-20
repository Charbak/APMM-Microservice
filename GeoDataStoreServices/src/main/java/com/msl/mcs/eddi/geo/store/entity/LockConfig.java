package com.msl.mcs.eddi.geo.store.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * LockConfig entity.
 */
@Entity
@Table(name = "lock_config")

public class LockConfig implements java.io.Serializable {

	// Fields

	/**
	 * serial version Id
	 */
	private static final long serialVersionUID = -6745505951573708755L;

	@Id
	@Column(name = "locker_name")
	private String lockerName;

	@Column(name = "node_name")
	private String nodeName;

	@Column(name = "lock_acquired")
	private String lockAcquired;

	@Column(name = "last_accessed")
	private Timestamp lastAccessed;

	@Column(name = "max_lock_duration")
	private Long maxLockDuration;

	// Constructors

	/** default constructor */
	public LockConfig() {
	}

	/** minimal constructor */
	public LockConfig(String lockerName, String nodeName, String lockAcquired, Timestamp lastAccessed) {
		this.lockerName = lockerName;
		this.nodeName = nodeName;
		this.lockAcquired = lockAcquired;
		this.lastAccessed = lastAccessed;
	}

	/** full constructor */
	public LockConfig(String lockerName, String nodeName, String lockAcquired, Timestamp lastAccessed,
			Long maxLockDuration) {
		this.lockerName = lockerName;
		this.nodeName = nodeName;
		this.lockAcquired = lockAcquired;
		this.lastAccessed = lastAccessed;
		this.maxLockDuration = maxLockDuration;
	}

	// Property accessors
	public String getLockerName() {
		return this.lockerName;
	}

	public void setLockerName(String lockerName) {
		this.lockerName = lockerName;
	}

	public String getNodeName() {
		return this.nodeName;
	}

	public void setNodeName(String nodeName) {
		this.nodeName = nodeName;
	}

	public String getLockAcquired() {
		return this.lockAcquired;
	}

	public void setLockAcquired(String lockAcquired) {
		this.lockAcquired = lockAcquired;
	}

	public Timestamp getLastAccessed() {
		return this.lastAccessed;
	}

	public void setLastAccessed(Timestamp lastAccessed) {
		this.lastAccessed = lastAccessed;
	}

	public Long getMaxLockDuration() {
		return this.maxLockDuration;
	}

	public void setMaxLockDuration(Long maxLockDuration) {
		this.maxLockDuration = maxLockDuration;
	}

}