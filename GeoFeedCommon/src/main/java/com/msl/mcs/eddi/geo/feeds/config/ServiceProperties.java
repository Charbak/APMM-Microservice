package com.msl.mcs.eddi.geo.feeds.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;

import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;

//Assuming all services are defined in application.properties with prefix "eddi.services"
//Uncomment this if service properties are defined in geo.properties
//@PropertySource("classpath:geo.properties") 
@Configuration
@ConfigurationProperties(prefix = "eddi")
public class ServiceProperties {
	Map<String, String> services = new HashMap<>();

	/**
	 * Get all services configuration
	 * 
	 * @return the services
	 */
	public Map<String, String> getServices() {
		return services;
	}// EndMethod

	/**
	 * Get service
	 * 
	 * @param serviceKey
	 * @return
	 */
	public String getService(@NonNull String serviceKey) {
		 String serviceURL = this.services.get(serviceKey);
		 return !CommonHelper.isNullOrEmpty(serviceURL)?serviceURL.trim():serviceURL;
	}// EndMethod
}// EndClass
