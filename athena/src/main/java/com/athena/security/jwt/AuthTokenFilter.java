package com.athena.security.jwt;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.athena.primary.abstrct.Account;
import com.athena.security.MyUserDetailsService;


public class AuthTokenFilter extends OncePerRequestFilter{
	 @Autowired
	  private JwtUtils jwtUtils;
	 
	  @Autowired
	    com.athena.repository.AccountRepository accountRepo;
	 
	  @Autowired
	  private MyUserDetailsService userDetailsService;

	  private static final Logger logger = LoggerFactory.getLogger(AuthTokenFilter.class);

	  @Override
	  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
	      throws ServletException, IOException {
	    try {
	      String jwt = parseJwt(request);
	      if(jwt != null && jwtUtils.validateJwtToken(jwt)) {
	        String emailId = jwtUtils.getUserNameFromJwtToken(jwt);
	        
	        Account user = accountRepo.findByEmailId(emailId);
	        UserDetails userDetails = userDetailsService.loadUserByUsername(emailId);
	        System.out.println("authtokenfilter");
	        UsernamePasswordAuthenticationToken authentication =
	            new UsernamePasswordAuthenticationToken(
	                userDetails.getUsername(),
	                userDetails.getPassword(),
	                userDetails.getAuthorities());
	        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

	        SecurityContextHolder.getContext().setAuthentication(authentication);
	      }
	    } catch (Exception e) {
	      logger.error("Cannot set user hehe authentication: {}", e);
	    }

	    filterChain.doFilter(request, response);
	  }

	  private String parseJwt(HttpServletRequest request) {
	    String headerAuth = request.getHeader("Authorization");
	    System.out.println("parsejwt");
	    System.out.println(request.getHeader("Authorization"));
	    if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer")) {
	      return headerAuth.substring(7, headerAuth.length());
	    }

	    return null;
	  }
}
