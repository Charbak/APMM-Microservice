package com.msl.mcs.eddi.geo.store.service;

import java.util.Date;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.model.CityVO;
import com.msl.mcs.eddi.geo.store.em.EMContainer;
import com.msl.mcs.eddi.geo.store.entity.City;

@Service
public class CityStoreService {
	
private EntityManager em = EMContainer.getEntityManager();
	
	/**
	 * Insert city to store
	 * 
	 * @param cityVO
	 */
	public void insertCity(CityVO cityVO) {

		City city = new City();
		
		city.setCityCode(cityVO.getCityGeoCode());
		city.setCityName(cityVO.getCityName());
		city.setCountryCode(cityVO.getCountryGeoCode());
		city.setStatus(cityVO.getStatus());
		city.setPortFlag(cityVO.getPortFlag());
		city.setCreatedBy(Constants.GEO_FEED);
		city.setModifiedBy(Constants.GEO_FEED);
		city.setCreatedDate(new Date());
		city.setModifiedDate(new Date());
		
	    em.persist(city);
	    em.flush();
	}// EndMethod
	
	/**
	 * Updates City Received from GEO MESSAGE.
	 * 
	 * @param cityVO
	 *            CountryVo
	 * @throws DaoException
	 */
	public void updateCity(CityVO cityVO) {
		City city = new City();
		city = em.find(City.class, cityVO.getCityGeoCode());
		
		if (city == null) {
			city = new City();
			city.setCityCode(cityVO.getCityGeoCode());
			city.setCityName(cityVO.getCityName());
			city.setCountryCode(cityVO.getCountryGeoCode());
			city.setStatus(cityVO.getStatus());
			city.setPortFlag(cityVO.getPortFlag());
			city.setCreatedBy(Constants.GEO_FEED);
			city.setModifiedBy(Constants.GEO_FEED);
			city.setCreatedDate(new Date());
			city.setModifiedDate(new Date());
			em.persist(city);
		} else
		{
			city.setCityName(cityVO.getCityName());
			city.setStatus(cityVO.getStatus());
			city.setCountryCode(cityVO.getCountryGeoCode());
			city.setModifiedBy(Constants.GEO_FEED);
			city.setModifiedDate(new Date());
			city.setPortFlag(cityVO.getPortFlag());
			em.merge(city);
		}
		em.flush();
	}
	
	/**
	 * Delete city Received from GEO MESSAGE.
	 * 
	 * @param cityVO
	 *            CountryVo
	 * @throws DaoException
	 */
	public void deleteCity(CityVO cityVO) {
		City city = em.find(City.class, cityVO.getCityGeoCode());
		if(city != null) {
			em.remove(city);
			em.flush();
		}
		
	}
	
	/**
	 * Insert or update City Received from GEO MESSAGE.
	 * 
	 * @param cityVO
	 * @throws DaoException
	 */
	public void forcedInsertCity(CityVO cityVO) {
		City city = new City();
		city = em.find(City.class, cityVO.getCityGeoCode());
		
		if (city == null) {
			city = new City();
			city.setCityCode(cityVO.getCityGeoCode());
			city.setCityName(cityVO.getCityName());
			city.setCountryCode(cityVO.getCountryGeoCode());
			city.setStatus(cityVO.getStatus());
			city.setPortFlag(cityVO.getPortFlag());
			city.setCreatedBy(Constants.GEO_FEED);
			city.setModifiedBy(Constants.GEO_FEED);
			city.setCreatedDate(new Date());
			city.setModifiedDate(new Date());
			em.persist(city);
		} else
		{
			city.setCityName(cityVO.getCityName());
			city.setStatus(cityVO.getStatus());
			city.setCountryCode(cityVO.getCountryGeoCode());
			city.setModifiedBy(Constants.GEO_FEED);
			city.setModifiedDate(new Date());
			city.setPortFlag(cityVO.getPortFlag());
			em.merge(city);
		}
		em.flush();	
	}

}//EndClass
