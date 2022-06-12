package com.athena.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athena.primary.Task;
@Repository
public interface TaskRepository extends JpaRepository<Task, Integer>{

}
