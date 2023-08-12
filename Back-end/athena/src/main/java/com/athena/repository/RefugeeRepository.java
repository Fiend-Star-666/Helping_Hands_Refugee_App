package com.athena.repository;

import com.athena.primary.Refugee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefugeeRepository extends JpaRepository<Refugee, Integer> {

}
