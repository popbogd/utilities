package com.utilities.web;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.social.security.SocialAuthenticationToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utilities.domain.UserInfo;

@RestController
public class GreetingController {

	@RequestMapping("/resource")
	public Map<String, Object> home() {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}

	@RequestMapping("/user")
	public Object user(Principal principal) {
		if (principal instanceof SocialAuthenticationToken) {
			SocialAuthenticationToken socialToken = (SocialAuthenticationToken) principal;
			UserInfo user = new UserInfo();
			user.setEmail(socialToken.getConnection().fetchUserProfile().getEmail());
			user.setDisplayName(socialToken.getConnection().getDisplayName());
			user.setProfileImageUrl(socialToken.getConnection().getImageUrl());
			
			return user;
		}
		return principal;
	}
}
