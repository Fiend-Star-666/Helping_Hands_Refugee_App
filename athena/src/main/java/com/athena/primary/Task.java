package com.athena.primary;

import java.time.LocalDate;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.athena.primary.enums.TaskNature;
import com.athena.primary.enums.TaskSeverity;
import com.athena.primary.enums.TaskStatus;
import com.athena.primary.enums.TaskType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
public class Task {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int id;
	
	@Enumerated(EnumType.STRING)
	private TaskNature taskNature;
	
	@Enumerated(EnumType.STRING)
	private TaskSeverity taskSeverity;

	@Enumerated(EnumType.STRING)
	private TaskStatus taskStatus;
	
	@Enumerated(EnumType.STRING)
	private TaskType taskType;
	
	private String subject;
	
	private String description;
	
	private Boolean isDeadline;
	
	@Temporal(TemporalType.DATE)
	private Date taskDeadline;
	
	private Integer taskPeopleNumber;
	
	@JsonBackReference(value = "tasks")
	@ManyToOne
	private Refugee refugee;
	
}