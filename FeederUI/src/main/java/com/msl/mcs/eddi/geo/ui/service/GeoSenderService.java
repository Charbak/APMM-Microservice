package com.msl.mcs.eddi.geo.ui.service;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.ui.config.RabbitMQSenderConfig;

@Service
public class GeoSenderService {
	@Autowired
	AmqpTemplate rabbitTemplate;

	@Autowired
	RabbitMQSenderConfig mqSenderConfig;

	public boolean send(String message) {
		boolean isSucess = true;
		try {
			System.out.println("Sending message.....");
			rabbitTemplate.convertAndSend(mqSenderConfig.getExchangeName(), mqSenderConfig.getRoutingKey(), message);
		} catch (Exception e) {
			e.printStackTrace();
			isSucess = false;
		} // EndTryCatch
		return isSucess;
	}// EndMethod

}// EndClass
