package com.athena.primary.abstrct;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.athena.simplePOJO.Location;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public abstract class Account {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String emailId;
	
	private String password;
	
	private String name;
	
    private String securityRoles;	//security

    private String phoneNumber;

	@Embedded
	private Location location;
	
	
}
