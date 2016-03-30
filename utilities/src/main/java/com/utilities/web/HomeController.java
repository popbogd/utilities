package com.utilities.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value = "/")
	public String show() {
		return "home";
	}
	
	@RequestMapping(value = "/login") 
	public String login() {
		return "login";
	}
}
