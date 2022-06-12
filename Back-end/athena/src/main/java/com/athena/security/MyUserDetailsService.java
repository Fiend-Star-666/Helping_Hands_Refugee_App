package com.athena.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.athena.primary.abstrct.Account;
import com.athena.repository.AccountRepository;
import com.athena.security.jpaModels.MyUserDetails;





@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    AccountRepository accountRepo;

    @Override
    public UserDetails loadUserByUsername(String emailId) {
		
        Account user = accountRepo.findByEmailId(emailId);

        System.out.println("loadbyusername in myuserdetailsService user: "+user);

        if(user==null){

        	new UsernameNotFoundException("Not found hehe1: " + emailId);
        }
        
		MyUserDetails userDetails=new MyUserDetails(user);
        return userDetails;
		

        
        
    }
}
