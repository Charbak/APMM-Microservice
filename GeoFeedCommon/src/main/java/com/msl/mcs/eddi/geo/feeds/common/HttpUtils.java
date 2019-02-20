package com.msl.mcs.eddi.geo.feeds.common;

import org.springframework.http.HttpHeaders;
/**
 * <code>BaseController</code> is utility related to HTTP
 * @author SUMANPattanaik
 *
 */
public class HttpUtils {
	public static HttpHeaders getNoCacheHeaders() {
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.set("Cache-Control", "no-cache");
		return responseHeaders;
	}//EndMethod
}//EndClass
