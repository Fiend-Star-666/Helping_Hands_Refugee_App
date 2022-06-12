package com.athena.security.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	  @GetMapping("/all")
	  public String allAccess() {
	    System.out.println("reached here");
		  return "Public Content.";
	  }

	 @GetMapping("/refugee")
	 @PreAuthorize("hasRole('ADMIN') or hasRole('REFUGEE')")
	  public String refugeeAccess() {
	    return "REFUGEE Content.";
	  }

	  @GetMapping("/admin")
	  @PreAuthorize("hasRole('ADMIN')")
	  public String adminAccess() {
	    return "Admin Board.";
	  }
	  
	  @GetMapping("/volunteer")
	  @PreAuthorize("hasRole('ADMIN') or hasRole('VOLUNTEER')")
	  public String volunteerAccess() {
	    return "Volunteer Board.";
	  }
}
