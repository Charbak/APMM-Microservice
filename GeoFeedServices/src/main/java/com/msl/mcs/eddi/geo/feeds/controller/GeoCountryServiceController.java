package com.msl.mcs.eddi.geo.feeds.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.CityVO;
import com.msl.mcs.eddi.geo.feeds.model.CountryVO;

/**
 * <code>GeoCountryServiceController</code> is GEO Feed service controller
 * 
 * @author SUMANPattanaik
 *
 */
@RefreshScope
@RestController
@RequestMapping("/geo")
public class GeoCountryServiceController {
	static final Logger logger = LoggerFactory.getLogger(GeoCountryServiceController.class);

	/**
	 * calls dao Method to insert a country.
	 * 
	 * @param countryVO
	 *            CountryVo
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/insertcountry/{id}", method = RequestMethod.POST)
	public void insertCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO) throws ServiceException {
	}// EndMethod

	/**
	 * calls dao Method to update a country.
	 * 
	 * @param countryVO
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/updatecountry/{id}", method = RequestMethod.PUT)
	public void updateCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO) throws ServiceException {
	}// EndMethod

	/**
	 * calls dao Method to insert or update a Country.
	 *
	 * @param countryVO
	 *            CountryVo
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/forcecountryinsert/{id}", method = RequestMethod.POST)
	public void forcedInsertCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO)
			throws ServiceException {
	}// EndMethod

	/**
	 * calls dao Method to delete a Country.
	 *
	 * @param countryVO
	 *            LoadPortVo
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/deletecountry/{id}", method = RequestMethod.DELETE)
	public void deleteCountry(@PathVariable("id") long id, @RequestBody CountryVO countryVO) throws ServiceException {
	}// EndMethod

	/**
	 * method to save city received from geo feed in database. city get saved
	 * only if it does not exists in database.
	 *
	 * @param cityVO
	 *            CityVo
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/insertcity/{id}", method = RequestMethod.POST)
	public void insertCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws ServiceException {
	}// EndMethod

	/**
	 * method to save forcefully city received from geo. city gets updated if it
	 * already exists.
	 *
	 * @param cityVO
	 *            CityVo
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/forcecityinsert/{id}", method = RequestMethod.POST)
	public void forcedInsertCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws ServiceException {
	}// EndMethod

	/**
	 * method to update city if it exists in database.
	 *
	 * @param cityVO
	 *            CityVo
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/updatecity/{id}", method = RequestMethod.PUT)
	public void updateCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws ServiceException {
	}// EndMethod

	/**
	 * method to delete city from database as a delete message received from
	 * database.
	 *
	 * @param cityVO
	 *            CityVo
	 * @throws ServiceException
	 */
	@RequestMapping(value = "/deletecity/{id}", method = RequestMethod.DELETE)
	public void deleteCity(@PathVariable("id") long id, @RequestBody CityVO cityVO) throws ServiceException {
	}// EndMethod

	// /**
	// * calls dao Method to delete a LoadPort.
	// *
	// * @param loadPortVo
	// * LoadPortVo
	// * @throws ServiceException
	// */
	// public void deleteLoadPort(LoadPortVo loadPortVo) throws ServiceException
	// {
	// }
	// /**
	// * calls dao Method to insert a LoadPort.
	// *
	// * @param loadPortVo
	// * LoadPortVo
	// * @throws ServiceException
	// */
	// public void insertLoadPort(LoadPortVo loadPortVo) throws ServiceException
	// {
	// }
	//
	// /**
	// * calls dao Method to update a LoadPort.
	// *
	// * @param loadPortVo
	// * LoadPortVo
	// * @throws ServiceException
	// */
	// public void updateLoadPort(LoadPortVo loadPortVo) throws ServiceException
	// {
	// }
	//
	// /**
	// * calls dao Method to insert or update a LoadPort.
	// *
	// * @param loadPortVo
	// * @throws ServiceException
	// */
	// public void forcedInsertLoadPort(LoadPortVo loadPortVo) throws
	// ServiceException {
	// }
}//EndClass
