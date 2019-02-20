package com.msl.mcs.eddi.geo.feeds.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * POJO class to fetch the Load Port details for a load port
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class LoadPortVO extends AbstractVO {
	/**
	 * serial version ID.
	 */
	private static final long serialVersionUID = 1501609813352712746L;
	private String loadPortCode;
	private String loadPortName;
	private String loadPortGeoId;
	private String countryCode;
	private String status;
	private String cityCode;
	private String typeOfLocation;

	/**
	 * Default constructor
	 */
	public LoadPortVO() {
		super();
		this.loadPortCode = null;
		this.loadPortName = null;
		this.loadPortGeoId = null;
		this.countryCode = null;
		this.typeOfLocation = null;
	}

	/**
	 * Parameterized constructor
	 * 
	 * @param loadPortCode
	 *            of type String
	 * @param loadPortName
	 *            of type String
	 * @param loadPortGeoId
	 *            of type String
	 * @param countryCode
	 *            of type String
	 */
	public LoadPortVO(String loadPortCode, String loadPortName, String loadPortGeoId, String countryCode,
			String typeOfLocation) {
		super();
		this.loadPortCode = loadPortCode;
		this.loadPortName = loadPortName;
		this.loadPortGeoId = loadPortGeoId;
		this.countryCode = countryCode;
		this.typeOfLocation = typeOfLocation;
	}

	/**
	 * Getter for loadPortCode
	 * 
	 * @return loadPortCode of type String
	 */
	public String getLoadPortCode() {
		return loadPortCode;
	}

	/**
	 * Setter for laodPortCode
	 * 
	 * @param loadPortCode
	 *            of type String
	 */
	public void setLoadPortCode(String loadPortCode) {
		this.loadPortCode = loadPortCode;
	}

	/**
	 * Getter for loadPortName
	 * 
	 * @return loadPortName of type String
	 */
	public String getLoadPortName() {
		return loadPortName;
	}

	/**
	 * Setter for loadPortName
	 * 
	 * @param loadPortName
	 *            of type String
	 */
	public void setLoadPortName(String loadPortName) {
		this.loadPortName = loadPortName;
	}

	/**
	 * Getter for loadPortGeoId
	 * 
	 * @return loadPortGeoId of type String
	 */
	public String getLoadPortGeoId() {
		return loadPortGeoId;
	}

	/**
	 * Setter for loadPortGeoId
	 * 
	 * @param loadPortGeoId
	 *            of type String
	 */
	public void setLoadPortGeoId(String loadPortGeoId) {
		this.loadPortGeoId = loadPortGeoId;
	}

	/**
	 * Getter for countryCode
	 * 
	 * @return country code of type String
	 */
	public String getCountryCode() {
		return countryCode;
	}

	/**
	 * Setter for countryCode
	 * 
	 * @param countryCode
	 *            of type String
	 */
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	/**
	 * @return city Code String.
	 */
	public String getCityCode() {
		return cityCode;
	}

	/**
	 * @param cityCode
	 *            String
	 */
	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	/**
	 * @return status of load port(Active / Inactive)
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            String.
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	public String getTypeOfLocation() {
		return typeOfLocation;
	}

	public void setTypeOfLocation(String typeOfLocation) {
		this.typeOfLocation = typeOfLocation;
	}

	/**
	 * The method is overridden method to convert all the data contained in the
	 * object into a single String
	 * 
	 * @return concatenated string of all the variables in the class
	 */
	@Override
	public String toString() {
		return "LoadPortVo [countryCode=" + countryCode + ", loadPortCode=" + loadPortCode + ", loadPortGeoId="
				+ loadPortGeoId + ", loadPortName=" + loadPortName + "]";
	}
}
