package com.athena.primary;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class PointSystem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Integer totalAmount;

    @JsonManagedReference(value = "pointItem")
    @OneToMany(mappedBy = "pointSystem")
    private List<PointItem> pointItem;

}
