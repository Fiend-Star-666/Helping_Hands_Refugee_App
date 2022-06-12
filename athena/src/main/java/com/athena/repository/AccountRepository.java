package com.athena.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athena.primary.abstrct.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer>{
	Account findByEmailId(String email);
}
