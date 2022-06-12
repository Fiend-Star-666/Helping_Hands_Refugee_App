package com.athena.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athena.primary.Refugee;
@Repository
public interface RefugeeRepository extends JpaRepository<Refugee, Integer>{

}
