package com.ibm.dndcalculation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
//import com.datastax.driver.core.utils.UUIDs;

@Component
public class DndCrudController {
	
	private static Logger logger = LogManager.getLogger(DndCrudController.class);
	private static final String BOOKING_NO = "BOOKING_NO";
	private static final String EQPT_ID = "EQPT_ID";
	private static final String LOAD_PORT = "LOAD_PORT";
	private static final String VESSEL_CODE = "VESSEL_CODE";
	private static final String VOYAGE_NUMBER = "VOYAGE_NUMBER";
	private static final String LOAD_DATE = "LOAD_DATE";
	private static final String ALL_DUE = "ALL_DUE";
	private static final String RECEIPT_LOCATION = "RECEIPT_LOCATION";
	private static final String OPERATOR_NAME = "OPERATOR_NAME";
	private static final String RECEIPT_SERVICE = "RECEIPT_SERVICE";
	private static final String CONTAINER_SIZE = "CONTAINER_SIZE";
	private static final String CONTAINER_TYPE = "CONTAINER_TYPE";
	private static final String CREATED_DATE = "CREATED_DATE";
	private static final String CREATED_BY= "ALL_DUE";
	private static final String COMMA = ",";
	private static final String COLON = ":";
	private static final String QUOTE = "\"";
	
	@Autowired
	private DnDFeedRepo dndFeed;

	public String fetchBookingDetails() {
		StringBuffer buffer = new StringBuffer("");
		try {
			Iterable<DnDFeedEntity> results = this.dndFeed.findAll();
			Iterator<DnDFeedEntity> it = results.iterator();
			String firstTime = "";
			Map<String, List<DnDFeedVo>> dataToReturn = new HashMap<String, List<DnDFeedVo>>();
			buffer.append("[");
			while (it.hasNext()) {
				DnDFeedEntity data = (DnDFeedEntity) it.next();
				DnDFeedVo vo = new DnDFeedVo(data.getBooking_number(),data.getEquipment_code(),data.getLoad_port_code(),data.getVessel_code(),data.getVoyage_number(),data.getConfirm_load_date());
				String key = data.getLoad_port_code()+""+data.getVessel_code()+""+data.getVoyage_number();
				List<DnDFeedVo> list = null;
				if(dataToReturn.containsKey(key)) {
					list = dataToReturn.get(key);
				} else {
					list = new ArrayList<DnDFeedVo>();
				}
				list.add(vo);
				dataToReturn.put(key, list);
				logger.info(".....Got Records...."+ data.getBooking_number());
			}
			for (String mapKey : dataToReturn.keySet()) {
				List<DnDFeedVo> mapVal = dataToReturn.get(mapKey);
				DnDFeedVo data = mapVal.get(0);
				int count = mapVal.size();
				buffer.append(firstTime);
				buffer.append("{");
				buffer.append(QUOTE).append(BOOKING_NO).append(QUOTE).append(COLON).append(QUOTE).append(data.getBooking_number()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(EQPT_ID).append(QUOTE).append(COLON).append(QUOTE).append(data.getEquipment_code()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(LOAD_PORT).append(QUOTE).append(COLON).append(QUOTE).append(data.getLoad_port_code()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(VESSEL_CODE).append(QUOTE).append(COLON).append(QUOTE).append(data.getVessel_code()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(VOYAGE_NUMBER).append(QUOTE).append(COLON).append(QUOTE).append(data.getVoyage_number()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(LOAD_DATE).append(QUOTE).append(COLON).append(QUOTE).append(data.getConfirm_load_date()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(ALL_DUE).append(QUOTE).append(COLON).append(QUOTE).append(count).append(QUOTE);
				buffer.append("}");
				firstTime = COMMA;
				break; //only returning first set
			}
			buffer.append("]");
			logger.info("JSON:"+ buffer.toString());

		}catch(Exception e) {
			logger.error("Error in getting records" + e.getMessage());
		}
		return buffer.toString();
	}
	
	public String fetchDnDDetails() {
		StringBuffer buffer = new StringBuffer("");
		try {
			Iterable<DnDFeedEntity> results = this.dndFeed.findAll();
			Iterator<DnDFeedEntity> it = results.iterator();
			String firstTime = "";
			buffer.append("[");
			while (it.hasNext()) {
				DnDFeedEntity data = (DnDFeedEntity) it.next();
				buffer.append(firstTime);
				buffer.append("{");
				buffer.append(QUOTE).append(BOOKING_NO).append(QUOTE).append(COLON).append(QUOTE).append(data.getBooking_number()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(EQPT_ID).append(QUOTE).append(COLON).append(QUOTE).append(data.getEquipment_code()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(CONTAINER_SIZE).append(QUOTE).append(COLON).append(QUOTE).append(data.getContainer_size()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(CONTAINER_TYPE).append(QUOTE).append(COLON).append(QUOTE).append(data.getContainer_type()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(OPERATOR_NAME).append(QUOTE).append(COLON).append(QUOTE).append(data.getOperator_name()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(CREATED_DATE).append(QUOTE).append(COLON).append(QUOTE).append(data.getCreated_date()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(CREATED_BY).append(QUOTE).append(COLON).append(QUOTE).append(data.getCreated_by()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(RECEIPT_SERVICE).append(QUOTE).append(COLON).append(QUOTE).append(data.getReceipt_service()).append(QUOTE);
				buffer.append(COMMA);
				buffer.append(QUOTE).append(RECEIPT_LOCATION).append(QUOTE).append(COLON).append(QUOTE).append(data.getReceipt_location()).append(QUOTE);
				buffer.append("}");
				firstTime = COMMA;
			}
			buffer.append("]");
			logger.info("JSON:"+ buffer.toString());

		}catch(Exception e) {
			logger.error("Error in getting records" + e.getMessage());
		}
		return buffer.toString();
	}
	
	public String fetchDnDDetailsbyVessel(String vessel, String voyage, String load_port_code) {
		StringBuffer buffer = new StringBuffer("");
		try {
			Iterable<DnDFeedEntity> results = this.dndFeed.findAll();
			Iterator<DnDFeedEntity> it = results.iterator();
			String firstTime = "";
			buffer.append("[");
			while (it.hasNext()) {
				DnDFeedEntity data = (DnDFeedEntity) it.next();
				if(data.getVessel_code().equalsIgnoreCase(vessel) && data.getVoyage_number().equalsIgnoreCase(voyage) && data.getLoad_port_code().equalsIgnoreCase(load_port_code)) {
					buffer.append(firstTime);
					buffer.append("{");
					buffer.append(QUOTE).append(BOOKING_NO).append(QUOTE).append(COLON).append(QUOTE).append(data.getBooking_number()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(EQPT_ID).append(QUOTE).append(COLON).append(QUOTE).append(data.getEquipment_code()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(CONTAINER_SIZE).append(QUOTE).append(COLON).append(QUOTE).append(data.getContainer_size()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(CONTAINER_TYPE).append(QUOTE).append(COLON).append(QUOTE).append(data.getContainer_type()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(OPERATOR_NAME).append(QUOTE).append(COLON).append(QUOTE).append(data.getOperator_name()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(CREATED_DATE).append(QUOTE).append(COLON).append(QUOTE).append(data.getCreated_date()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(CREATED_BY).append(QUOTE).append(COLON).append(QUOTE).append(data.getCreated_by()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(RECEIPT_SERVICE).append(QUOTE).append(COLON).append(QUOTE).append(data.getReceipt_service()).append(QUOTE);
					buffer.append(COMMA);
					buffer.append(QUOTE).append(RECEIPT_LOCATION).append(QUOTE).append(COLON).append(QUOTE).append(data.getReceipt_location()).append(QUOTE);
					buffer.append("}");
					firstTime = COMMA;
				}
			}
			buffer.append("]");
			logger.info("JSON:"+ buffer.toString());

		}catch(Exception e) {
			logger.error("Error in getting records" + e.getMessage());
		}
		return buffer.toString();
	}
}
