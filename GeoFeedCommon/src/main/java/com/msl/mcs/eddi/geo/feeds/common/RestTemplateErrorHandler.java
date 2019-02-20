package com.msl.mcs.eddi.geo.feeds.common;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.UnknownHttpStatusCodeException;

/**
 * <code>RestTemplateErrorHandler</code> is Error handler for the rest template
 * @author SUMANPattanaik
 *
 */
public class RestTemplateErrorHandler implements ResponseErrorHandler {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public boolean hasError(ClientHttpResponse httpResponse) throws IOException {

		final HttpStatus httpStatus = getHttpStatusCode(httpResponse);

		return httpStatus.series() == HttpStatus.Series.CLIENT_ERROR
				|| httpStatus.series() == HttpStatus.Series.SERVER_ERROR;
	}

	@Override
	public void handleError(ClientHttpResponse httpResponse) throws IOException {

		final HttpStatus statusCode = getHttpStatusCode(httpResponse);

		switch (statusCode.series()) {
		case CLIENT_ERROR:
			throw new HttpClientErrorException(statusCode, httpResponse.getStatusText(), httpResponse.getHeaders(),
					getResponseBody(httpResponse), getCharset(httpResponse));
		case SERVER_ERROR:
			throw new HttpServerErrorException(statusCode, httpResponse.getStatusText(), httpResponse.getHeaders(),
					getResponseBody(httpResponse), getCharset(httpResponse));
		default:
			throw new RestClientException("Unknown status code [" + statusCode + "]");
		}
	}

	private HttpStatus getHttpStatusCode(ClientHttpResponse response) throws IOException {
		final HttpStatus statusCode;
		try {
			statusCode = response.getStatusCode();
		} catch (IllegalArgumentException ex) {
			throw new UnknownHttpStatusCodeException(response.getRawStatusCode(), response.getStatusText(),
					response.getHeaders(), getResponseBody(response), getCharset(response));
		}
		return statusCode;
	}

	private byte[] getResponseBody(ClientHttpResponse response) {
		try {
			final InputStream responseBody = response.getBody();
			if (responseBody != null) {
				return FileCopyUtils.copyToByteArray(responseBody);
			}
		} catch (IOException ex) {
			logger.debug("Can not read resonse body", ex);
		}
		return new byte[0];
	}

	private Charset getCharset(ClientHttpResponse response) {
		HttpHeaders headers = response.getHeaders();
		MediaType contentType = headers.getContentType();
		return contentType != null ? contentType.getCharset() : null;
	}
}
