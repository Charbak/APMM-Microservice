package com.msl.mcs.eddi.geo.feeds.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msl.mcs.eddi.geo.feeds.common.Constants;
import com.msl.mcs.eddi.geo.feeds.common.Constants.FIELD_NAMES;
import com.msl.mcs.eddi.geo.feeds.exceptions.MessagingException;
import com.msl.mcs.eddi.geo.feeds.exceptions.ServiceException;
import com.msl.mcs.eddi.geo.feeds.model.CityVO;
import com.msl.mcs.eddi.geo.feeds.model.CountryVO;
import com.msl.mcs.eddi.geo.feeds.model.LoadPortVO;
import com.scs.util.messaging.decoder.vo.TagVO;
import com.scs.util.messaging.test.FieldNames;

@Service
public class TagProcessorService {
	private final Logger logger = LoggerFactory.getLogger(TagProcessorService.class);
	
	@Autowired
	GeoLocationService locationService;

	/**
	 * processing of tags performed by this method.
	 * 
	 * @param tagVO
	 *            TagVO
	 * 
	 * @throws MessagingException
	 * @throws ServiceException
	 */
	public String processTag(TagVO tagVO) throws MessagingException, ServiceException {

		logger.debug("IN processTag");

		try {
			String tagName = tagVO.getName();

			if (tagName.equals(FIELD_NAMES.COUNTRY_TAG)) {

				logger.info("Message No: " + tagVO.getParentHeader().getFieldValue(FieldNames.MESSAGE_NUMBER)
						+ " Tag No. " + tagVO.getTagNo() + " Processing COUNTRY_TAG");

				if ((tagVO.getFieldValue(FieldNames.TYPE_OF_LOCATION).trim()).equals(Constants.COUNTRY)
						&& tagVO.getFieldValue(FieldNames.GEOCODE) != null
						&& tagVO.getFieldValue(FieldNames.UPPERCASE_NAME) != null
						&& !tagVO.getFieldValue(FieldNames.UPPERCASE_NAME).trim().equals(Constants.EMPTY_STRING)
						&& tagVO.getFieldValue(FieldNames.STATUS) != null
						&& !tagVO.getFieldValue(FieldNames.STATUS).trim().equals(Constants.EMPTY_STRING)
						&& !tagVO.getFieldValue(FieldNames.GEOCODE).trim().equalsIgnoreCase(Constants.EMPTY_STRING)) {
					CountryVO countryVO = new CountryVO();
					countryVO.setCountryCode(tagVO.getFieldValue(FieldNames.GEOCODE).trim());
					countryVO.setCountryName(tagVO.getFieldValue(FieldNames.UPPERCASE_NAME).trim());
					countryVO.setStatus(tagVO.getFieldValue(FieldNames.STATUS).trim());

					if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.INSERT_TRANSACTION)) {
						locationService.insertCountry(countryVO);
						return Constants.INSERT_COUNTRY + tagVO.getFieldValue(FieldNames.GEOCODE);
					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.UPDATE_TRANSACTION)) {
						locationService.updateCountry(countryVO);
						return Constants.UPDATE_COUNTRY + tagVO.getFieldValue(FieldNames.GEOCODE);

					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.DELETE_TRANSACTION)) {
						locationService.deleteCountry(countryVO);
						return Constants.DELETE_COUNTRY + tagVO.getFieldValue(FieldNames.GEOCODE);

					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.FORCED_TRANSACTION)) {
						locationService.forcedInsertCountry(countryVO);
						return Constants.FORCED_INSERT_COUNTRY + tagVO.getFieldValue(FieldNames.GEOCODE);
					}

				} else {
					logger.error("GEO_ERROR_0011 : Non relavant Location type : Message No: "
							+ tagVO.getParentHeader().getFieldValue(FieldNames.MESSAGE_NUMBER) + " Tag No. "
							+ tagVO.getTagNo() + " Geo Code:- " + tagVO.getFieldValue(FieldNames.GEOCODE)
							+ " UpperCase Name:- " + tagVO.getFieldValue(FieldNames.UPPERCASE_NAME) + " Status:- "
							+ tagVO.getFieldValue(FieldNames.STATUS)
							+ " Type of location of COUNTRY_TAG is not COUNTRY / OR Mandatory Fields are missing: Ignore Processing COUNTRY_TAG");
					return Constants.ERROR_COUNTRY + tagVO.getFieldValue(FieldNames.GEOCODE);
				}
			} else if (tagName.equals(FIELD_NAMES.SITE_TAG)) {

				logger.info("Message No: " + tagVO.getParentHeader().getFieldValue(FieldNames.MESSAGE_NUMBER)
						+ " Tag No. " + tagVO.getTagNo() + " Processing SITE_TAG");

				LoadPortVO loadPortVo = new LoadPortVO();

				if (tagVO.getFieldValue(FieldNames.GEOCODE) != null
						&& tagVO.getFieldValue(FieldNames.GEOID).trim() != null
						&& tagVO.getFieldValue(FieldNames.RKSTCOUNTRY_CODE) != null
						&& !tagVO.getFieldValue(FieldNames.RKSTCOUNTRY_CODE).trim().equals(Constants.EMPTY_STRING)
						&& tagVO.getFieldValue(FieldNames.STATUS).trim() != null
						&& !tagVO.getFieldValue(FieldNames.STATUS).trim().equals(Constants.EMPTY_STRING)
						&& tagVO.getFieldValue(FieldNames.UPPERCASE_NAME) != null
						&& !tagVO.getFieldValue(FieldNames.UPPERCASE_NAME).trim().equals(Constants.EMPTY_STRING)
						&& tagVO.getFieldValue(FieldNames.TYPE_OF_LOCATION) != null
						&& !tagVO.getFieldValue(FieldNames.TYPE_OF_LOCATION).trim().equals(Constants.EMPTY_STRING)
						&& tagVO.getFieldValue(FieldNames.CITY_NEAR_SITE_CODE) != null
						&& !tagVO.getFieldValue(FieldNames.CITY_NEAR_SITE_CODE).trim().equals(Constants.EMPTY_STRING)) {
					String cityCode = tagVO.getFieldValue(FieldNames.CITY_NEAR_SITE_CODE).trim();
					loadPortVo.setCountryCode(tagVO.getFieldValue(FieldNames.RKSTCOUNTRY_CODE).trim());
					loadPortVo.setLoadPortGeoId(tagVO.getFieldValue(FieldNames.GEOID).trim());
					loadPortVo.setLoadPortCode(tagVO.getFieldValue(FieldNames.GEOCODE).trim());
					loadPortVo.setLoadPortName(tagVO.getFieldValue(FieldNames.UPPERCASE_NAME).trim());
					loadPortVo.setCityCode(cityCode);
					loadPortVo.setStatus(tagVO.getFieldValue(FieldNames.STATUS).trim());
					loadPortVo.setTypeOfLocation(tagVO.getFieldValue(FieldNames.TYPE_OF_LOCATION).trim());

					if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.INSERT_TRANSACTION)) {
						locationService.insertLoadPort(loadPortVo);
						return Constants.INSERT_LOADPORT + tagVO.getFieldValue(FieldNames.GEOCODE);
					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.UPDATE_TRANSACTION)) {
						locationService.updateLoadPort(loadPortVo);
						return Constants.UPDATE_LOADPORT + tagVO.getFieldValue(FieldNames.GEOCODE);
					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.DELETE_TRANSACTION)) {
						locationService.deleteLoadPort(loadPortVo);
						return Constants.DELETE_LOADPORT + tagVO.getFieldValue(FieldNames.GEOCODE);
					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.FORCED_TRANSACTION)) {
						locationService.forcedInsertLoadPort(loadPortVo);
						return Constants.FORCED_INSERT_LOADPORT + tagVO.getFieldValue(FieldNames.GEOCODE);
					}

				} else {
					logger.error("GEO_ERROR_0011 : Mandatory Fields are missing : Message No: "
							+ tagVO.getParentHeader().getFieldValue(FieldNames.MESSAGE_NUMBER) + " Tag No. "
							+ tagVO.getTagNo() + "Ignore Processing SITE_TAG" + " GEO Code:- "
							+ tagVO.getFieldValue(FieldNames.GEOCODE) + " Geo ID:- "
							+ tagVO.getFieldValue(FieldNames.GEOID) + " RKSTCountry Code:- "
							+ tagVO.getFieldValue(FieldNames.RKSTCOUNTRY_CODE) + " Status:- "
							+ tagVO.getFieldValue(FieldNames.STATUS) + " UpperCase Name:-  "
							+ tagVO.getFieldValue(FieldNames.UPPERCASE_NAME) + " Type Of Location :- "
							+ tagVO.getFieldValue(FieldNames.TYPE_OF_LOCATION) + " City near site :- "
							+ tagVO.getFieldValue(FieldNames.CITY_NEAR_SITE_CODE));

					return Constants.ERROR_LOADPORT + tagVO.getFieldValue(FieldNames.GEOCODE);
				}
			} else if (tagName.equals(FIELD_NAMES.CITY_SUB_CITY_TAG)) {

				logger.info("Message No: " + tagVO.getParentHeader().getFieldValue(FieldNames.MESSAGE_NUMBER)
						+ " Tag No. " + tagVO.getTagNo() + " Processing CITY_SUBCITY_TAG");

				CityVO cityVo = new CityVO();
				if (tagVO.getFieldValue(FieldNames.GEOCODE) != null
						&& tagVO.getFieldValue(FieldNames.RKSTCOUNTRY_CODE) != null
						&& tagVO.getFieldValue(FieldNames.STATUS) != null
						&& !tagVO.getFieldValue(FieldNames.STATUS).trim().equals(Constants.EMPTY_STRING)
						&& tagVO.getFieldValue(FieldNames.UPPERCASE_NAME) != null
						&& !tagVO.getFieldValue(FieldNames.UPPERCASE_NAME).trim().equals(Constants.EMPTY_STRING)
						&& tagVO.getFieldValue(FieldNames.PORT_FLAG) != null
						&& !tagVO.getFieldValue(FieldNames.PORT_FLAG).trim().equals(Constants.EMPTY_STRING)) {
					cityVo.setCountryGeoCode(tagVO.getFieldValue(FieldNames.RKSTCOUNTRY_CODE).trim());
					cityVo.setCityGeoCode(tagVO.getFieldValue(FieldNames.GEOCODE).trim());
					cityVo.setCityName(tagVO.getFieldValue(FieldNames.UPPERCASE_NAME).trim());
					cityVo.setStatus(tagVO.getFieldValue(FieldNames.STATUS).trim());
					cityVo.setPortFlag(tagVO.getFieldValue(FieldNames.PORT_FLAG).trim());

					if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.INSERT_TRANSACTION)) {
						locationService.insertCity(cityVo);
						return Constants.INSERT_CITY + tagVO.getFieldValue(FieldNames.GEOCODE);
					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.UPDATE_TRANSACTION)) {
						locationService.updateCity(cityVo);
						return Constants.UPDATE_CITY + tagVO.getFieldValue(FieldNames.GEOCODE);
					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.DELETE_TRANSACTION)) {
						locationService.deleteCity(cityVo);
						return Constants.DELETE_CITY + tagVO.getFieldValue(FieldNames.GEOCODE);
					} else if ((tagVO.getFieldValue(FieldNames.TRANSACTION_TYPE).trim())
							.equals(FIELD_NAMES.FORCED_TRANSACTION)) {
						locationService.forcedInsertCity(cityVo);
						return Constants.FORCED_INSERT_CITY + tagVO.getFieldValue(FieldNames.GEOCODE);
					}

				} else {
					logger.error("GEO_ERROR_0011 : Mandatory Fields are missing : Message No: "
							+ tagVO.getParentHeader().getFieldValue(FieldNames.MESSAGE_NUMBER) + " Tag No. "
							+ tagVO.getTagNo() + " GEO Code:- " + tagVO.getFieldValue(FieldNames.GEOCODE)
							+ " RKSTCountry Code:- " + tagVO.getFieldValue(FieldNames.RKSTCOUNTRY_CODE) + " Status:- "
							+ tagVO.getFieldValue(FieldNames.STATUS) + " UpperCase Name:-  "
							+ tagVO.getFieldValue(FieldNames.UPPERCASE_NAME) + " Port Flag:-  "
							+ tagVO.getFieldValue(FieldNames.PORT_FLAG) + "Ignore Processing CITY_TAG");

					return Constants.ERROR_LOADPORT + tagVO.getFieldValue(FieldNames.GEOCODE);
				}

			} else {
				String msg = Constants.ERROR_MSG_PART1
						+ tagVO.getParentHeader().getFieldValue(FieldNames.MESSAGE_NUMBER) + Constants.ERROR_MSG_PART2
						+ tagVO.getTagNo() + Constants.ERROR_MSG_PART3 + tagVO.getName() + Constants.ERROR_MSG_PART4;
				throw new MessagingException(msg);
			}
		} catch (Exception ex) {
			logger.error("Error in ex processTag: ", ex.getLocalizedMessage());
			throw new ServiceException(ex.getLocalizedMessage());
		} // EndTryCatch
		return null;
	}// EndMethod
}// EndClass
