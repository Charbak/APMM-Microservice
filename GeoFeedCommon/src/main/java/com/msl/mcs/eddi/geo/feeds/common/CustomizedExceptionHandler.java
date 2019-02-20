package com.msl.mcs.eddi.geo.feeds.common;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

import java.net.ConnectException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.stereotype.Controller;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.msl.mcs.eddi.geo.feeds.exceptions.ExceptionDetail;

/**
 * <code>CustomizedExceptionHandler</code> is custom exception handler to
 * publish exception or error as JSON instead stack trace
 * 
 * @author SUMANPattanaik
 *
 */
@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
@Controller
@RestController
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {
	private final Logger logger = LoggerFactory.getLogger(CustomizedExceptionHandler.class);

	/**
	 * Build response entity for exception detail
	 * 
	 * @param exceptionDetail
	 * @return
	 */
	private ResponseEntity<Object> buildResponseEntity(ExceptionDetail exceptionDetail) {
		return new ResponseEntity<>(exceptionDetail, exceptionDetail.getStatus());
	}// EndMethod

	/**
	 * Handle MissingServletRequestParameterException and trigger when a
	 * 'required' request parameter is missing.
	 *
	 * @param ex
	 *            MissingServletRequestParameterException
	 * @param headers
	 *            HttpHeaders
	 * @param status
	 *            HttpStatus
	 * @param request
	 *            WebRequest
	 * @return the ApiError object
	 */
	@Override
	protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String error = ex.getParameterName() + " parameter is missing";
		return buildResponseEntity(new ExceptionDetail(BAD_REQUEST, error, ex));
	}// EndMethod

	/**
	 * Handle HttpMediaTypeNotSupportedException. This one triggers when JSON is
	 * invalid as well.
	 *
	 * @param ex
	 *            HttpMediaTypeNotSupportedException
	 * @param headers
	 *            HttpHeaders
	 * @param status
	 *            HttpStatus
	 * @param request
	 *            WebRequest
	 * @return the ExceptionDetail object
	 */
	@Override
	protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		StringBuilder builder = new StringBuilder();
		builder.append(ex.getContentType());
		builder.append(" media type is not supported. Supported media types are ");
		ex.getSupportedMediaTypes().forEach(t -> builder.append(t).append(", "));
		return buildResponseEntity(
				new ExceptionDetail(HttpStatus.UNSUPPORTED_MEDIA_TYPE, builder.substring(0, builder.length() - 2), ex));
	}// EndMethod

	/**
	 * Handle handleMethodArgumentNotValid. This one triggers when method
	 * argument is not valid
	 *
	 * @param ex
	 *            HttpMediaTypeNotSupportedException
	 * @param headers
	 *            HttpHeaders
	 * @param status
	 *            HttpStatus
	 * @param request
	 *            WebRequest
	 * @return the ExceptionDetail object
	 */
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<String> errors = new ArrayList<String>();

		for (FieldError error : ex.getBindingResult().getFieldErrors()) {
			errors.add(error.getField() + ": " + error.getDefaultMessage());
		} // EndFor

		for (ObjectError error : ex.getBindingResult().getGlobalErrors()) {
			errors.add(error.getObjectName() + ": " + error.getDefaultMessage());
		} // EndFor

		return buildResponseEntity(new ExceptionDetail(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors));
	}// EndMethod

	/**
	 * Handle MethodArgumentTypeMismatchException. This one triggers when method
	 * argument mismatched
	 *
	 * @param ex
	 *            HttpMediaTypeNotSupportedException
	 * @param headers
	 *            HttpHeaders
	 * @param status
	 *            HttpStatus
	 * @param request
	 *            WebRequest
	 * @return the ExceptionDetail object
	 */
	@ExceptionHandler({ MethodArgumentTypeMismatchException.class })
	protected ResponseEntity<Object> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException ex,
			WebRequest request) {
		String error = ex.getName() + " should be of type " + ex.getRequiredType().getName();

		return buildResponseEntity(
				new ExceptionDetail(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), Arrays.asList(error)));
	}// EndMethod

	/**
	 * Handle HttpMessageNotReadableException. Happens when request JSON is
	 * malformed.
	 *
	 * @param ex
	 *            HttpMessageNotReadableException
	 * @param headers
	 *            HttpHeaders
	 * @param status
	 *            HttpStatus
	 * @param request
	 *            WebRequest
	 * @return the ApiError object
	 */
	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ServletWebRequest servletWebRequest = (ServletWebRequest) request;
		logger.info("{} to {}", servletWebRequest.getHttpMethod(), servletWebRequest.getRequest().getServletPath());
		String error = "Malformed JSON request";
		return buildResponseEntity(new ExceptionDetail(HttpStatus.BAD_REQUEST, error, ex));
	}// EndMethod

	/**
	 * Handle HttpMessageNotWritableException.
	 *
	 * @param ex
	 *            HttpMessageNotWritableException
	 * @param headers
	 *            HttpHeaders
	 * @param status
	 *            HttpStatus
	 * @param request
	 *            WebRequest
	 * @return the ExceptionDetail object
	 */
	@Override
	protected ResponseEntity<Object> handleHttpMessageNotWritable(HttpMessageNotWritableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String error = "Error writing JSON output";
		return buildResponseEntity(new ExceptionDetail(HttpStatus.INTERNAL_SERVER_ERROR, error, ex));
	}// EndMethod

	/**
	 * Handle all type of exception if not configured here
	 * 
	 * @param ex
	 * @param request
	 * @return
	 */
	@ExceptionHandler({ Exception.class, ConnectException.class, HttpServerErrorException.class,
			HttpClientErrorException.class, HttpStatusCodeException.class })
	protected ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
		return buildResponseEntity(new ExceptionDetail(HttpStatus.INTERNAL_SERVER_ERROR, ex.getLocalizedMessage(), ex));
	}// EndMethod

}// EndClass
