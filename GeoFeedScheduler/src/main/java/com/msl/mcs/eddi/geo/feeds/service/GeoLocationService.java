package com.msl.mcs.eddi.geo.feeds.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;
import com.msl.mcs.eddi.geo.feeds.common.CustomizedRestTemplate;
import com.msl.mcs.eddi.geo.feeds.common.Constants.SERVICE_ENDPOINT;
import com.msl.mcs.eddi.geo.feeds.config.ServiceProperties;
import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.CityVO;
import com.msl.mcs.eddi.geo.feeds.model.CountryVO;
import com.msl.mcs.eddi.geo.feeds.model.LoadPortVO;

@Service
public class GeoLocationService {
	static final Logger logger = LoggerFactory.getLogger(GeoLocationService.class);
	
	private RestTemplate restTemplate = new CustomizedRestTemplate();
	
	@Autowired
	ServiceProperties services;
	
	/**
	 * Force insert city
	 * @param cityVo
	 * @throws ServiceException
	 */
	public void forcedInsertCity(CityVO cityVo) throws ServiceException{
		logger.debug("IN forcedInsertCity");
		try{
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.FORCEINSERT_CITY_SVC)), cityVo,
					Void.class);
			logger.info("Force Inserted city: " + cityVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in forcedInsertCity", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod

	/**
	 * Delete city
	 * @param cityVo
	 * @throws ServiceException
	 */
	public void deleteCity(CityVO cityVo) throws ServiceException{
		logger.debug("IN deleteCity");
		try{
			restTemplate.delete(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.DELETE_CITY)), cityVo);
			logger.info("Deleted city: " + cityVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in deleteCity", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod

	/**
	 * Update city
	 * @param cityVo
	 * @throws ServiceException
	 */
	public void updateCity(CityVO cityVo) throws ServiceException{
		
		logger.debug("IN updateCity");
		try{
			restTemplate.put(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_CITY)), cityVo);
			logger.info("Updated city: " + cityVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in updateCity", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod

	/**
	 * Insert city
	 * @param cityVo
	 * @throws ServiceException
	 */
	public void insertCity(CityVO cityVo) throws ServiceException{
		logger.debug("IN insertCity");
		try{
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.INSERT_CITY)), cityVo,
					Void.class);
			logger.info("Inserted New city: " + cityVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in insertCity", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod

	/**
	 * For insert load port
	 * @param loadPortVo
	 * @throws ServiceException
	 */
	public void forcedInsertLoadPort(LoadPortVO loadPortVo) throws ServiceException{
		logger.debug("IN forcedInsertLoadPort");
		try{
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.FORCEINSERT_LOADPORT)), loadPortVo,
					Void.class);
			logger.info("Force Inserted load Port: " + loadPortVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in forcedInsertLoadPort", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod

	/**
	 * Delete load port
	 * @param loadPortVo
	 * @throws ServiceException
	 */
	public void deleteLoadPort(LoadPortVO loadPortVo)  throws ServiceException{
		logger.debug("IN deleteLoadPort");
		try{
			restTemplate.delete(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.DELETE_LOADPORT)), loadPortVo);
			logger.info("Deleted load port: " + loadPortVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in deleteLoadPort", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod
	
	/**
	 * Update load port
	 * @param loadPortVo
	 * @throws ServiceException
	 */
	public void updateLoadPort(LoadPortVO loadPortVo) throws ServiceException{
		
		logger.debug("IN updateLoadPort");
		try{
			restTemplate.put(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_LOADPORT)), loadPortVo);
			logger.info("Updated load port: " + loadPortVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in updateLoadPort", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod
	
	/**
	 * Insert load port
	 * @param loadPortVo
	 * @throws ServiceException
	 */
	public void insertLoadPort(LoadPortVO loadPortVo) throws ServiceException{
		logger.debug("IN insertLoadPort");
		try{
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.INSERT_LOADPORT)), loadPortVo,
					Void.class);
			logger.info("Inserted New load Port: " + loadPortVo.toString());
		} catch (Exception exp) {
			logger.error("Exception in insertLoadPort", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod
	
	/**
	 * Force insert country
	 * @param countryVO
	 * @throws ServiceException
	 */
	public void forcedInsertCountry(CountryVO countryVO) throws ServiceException{
		logger.debug("IN forcedInsertCountry");
		try{
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.FORCEINSERT_COUNTRY)), countryVO,
					Void.class);
			logger.info("Force Inserted Country: " + countryVO.toString());
		} catch (Exception exp) {
			logger.error("Exception in forcedInsertCountry", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod
	
	/**
	 * Delete country
	 * @param countryVO
	 * @throws ServiceException
	 */
	public void deleteCountry(CountryVO countryVO) throws ServiceException{
		logger.debug("IN deleteCountry");
		try{
			restTemplate.delete(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_COUNTRY)), countryVO);
			logger.info("Deleted Country: " + countryVO.toString());
		} catch (Exception exp) {
			logger.error("Exception in deleteCountry", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod

	/**
	 * Update country
	 * @param countryVO
	 * @throws ServiceException
	 */
	public void updateCountry(CountryVO countryVO) throws ServiceException{
		logger.debug("IN updateCountry");
		try{
			restTemplate.put(CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.UPDATE_COUNTRY)), countryVO);
			logger.info("Updated Country: " + countryVO.toString());
		} catch (Exception exp) {
			logger.error("Exception in updateCountry", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod
	
	/**
	 * Insert country
	 * @param countryVO
	 * @throws ServiceException
	 */
	public void insertCountry(CountryVO countryVO) throws ServiceException{
		logger.debug("IN insertCountry");
		try{
			restTemplate.postForObject(
					CommonHelper.getRestURLTSPath(services.getService(SERVICE_ENDPOINT.INSERT_COUNTRY)), countryVO,
					Void.class);
			logger.info("Inserted New Country: " + countryVO.toString());
		} catch (Exception exp) {
			logger.error("Exception in insertCountry", exp.getLocalizedMessage());
			throw new ServiceException(exp.getLocalizedMessage());
		}//EndTryCatch
	}//EndMethod
}//EndClass
