package com.msl.mcs.eddi.geo.store.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * LoadPort entity
 */
@Entity
@Table(name = "load_port")
public class LoadPort implements java.io.Serializable {

	// Fields

	/**
	 * serial version Id
	 */
	private static final long serialVersionUID = 8604696468073105848L;
	@Id
	@Column(name = "load_port_code")
	private String loadPortCode;
	
	@Column(name = "city_code")
	private String cityCode;
	
	@Column(name = "country_code")
	private String countryCode;
	
	@Column(name = "load_port_name")
	private String loadPortName;
	
	@Column(name = "created_date")
	private Date createdDate;
	
	@Column(name = "modified_date")
	private Date modifiedDate;
	
	@Column(name = "created_by")
	private String createdBy;
	
	@Column(name = "modified_by")
	private String modifiedBy;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "load_port_geo_id")
	private String loadPortGeoId;
	
	@Column(name = "type_of_location")
	private String typeOfLocation;

	// Constructors

	/** default constructor */
	public LoadPort() {
	}

	/** full constructor */
	public LoadPort(String loadPortCode, String cityCode, String countryCode,
			String loadPortName, Date createdDate, Date modifiedDate,
			String createdBy, String modifiedBy, String status,String typeOfLocation) {
		this.loadPortCode = loadPortCode;
		this.cityCode = cityCode;
		this.countryCode = countryCode;
		this.loadPortName = loadPortName;
		this.createdDate = createdDate;
		this.modifiedDate = modifiedDate;
		this.createdBy = createdBy;
		this.modifiedBy = modifiedBy;
		this.status = status;
		this.typeOfLocation=typeOfLocation;
	}

	// Property accessors
	public String getLoadPortCode() {
		return this.loadPortCode;
	}

	public void setLoadPortCode(String loadPortCode) {
		this.loadPortCode = loadPortCode;
	}

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

	public String getLoadPortName() {
		return this.loadPortName;
	}

	public void setLoadPortName(String loadPortName) {
		this.loadPortName = loadPortName;
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

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getLoadPortGeoId() {
		return loadPortGeoId;
	}

	public void setLoadPortGeoId(String loadPortGeoId) {
		this.loadPortGeoId = loadPortGeoId;
	}

	public String getTypeOfLocation() {
		return typeOfLocation;
	}

	public void setTypeOfLocation(String typeOfLocation) {
		this.typeOfLocation = typeOfLocation;
	}

}