package com.athena.primary;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class PointItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)  
	private int id;
		
	private String service;
	
	private Double amount;
	
	@JsonBackReference(value = "pointItem")
	@ManyToOne(optional = false)
	private PointSystem pointSystem;
}
