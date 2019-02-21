package com.ibm.dndcalculation;


//import org.springframework.data.cassandra.core.mapping.Table;


public class DnDFeedVo {
	
//	private static final long serialVersionUID = 8020522006409395867L;
	
	private String equipment_code;
	private String booking_number;
	private String confirm_load_date;
	private String load_port_code;
	private String vessel_code;
	private String voyage_number;
	
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
	
	public DnDFeedVo() {
		
	}

	@Override
	public String toString() {
		return "RkemFeedDao [equipment_code=" + equipment_code + ", booking_number=" + booking_number +"]";
	}


	public DnDFeedVo(String booking_number, String equipment_code, String load_port_code, String vessel_code,
			String voyage_number, String confirm_load_date) {
		super();
		this.equipment_code = equipment_code;
		this.booking_number = booking_number;
		this.confirm_load_date = confirm_load_date;
		this.load_port_code = load_port_code;
		this.vessel_code = vessel_code;
		this.voyage_number = voyage_number;
	}

	
}
