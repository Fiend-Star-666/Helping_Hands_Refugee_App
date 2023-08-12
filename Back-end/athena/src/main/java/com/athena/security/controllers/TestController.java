package com.athena.security.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

	@GetMapping("/all")
	public ResponseEntity<String> allAccess() {
		System.out.println("reached here");
		return ResponseEntity.ok("Public Content.");
	}

	@GetMapping("/refugee")
	@PreAuthorize("hasRole('ADMIN') or hasRole('REFUGEE')")
	public ResponseEntity<String> refugeeAccess() {
		return ResponseEntity.ok("REFUGEE Content.");
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> adminAccess() {
		return ResponseEntity.ok("Admin Board.");
	}

	@GetMapping("/volunteer")
	@PreAuthorize("hasRole('ADMIN') or hasRole('VOLUNTEER')")
	public ResponseEntity<String> volunteerAccess() {
		return ResponseEntity.ok("Volunteer Board.");
	}
}
