package com.athena.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.athena.security.jwt.AuthEntryPointJwt;
import com.athena.security.jwt.AuthTokenFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;
    

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;
    
    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
    	System.out.println("authorisation auth token filter");
      return new AuthTokenFilter();
    }
    
    //authentication
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(encoder());
    }
    
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
      return super.authenticationManagerBean();
    }
    
    //First Authentication then Authorization
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        
        http.cors().and().csrf().disable()
        .exceptionHandling().authenticationEntryPoint( unauthorizedHandler).and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
        .authorizeRequests().antMatchers("/api/v1/**").permitAll()
        .antMatchers("/api/v1/test/all").permitAll()
        .antMatchers("/api/v1/test/refugee").hasAnyRole("REFUGEE","ADMIN")
        .antMatchers("/api/v1/test/volunteer").hasAnyRole("VOLUNTEER","ADMIN")
        .antMatchers("/api/v1/test/admin").hasRole("ADMIN")
        .anyRequest().authenticated();
       
        System.out.println("configure authorisation 1");
       
      http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
      
      System.out.println("configure authorisation 2");
        
    }
    
    // Bcrypt
    @Bean
	public PasswordEncoder encoder() {
    	return new BCryptPasswordEncoder();
    	//return NoOpPasswordEncoder.getInstance(); //Simple text password
        
    }
    
    
}