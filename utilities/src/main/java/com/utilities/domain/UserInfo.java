package com.utilities.domain;

import org.springframework.util.StringUtils;

public class UserInfo {

	private int userId;
	private String displayName;
	private String profileImageUrl;
	private String email;
	private boolean hasProfileImage;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public String getProfileImageUrl() {
		return profileImageUrl;
	}

	public void setProfileImageUrl(String profileImageUrl) {
		if (StringUtils.hasLength(profileImageUrl)) {
			hasProfileImage = true;
		} else {
			hasProfileImage = false;
		}

		this.profileImageUrl = profileImageUrl;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isHasProfileImage() {
		return hasProfileImage;
	}

	public void setHasProfileImage(boolean hasProfileImage) {
		this.hasProfileImage = hasProfileImage;
	}

}
