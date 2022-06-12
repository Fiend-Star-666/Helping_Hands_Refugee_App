package com.athena.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athena.primary.PointSystem;
@Repository
public interface PointSystemRepository extends JpaRepository<PointSystem, Integer>{

}
