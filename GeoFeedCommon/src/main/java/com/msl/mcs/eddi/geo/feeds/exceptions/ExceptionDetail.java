package com.msl.mcs.eddi.geo.feeds.exceptions;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * POJO class containing exception details
 */
public class ExceptionDetail {
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
	private LocalDateTime timestamp;
	private HttpStatus status;
	private String message;
	private int errorCode;
	private Throwable cause;
	private List<String> errors =  new ArrayList<String>();

	/**
	 * Private constructor
	 */
	private ExceptionDetail() {
		timestamp = LocalDateTime.now();
	}// EndPrivateConstructor

	/**
	 * Constructor with HTTP status code
	 * 
	 * @param status
	 */
	public ExceptionDetail(HttpStatus status) {
		this();
		this.status = status;
	}// EndConstructor

	/**
	 * Constructor with message
	 * 
	 * @param status
	 */
	public ExceptionDetail(String message) {
		this();
		this.message = message;
	}// EndConstructor

	/**
	 * Constructor with cause
	 * 
	 * @param status
	 */
	public ExceptionDetail(Throwable cause) {
		this();
		this.cause = cause;
		this.message = cause.getLocalizedMessage();
	}// EndConstructor

	/**
	 * Constructor with HTTP status code and message
	 * 
	 * @param status
	 * @param message
	 */
	public ExceptionDetail(HttpStatus status, String message) {
		this();
		this.status = status;
		this.message = message;
	}// EndConstructor

	/**
	 * Constructor with HTTP status code and cause
	 * 
	 * @param status
	 * @param cause
	 */
	public ExceptionDetail(HttpStatus status, Throwable cause) {
		this();
		this.status = status;
		this.cause = cause;
		this.message = cause.getLocalizedMessage();
	}// EndConstructor

	/**
	 * Constructor with error code and message
	 * 
	 * @param errorCode
	 * @param message
	 */
	public ExceptionDetail(int errorCode, String message) {
		this();
		this.errorCode = errorCode;
		this.message = message;
	}// EndConstructor

	/**
	 * Constructor with error code, message and cause
	 * 
	 * @param errorCode
	 * @param message
	 * @param cause
	 */
	public ExceptionDetail(int errorCode, String message, Throwable cause) {
		this.errorCode = errorCode;
		this.message = message;
		this.cause = cause;
	}// EndConstructor

	/**
	 * Constructor with HTTP status code, error code and message
	 * 
	 * @param status
	 * @param message
	 */
	public ExceptionDetail(HttpStatus status, int errorCode, String message) {
		this();
		this.status = status;
		this.errorCode = errorCode;
		this.message = message;
	}// EndConstructor

	/**
	 * Constructor with HTTP status code, message and cause
	 * 
	 * @param status
	 * @param message
	 * @param cause
	 */
	public ExceptionDetail(HttpStatus status, String message, Throwable cause) {
		this();
		this.status = status;
		this.message = message;
		this.cause = cause;
	}// EndConstructor
	
	/**
	 * Constructor with HTTP status code, message and cause
	 * 
	 * @param status
	 * @param message
	 * @param cause
	 */
	public ExceptionDetail(HttpStatus status, String message, List<String> errors) {
		this();
		this.status = status;
		this.message = message;
		this.setErrors(errors);
	}// EndConstructor

	/**
	 * Constructor with HTTP status code,error code, message and cause
	 * 
	 * @param status
	 * @param errorCode
	 * @param message
	 * @param cause
	 */
	public ExceptionDetail(HttpStatus status, int errorCode, String message, Throwable cause) {
		this();
		this.status = status;
		this.errorCode = errorCode;
		this.message = message;
		this.cause = cause;
	}// EndConstructor

	/**
	 * Getter for message
	 * 
	 * @return value of type String
	 */
	public String getMessage() {
		return message;
	}// EndMethod

	/**
	 * Getter for code
	 * 
	 * @return code of type java.lang.Integer
	 */
	public int getErrorCode() {
		return errorCode;
	}// EndMethod

	/**
	 * @return the cause
	 */
	public Throwable getCause() {
		return cause;
	}// EndMethod

	/**
	 * @return the status
	 */
	public HttpStatus getStatus() {
		return status;
	}// EndMethod

	/**
	 * @param cause
	 *            the cause to set
	 */
	public void setCause(Throwable cause) {
		this.cause = cause;
	}// EndMethod

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(HttpStatus status) {
		this.status = status;
	}// EndMethod

	/**
	 * @return the errors
	 */
	public List<String> getErrors() {
		return errors;
	}

	/**
	 * @param errors the errors to set
	 */
	public void setErrors(List<String> errors) {
		this.errors = errors;
	}
}// EndClass
