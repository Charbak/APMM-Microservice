package com.msl.mcs.eddi.geo.feeds.common;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class CommonHelper {
	/**
	 * Check whether input string is null or empty
	 * 
	 * @param s
	 *            String
	 * @return true if null or empty otherwise return false
	 */
	@SuppressWarnings("rawtypes")
	public static boolean isNullOrEmpty(Object obj) {
		boolean isNullEmpty = false;
		if (obj == null)
			return true;

		if (obj instanceof Object[]) {
			Object[] objArr = (Object[]) obj;
			if (objArr == null || objArr.length == 0) {
				return true;
			} // EndIf
		} // EndIf
		if (obj instanceof String) {
			String string = (String) obj;
			if (string.isEmpty() || string.trim().length() == 0) {
				isNullEmpty = true;
			} // EndIf
		} // EndIf
		if (obj instanceof Map) {
			Map m = (Map) obj;
			return m == null ? true : m.size() == 0 ? true : false;
		} // EndIf

		if (obj instanceof List) {
			List l = (List) obj;
			return l == null ? true : l.size() == 0 ? true : false;
		} // EndIf

		if (obj instanceof Set) {
			Set s = (Set) obj;
			return s == null ? true : s.size() == 0 ? true : false;
		} // EndIf

		if (obj instanceof Properties) {
			Properties p = (Properties) obj;
			return p == null ? true : p.size() == 0 ? true : false;
		} // EndIf

		return isNullEmpty;
	}// EndMethod
	
	/**
	 * Return date from string in given format
	 * 
	 * @param dateFormat
	 *            String
	 * @param dateToCheck
	 *            String
	 * @return Date
	 * @throws ParseException
	 */
	public static java.sql.Date getDateFromString(String dateFormat, String dateToCheck) throws ParseException {
		DateFormat dateFormatter = new SimpleDateFormat(dateFormat, Locale.getDefault());
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(dateFormatter.parse(dateToCheck));
		return new java.sql.Date(calendar.getTimeInMillis());
	}//EndMethod
	
	/**
	 * Method returns current sql Date.
	 * 
	 * @return Current SQL Date
	 */
	public static  java.sql.Date getCurrentSQLDate() {
		return new java.sql.Date(new GregorianCalendar().getTimeInMillis());
	}
	
	/**
	 * Add timestamp to path
	 * @param targetPath
	 * @return
	 */
	public static String getRestURLTSPath(String targetPath){
		return targetPath+"/"+System.currentTimeMillis();
	}//EndMethod
}//EndClass
