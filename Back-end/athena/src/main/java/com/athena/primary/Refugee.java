package com.athena.primary;

import com.athena.primary.abstrct.Account;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Getter
@Setter
@Entity
public class Refugee extends Account {

    private Integer sizeOfGroup;
    private Integer numberOfAdults;
    private Integer numberOfChildren;

    @JsonManagedReference(value = "tasks")
    @OneToMany(mappedBy = "refugee")
    private List<Task> tasks;

    @JsonBackReference(value = "refugees-services")
    @ManyToMany
    private List<Service> services;
}
