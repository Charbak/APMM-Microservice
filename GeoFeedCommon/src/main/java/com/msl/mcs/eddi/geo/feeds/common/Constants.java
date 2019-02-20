package com.msl.mcs.eddi.geo.feeds.common;

public interface Constants {
	public interface FIELD_NAMES{
		static final String COUNTRY_TAG = "TAGA";
		// transaction types
		static final String INSERT_TRANSACTION = "I";
		static final String UPDATE_TRANSACTION = "U";
		static final String DELETE_TRANSACTION = "D";
		static final String FORCED_TRANSACTION = "F";
		static final String STATE_PROVINCE_TAG = "TAGB";
		static final String CITY_SUB_CITY_TAG = "TAGC";
		static final String SITE_TAG = "TAGD";
		static final String BDA_TAG = "TAGE";
	}
	/**
	 * <code>ENDPOINT</code> defines all service endpoints
	 * 
	 * @author SUMANPattanaik
	 *
	 */
	public interface SERVICE_ENDPOINT {
		static final String INSERT_GEO_BATCH = "store.insert.geobatch";
		static final String INSERT_GEO_MESSAGE = "store.insert.geomessage";
		static final String UPDATE_MESSAGE_STATE = "store.update.messagestate";
		static final String UPDATE_BATCH_STATE = "store.update.batchstate";
		static final String UPDATE_BATCH_SEQUENCE = "store.update.batchseqnum";
		static final String RUN_GETBATCH_BYSTATE = "store.runget.batchbystate";
		static final String INSERT_CITY = "store.insert.city";
		static final String UPDATE_CITY = "store.update.city";
		static final String DELETE_CITY = "store.delete.city";
		static final String FORCEINSERT_CITY = "store.forceinsert.city";
		static final String INSERT_COUNTRY = "store.insert.country";
		static final String UPDATE_COUNTRY = "store.update.country";
		static final String DELETE_COUNTRY = "store.delete.country";
		static final String FORCEINSERT_COUNTRY = "store.forceinsert.country";
		static final String INSERT_LOADPORT = "store.insert.loadport";
		static final String UPDATE_LOADPORT = "store.update.loadport";
		static final String DELETE_LOADPORT = "store.delete.loadport";
		static final String FORCEINSERT_LOADPORT = "store.forceinsert.loadport";
		static final String PROCESS_NEXT_BATCH = "store.process.nextbatch";
		static final String RUNQUERY_NEXT_BATCH = "store.runquery.batchseqnum";
		static final String VALIDATE_MESSAGE_SEQUENCE = "store.validate.messageseq";
		static final String GET_BATCH_LIST = "store.get.batchlist";
		static final String GET_MESSAGE_LOG = "store.get.messagelog";
		static final String INSERT_LOCK = "store.insert.lock";
		static final String FLUSH_LOCK = "store.flush.lock";
		static final String CHECK_LOCK_STATUS = "store.check.lockstatus";
		static final String GET_LOCK = "store.get.lock";
		static final String EDIT_LOCK_LASTACCESS = "store.edit.lastaccessed";
		static final String GET_LOCK_LASTACCESS = "store.get.lastaccessed";
		static final String RELEASE_LOCK = "store.release.lock";
		static final String PROCESS_GEO_SVC = "process.geo";
		static final String FORCEINSERT_COUNTRY_SVC = "forceinsert.country";
		static final String UPDATE_CITY_SVC = "update.city";
		static final String UPDATE_COUNTRY_SVC = "update.country";
		static final String INSERT_COUNTRY_SVC = "insert.country";
		static final String DELETE_COUNTRY_SVC = "delete.country";
		static final String FORCEINSERT_CITY_SVC = "forceinsert.city";
		static final String DELETE_CITY_SVC = "delete.city";
		static final String INSERT_GEO_MSG_SVC = "insert.geomessage";
		static final String GET_BATCHBY_STATE_SVC = "get.batchbystate";
		static final String GET_NEXTBACH_MSG_SVC = "get.nextbatchmsg";
		static final String UPDATE_BATCH_STATE_SVC = "update.batchstate";
		static final String UPDATE_MSG_STATE_SVC = "update.msgstate";
		static final String INSERT_BATCHBY_MSG_SVC = "insert.batchbymsg";
		static final String VALIDATE_BATCH_SVC = "validate.batch";
		static final String GET_NEXT_BATCHLIST_SVC = "get.batchlist";
		static final String GET_MSG_LOG_SVC = "get.msglog";
		static final String UPDATE_SEQ_MARKER_SVC = "update.sequencemarker";
	}
	
	static final String GEO_FEED = "GEO FEED";
	String GEO_FEED_LOCKER = "GEO_FEED_LOCKER";
	public String TIMERLOCK001 = "TIMERLOCK001";
	public String TIMERLOCK001ERROR = "Unable to get Lock";

	static final String END_MARKER_YES = "E";
	static final String END_MARKER_NO = " ";

	static final char CHAR_PLUS = '+';
	static final char CHAR_ZERO = '0';

	// MQMessage states
	static final String NEW_STATE = "NEW";
	public static final String MSGID = "GEOFE001";
	public static final String VERSION = "000005";
	static final String VALIDATED_STATE = "VAL";
	static final String COMPLETED_STATE = "COM";
	static final String ERROR_STATE = "ERR";
	static final String INVALID_STATE = "INV";

	// Batch Custom Data
	static final String NEW_BATCH = "NEW BATCH";
	static final String UNPROCESSED = "Unprocessed";
	static final String MESSAGE_ERROR_GEO = "Received Message Contains Error";
	static final String NON_RELEVANT = "No Relevant Information Received";
	static final String DEFAULT = "Default";
	static final String ADMIN = "ADMIN";
	static final String GEO_STAGING_V5FEED_TAG_001VO_STRING = "GeoStagingV5FeedTag001VO: \n";
	static final String GEO_STAGING_V5FEED_TAG_001VO_MESSAGE1 = "message: ";
	static final String GEO_STAGING_V5FEED_TAG_001VO_MESSAGE_END = "\n";

	// Timer Constatnts

	static final String Y = "Y";
	static final String N = "N";
	static final String O = "O";

	// System Settings
	static final String IGNORE_BATCH_SEQ = "Y";
	static final String DO_NOT_IGNORE_BATCH_SEQ = "N";

	// Geo Feed
	static final String INVALID_MESSAGES_ERROR_CODE = "01c";
	static final String ERROR_CODE_FEW_MESSAGE_CORRUPT = "01d";
	static final String INVALID_BATCH_SEQ_ERROR_CODE = "01b";
	static final String NO_ERROR_CODE = "000";
	static final String NOT_AVAILABLE = "NA";

	static final String CUSTOM_DATA_VALIDATED = "Validated";
	static final String CUSTOM_DATA_COMPLETED = "Completed Successfully";
	static final String CUSTOM_DATA_COMPLETED_WITH_ERROR = "Completed But with ";
	static final String CUSTOM_DATA_COMPLETED_WITH_ERROR1 = " Corrupt Messages";
	static final String CUSTOM_DATA_ERROR = "ERROR IN BATCH";
	static final String CUSTOM_DATA_ERROR_MISSING_MESSAGES = "ERROR IN BATCH:- 'SOME Messages are Missing/Repeated from BATCH' ";
	static final String CUSTOM_DATA_ERROR_BATCH_SEQ_MISSING = "ERROR IN BATCH:- 'BATCH SEQUENCE MISSING' ";

	// Geo Parsing Constants
	static final String DECODER_FILE = "GeoFeedMsgFormat.xml";
	int PROCESS_MESSAGE_NO_START = 1;

	// for country Config

	static final String CALENDAR = "CALENDAR";
	static final String DEFAULT_CSA_MAILID = "CSA@CSA.COM";
	static final String WORKING = "WORKING";
	static final String CAL_DAYS = "Calendar Days";
	static final String WORK_DAYS = "Working Days";
	static final String MON = "Mon";
	static final String TUE = "Tue";
	static final String WED = "Wed";
	static final String THUR = "Thur";
	static final String FRI = "Fri";
	static final String SAT = "Sat";
	static final String SUN = "Sun";

	// GEO_QUERY Constants.

	// String GEO_QUERY_VERSION = "version";
	static final String GEO_QUERY_MSGID = "msgId";
	static final String GEO_QUERY_MSG_NO = "msgNumber";
	static final String GEO_QUERY_EXT_TIME = "extractTime";
	static final String GEO_QUERY_GEO_MESSAGE_ID = "id";
	static final String GEO_QUERY_PRE_EXT_TIME = "prevExtractTime";
	static final String GEO_QUERY_END_MARKER = "endMarker";
	static final String GEO_QUERY_MSG = "message";
	static final String GEO_QUERY_PROCESSED_STATE = "processedState";
	static final String GEO_QUERY_LOG = "log";
	static final String GEO_QUERY_RECEIVED_DATE = "receivedDate";
	static final String GEO_QUERY_PROCESSED_DATE = "processedDate";
	static final String GEO_QUERY_RUN_GET_BATCH_BY_STATE1 = "select g from GeoBatch g where g.processedState='";
	static final String GEO_QUERY_RUN_GET_BATCH_BY_STATE2 = "' and g.msgId='";
	static final String GEO_QUERY_RUN_GET_BATCH_BY_STATE3 = "' and g.version='";
	static final String GEO_QUERY_ERROR_BATCHNOT_FOUND1 = "batch with id:";
	static final String GEO_QUERY_ERROR_BATCHNOT_FOUND2 = " not found";
	static final String GEO_QUERY_MESSAGELOG1 = "SELECT v.msgNumber , v.extractTime , v.prevExtractTime , v.endMarker , v.processedState , v.receivedDate , v.processedDate , v.log FROM  GeoMessage v where v.extractTime='";
	static final String GEO_QUERY_MESSAGELOG_COUNT = "SELECT Count(v) FROM  GeoMessage v where v.extractTime='";
	static final String GEO_QUERY_MESSAGELOG2 = "' order by v.msgNumber";
	static final String GEO_QUERY_GEO_BATCH_LIST1 = "SELECT v FROM  GeoBatch v where";
	static final String GEO_QUERY_GEO_BATCH_LIST_COUNT = "SELECT count(v) FROM  GeoBatch v where";
	static final String GEO_QUERY_GEO_BATCH_LIST2 = " v.processedState='";
	static final String GEO_QUERY_GEO_BATCH_LIST3 = " v.createDate>CURRENT_DATE-";
	static final String GEO_QUERY_GEO_BATCH_LIST4 = " where";
	static final String GEO_QUERY_GEO_BATCH_LIST5 = " order by v.geoBatchId DESC";

	// Queries for billing module.

	static final String SINGLE_INVERTED = "'";
	static final String SINGLE_INVERTED_SPACE = "' ";
	// String BILL_AND = " and";
	static final String SINGLE_INVERTED_WITH_AND = "' and";
	// String PERSISTENCE_CONTEXT="eddi2PU";
	static final String COMMA = ",";
	static final String COLON_AND = " and";
	static final String ALL = " All";
	String BLANK_SPACE = " ";
	
	//Tag processor
	static final String INACTIVE = "INACTIVE";
	static final String ACTIVE = "ACTIVE";
	static final String L = "L";
	static final String D = "D";
	static final String COUNTRY = "COUNTRY";
	static final String INSERT_COUNTRY = "Insert Country :-";
	static final String UPDATE_COUNTRY = "Update Country :-";
	static final String DELETE_COUNTRY = "Delete Country :-";
	static final String FORCED_INSERT_COUNTRY = "Forced Insert Country :-";
	static final String ERROR_COUNTRY = "Error Country :-";

	static final String INSERT_LOADPORT = "Insert LoadPort :-";
	static final String UPDATE_LOADPORT = "Update LoadPort :-";
	static final String DELETE_LOADPORT = "Delete LoadPort :-";
	static final String FORCED_INSERT_LOADPORT = "Forced Insert LoadPort :-";
	static final String ERROR_LOADPORT = "Error LoadPort :-";

	static final String INSERT_CITY = "Insert City :-";
	static final String UPDATE_CITY = "Update City :-";
	static final String DELETE_CITY = "Delete City :-";
	static final String FORCED_INSERT_CITY = "Forced Insert City :-";
	static final String ERROR_CITY = "Error City :-";

	static final String EMPTY_STRING = "";

	static final String ERROR_MSG_PART1 = "Message No: ";
	static final String ERROR_MSG_PART2 = " Tag No. ";
	static final String ERROR_MSG_PART3 = " Tag: ";
	static final String ERROR_MSG_PART4 = " is not recognised by EDDI";
}
