package com.msl.mcs.eddi.geo.feeds.restparams;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.ws.rs.WebApplicationException;

/**
 * <code></code> is timestamp parameter to be used in REST
 * Parsing the date and time string value and converting it to java.sql.Timestamp
 * @author SUMANPattanaik
 *
 */
public class TimestampParam {
	private static final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
	private java.sql.Timestamp timestamp;

	public TimestampParam(String timestampStr) throws WebApplicationException {
		try {
			timestamp = new java.sql.Timestamp(df.parse(timestampStr).getTime());
		} catch (final ParseException ex) {
			throw new WebApplicationException(ex);
		} // EndTryCatch
	}// EndMethod

	public java.sql.Timestamp getTimestamp() {
		return timestamp;
	}// EndMethod

	@Override
	public String toString() {
		return timestamp != null ? timestamp.toString() : "";
	}// EndMethod
}// EndClass