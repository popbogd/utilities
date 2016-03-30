package com.utilities.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.social.security.SocialUserDetailsService;
import org.springframework.social.security.SpringSocialConfigurer;

import com.utilities.service.SimpleSocialUsersDetailService;
import com.utilities.web.filter.CsrfHeaderFilter;

@Configuration
@EnableWebSecurity
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.formLogin()
					.loginPage("/login")
					.defaultSuccessUrl("/")
					.permitAll()
				.and()
					.logout()
						.logoutSuccessUrl("/index.html")
				.and()
				.authorizeRequests()
					.antMatchers("/static/**","/webjars/**","/fonts/**", "/js/**", "/css/**", "/connect/*")
						.permitAll()
					.antMatchers("/admin/**")
						.hasRole("ADMIN")
					.anyRequest()
						.authenticated()
				.and()
					.addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
						.csrf().csrfTokenRepository(csrfTokenRepository())
				.and()
					.rememberMe()
				.and()
					.apply(new SpringSocialConfigurer().postLoginUrl("/"));

	}

	private CsrfTokenRepository csrfTokenRepository() {
		HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
		repository.setHeaderName("X-XSRF-TOKEN");
		return repository;
	}

	@Autowired
	public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
		//TODO add JDBC support
		auth.userDetailsService(inMemoryUserDetailsManager());
	}
	
	@Bean
	public SocialUserDetailsService socialUsersDetailService() {
	    return new SimpleSocialUsersDetailService(userDetailsService());
	}
	
	@Bean
    public InMemoryUserDetailsManager inMemoryUserDetailsManager() {
        final Properties users = new Properties();
        users.put("user","pass,ROLE_USER,enabled"); //add whatever other user you need
        users.put("admin", "admin,ROLE_USER,ROLE_ADMIN,enabled");
        users.put("audit", "audit,ROLE_READER,enabled");
        return new InMemoryUserDetailsManager(users);
    }
	
}
