package com.msl.mcs.eddi.geo.store.em;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KunderaProperties {

	@Value("${kundera.host}")
	private String host;
	
	@Value("${kundera.port}")
	private String port;
	
	@Value("${kundera.keyspacename}")
	private String keyspaceName;
	
	@Value("${kundera.dialect}")
	private String dialect;
	
	@Value("${kundera.annotations.scan.package}")
	private String scanPackage;
	
	@Value("${kundera.ddl.auto.prepare}")
	private String autoDDLState;
	
	@Value("${kundera.show.query}")
	private boolean enableQueryShow;
	
	/**
	 * @return the kunderaHost
	 */
	public String getHost() {
		return host;
	}

	/**
	 * @return the kunderaPort
	 */
	public String getPort() {
		return port;
	}

	/**
	 * @return the keyspaceName
	 */
	public String getKeyspaceName() {
		return keyspaceName;
	}

	/**
	 * @return the dialect
	 */
	public String getDialect() {
		return dialect;
	}

	/**
	 * @return the scanPackage
	 */
	public String getScanPackage() {
		return scanPackage;
	}

	/**
	 * @return the autoDDLState
	 */
	public String getAutoDDLState() {
		return autoDDLState;
	}

	/**
	 * @return the enableQueryShow
	 */
	public boolean isEnableQueryShow() {
		return enableQueryShow;
	}
}
