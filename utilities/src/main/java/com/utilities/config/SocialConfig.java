package com.utilities.config;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.social.UserIdSource;
import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.social.config.annotation.SocialConfigurerAdapter;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.mem.InMemoryUsersConnectionRepository;
import org.springframework.social.security.AuthenticationNameUserIdSource;

@Configuration
@EnableSocial
public class SocialConfig extends SocialConfigurerAdapter  {

	@Override
	public UserIdSource getUserIdSource() {
		 return new AuthenticationNameUserIdSource();
	}
	
	@Autowired
	private InMemoryUserDetailsManager manager;

	@Override
	public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator connectionFactoryLocator) {
		//TODO add JDBC support
//		  JdbcUsersConnectionRepository repository = new JdbcUsersConnectionRepository(dataSource,connectionFactoryLocator, Encryptors.noOpText());
//	        repository.setConnectionSignUp(new AccountConnectionSignUpService(usersDao));
//	        return repository;
		InMemoryUsersConnectionRepository mem = new InMemoryUsersConnectionRepository(connectionFactoryLocator);
		
		
		mem.setConnectionSignUp(new ConnectionSignUp() {
			
			@Override
			public String execute(Connection<?> connection) {
				manager.createUser(new User(connection.getKey().getProviderUserId(), "test", new ArrayList<GrantedAuthority>()));
				return connection.getKey().getProviderUserId();
			}
		});
		return mem;
		
		
	}

}
