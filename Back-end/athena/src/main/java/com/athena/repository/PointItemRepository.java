package com.athena.repository;

import com.athena.primary.PointItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PointItemRepository extends JpaRepository<PointItem, Integer> {

}
