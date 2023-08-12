package com.athena.security.controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athena.repository.AccountRepository;
import com.athena.security.MyUserDetailsService;
import com.athena.security.jpaModels.MyUserDetails;
import com.athena.security.jwt.JwtUtils;
import com.athena.security.payload.JwtResponse;



@RestController
@RequestMapping("/api/v1")
public class AuthController {
	 @Autowired
	  AuthenticationManager authenticationManager;

	 @Autowired
	 AccountRepository   accountRepo;
   
	  @Autowired
	  PasswordEncoder encoder;

	  @Autowired
	  JwtUtils jwtUtils;

	 
	  @Autowired
	  private MyUserDetailsService userDetailsService;
	  
	  @PostMapping("/signin")
	  public ResponseEntity<?> authenticateUser( @RequestBody Map<String,String> Payload ) {
		  System.out.println(Payload);
		  String emailId=(String)Payload.get("email");
		  
		  String password=(String)Payload.get("password");
		  
	        //UserDetails userDetails = userDetailsService.loadUserByUsername(emailId);
	        System.out.println("hehe1");
	    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(emailId,password));
		  System.out.println("hehe2");

	    SecurityContextHolder.getContext().setAuthentication(authentication);
		  System.out.println("hehe3");

	    String jwt = jwtUtils.generateJwtToken(authentication);
	    System.out.println("hehe4");
	    
	    MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();    
		  System.out.println("hehe5");

	    List<String> roles = userDetails.getAuthorities().stream()
	        .map(item -> item.getAuthority())
	        .collect(Collectors.toList());
		  System.out.println("hehe6");

	    return ResponseEntity.ok(new JwtResponse(jwt,
	                         userDetails.getType(),
	    					userDetails.getAccId(),
	                         userDetails.getUsername(),
	                         roles));
	  }

	  
}
/*
 * @PostMapping("/signup")
	  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
	    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new MessageResponse("Error: Username is already taken!"));
	    }

	    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new MessageResponse("Error: Email is already in use!"));
	    }

	    // Create new user's account
	    User user = new User(signUpRequest.getUsername(), 
	               signUpRequest.getEmail(),
	               encoder.encode(signUpRequest.getPassword()));

	    Set<String> strRoles = signUpRequest.getRole();
	    Set<Role> roles = new HashSet<>();

	    if (strRoles == null) {
	      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
	          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	      roles.add(userRole);
	    } else {
	      strRoles.forEach(role -> {
	        switch (role) {
	        case "admin":
	          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(adminRole);

	          break;
	        case "mod":
	          Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(modRole);

	          break;
	        default:
	          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(userRole);
	        }
	      });
	    }

	    user.setRoles(roles);
	    userRepository.save(user);

	    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	  }
 */
