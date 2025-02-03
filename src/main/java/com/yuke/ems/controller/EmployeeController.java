package com.yuke.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yuke.ems.dto.Employee;
import com.yuke.ems.service.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	EmployeeService service ;
	
	// save one Employee
	@PostMapping("/employee")
	public ResponseEntity<Object> saveEmployee(@RequestBody Employee employee){
		return service.save(employee) ;
	}
	
	// save multiple employee
	@PostMapping("/employees")
	public ResponseEntity<Object>saveEmployees(@RequestBody List<Employee> employees){
		return service.save(employees);
	}
	
	// fetch all employees
	@GetMapping("/employees")
	public ResponseEntity<Object> fetchEmployees(){
		return service.fetchAll();
	}
	
	//fetch employee by id
	
	// @GetMapping("/employees/id/{id}")
	// public ResponseEntity<Object> fetchById(@PathVariable int id){
	// 	return service.fetchById(id);
	// }

	//fetch employee by id
	@CrossOrigin(origins = "http://localhost:3000") 
	@GetMapping("/employees/{id}")
	public ResponseEntity<Object> fetchById(@PathVariable int id){
		return service.fetchById(id);
	}
	
	// fetch employee by email
	@GetMapping("/employees/email/{email}")
	public ResponseEntity<Object> fetchByEmail(@PathVariable String email){
		return service.fetchByEmail(email);
	}
	
	// delete employee by id
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Object> delete(@PathVariable int id) {
		return service.delete(id);
	}
	
	// update employee
	
	@PutMapping("/employees")
	public ResponseEntity<Object> updateEmployee(@RequestBody Employee employee){
		return service.update(employee);
	}
	
	// update employee by id
	
	@PatchMapping("/employees/{id}")
	public ResponseEntity<Object> update(@PathVariable int id, @RequestBody Employee employee){
		return service.update(employee, id) ;
	}
	
	
	
	

	
	
}
