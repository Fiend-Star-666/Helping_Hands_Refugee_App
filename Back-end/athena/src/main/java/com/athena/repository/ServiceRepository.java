package com.athena.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athena.primary.Service;
@Repository
public interface ServiceRepository extends JpaRepository<Service, Integer>{

}
