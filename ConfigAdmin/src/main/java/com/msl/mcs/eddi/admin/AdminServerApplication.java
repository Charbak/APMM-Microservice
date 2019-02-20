package com.msl.mcs.eddi.admin;

import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.context.annotation.Configuration;

import de.codecentric.boot.admin.server.config.EnableAdminServer;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@Configuration
@EnableAutoConfiguration
@EnableDiscoveryClient
@EnableEurekaServer
@EnableConfigServer
@EnableAdminServer
public class AdminServerApplication {

	public static void main(String[] args) {
//		SpringApplication.run(AdminServerApplication.class, args);
		new SpringApplicationBuilder(AdminServerApplication.class)
        .web(WebApplicationType.REACTIVE)
        .run(args);

	}
}
