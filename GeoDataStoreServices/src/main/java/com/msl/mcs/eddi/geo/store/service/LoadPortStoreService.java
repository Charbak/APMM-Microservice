package com.msl.mcs.eddi.geo.store.service;

import java.util.Date;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.model.LoadPortVO;
import com.msl.mcs.eddi.geo.store.em.EMContainer;
import com.msl.mcs.eddi.geo.store.entity.LoadPort;

@Service
public class LoadPortStoreService {
	
private EntityManager em = EMContainer.getEntityManager();
	
	/**
	 * Insert loadPort to store
	 * 
	 * @param loadPortVO
	 */
	public void insertLoadPort(LoadPortVO loadPortVO) {

		LoadPort loadPort = new LoadPort();
		
		loadPort = new LoadPort();
		loadPort.setLoadPortCode(loadPortVO.getLoadPortCode());
		loadPort.setLoadPortName(loadPortVO.getLoadPortName());
		loadPort.setLoadPortGeoId(loadPortVO.getLoadPortGeoId());
		loadPort.setStatus(loadPortVO.getStatus());
		loadPort.setCityCode(loadPortVO.getCityCode());
		loadPort.setCreatedBy(Constants.GEO_FEED);
		loadPort.setModifiedBy(Constants.GEO_FEED);
		loadPort.setCreatedDate(new Date());
		loadPort.setModifiedDate(new Date());
		loadPort.setCountryCode(loadPortVO.getCountryCode());
		loadPort.setTypeOfLocation(loadPortVO.getTypeOfLocation());
		
	    em.persist(loadPort);
	    em.flush();
	}// EndMethod
	
	/**
	 * Updates LoadPort Received from GEO MESSAGE.
	 * 
	 * @param loadPortVO
	 *            CountryVo
	 * @throws DaoException
	 */
	public void updateLoadPort(LoadPortVO loadPortVO) {
		LoadPort loadPort = new LoadPort();
		loadPort = em.find(LoadPort.class, loadPortVO
				.getLoadPortCode());
		
		if (loadPort == null) {
			loadPort = new LoadPort();
			loadPort = new LoadPort();
			loadPort.setLoadPortCode(loadPortVO.getLoadPortCode());
			loadPort.setLoadPortName(loadPortVO.getLoadPortName());
			loadPort.setLoadPortGeoId(loadPortVO.getLoadPortGeoId());
			loadPort.setStatus(loadPortVO.getStatus());
			loadPort.setCityCode(loadPortVO.getCityCode());
			loadPort.setCreatedBy(Constants.GEO_FEED);
			loadPort.setModifiedBy(Constants.GEO_FEED);
			loadPort.setCreatedDate(new Date());
			loadPort.setModifiedDate(new Date());
			loadPort.setCountryCode(loadPortVO.getCountryCode());
			loadPort.setTypeOfLocation(loadPortVO.getTypeOfLocation());
			em.persist(loadPort);
		} else
		{
			loadPort.setLoadPortName(loadPortVO.getLoadPortName());
			loadPort.setLoadPortGeoId(loadPortVO.getLoadPortGeoId());
			loadPort.setStatus(loadPortVO.getStatus());
			loadPort.setCityCode(loadPortVO.getCityCode());
			loadPort.setCountryCode(loadPortVO.getCountryCode());
			loadPort.setTypeOfLocation(loadPortVO.getTypeOfLocation());
			loadPort.setModifiedBy(Constants.GEO_FEED);
			loadPort.setModifiedDate(new Date());
			em.merge(loadPort);
		}
		em.flush();
	}
	
	/**
	 * Delete loadPort Received from GEO MESSAGE.
	 * 
	 * @param loadPortVO
	 *            CountryVo
	 * @throws DaoException
	 */
	public void deleteLoadPort(LoadPortVO loadPortVO) {
		LoadPort loadPort = em.find(LoadPort.class, loadPortVO.getLoadPortCode());
		if(loadPort != null) {
			em.remove(loadPort);
			em.flush();
		}
		
	}
	
	/**
	 * Insert or update LoadPort Received from GEO MESSAGE.
	 * 
	 * @param loadPortVO
	 * @throws DaoException
	 */
	public void forcedInsertLoadPort(LoadPortVO loadPortVO) {
		LoadPort loadPort = new LoadPort();
		loadPort = em.find(LoadPort.class, loadPortVO
				.getLoadPortCode());
		
		if (loadPort == null) {
			loadPort = new LoadPort();
			loadPort = new LoadPort();
			loadPort.setLoadPortCode(loadPortVO.getLoadPortCode());
			loadPort.setLoadPortName(loadPortVO.getLoadPortName());
			loadPort.setLoadPortGeoId(loadPortVO.getLoadPortGeoId());
			loadPort.setStatus(loadPortVO.getStatus());
			loadPort.setCityCode(loadPortVO.getCityCode());
			loadPort.setCreatedBy(Constants.GEO_FEED);
			loadPort.setModifiedBy(Constants.GEO_FEED);
			loadPort.setCreatedDate(new Date());
			loadPort.setModifiedDate(new Date());
			loadPort.setCountryCode(loadPortVO.getCountryCode());
			loadPort.setTypeOfLocation(loadPortVO.getTypeOfLocation());
			em.persist(loadPort);
		} else
		{
			loadPort.setLoadPortName(loadPortVO.getLoadPortName());
			loadPort.setLoadPortGeoId(loadPortVO.getLoadPortGeoId());
			loadPort.setStatus(loadPortVO.getStatus());
			loadPort.setCityCode(loadPortVO.getCityCode());
			loadPort.setCountryCode(loadPortVO.getCountryCode());
			loadPort.setTypeOfLocation(loadPortVO.getTypeOfLocation());
			loadPort.setModifiedBy(Constants.GEO_FEED);
			loadPort.setModifiedDate(new Date());
			em.merge(loadPort);
		}
		em.flush();	
	}

}//EndClass
