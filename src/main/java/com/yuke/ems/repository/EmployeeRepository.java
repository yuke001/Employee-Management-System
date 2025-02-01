package com.yuke.ems.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yuke.ems.dto.Employee;



public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	boolean existsByEmail(String email);

	Optional<Employee> findByEmail(String email);
	
	

}
