package com.msl.mcs.eddi.geo.store.em;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.impetus.client.cassandra.common.CassandraConstants;
import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;

/**
 * <code>EMContainer</code> is entity manager container which provide persistent
 * context instance for database transaction
 * 
 * @author SUMANPattanaik
 *
 */
@Service
public class EMContainer {
	private static final Logger logger = LoggerFactory.getLogger(EMContainer.class);
	private static boolean needToClose = false;
	private static EntityManagerFactory emf;
	private static final String CASSANDRA_PERISTSTENCE_CTX_NAME = "cassandra_pu";
	private static ThreadLocal<EntityManager> entityManagerThreadLocal = new ThreadLocal<EntityManager>();
	
	/**
	 * private constructor
	 */
	private EMContainer() {
	}// EndConstructor

	/**
	 * Initialize Entity manager container with kundera
	 * @param kunderaProp
	 */
	public static void initialize(@NonNull KunderaProperties kunderaProp) {
		
		logger.info("Starting entity manager container...");
		
		initialize(CASSANDRA_PERISTSTENCE_CTX_NAME, toKunderaContext(kunderaProp));
	}// EndMethod

	/**
	 * Initialize Entity manager container
	 */
	public static void initialize(String contextName, Map<String, String> ctxProp) {
		ctxProp.put(CassandraConstants.CQL_VERSION, CassandraConstants.CQL_VERSION_3_0);
		
		emf = Persistence.createEntityManagerFactory(contextName, ctxProp);
		if (!CommonHelper.isNullOrEmpty(emf)) {
			needToClose = true;
			EMContainer.publishEntityManager(emf.createEntityManager());
		} // EndIf
	}// EndMethod

	/**
	 * Get instance of entity manager if available
	 * 
	 * @return EntityManager
	 */
	public static EntityManager getEntityManager() {
		EntityManager em = entityManagerThreadLocal.get();

		if (em == null) {
			throw new IllegalStateException("EntityManager was not published");
		} // EndIf
		return em;
	}// EndMethod

	/**
	 * Publish entity manager from the factory if available
	 * 
	 * @param em
	 */
	public static void publishEntityManager(EntityManager em) {
		// if entity manager is already published then throw an error
		if (entityManagerThreadLocal.get() != null) {
			throw new IllegalStateException("EntityManager is already published");
		} // EndIf

		if (em == null) {
			throw new IllegalArgumentException("EntityManager was null");
		} // EndIf
		entityManagerThreadLocal.set(em);
	}// EndMethod

	/**
	 * Clear entity manager if exist
	 */
	public static void clearEntityManager() {
		entityManagerThreadLocal.set(null);
	}// EndMethod

	/**
	 * Close the container
	 */
	public static void close() {
		if (needToClose) {
			EMContainer.clearEntityManager();
			
			if (entityManagerThreadLocal.get() != null) {
				entityManagerThreadLocal.get().close();
			} // EndIf
			
			if (emf != null) {
				emf.close();
			} // EndIf
		} // EndIf
		logger.info("Stopped entity manager container");
	}// EndMethod
	
	/**
	 * Map kundera properties as persistence context parameter
	 * @param kunderaProp
	 * @return
	 */
	private static Map<String,String> toKunderaContext(KunderaProperties kunderaProp){
		Map<String, String> ctxProp = new HashMap<>();
		
		if(!CommonHelper.isNullOrEmpty(kunderaProp.getKeyspaceName()))
			ctxProp.put("kundera.keyspace", kunderaProp.getKeyspaceName());
		if(!CommonHelper.isNullOrEmpty(kunderaProp.getHost()))
			ctxProp.put("kundera.nodes", kunderaProp.getHost());
		if(!CommonHelper.isNullOrEmpty(kunderaProp.getPort()))
			ctxProp.put("kundera.port", kunderaProp.getPort());
		if(!CommonHelper.isNullOrEmpty(kunderaProp.getDialect()))
			ctxProp.put("kundera.dialect", kunderaProp.getDialect());
		
		if(!CommonHelper.isNullOrEmpty(kunderaProp.getScanPackage()))
			ctxProp.put("kundera.annotations.scan.package", kunderaProp.getScanPackage());
		if(!CommonHelper.isNullOrEmpty(kunderaProp.getAutoDDLState()))
			ctxProp.put("kundera.ddl.auto.prepare", kunderaProp.getAutoDDLState());
		if(kunderaProp.isEnableQueryShow())
			ctxProp.put("kundera.show.query", "true");
		else
			ctxProp.put("kundera.show.query", "false");
		
		return ctxProp;
	}//EndMethod

}// EndClass
