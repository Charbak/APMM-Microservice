package com.msl.mcs.eddi.geo.feeds.config;

import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.handler.annotation.support.DefaultMessageHandlerMethodFactory;
import org.springframework.messaging.handler.annotation.support.MessageHandlerMethodFactory;

/**
 * <code>RabbitMQConfig</code> is rabbit mq configuration to consume messages
 * 
 * @author SUMANPattanaik
 *
 */
@Configuration
public class RabbitMQRecieverConfig implements RabbitListenerConfigurer {
	@Override
	public void configureRabbitListeners(RabbitListenerEndpointRegistrar registrar) {
		registrar.setMessageHandlerMethodFactory(messageHandlerMethodFactory());
//		registrar.setMessageHandlerMethodFactory(validatingHandlerMethodFactory());
	}// EndMethod
	
	@Bean
	MessageHandlerMethodFactory messageHandlerMethodFactory() {
		DefaultMessageHandlerMethodFactory messageHandlerMethodFactory = new DefaultMessageHandlerMethodFactory();
		messageHandlerMethodFactory.setMessageConverter(consumerMessageConverter());
		return messageHandlerMethodFactory;
	}// EndMethod

	@Bean
	public MappingJackson2MessageConverter consumerMessageConverter() {
		return new MappingJackson2MessageConverter();
	}// EndMethod

//	@Bean
//	DefaultMessageHandlerMethodFactory validatingHandlerMethodFactory() {
//	   DefaultMessageHandlerMethodFactory factory =
//	       new DefaultMessageHandlerMethodFactory();
//	   factory.setValidator(amqpValidator());
//	   return factory;
//	}
//	
//	@Bean
//	Validator amqpValidator() {
//	   return new OptionalValidatorFactoryBean();
//	}

//	@Bean
//	public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(ConnectionFactory connectionFactory) {
//		SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
//		factory.setConnectionFactory(connectionFactory);
//		factory.setMessageConverter(jsonConverter());
//		factory.setErrorHandler(errorHandler());
//		return factory;
//	}// EndMethod
//
//	@Bean
//	public MessageConverter jsonConverter() {
//		return new Jackson2JsonMessageConverter();
//	}// EndMethod
//
//	@Bean
//	public ErrorHandler errorHandler() {
//		return new ConditionalRejectingErrorHandler(new MyFatalExceptionStrategy());
//		// return new CustomErrorHandler();
//	}// EndMethod

//	/**
//	 * 
//	 * @author SUMANPattanaik
//	 *
//	 */
//	public static class MyFatalExceptionStrategy extends ConditionalRejectingErrorHandler.DefaultExceptionStrategy {
//
//		private final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(getClass());
//
//		@Override
//		public boolean isFatal(Throwable t) {
//			if (t instanceof ListenerExecutionFailedException &&
//					(t.getCause() instanceof MessageConversionException ||
//					           t.getCause() instanceof MethodArgumentNotValidException)) {
//				ListenerExecutionFailedException lefe = (ListenerExecutionFailedException) t;
//				logger.error("Fatal message conversion error; message rejected; it will be dropped: {"
//						+ lefe.getFailedMessage().getMessageProperties().getConsumerQueue() + "}; failed message: "
//						+ lefe.getFailedMessage(), t);
//			} // EndIf
//			return super.isFatal(t);
//		}// EndMethod
//	}// EndClass
}// EndClass
