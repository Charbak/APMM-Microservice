package com.msl.mcs.eddi.geo.feeds.exceptions;

public class MessagingException extends BaseException {
private static final long serialVersionUID = 1L;
	
	/**
	 * Parameterized constructor
	 * @param message
	 * @param throwable
	 */
	public MessagingException(String message, Throwable throwable) {
		super(message, throwable);
	}

	/**
	 * Parameterized constructor
	 * @param throwable of type Throwable
	 */
	public MessagingException(Throwable throwable) {
		super(throwable);
	}

	/**
	 * Default constructor
	 */
	public MessagingException() {
		super();
	}

	/**
	 * Parameterized constructor
	 * @param message of type String
	 */
	public MessagingException(String message){
		super(message);
	}
}
