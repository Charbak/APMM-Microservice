package com.msl.mcs.eddi.geo.feeds.exceptions;

public class DataAccessException extends BaseException {
private static final long serialVersionUID = 1L;
	
	/**
	 * Parameterized constructor
	 * @param message
	 * @param throwable
	 */
	public DataAccessException(String message, Throwable throwable) {
		super(message, throwable);
	}

	/**
	 * Parameterized constructor
	 * @param throwable of type Throwable
	 */
	public DataAccessException(Throwable throwable) {
		super(throwable);
	}

	/**
	 * Default constructor
	 */
	public DataAccessException() {
		super();
	}

	/**
	 * Parameterized constructor
	 * @param message of type String
	 */
	public DataAccessException(String message){
		super(message);
	}
}
