package com.athena.primary;

import com.athena.primary.enums.ServiceType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;

    private String otherService;

    private String subject;

    private String description;

    @JsonBackReference(value = "volunteer-services")
    @ManyToOne
    private Volunteer volunteer;

    @ManyToMany(mappedBy = "services")
    private List<Refugee> refugees;
}
