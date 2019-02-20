package com.msl.mcs.eddi.geo.feeds.exceptions;

/**
 * POJO class containing exception details
 */
public class ExceptionInfo {

	private String value;
	private String code;
	
	/**
	 * Getter for value
	 * @return value of type String
	 */
	public String getValue() {
		return value;
	}
	
	/**
	 * Setter for value
	 * @param value of type String
	 */
	public void setValue(String value) {
		this.value = value;
	}
	
	/**
	 * Getter for code
	 * @return code of type String
	 */
	public String getCode() {
		return code;
	}
	
	/**
	 * Setter for code
	 * @param code of type String
	 */
	public void setCode(String code) {
		this.code = code;
	}
	
}
