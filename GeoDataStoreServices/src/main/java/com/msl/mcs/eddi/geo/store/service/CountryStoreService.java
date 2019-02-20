package com.msl.mcs.eddi.geo.store.service;

import java.util.Date;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.model.CountryVO;
import com.msl.mcs.eddi.geo.store.em.EMContainer;
import com.msl.mcs.eddi.geo.store.entity.Country;

@Service
public class CountryStoreService {
	
	private EntityManager em = EMContainer.getEntityManager();
	
	/**
	 * Insert country to store
	 * 
	 * @param countryVO
	 */
	public void insertCountry(CountryVO countryVO) {

		Country country = new Country();
		
		country.setCountryCode(countryVO.getCountryCode());
		country.setCountryName(countryVO.getCountryName());
		country.setStatus(countryVO.getStatus());
		country.setTypeDays(Constants.CALENDAR);
		country.setEmail(Constants.DEFAULT_CSA_MAILID);
		country.setCreatedBy(Constants.GEO_FEED);
		country.setModifiedBy(Constants.GEO_FEED);
		country.setCreatedDate(new Date());
		country.setModifiedDate(new Date());
		
	    em.persist(country);
	    em.flush();
	}// EndMethod
	
	/**
	 * Updates Country Received from GEO MESSAGE.
	 * 
	 * @param countryVO
	 *            CountryVo
	 * @throws DaoException
	 */
	public void updateCountry(CountryVO countryVO) {
		Country country = new Country();
		country = em.find(Country.class, countryVO.getCountryCode());
		
		if (country == null) {
			country = new Country();
			country.setCountryCode(countryVO.getCountryCode());
			country.setCountryName(countryVO.getCountryName());
			country.setStatus(countryVO.getStatus());
			country.setTypeDays(Constants.CALENDAR);
			country.setEmail(Constants.DEFAULT_CSA_MAILID);
			country.setCreatedBy(Constants.GEO_FEED);
			country.setModifiedBy(Constants.GEO_FEED);
			country.setCreatedDate(new Date());
			country.setModifiedDate(new Date());
			em.persist(country);
		} else
		{
			country.setCountryName(countryVO.getCountryName());
			country.setStatus(countryVO.getStatus());
			country.setModifiedBy(Constants.GEO_FEED);
			country.setModifiedDate(new Date());
			em.merge(country);
		}
		em.flush();
	}
	
	/**
	 * Delete country Received from GEO MESSAGE.
	 * 
	 * @param countryVO
	 *            CountryVo
	 * @throws DaoException
	 */
	public void deleteCountry(CountryVO countryVO) {
		Country country = em.find(Country.class, countryVO
				.getCountryCode());
		if(country != null){
			em.remove(country);
			em.flush();
		}
	}
	
	/**
	 * Insert or update Country Received from GEO MESSAGE.
	 * 
	 * @param countryVO
	 * @throws DaoException
	 */
	public void forcedInsertCountry(CountryVO countryVO) {
		Country country = new Country();
		country = em.find(Country.class, countryVO.getCountryCode());
		
		if (country == null) {
			country = new Country();
			country.setCountryCode(countryVO.getCountryCode());
			country.setCountryName(countryVO.getCountryName());
			country.setStatus(countryVO.getStatus());
			country.setTypeDays(Constants.CALENDAR);
			country.setEmail(Constants.DEFAULT_CSA_MAILID);
			country.setCreatedBy(Constants.GEO_FEED);
			country.setModifiedBy(Constants.GEO_FEED);
			country.setCreatedDate(new Date());
			country.setModifiedDate(new Date());
			em.persist(country);
		} else
		{
			country.setCountryName(countryVO.getCountryName());
			country.setStatus(countryVO.getStatus());
			country.setModifiedBy(Constants.GEO_FEED);
			em.merge(country);
		}
		em.flush();	
	}

}//EndClass
