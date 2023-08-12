package com.athena.security;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
public class SecurityLoginController {
    //check preauthorize out

    @GetMapping("/")
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("<h1>Welcome</h1>");
    }

    @GetMapping("/refugee")
    public ResponseEntity<String> user() {
        return ResponseEntity.ok("<h1>Welcome Refugee</h1>");
    }

    @GetMapping("/admin")
    public ResponseEntity<String> admin() {
        return ResponseEntity.ok("<h1>Welcome Admin</h1>");
    }

    @GetMapping("/volunteer")
    public ResponseEntity<String> volunteer() {
        return ResponseEntity.ok("<h1>Welcome Volunteer</h1>");
    }

}

