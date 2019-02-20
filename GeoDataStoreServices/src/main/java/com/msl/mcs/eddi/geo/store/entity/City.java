package com.msl.mcs.eddi.geo.store.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * City entity.
 */
@Entity
@Table(name = "city")
public class City implements java.io.Serializable {

	// Fields

	/**
	 * serial version Id
	 */
	private static final long serialVersionUID = -9072614370401759992L;

	@Id
	@Column(name = "city_code")
	private String cityCode;

	@Column(name = "country_code")
	private String countryCode;

	@Column(name = "city_name")
	private String cityName;

	@Column(name = "status")
	private String status;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "modified_date")
	private Date modifiedDate;

	@Column(name = "created_by")
	private String createdBy;

	@Column(name = "modified_by")
	private String modifiedBy;

	@Column(name = "port_flag")
	private String portFlag;

	// Constructors

	/** default constructor */
	public City() {
	}

	/** minimal constructor */
	public City(String cityCode, String countryCode, String cityName, String status, Date createdDate,
			Date modifiedDate, String createdBy, String modifiedBy, String portFlag) {
		this.cityCode = cityCode;
		this.countryCode = countryCode;
		this.cityName = cityName;
		this.status = status;
		this.createdDate = createdDate;
		this.modifiedDate = modifiedDate;
		this.createdBy = createdBy;
		this.modifiedBy = modifiedBy;
		this.portFlag = portFlag;
	}

	// Property accessors
	public String getCityCode() {
		return this.cityCode;
	}

	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	public String getCountryCode() {
		return this.countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public String getCityName() {
		return this.cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public String getPortFlag() {
		return portFlag;
	}

	public void setPortFlag(String portFlag) {
		this.portFlag = portFlag;
	}

}