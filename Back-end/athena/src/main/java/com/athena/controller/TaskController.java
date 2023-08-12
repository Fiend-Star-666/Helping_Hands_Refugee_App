package com.athena.controller;

import com.athena.primary.Task;
import com.athena.primary.enums.TaskNature;
import com.athena.primary.enums.TaskSeverity;
import com.athena.primary.enums.TaskStatus;
import com.athena.primary.enums.TaskType;
import com.athena.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
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
    public ResponseEntity<Task> createTask(@RequestBody Map<String, Object> payload) throws ParseException {
        System.out.println(payload);

        Task task = new Task();

        task.setSubject((String) payload.get("taskSubject"));
        task.setDescription((String) payload.get("taskDescription"));
        task.setIsDeadline((Boolean) payload.get("taskBoolDeadline"));
        if (task.getIsDeadline().equals(true)) {
            task.setTaskDeadline(new SimpleDateFormat("yyyy-MM-dd").parse((String) payload.get("taskDeadline")));
        }

        task.setTaskPeopleNumber(Integer.parseInt((String) payload.get("taskNumberOfPeople")));
        task.setRefugee(refugeeRepo.getReferenceById((Integer) payload.get("refugeeId")));
        task.setTaskStatus(TaskStatus.Available);
        TaskNature taskNature = TaskNature.valueOf((String) payload.get("taskNature"));
        task.setTaskNature(taskNature);
        TaskSeverity taskSeverity = TaskSeverity.valueOf((String) payload.get("taskSeverity"));
        task.setTaskSeverity(taskSeverity);
        task.setTaskType(TaskType.valueOf((String) payload.get("taskType")));

        taskRepo.save(task);
        refugeeRepo.getReferenceById((Integer) payload.get("refugeeId")).getTasks().add(task);
        accountRepo.save(refugeeRepo.getReferenceById((Integer) payload.get("refugeeId")));
        refugeeRepo.save(refugeeRepo.getReferenceById((Integer) payload.get("refugeeId")));

        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }


    @GetMapping("/refugee/task/viewall")
    public ResponseEntity<List<Task>> viewAllTasks() {
        List<Task> tasks = taskRepo.findAll();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }


    @GetMapping("/refugee/task/view/{accid}")
    public ResponseEntity<List<Task>> viewTasksMadeByAccount(@PathVariable int accid) {
        List<Task> tasks = refugeeRepo.findById(accid).get().getTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }


}