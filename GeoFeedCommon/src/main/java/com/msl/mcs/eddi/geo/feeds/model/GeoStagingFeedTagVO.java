package com.msl.mcs.eddi.geo.feeds.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.msl.mcs.eddi.geo.feeds.common.Constants;
/**
 *<code>GeoStagingFeedTagVO</code>is Vo used while saving Geo Feed Message in Staging Table.
 * @author SUMANPattanaik
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class GeoStagingFeedTagVO {
	private String message;

	/**
	 * @tag TAG001
	 * @field message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	public String toString() {
		StringBuffer buf = new StringBuffer(Constants.GEO_STAGING_V5FEED_TAG_001VO_STRING);
		buf.append(Constants.GEO_STAGING_V5FEED_TAG_001VO_MESSAGE1).append(message)
				.append(Constants.GEO_STAGING_V5FEED_TAG_001VO_MESSAGE_END);
		return buf.toString();
	}// EndMethod
}// EndClass
