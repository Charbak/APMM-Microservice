package com.msl.mcs.eddi.geo.store.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Country entity.
 */
@Entity
@Table(name = "country")
public class Country implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5306568000245958166L;
	// Fields

	/**
	 * serial version Id
	 */
	@Id
	@Column(name = "country_code")
	private String countryCode;

	@Column(name = "country_name")
	private String countryName;

	@Column(name = "currency")
	private String currency;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "modified_date")
	private Date modifiedDate;

	@Column(name = "type_days")
	private String typeDays;

	@Column(name = "email")
	private String email;

	@Column(name = "created_by")
	private String createdBy;

	@Column(name = "modified_by")
	private String modifiedBy;

	@Column(name = "status")
	private String status;

	@Column(name = "weekends")
	private String weekends;

	// Constructors

	/** default constructor */
	public Country() {
	}

	/** minimal constructor */
	public Country(String countryCode, String countryName, Date createdDate, Date modifiedDate, String createdBy,
			String modifiedBy, String status) {
		this.countryCode = countryCode;
		this.countryName = countryName;
		this.createdDate = createdDate;
		this.modifiedDate = modifiedDate;
		this.createdBy = createdBy;
		this.modifiedBy = modifiedBy;
		this.status = status;
	}

	// Property accessors
	public String getCountryCode() {
		return this.countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public String getCountryName() {
		return this.countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getCurrency() {
		return this.currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getModifiedDate() {
		return this.modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getTypeDays() {
		return typeDays;
	}

	public void setTypeDays(String typeDays) {
		this.typeDays = typeDays;
	}

	public String getWeekends() {
		return weekends;
	}

	public void setWeekends(String weekends) {
		this.weekends = weekends;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getModifiedBy() {
		return this.modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}