package com.athena.primary.abstrct;

import com.athena.simplePOJO.Location;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private String emailId;

    private String password;

    private String name;

    private String securityRoles;    //security

    private String phoneNumber;

    @Embedded
    private Location location;


}
