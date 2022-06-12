package com.athena.primary;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class PointSystem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)  
	private int id;
	
	private Integer totalAmount;
	
	@JsonManagedReference(value = "pointItem")
	@OneToMany(mappedBy="pointSystem")
	private List<PointItem> pointItem;
	
	
	
}
