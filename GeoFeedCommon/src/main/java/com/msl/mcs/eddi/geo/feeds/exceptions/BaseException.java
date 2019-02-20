package com.msl.mcs.eddi.geo.feeds.exceptions;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BaseException extends Exception {

	private static final long serialVersionUID = -7539530158748651930L;
	private String message;
	private ArrayList<ExceptionInfo> exInfoList = new ArrayList<ExceptionInfo>();

	/**
	 * Default Constructor
	 */
	public BaseException() {
		super();
	}

	/**
	 * Parameterized constructor
	 * @param message of type String
	 */
	public BaseException(String message) {
		super();
		this.message = message;
	}

	/**
	 * Parameterized constructor
	 * @param throwable of type Throwable
	 */
	public BaseException(Throwable throwable) {
		super();
		this.initCause(throwable);
	}

	/**
	 * Parameterized constructor
	 * @param throwable of type Throwable
	 * @param exInfoList
	 */
	public BaseException(Throwable throwable,
			ArrayList<ExceptionInfo> exInfoList) {
		super();
		this.message=throwable.getMessage();
		this.initCause(throwable);
		this.exInfoList = exInfoList;
	}

	/**
	 * Parameterized constructor
	 * @param message of type String
	 * @param throwable of type Throwable
	 */
	public BaseException(String message, Throwable throwable) {
		super();
		this.message = message;
		this.initCause(throwable);
	}

	/**
	 * Getter for list of errors
	 * @return exInfoList, error list of type ArrayList<ExceptionInfo>
	 */
	public ArrayList<ExceptionInfo> getErrorList() {
		return exInfoList;
	}

	/**
	 * Setter for list of errors
	 * @param exInfoList of type ArrayList<ExceptionInfo>
	 */
	public void setErrorList(ArrayList<ExceptionInfo> exInfoList) {
		this.exInfoList = exInfoList;
	}

	/**
	 * Getter for message
	 * @return message of type String
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @return message of type string
	 */
	public String toString() {
		String s = getClass().getName();
		return s + ":: " + message;
	}

	/**
	 * @param clazz of type Class
	 * @param th of type Throwable
	 * @param loggingType of type String
	 */
	public void handleException(Class<?> clazz, Throwable th,
			String loggingType) {
		Logger logger = LoggerFactory.getLogger(clazz);

//		if (IConstant.NO_LOGGING.equals(loggingType))
//			return;
//		else 
//		if (ERROR.equals(loggingType))
//			logger.error(clazz.getPackage().getName()+":::::"+th.getMessage(), th);
//		else if (IConstant.INFO.equals(loggingType))
//			logger.info(clazz.getPackage().getName()+":::::"+th.getMessage(), th);
//		else if (IConstant.WARN.equals(loggingType))
//			logger.warn(clazz.getPackage().getName()+":::::"+th.getMessage(), th);
//		else {
//			logger.error(clazz.getPackage().getName()+":::::"+th.getMessage(), th);
//		}
	}
}	
