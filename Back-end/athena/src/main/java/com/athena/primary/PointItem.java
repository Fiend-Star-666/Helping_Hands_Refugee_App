package com.athena.primary;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class PointItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String service;

    private Double amount;

    @JsonBackReference(value = "pointItem")
    @ManyToOne(optional = false)
    private PointSystem pointSystem;
}
