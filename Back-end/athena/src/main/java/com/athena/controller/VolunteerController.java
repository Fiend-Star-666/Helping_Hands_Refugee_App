package com.athena.controller;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athena.primary.PointSystem;
import com.athena.primary.Refugee;
import com.athena.primary.Volunteer;
import com.athena.primary.abstrct.Account;
import com.athena.repository.AccountRepository;
import com.athena.repository.PointSystemRepository;
import com.athena.repository.RefugeeRepository;
import com.athena.repository.VolunteerRepository;
import com.athena.simplePOJO.Location;

@RestController
@RequestMapping("/api/v1")
public class VolunteerController {
	private static final Integer DEFAULT_POINTS = 0;

	@Autowired 
	AccountRepository accountRepo;
	
	@Autowired
	VolunteerRepository volunteerRepo;
	
	@Autowired
	PointSystemRepository pointSystemRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/account/create/volunteer")
	public ResponseEntity<Account> registerVolunteer(@RequestBody Map<Object,String> payload) {
		System.out.println(payload);

		if(accountRepo.findByEmailId(payload.get("emailId")) != null) {
			return new ResponseEntity<>(null, HttpStatus.CONFLICT);
		}

		Location location = new Location();
		location.setStreetAddress(payload.get("streetAddress"));
		location.setCity(payload.get("city"));
		location.setState(payload.get("state"));
		location.setZipcode(payload.get("zipCode"));
		location.setCountry(payload.get("country"));

		Volunteer volunteer = new Volunteer();
		volunteer.setLocation(location);
		volunteer.setEmailId(payload.get("emailId"));
		volunteer.setPassword(passwordEncoder.encode(payload.get("password")));
		volunteer.setName(payload.get("name"));
		volunteer.setPhoneNumber(payload.get("phoneNumber"));
		volunteer.setPoints(DEFAULT_POINTS);
		volunteer.setPointSystem(new PointSystem());
		volunteer.getPointSystem().setPointItem(new ArrayList<>());
		volunteer.getPointSystem().setTotalAmount(DEFAULT_POINTS);
		volunteer.setRating(Double.valueOf(DEFAULT_POINTS));
		volunteer.setNumberOfTaskCompleted(DEFAULT_POINTS);
		volunteer.setNumberOfTasksTaken(DEFAULT_POINTS);
		volunteer.setServices(new ArrayList<>());
		volunteer.setSecurityRoles("ROLE_VOLUNTEER");

		pointSystemRepo.save(volunteer.getPointSystem());
		accountRepo.save(volunteer);
		volunteerRepo.save(volunteer);

		return new ResponseEntity<>(volunteer, HttpStatus.CREATED);
	}

}
