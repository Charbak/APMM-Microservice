package com.msl.mcs.eddi.geo.store.service;

import java.util.Date;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.exceptions.DataAccessException;
import com.msl.mcs.eddi.geo.feeds.model.LockerVO;
import com.msl.mcs.eddi.geo.store.em.EMContainer;
import com.msl.mcs.eddi.geo.store.entity.LockConfig;

@Service
public class LockerStoreService {
	static final Logger logger = LoggerFactory.getLogger(LockerStoreService.class);
	private EntityManager em = EMContainer.getEntityManager();

	/**
	 * Insert an entry into locker, if a new locker is created.
	 * 
	 * @param lockerVo
	 *            LockerVo
	 * @throws DataAccessException
	 * 
	 */
	public void insertLockEntry(LockerVO lockerVo) throws DataAccessException {
		logger.debug(" IN insertLockEntry for node name:- " + lockerVo.getNodeName() + " and locker name:- "
				+ lockerVo.getLockerName());
		try {
			LockConfig lock = new LockConfig();
			lock.setNodeName(lockerVo.getNodeName());
			lock.setLockerName(lockerVo.getLockerName());
			lock.setLastAccessed(lockerVo.getLastAccessed());
			lock.setLockAcquired(lockerVo.getLockRequired());
			lock.setMaxLockDuration(lockerVo.getMaxLockerDuration());
			em.persist(lock);
			em.flush();
		} catch (Exception ex) {
			EMContainer.clearEntityManager();
			logger.error("insertLockEntry Exception", ex);
			throw new DataAccessException(ex);
		} // EndTryCatch
	}// EndMethod

	/**
	 * delete a locker entry from locker Config
	 * 
	 * @param lockerName
	 *            String
	 * @throws DataAccessException
	 * 
	 */
	public void flushLock(String lockerName) throws DataAccessException {
		logger.debug(" IN flushLock for lockerName name:- " + lockerName);
		try {
			LockConfig lock = new LockConfig();
			lock = em.find(LockConfig.class, lockerName);
			if (!(lock == null)) {
				em.remove(lock);
			} // EndIf
		} catch (Exception ex) {
			EMContainer.clearEntityManager();
			logger.error("flushLock Exception", ex.getLocalizedMessage());
			throw new DataAccessException(ex.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * Check lock status by locker name
	 * 
	 * @param lockerVo
	 * @return
	 */
	public String checkLockStatusByLockerName(LockerVO lockerVo) throws DataAccessException {
		logger.debug(" IN checkLockStatusByTimerName(String timerName) for timer name:- " + lockerVo.getLockerName()
				+ "and NodeName " + lockerVo.getNodeName());

		try {
			LockConfig lock = new LockConfig();
			lock = em.find(LockConfig.class, lockerVo.getLockerName());

			if ((((new Date()).getTime()) - ((lock.getLastAccessed()).getTime())) > lock.getMaxLockDuration())
				return Constants.N;
			else {
				return lock.getNodeName().equalsIgnoreCase(lockerVo.getNodeName()) ? lock.getLockAcquired()
						: Constants.Y;
			} // EndIfElse

		} catch (Exception ex) {
			EMContainer.clearEntityManager();
			logger.error("checkLockStatusByLockerName Exception", ex.getLocalizedMessage());
			throw new DataAccessException(ex.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * method to Get a lock on locker. this method is called by various
	 * scheduler to achieve lock.
	 * 
	 * @param LockerVO
	 *            LockerVO
	 * @throws DataAccessException
	 * 
	 */
	public void getLock(LockerVO lockerVo) throws DataAccessException {
		logger.debug(" IN getLock for node name:- " + lockerVo.getNodeName() + " and locker name:- "
				+ lockerVo.getLockerName());
		try {
			LockConfig lock = new LockConfig();
			lock = em.find(LockConfig.class, lockerVo.getLockerName());
			if (lock != null) {
				lock.setNodeName(lockerVo.getNodeName());
				lock.setLastAccessed(lockerVo.getLastAccessed());
				lock.setLockAcquired(lockerVo.getLockRequired());
			} // EndIf
		} catch (Exception ex) {
			EMContainer.clearEntityManager();
			logger.error("getLock Exception", ex.getLocalizedMessage());
			throw new DataAccessException(ex.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * Method to modify last accessed time for a locker. this method is called
	 * by various scheduler to edit last accessed time.
	 * 
	 * @param lockerVo
	 *            LockerVO
	 * @throws DataAccessException
	 */
	public void editLastAccessed(LockerVO lockerVo) throws DataAccessException {
		logger.debug(" IN editLastAccessed for node name:- " + lockerVo.getNodeName() + " and locker name:- "
				+ lockerVo.getLockerName());
		try {
			LockConfig lock = new LockConfig();
			lock = em.find(LockConfig.class, lockerVo.getLockerName());
			if (lock != null && lock.getNodeName().equalsIgnoreCase(lockerVo.getNodeName())) {
				lock.setLastAccessed(lockerVo.getLastAccessed());
			} // EndIf
		} catch (Exception ex) {
			EMContainer.clearEntityManager();
			logger.error("editLastAccessed Exception", ex.getLocalizedMessage());
			throw new DataAccessException(ex.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * Method to get last accessed date for the scheduler
	 * 
	 * @param lockerName
	 *            of type String
	 * @return last accessed date of type Date
	 * @throws DataAccessException
	 */
	public Date getLastAccessed(String lockerName) throws DataAccessException {
		logger.debug(" IN getLastAccessed for locker name:- " + lockerName);
		try {
			LockConfig lock = new LockConfig();
			lock = em.find(LockConfig.class, lockerName);
			return lock.getLastAccessed();
		} catch (Exception ex) {
			EMContainer.clearEntityManager();
			logger.error("getLastAccessed Exception", ex.getLocalizedMessage());
			throw new DataAccessException(ex.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

	/**
	 * method to Release lock on locker name. this method is called by various
	 * schedulers to release lock after completing its work.
	 * 
	 * @param LockerVO
	 *            lockerVo
	 * @throws DataAccessException
	 */
	public void releaseLock(LockerVO lockerVo) throws DataAccessException {
		logger.debug(" IN releaseLock for node name:- " + lockerVo.getNodeName() + " and timer name:- "
				+ lockerVo.getLockerName());
		try {
			LockConfig lock = new LockConfig();
			lock = em.find(LockConfig.class, lockerVo.getLockerName());
			if (lock != null && lock.getNodeName().equalsIgnoreCase(lockerVo.getNodeName())) {
				lock.setLastAccessed(lockerVo.getLastAccessed());
				lock.setLockAcquired(lockerVo.getLockRequired());
			}
		} catch (Exception ex) {
			EMContainer.clearEntityManager();
			logger.error("releaseLock Exception", ex.getLocalizedMessage());
			throw new DataAccessException(ex.getLocalizedMessage());
		} // EndTryCatch
	}// EndMethod

}// EndClass
