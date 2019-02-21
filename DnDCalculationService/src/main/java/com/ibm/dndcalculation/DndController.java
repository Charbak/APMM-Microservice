package com.ibm.dndcalculation;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dnd")
@CrossOrigin(origins = "*")
public class DndController {
	private static Logger logger = LogManager.getLogger(DndController.class);
	@Autowired
	private DndCrudController dndCrudController;

	@RequestMapping(value = "/getbookingbycode/", method = RequestMethod.GET)
	public String getBookingNumber()
			throws Exception {
		logger.info(".....Getting Records....");
		String result = "";
		try {
			result = dndCrudController.fetchBookingDetails();
		} catch (Exception e) {
			logger.error("Exception in getting records" + e.getMessage());
		} // EndTryCatch
		return result;
	}// EndMethod 
	
	@RequestMapping(value = "/getdnddetails/", method = RequestMethod.GET)
	public String getDndDetails()
			throws Exception {
		logger.info(".....Getting Records....");
		String result = "";
		try {
			result = dndCrudController.fetchDnDDetails();
		} catch (Exception e) {
			logger.error("Exception in getting records" + e.getMessage());
		} // EndTryCatch
		return result;
	}// EndMethod 
	
	@RequestMapping(value = "/getdndbyvessel/", params = { "vessel", "voyage", "load_port" },method = RequestMethod.GET)
	public String getDndDetailsbyVessel(@RequestParam("vessel") String vessel, @RequestParam("voyage") String voyage, @RequestParam("load_port")String load_port)
			throws Exception {
		logger.info(".....Getting Records....");
		String result = "";
		try {
			result = dndCrudController.fetchDnDDetailsbyVessel(vessel, voyage, load_port);
		} catch (Exception e) {
			logger.error("Exception in getting records" + e.getMessage());
		} // EndTryCatch
		return result;
	}// EndMethod 
	
	
}// EndClass
