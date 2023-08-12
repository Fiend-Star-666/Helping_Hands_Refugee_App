package com.athena.simplePOJO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Embeddable;

@Getter
@Setter
@ToString
@Embeddable
public class Location {
    private String streetAddress;
    private String city;
    private String state;
    private String zipcode;
    private String country;
}
