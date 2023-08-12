package com.athena.controller;

import com.athena.primary.Refugee;
import com.athena.primary.abstrct.Account;
import com.athena.repository.AccountRepository;
import com.athena.repository.RefugeeRepository;
import com.athena.simplePOJO.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class RefugeeController {

    @Autowired
    AccountRepository accountRepo;

    @Autowired
    RefugeeRepository refugeeRepo;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/account/create/refugee")
    public ResponseEntity<Account> registerRefugee(@RequestBody Map<Object, String> payload) {
        System.out.println(payload);

        if (accountRepo.findByEmailId(payload.get("emailId")) != null) {
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }

        Location location = new Location();
        location.setStreetAddress(payload.get("streetAddress"));
        location.setCity(payload.get("city"));
        location.setState(payload.get("state"));
        location.setZipcode(payload.get("zipCode"));
        location.setCountry(payload.get("country"));

        Refugee refugee = new Refugee();
        refugee.setLocation(location);
        refugee.setEmailId(payload.get("emailId"));
        refugee.setPassword(passwordEncoder.encode(payload.get("password")));
        refugee.setName(payload.get("name"));
        refugee.setPhoneNumber(payload.get("phoneNumber"));
        refugee.setSizeOfGroup(Integer.parseInt(payload.get("sizeOfGroup")));
        refugee.setNumberOfAdults(Integer.parseInt(payload.get("numberOfAdults")));
        refugee.setNumberOfChildren(Integer.parseInt(payload.get("numberOfChildren")));
        refugee.setTasks(new ArrayList<>());
        refugee.setSecurityRoles("ROLE_REFUGEE");

        accountRepo.save(refugee);
        refugeeRepo.save(refugee);

        System.out.println("Success");
        return new ResponseEntity<>(refugee, HttpStatus.CREATED);
    }

}
