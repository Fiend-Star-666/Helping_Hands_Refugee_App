package com.athena.primary;

import com.athena.primary.enums.TaskNature;
import com.athena.primary.enums.TaskSeverity;
import com.athena.primary.enums.TaskStatus;
import com.athena.primary.enums.TaskType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@ToString
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @ManyToOne
    @JoinColumn(name = "volunteer_id")
    private Volunteer volunteer;

}