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
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Refugee extends Account{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int id;
	
	private Integer sizeOfGroup;
	private Integer numberOfAdults;
	private Integer numberOfChildren;
	
	@JsonManagedReference(value = "tasks")
	@OneToMany
	private List<Task> tasks;
	
	@Nullable
	@ManyToOne(targetEntity = Service.class)
	private List<Service> services;	
}
