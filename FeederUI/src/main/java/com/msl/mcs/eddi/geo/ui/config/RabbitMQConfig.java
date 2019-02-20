/**
 * 
 */
package com.msl.mcs.eddi.geo.ui.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author SUMANPattanaik
 *
 */
@Configuration
public class RabbitMQConfig {

	@Value("${eddi.queue.geo}")
	private String queueName;

	@Value("${eddi.queue.geo.routekey}")
	private String routingKey;

	@Value("${eddi.exchange.geo}")
	private String exchange;

	@Bean
	Queue queue() {
		return new Queue(queueName, true);
	}//EndMethod

	@Bean
	DirectExchange exchange() {
		return new DirectExchange(exchange);
	}//EndMethod

	@Bean
	Binding binding(Queue queue, DirectExchange exchange) {
		return BindingBuilder.bind(queue).to(exchange).with(routingKey);
	}//EndMethod
	
	/**
	 * Get queue name
	 * @return
	 */
	public String getQueueName(){
		return this.queueName;
	}//EndMethod
	
	/**
	 * Get exchange name
	 * @return
	 */
	public String getExchangeName(){
		return this.exchange;
	}//EndMethod
	
	/**
	 * Get routing key
	 * @return
	 */
	public String getRoutingKey(){
		return this.routingKey;
	}//EndMethod
}// EndClass
