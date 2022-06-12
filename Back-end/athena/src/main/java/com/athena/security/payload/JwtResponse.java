package com.athena.security.payload;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class JwtResponse {
	
	  private String token;
	  private String type = "Bearer";
	  private int accid;
	  private String email;
	  private List<String> roles;
	  
}
