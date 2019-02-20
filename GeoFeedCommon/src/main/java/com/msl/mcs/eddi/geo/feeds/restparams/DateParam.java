package com.msl.mcs.eddi.geo.feeds.restparams;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.ws.rs.WebApplicationException;

/**
 * <code></code> is date parameter used in REST
 * Parsing the date string value and converting it to java.sql.Date
 * @author SUMANPattanaik
 *
 */
public class DateParam {
	// Declare the date format for the parsing to be correct
	private static final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
	private java.sql.Date date;

	/**
     * This is the default constructor which must take in one string parameter.
     * The parameter is no other than the one passed in through the REST
     * end-point. We'll see it later...
     */
    public DateParam( String dateStr ) throws WebApplicationException {
        try {
            date = new java.sql.Date( df.parse( dateStr ).getTime() );
        } catch ( final ParseException ex ) {
            // Wrap up any expection as javax.ws.rs.WebApplicationException
            throw new WebApplicationException( ex );
        }//EndTryCatch
    }//EndMethod

	/**
	 * This is a getter method which returns the parsed date string value as
	 * java.sql.Date
	 *
	 */
	public java.sql.Date getDate() {
		return date;
	}//EndMethod

	/**
	 * For convenience of result checking
	 */
	@Override
	public String toString() {
		return date!=null ? date.toString():"";
	}//EndMethod
}//EndClass
