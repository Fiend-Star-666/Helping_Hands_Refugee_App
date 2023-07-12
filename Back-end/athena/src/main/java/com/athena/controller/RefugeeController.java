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

import com.athena.primary.Refugee;
import com.athena.primary.abstrct.Account;
import com.athena.repository.AccountRepository;
import com.athena.repository.PointSystemRepository;
import com.athena.repository.RefugeeRepository;
import com.athena.simplePOJO.Location;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3001")
public class RefugeeController {
	
	@Autowired 
	AccountRepository accountRepo;
	
	@Autowired
	RefugeeRepository refugeeRepo;
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/account/create/refugee")
	public Account registerRefugee(@RequestBody Map<Object,String> payload) {
		System.out.println(payload);
		
		if(accountRepo.findByEmailId((String)payload.get("emailId"))!=null){
			return null;
		}
		
		//refugee is a complex Object 
		//meaning that it is a Object that contains another Object inside it.
		
		
		Location location = new Location();
		
		location.setStreetAddress((String)payload.get("streetAddress"));
		location.setCity((String)payload.get("city"));
		location.setState((String)payload.get("state"));
		location.setZipcode((String)payload.get("zipCode"));
		location.setCountry((String)payload.get("country"));
		
		Refugee refugee = new Refugee();

		refugee.setLocation(location);
		
		refugee.setEmailId((String)payload.get("emailId"));
		refugee.setPassword(passwordEncoder.encode((String)payload.get("password")));
		
		
		refugee.setName((String)payload.get("name"));
		refugee.setPhoneNumber((String)payload.get("phoneNumber"));

		refugee.setSizeOfGroup(Integer.parseInt((String)payload.get("sizeOfGroup")));
		refugee.setNumberOfAdults(Integer.parseInt((String)payload.get("numberOfAdults")));
		refugee.setNumberOfChildren(Integer.parseInt((String)payload.get("numberOfChildren")));
		
		
		refugee.setTasks(new ArrayList<>());
		//refugee.setServices(new ArrayList<>());
		
		refugee.setSecurityRoles("ROLE_REFUGEE");

		accountRepo.save(refugee);
		refugeeRepo.save(refugee);
		
		System.out.println("Success");
		return refugee;
	}
}
