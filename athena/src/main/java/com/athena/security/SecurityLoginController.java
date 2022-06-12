package com.athena.security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityLoginController {
	//check preauthorize out

    @GetMapping("/")
    public String home() {
        return ("<h1>Welcome</h1>");
    }

    @GetMapping("/refugee")
    public String user() {
        return ("<h1>Welcome Refugee</h1>");
    }
    
    @GetMapping("/admin")
    public String admin() {
        return ("<h1>Welcome Admin</h1>");
    }
    
    @GetMapping("/volunteer")
    public String volunteer() {
        return ("<h1>Welcome Volunteer</h1>");
    }
   
    
}

