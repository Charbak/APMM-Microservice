package com.msl.mcs.eddi.geo.store;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import com.msl.mcs.eddi.geo.store.em.EMContainer;
import com.msl.mcs.eddi.geo.store.em.KunderaProperties;

@EnableDiscoveryClient
@SpringBootApplication
public class GeoDataStoreServicesApplication extends SpringBootServletInitializer {
	static final Logger logger = LoggerFactory.getLogger(GeoDataStoreServicesApplication.class);

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(GeoDataStoreServicesApplication.class);
	}
	
	@Autowired
	KunderaProperties kunderProp;
	
	@PostConstruct
	void startEM() throws Exception {
		logger.info("Initializing data store services");
		EMContainer.initialize(kunderProp);
	}// EndMethod

	@PreDestroy
	static void stopEM() {
		logger.info("Stopping data store services");
		EMContainer.close();
	}// EndMethod

	public static void main(String[] args) {
		Runtime.getRuntime().addShutdownHook(new Thread() {
			@Override
			public void run() {
				stopEM();
			}
		});

		SpringApplication.run(GeoDataStoreServicesApplication.class, args);
	}// EndMethod
}// EndClass
