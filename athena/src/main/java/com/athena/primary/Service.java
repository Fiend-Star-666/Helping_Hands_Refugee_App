package com.athena.primary;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.athena.primary.enums.ServiceType;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Service {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int id;
	
	@Enumerated(EnumType.STRING)
	private ServiceType serviceType;
	
	private String otherService;
	
	private String subject;
	
	private String description;
	
	@JsonBackReference(value = "services")
	@ManyToOne
	private Volunteer volunteer;
	
	
}
