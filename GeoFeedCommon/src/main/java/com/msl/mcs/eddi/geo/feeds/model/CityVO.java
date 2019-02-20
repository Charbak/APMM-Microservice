package com.msl.mcs.eddi.geo.feeds.model;

/**
 * Vo to receive City data from Geo Feed. this Vo is used by tag processor to
 * save data to database.
 * 
 */
public class CityVO extends AbstractVO {
	/**
	 * Serial version Id.
	 */
	private static final long serialVersionUID = -5963995962113355395L;
	private String cityGeoId;
	private String cityGeoCode;
	private String countryGeoID;
	private String countryGeoCode;
	private String cityName;
	private String status;
	private String portFlag;

	// default constructor
	public CityVO() {
		super();
	}

	/**
	 * Parameterized constructor.
	 * 
	 * @param cityGeoId
	 * @param cityGeoCode
	 * @param countryGeoID
	 * @param cityName
	 * @param status
	 */
	public CityVO(String cityGeoId, String cityGeoCode, String countryGeoID, String cityName, String status,
			String portFlag) {
		super();
		this.cityGeoId = cityGeoId;
		this.cityGeoCode = cityGeoCode;
		this.countryGeoID = countryGeoID;
		this.cityName = cityName;
		this.status = status;
		this.portFlag = portFlag;
	}

	/**
	 * @return city GeoId
	 */
	public String getCityGeoId() {
		return cityGeoId;
	}

	/**
	 * @param cityGeoId
	 */
	public void setCityGeoId(String cityGeoId) {
		this.cityGeoId = cityGeoId;
	}

	/**
	 * @return city Geo Code
	 */
	public String getCityGeoCode() {
		return cityGeoCode;
	}

	/**
	 * @param cityGeoCode
	 */
	public void setCityGeoCode(String cityGeoCode) {
		this.cityGeoCode = cityGeoCode;
	}

	/**
	 * @return countryGeoId
	 */
	public String getCountryGeoID() {
		return countryGeoID;
	}

	/**
	 * @param countryGeoID
	 */
	public void setCountryGeoID(String countryGeoID) {
		this.countryGeoID = countryGeoID;
	}

	/**
	 * @return City Name
	 */
	public String getCityName() {
		return cityName;
	}

	/**
	 * @param cityName
	 */
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	/**
	 * @return Status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return countryGeoCode
	 */
	public String getCountryGeoCode() {
		return countryGeoCode;
	}

	/**
	 * @param countryGeoCode
	 */
	public void setCountryGeoCode(String countryGeoCode) {
		this.countryGeoCode = countryGeoCode;
	}

	public String getPortFlag() {
		return portFlag;
	}

	public void setPortFlag(String portFlag) {
		this.portFlag = portFlag;
	}
}
