package com.msl.mcs.eddi.admin.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import de.codecentric.boot.admin.server.config.AdminServerProperties;

@Configuration
public class WebSecurityConfig {

	@Configuration
	@Profile("insecure")
	protected static class DisabledWebSecurityConfig extends WebSecurityConfigurerAdapter {
		static final Logger logger = LoggerFactory.getLogger(DisabledWebSecurityConfig.class);
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			logger.info("Configuration Admin Security is Disabled");
			http.csrf().disable();
	        http.headers().httpStrictTransportSecurity().disable();
	        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

	        // Authorize sub-folders permissions
	        http.antMatcher("/*").authorizeRequests().anyRequest().permitAll();
		}//EndMethod
	}// EndInnerClass

	@Configuration
	@Profile("secure")
	@EnableWebSecurity
	protected static class EnabledSecurityConfig extends WebSecurityConfigurerAdapter {
		static final Logger logger = LoggerFactory.getLogger(EnabledSecurityConfig.class);

		private final String adminContextPath;

		public EnabledSecurityConfig(AdminServerProperties adminServerProperties) {
			this.adminContextPath = adminServerProperties.getContextPath();
		}

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			logger.info("Configuration Admin Security is Enabled");
			SavedRequestAwareAuthenticationSuccessHandler successHandler = new SavedRequestAwareAuthenticationSuccessHandler();
			successHandler.setTargetUrlParameter("redirectTo");
			/* successHandler.setDefaultTargetUrl(adminContextPath + "/"); */

			http.authorizeRequests().antMatchers(adminContextPath + "/assets/**").permitAll()
					.antMatchers(adminContextPath + "/login").permitAll().anyRequest().authenticated().and().formLogin()
					.loginPage(adminContextPath + "/login").successHandler(successHandler).and().logout()
					.logoutUrl(adminContextPath + "/logout").and().httpBasic().and().csrf().disable();
		}//EndMethod
	}// EndInnerClass
}// EndClass