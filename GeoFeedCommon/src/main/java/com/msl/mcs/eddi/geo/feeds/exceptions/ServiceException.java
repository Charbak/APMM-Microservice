package com.msl.mcs.eddi.geo.feeds.exceptions;

import java.util.ArrayList;

public class ServiceException extends BaseException {
private static final long serialVersionUID = 1L;
	
	/**
	 * Parameterized constructor
	 * @param message
	 * @param throwable
	 */
	public ServiceException(String message, Throwable throwable) {
		super(message, throwable);
	}

	/**
	 * Parameterized constructor
	 * @param throwable of type Throwable
	 */
	public ServiceException(Throwable throwable) {
		super(throwable);
	}

	/**
	 * Default constructor
	 */
	public ServiceException() {
		super();
	}

	/**
	 * Parameterized constructor
	 * @param message of type String
	 */
	public ServiceException(String message){
		super(message);
	}
	
	/**
	 * Parameterized constructor
	 * @param throwable of type Throwable
	 * @param exInfoList of type ArrayList<ExceptionInfo>
	 */
	public ServiceException(Throwable throwable,
			ArrayList<ExceptionInfo> exInfoList) {
		super(throwable, exInfoList);
	}
}
