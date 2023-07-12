package com.athena.controller;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athena.primary.Service;
import com.athena.primary.Task;
import com.athena.primary.enums.ServiceType;
import com.athena.repository.AccountRepository;
import com.athena.repository.RefugeeRepository;
import com.athena.repository.ServiceRepository;
import com.athena.repository.TaskRepository;
import com.athena.repository.VolunteerRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3001")
public class ServiceController {

	@Autowired 
	AccountRepository accountRepo;
	
	@Autowired
	RefugeeRepository refugeeRepo;
	
	@Autowired
	VolunteerRepository volunteerRepo;
	
	@Autowired
	TaskRepository taskRepo;
	
	@Autowired
	ServiceRepository serviceRepo;
	
	@PostMapping("/volunteer/create/service")
	public Service createService(@RequestBody Map<String, Object> payload) throws ParseException {
		
		Service service = new Service();
		
		service.setSubject((String)payload.get("serviceSubject"));
		service.setDescription((String)payload.get("serviceDescription"));
		
		service.setServiceType(ServiceType.valueOf((String)payload.get("serviceType")));
		
		if(service.getServiceType().toString().equalsIgnoreCase("Other")) {
			service.setOtherService((String)payload.get("serviceOther"));
		}

		service.setVolunteer(volunteerRepo.getReferenceById((Integer)payload.get("volunteerid")));
		
		serviceRepo.save(service);
	
		volunteerRepo.getReferenceById((Integer)payload.get("volunteerid")).getServices().add(service);
	
		accountRepo.save(volunteerRepo.getReferenceById((Integer)payload.get("volunteerid")));
		volunteerRepo.save(volunteerRepo.getReferenceById((Integer)payload.get("volunteerid")));
		
		return service;
	}
	
	@GetMapping("/volunteer/service/viewall")
	public List<Service> viewAllService(){
		List<Service>	services = serviceRepo.findAll();
		return services;
	}
	
	@GetMapping("/volunteer/service/view/{accid}")
	public List<Service> viewServiceMadeByAccount(@PathVariable int accid){
		List<Service> services = volunteerRepo.findById(accid).get().getServices();
		
		return services;
	}

}	


/*
 * 		/*new ArrayList<>();
		
		String role = (String)payload.get("roles");
		int accid = Integer.parseInt((String)payload.get("accId"));
		if(role.equalsIgnoreCase("role_volunteer")) {
			services=volunteerRepo.findById(accid).get().getServices();
		}
		
		if(role.equalsIgnoreCase("role_refugee")) {
			services=volunteerRepo.findById(accid).get().getServices();
		}
		*/