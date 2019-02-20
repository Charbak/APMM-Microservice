package com.msl.mcs.eddi.geo.feeds.restparams;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.ws.rs.WebApplicationException;

/**
 * <code>TimestampWithTZDParam</code> is Timestamp with TZD(time zone date) parameter which can be sent through REST.
 * Parsing the time string value (with time zone data) and converting it to java.util.Date (with time zone information)
 * @author SUMANPattanaik
 *
 */
public class TimestampWithTZDParam {
	private static final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");
	private java.util.Date date;

	public TimestampWithTZDParam(String dateTimeStr) throws WebApplicationException {
		try {
			date = new java.util.Date(df.parse(dateTimeStr).getTime());
		} catch (final ParseException ex) {
			throw new WebApplicationException(ex);
		}//EndTryCatch
	}// EndMethod

	public java.util.Date getDate() {
		return date;
	}// EndMethod

	@Override
	public String toString() {
		return date != null ? date.toString() : "";
	}// EndMethod
}// EndClass