package com.athena.primary;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import com.athena.primary.abstrct.Account;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Admin extends Account{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)  
	private int id;
	
	private Date dateJoined;
	

}
