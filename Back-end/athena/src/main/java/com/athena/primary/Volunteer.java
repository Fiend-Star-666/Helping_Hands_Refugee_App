package com.athena.primary;

import com.athena.primary.abstrct.Account;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;

@Getter
@Setter
@Entity
public class Volunteer extends Account {

    private Integer points;
    private Integer numberOfTasksTaken;
    private Integer numberOfTaskCompleted;
    private Double rating;

    @JsonManagedReference(value = "volunteer-services")
    @OneToMany(mappedBy = "volunteer")
    private List<Service> services;

    @OneToOne
    private PointSystem pointSystem;

    @OneToMany(mappedBy = "volunteer")
    private List<Task> tasks;
}
