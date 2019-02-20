package com.msl.mcs.eddi.geo.feeds.restparams;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.ws.rs.WebApplicationException;

/**
 * <code>TimeParam</code> is time parameter for REST Parsing the time string
 * value (with AM/PM indicator) and converting it to java.sql.Time
 * 
 * @author SUMANPattanaik
 *
 */
public class TimeParam {
	private static final SimpleDateFormat df = new SimpleDateFormat("h:mma");
	private java.sql.Time time;

	public TimeParam(String timeStr) throws WebApplicationException {
		try {
			time = new java.sql.Time(df.parse(timeStr).getTime());
		} catch (final ParseException ex) {
			throw new WebApplicationException(ex);
		} // EndTryCatch
	}// EndMethod

	public java.sql.Time getTime() {
		return time;
	}// EndMethod

	@Override
	public String toString() {
		return time != null ? time.toString() : "";
	}// EndMethod
}// EndClass
