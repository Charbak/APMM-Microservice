package com.msl.mcs.eddi.geo.ui.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQSenderConfig extends RabbitMQConfig {
	@Bean
	public AmqpTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
		final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
		rabbitTemplate.setMessageConverter(producerMessageConverter());
		return rabbitTemplate;
	}// EndMethod

	@Bean
	public MessageConverter producerMessageConverter() {
		return new Jackson2JsonMessageConverter();
	}// EndMethod
}//EndClass
