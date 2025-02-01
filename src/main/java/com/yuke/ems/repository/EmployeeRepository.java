package com.yuke.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yuke.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	

}
