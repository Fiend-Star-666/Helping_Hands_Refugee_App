package com.athena.controller;

import com.athena.primary.Service;
import com.athena.primary.enums.ServiceType;
import com.athena.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
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
    public ResponseEntity<Service> createService(@RequestBody Map<String, Object> payload) throws ParseException {
        Service service = new Service();

        service.setSubject((String) payload.get("serviceSubject"));
        service.setDescription((String) payload.get("serviceDescription"));
        service.setServiceType(ServiceType.valueOf((String) payload.get("serviceType")));

        if (service.getServiceType().toString().equalsIgnoreCase("Other")) {
            service.setOtherService((String) payload.get("serviceOther"));
        }

        service.setVolunteer(volunteerRepo.getReferenceById((Integer) payload.get("volunteerid")));
        serviceRepo.save(service);
        volunteerRepo.getReferenceById((Integer) payload.get("volunteerid")).getServices().add(service);
        accountRepo.save(volunteerRepo.getReferenceById((Integer) payload.get("volunteerid")));
        volunteerRepo.save(volunteerRepo.getReferenceById((Integer) payload.get("volunteerid")));

        return new ResponseEntity<>(service, HttpStatus.CREATED);
    }


    @GetMapping("/volunteer/service/viewall")
    public ResponseEntity<List<Service>> viewAllService() {
        List<Service> services = serviceRepo.findAll();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/volunteer/service/view/{accid}")
    public ResponseEntity<List<Service>> viewServiceMadeByAccount(@PathVariable int accid) {
        List<Service> services = volunteerRepo.findById(accid).get().getServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

}