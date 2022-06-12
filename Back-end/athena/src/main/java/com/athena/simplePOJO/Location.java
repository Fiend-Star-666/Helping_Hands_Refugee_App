package com.athena.simplePOJO;

import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

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
