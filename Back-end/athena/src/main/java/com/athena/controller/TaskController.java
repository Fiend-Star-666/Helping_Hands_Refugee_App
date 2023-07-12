package com.athena.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athena.primary.Service;
import com.athena.primary.Task;
import com.athena.primary.Volunteer;
import com.athena.primary.enums.TaskNature;
import com.athena.primary.enums.TaskSeverity;
import com.athena.primary.enums.TaskStatus;
import com.athena.primary.enums.TaskType;
import com.athena.repository.AccountRepository;
import com.athena.repository.RefugeeRepository;
import com.athena.repository.ServiceRepository;
import com.athena.repository.TaskRepository;
import com.athena.repository.VolunteerRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3001")
public class TaskController {
	
	@Autowired 
	AccountRepository accountRepo;
	
	@Autowired
	RefugeeRepository refugeeRepo;
	
	@Autowired
	VolunteerRepository volunteerRepo;
	
	@Autowired
	TaskRepository taskRepo;
	
	@Autowired
	ServiceRepository serviceRepo;
	

	@PostMapping("/refugee/create/task")
	public Task createTask(@RequestBody Map<String, Object> payload) throws ParseException {
		System.out.println(payload);
		
		Task task = new Task();
		
		task.setSubject((String)payload.get("taskSubject"));
		task.setDescription((String)payload.get("taskDescription"));
		task.setIsDeadline((Boolean)payload.get("taskBoolDeadline"));
		if(task.getIsDeadline().equals(true)) {
			task.setTaskDeadline(new SimpleDateFormat("yyyy-MM-dd").parse((String)payload.get("taskDeadline")));
		}
		
		task.setTaskPeopleNumber(Integer.parseInt((String)payload.get("taskNumberOfPeople")));
		
		task.setRefugee(refugeeRepo.getReferenceById((Integer)payload.get("refugeeId")));

		task.setTaskStatus(TaskStatus.Available);
		
		TaskNature taskNature = TaskNature.valueOf((String)payload.get("taskNature"));
		task.setTaskNature(taskNature);
		
		TaskSeverity taskSeverity = TaskSeverity.valueOf((String)payload.get("taskSeverity"));
		task.setTaskSeverity(taskSeverity);
		
		task.setTaskType(TaskType.valueOf((String)payload.get("taskType")));
		
		taskRepo.save(task);
		
		refugeeRepo.getReferenceById((Integer)payload.get("refugeeId")).getTasks().add(task);
			
		accountRepo.save(refugeeRepo.getReferenceById((Integer)payload.get("refugeeId")));
		refugeeRepo.save(refugeeRepo.getReferenceById((Integer)payload.get("refugeeId")));
		return task;
	}
	
	@GetMapping("/refugee/task/viewall")
	public List<Task> viewAllTasks(){
		List<Task>	tasks = taskRepo.findAll();
		return tasks;
	}
	
	@GetMapping("/refugee/task/view/{accid}")
	public List<Task> viewTasksMadeByAccount(@PathVariable int accid){
		List<Task> tasks = refugeeRepo.findById(accid).get().getTasks();
		
		return tasks;
	}
	
	
	
}