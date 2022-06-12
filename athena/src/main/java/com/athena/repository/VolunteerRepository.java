package com.athena.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athena.primary.Volunteer;
@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Integer>{

}
