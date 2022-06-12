package com.athena.primary;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.data.relational.core.mapping.Embedded.Nullable;

import com.athena.primary.abstrct.Account;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Volunteer extends Account{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int id;
	
	private Integer points;
	private Integer numberOfTasksTaken;
	private Integer numberOfTaskCompleted;
	private Double  rating;

	@JsonManagedReference(value = "services")
	@OneToMany
	private List<Service> services;
	
	@OneToOne
	private PointSystem pointSystem;
	
	@Nullable
	@ManyToOne(targetEntity = Task.class)
	private List<Task> tasks; 
}
