package com.msl.mcs.eddi.geo.feeds.common;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * <code>CustomizedRestTemplate</code> is customized Rest template with
 * additional handler
 * 
 * @author SUMANPattanaik
 *
 */
public class CustomizedRestTemplate extends RestTemplate {

	/**
	 * public constructor
	 */
	public CustomizedRestTemplate() {
		super();
		setErrorHandler(new RestTemplateErrorHandler());
		setHttpMessageConverter();
	}// EndMethod

	/**
	 * set Http message converter
	 */
	protected void setHttpMessageConverter(){
		ObjectMapper objectMapper = new ObjectMapper().enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
        MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();
        messageConverter.setObjectMapper(objectMapper);
        List<HttpMessageConverter<?>> messageConverters = new ArrayList<>();
        messageConverters.add(messageConverter);
        setMessageConverters(messageConverters);
	}//EndMethod	
}// EndConstructor
