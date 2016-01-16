package com.mkyong.web.controller;

import com.google.maps.GeoApiContext;
import com.google.maps.model.PlacesSearchResponse;
import com.mkyong.web.location.ServerLocation;
import com.mkyong.web.location.ServerLocationBo;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.PostConstruct;
import java.util.concurrent.TimeUnit;

import static com.google.maps.PlacesApi.textSearchQuery;

@Controller
public class MapController {

	@PostConstruct
	public void init(){}

	@Autowired
	ServerLocationBo serverLocationBo;

	public MapController(GeoApiContext context) {
		this.context = context
				.setConnectTimeout(2, TimeUnit.SECONDS)
				.setReadTimeout(2, TimeUnit.SECONDS)
				.setWriteTimeout(2, TimeUnit.SECONDS);
	}

	private GeoApiContext context;

	@RequestMapping(value = "/map", method = RequestMethod.GET)
	public ModelAndView getPages() {

		ModelAndView model = new ModelAndView("map");
		return model;

	}

	@RequestMapping(value = "/getLocationByIpAddress", method = RequestMethod.GET)
	public @ResponseBody
	String getDomainInJsonFormat(@RequestParam String ipAddress) {

		ObjectMapper mapper = new ObjectMapper();

		try {
			PlacesSearchResponse response = textSearchQuery(context, "Google Sydney").await();
		} catch (Exception e) {
			e.printStackTrace();
		}

		ServerLocation location = serverLocationBo.getLocation(ipAddress);

		String result = "";

		try {
			result = mapper.writeValueAsString(location);
		} catch (Exception e) {

			e.printStackTrace();
		}

		return result;

	}

}
