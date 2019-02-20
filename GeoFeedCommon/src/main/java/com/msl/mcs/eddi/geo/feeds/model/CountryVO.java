package com.msl.mcs.eddi.geo.feeds.model;

/**
 * Vo to get country data from geo feed and save to database.
 * 
 */
public class CountryVO extends AbstractVO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8523763187064707549L;
	private String countryCode;
	private String countryName;
	private String defaultCurrency;
	private String altCurrency;
	private String status;
	private String days[];
	private String typeDays;
	private String emailAdd;
	private String imageUrl = "images/edit.png";

	/**
	 * @return country code
	 */
	public String getCountryCode() {
		return countryCode;
	}

	/**
	 * @return the days
	 */
	public String[] getDays() {
		return days;
	}

	/**
	 * @param days
	 *            the days to set
	 */
	public void setDays(String[] days) {
		this.days = days;
	}

	/**
	 * @return the typeDays
	 */
	public String getTypeDays() {
		return typeDays;
	}

	/**
	 * @param typeDays
	 *            the typeDays to set
	 */
	public void setTypeDays(String typeDays) {
		this.typeDays = typeDays;
	}

	/**
	 * @return the emailAdd
	 */
	public String getEmailAdd() {
		return emailAdd;
	}

	/**
	 * @param emailAdd
	 *            the emailAdd to set
	 */
	public void setEmailAdd(String emailAdd) {
		this.emailAdd = emailAdd;
	}

	/**
	 * @param countryCode
	 */
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	/**
	 * @return country name
	 */
	public String getCountryName() {
		return countryName;
	}

	/**
	 * @param countryName
	 */
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	/**
	 * @return default currency
	 */
	public String getDefaultCurrency() {
		return defaultCurrency;
	}

	/**
	 * @param defaultCurrency
	 */
	public void setDefaultCurrency(String defaultCurrency) {
		this.defaultCurrency = defaultCurrency;
	}

	/**
	 * @return slternate currency
	 */
	public String getAltCurrency() {
		return altCurrency;
	}

	/**
	 * @param altCurrency
	 */
	public void setAltCurrency(String altCurrency) {
		this.altCurrency = altCurrency;
	}

	/**
	 * @return status of country active / inactive
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
	 * @param imageUrl
	 */
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	/**
	 * @return image url for grid
	 */
	public String getImageUrl() {
		return imageUrl;
	}

}
