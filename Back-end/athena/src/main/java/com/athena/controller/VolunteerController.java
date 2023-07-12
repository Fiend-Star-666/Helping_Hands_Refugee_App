package com.athena.controller;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins = "http://localhost:3001")
public class VolunteerController {
	@Autowired 
	AccountRepository accountRepo;
	
	@Autowired
	VolunteerRepository volunteerRepo;
	
	@Autowired
	PointSystemRepository pointSystemRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/account/create/volunteer")
	public Account registerVolunteer(@RequestBody Map<Object,String> payload) {
		System.out.println(payload);
		
		if(accountRepo.findByEmailId((String)payload.get("emailId"))!=null){
			return null;
		}
		
		Location location = new Location();
		
		location.setStreetAddress((String)payload.get("streetAddress"));
		location.setCity((String)payload.get("city"));
		location.setState((String)payload.get("state"));
		location.setZipcode((String)payload.get("zipCode"));
		location.setCountry((String)payload.get("country"));
		
		Volunteer volunteer = new Volunteer();

		volunteer.setLocation(location);
		
		volunteer.setEmailId((String)payload.get("emailId"));
		volunteer.setPassword(passwordEncoder.encode((String)payload.get("password")));
		
		
		volunteer.setName((String)payload.get("name"));
		volunteer.setPhoneNumber((String)payload.get("phoneNumber"));

		
		volunteer.setPoints(0);
		volunteer.setPointSystem(new PointSystem());
		volunteer.getPointSystem().setPointItem(new ArrayList<>());
		volunteer.getPointSystem().setTotalAmount(0);
		
		volunteer.setRating(0.0);
		volunteer.setNumberOfTaskCompleted(0);
		volunteer.setNumberOfTasksTaken(0);
		
		volunteer.setServices(new ArrayList<>());
		//volunteer.setTasks(new ArrayList<>());
		
		volunteer.setSecurityRoles("ROLE_VOLUNTEER");
		
		pointSystemRepo.save(volunteer.getPointSystem());
		accountRepo.save(volunteer);
		volunteerRepo.save(volunteer);
		return volunteer;
	}
}
