package com.ibm.dndcalculation;

//import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

//import org.springframework.data.cassandra.core.mapping.Table;


@Table("equipment")
//@Table(name ="RKEM_FEEDS", keyspace = "test@cassandra_pu")
public class DnDFeedEntity {
	
//	private static final long serialVersionUID = 8020522006409395867L;
	
	@Id
//	private UUID ID;
	@PrimaryKey
	private String equipment_code;
	private String booking_number;
	private String confirm_load_date;
	private String load_port_code;
	private String vessel_code;
	private String voyage_number;
	private String receipt_location;
	private String operator_name;
	private String receipt_service;
	private String container_size;
	private String container_type;
	private String created_date;
	private String created_by;
	
	public String getReceipt_location() {
		return receipt_location;
	}

	public void setReceipt_location(String receipt_location) {
		this.receipt_location = receipt_location;
	}

	public String getOperator_name() {
		return operator_name;
	}

	public void setOperator_name(String operator_name) {
		this.operator_name = operator_name;
	}

	public String getReceipt_service() {
		return receipt_service;
	}

	public void setReceipt_service(String receipt_service) {
		this.receipt_service = receipt_service;
	}

	public String getContainer_size() {
		return container_size;
	}

	public void setContainer_size(String container_size) {
		this.container_size = container_size;
	}

	public String getContainer_type() {
		return container_type;
	}

	public void setContainer_type(String container_type) {
		this.container_type = container_type;
	}

	public String getCreated_date() {
		return created_date;
	}

	public void setCreated_date(String created_date) {
		this.created_date = created_date;
	}

	public String getCreated_by() {
		return created_by;
	}

	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}
	
	public String getConfirm_load_date() {
		return confirm_load_date;
	}

	public void setConfirm_load_date(String confirm_load_date) {
		this.confirm_load_date = confirm_load_date;
	}

	public String getLoad_port_code() {
		return load_port_code;
	}

	public void setLoad_port_code(String load_port_code) {
		this.load_port_code = load_port_code;
	}

	public String getVessel_code() {
		return vessel_code;
	}

	public void setVessel_code(String vessel_code) {
		this.vessel_code = vessel_code;
	}

	public String getVoyage_number() {
		return voyage_number;
	}

	public void setVoyage_number(String voyage_number) {
		this.voyage_number = voyage_number;
	}
	
	public String getEquipment_code() {
		return equipment_code;
	}

	public void setEquipment_code(String equipment_code) {
		this.equipment_code = equipment_code;
	}

	public String getBooking_number() {
		return booking_number;
	}

	public void setBooking_number(String booking_number) {
		this.booking_number = booking_number;
	}
	
	public DnDFeedEntity() {
		
	}

	@Override
	public String toString() {
		return "RkemFeedDao [equipment_code=" + equipment_code + ", booking_number=" + booking_number +"]";
	}

	public DnDFeedEntity(String equipment_code, String booking_number, String confirm_load_date, String load_port_code, String vessel_code, String voyage_number) {
		super();
		this.equipment_code = equipment_code;
		this.booking_number = booking_number;
		this.confirm_load_date = confirm_load_date;
		this.load_port_code = load_port_code;
		this.vessel_code = vessel_code;
		this.voyage_number = voyage_number;
	}
	
	public DnDFeedEntity(String equipment_code, String booking_number,String receipt_location, String operator_name, String receipt_service, String container_size,
			String container_type, String created_date, String created_by, String confirm_load_date, String load_port_code, String vessel_code, String voyage_number) {
		super();
		this.equipment_code = equipment_code;
		this.booking_number = booking_number;
		this.confirm_load_date = confirm_load_date;
		this.load_port_code = load_port_code;
		this.vessel_code = vessel_code;
		this.voyage_number = voyage_number;
		this.receipt_location = receipt_location;
		this.operator_name = operator_name;
		this.receipt_service = receipt_service;
		this.container_size = container_size;
		this.container_type = container_type;
		this.created_date = created_date;
		this.created_by = created_by;
	}


	
}
