package com.msl.mcs.eddi.geo.feeds.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import brave.Tracer;

@Component
public class TracerHandle {
	
	@Autowired
	Tracer tracer;
	
	public void startTracing(){
		
	}
	
}
