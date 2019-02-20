package com.msl.mcs.eddi.geo.feeds.model;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Vector;

import com.msl.mcs.eddi.geo.feeds.common.CommonHelper;
/**
 * <code>FeedVO</code> is simple abstract feed implementing to string method
 * @author SUMANPattanaik
 *
 */
public class AbstractVO implements Serializable {

	private static final long serialVersionUID = -2516208164699652823L;
	
	@Override
	public String toString() {
		StringBuffer sb =  new StringBuffer(this.getClass().getSimpleName());
		Field[] fields = this.getClass().getDeclaredFields();
		sb.append("[");
		for(Field field : fields) {		
			try {
				field.setAccessible(true);
				sb.append(displayParamNameValue(field.getName(),getFieldValue(field.get(this))));
			} catch (Exception e) {
			}//EndTryCatch
		}//EndFor
		
		if(sb.toString().endsWith(","))
			sb.deleteCharAt(sb.length()-1);
		
		sb.append("]");
		return sb.toString();
	}// EndMethod
	
	/**
	 * 
	 * @param fieldValue
	 * @return
	 */
	protected String getFieldValue(Object fieldValue) {
		String value = (String) fieldValue;
		
		if(fieldValue instanceof String) {
			value =(String) fieldValue;
		}else if(fieldValue instanceof Map) {
			value =((Map) fieldValue).toString();
		}else if(fieldValue instanceof Set) {
			value =((Set) fieldValue).toString();
		}else if(fieldValue instanceof List) {
			value =((List) fieldValue).toString();
		}else if(fieldValue instanceof Vector) {
			value =((Vector) fieldValue).toString();
		}else if(fieldValue instanceof Integer 
				|| fieldValue instanceof Double
				|| fieldValue instanceof Long) {
			value =  String.valueOf(fieldValue);
		}//EndIf
		return value;
	}//EndMethod
	
	/**
	 * 
	 * @param paramName
	 * @param paramValue
	 * @return
	 */
	protected String displayParamNameValue(String paramName, String paramValue) {
		StringBuffer sb = new StringBuffer();		
		if(!CommonHelper.isNullOrEmpty(paramValue)) 
			sb.append("<").append(paramName).append("=").append(paramValue).append(">").append(",");		
		return sb.toString();	
	}//EndMethod
}//EndClass
