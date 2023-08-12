package com.athena.repository;

import com.athena.primary.PointSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PointSystemRepository extends JpaRepository<PointSystem, Integer> {

}
