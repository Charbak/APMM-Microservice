package com.example.demo.service;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


/**
 * @author ANTARAMUKHERJEE
 *
 */
@Service
public class RabbitMQSender {
	
	@Autowired
	private AmqpTemplate rabbitTemplate;
	
	@Value("${employee.rabbitmq.exchange}")
	String exchange;

	@Value("${employee.rabbitmq.routingkey}")
	private String routingkey;	
	
	public void send(com.example.demo.model.Employee employee) {
		rabbitTemplate.convertAndSend(exchange, routingkey, employee);
		System.out.println("Sent message to queue employee = " + employee);
	    
	}
}
