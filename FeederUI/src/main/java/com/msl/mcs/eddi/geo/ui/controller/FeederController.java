package com.msl.mcs.eddi.geo.ui.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;
import com.msl.mcs.eddi.geo.ui.service.GeoSenderService;

@Controller
@RequestMapping("/")
public class FeederController {
	@Autowired
	GeoSenderService senderService;

	@RequestMapping(value = "geofeeder", method = RequestMethod.GET)
	public String displayLogin(Map<String, Object> model) {
		return "Feeder";
	}// EndMethod

	@RequestMapping(value = "geofeeder", method = RequestMethod.POST)
	public String pushGeoFeed(ModelMap model, @RequestParam String message) {
		if (!CommonHelper.isNullOrEmpty(message)) {
			if (!senderService.send(message)) {
				model.put("errorMessage", "Message sending failed for some reason");
			} // EndIf
			model.put("sucessMessage", "Message sent sucessfully");
		} else {
			model.put("errorMessage", "Invalid Message or Empty Feed");
		}//EndIf
		return "Feeder";
	}// EndMethod
}// EndClass
