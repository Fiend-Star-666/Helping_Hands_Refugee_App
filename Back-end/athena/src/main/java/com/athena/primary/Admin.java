package com.athena.primary;

import com.athena.primary.abstrct.Account;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import java.util.Date;

@Getter
@Setter
@Entity
public class Admin extends Account {

    private Date dateJoined;


}
