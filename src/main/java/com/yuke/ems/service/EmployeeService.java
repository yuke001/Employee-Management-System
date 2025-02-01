package com.yuke.ems.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.yuke.ems.dto.Employee;
import com.yuke.ems.repository.EmployeeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeService {

	@Autowired
	EmployeeRepository repository;

	// save multiple employees
	public ResponseEntity<Object> save(Employee employee) {
		if (repository.existsByEmail(employee.getEmail())) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("error", "Email Already Exists");
			return new ResponseEntity<Object>(map, HttpStatus.UNPROCESSABLE_ENTITY);

		} else {
			repository.save(employee);
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("message", "Record Saved Success");
			map.put("data", employee);
			return new ResponseEntity<Object>(map, HttpStatus.CREATED);
		}
	}

	// save single employee

	public ResponseEntity<Object> save(List<Employee> employees) {
		for (Employee employee : employees) {
			if (repository.existsByEmail(employee.getEmail())) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("error", "Mobile Number Already Exists");
				return new ResponseEntity<Object>(map, HttpStatus.UNPROCESSABLE_ENTITY);
			}
		}
		repository.saveAll(employees);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("message", "Record Saved Success");
		map.put("data", employees);
		return new ResponseEntity<Object>(map, HttpStatus.CREATED);

	}

	public ResponseEntity<Object> fetchAll() {
		List<Employee> employees = repository.findAll();
		
		if(employees.isEmpty()) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("error", "No Data Present in Database");
			return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
		}
		else {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("message", "Record Found Success");
			map.put("data", employees);
			return new ResponseEntity<Object>(map, HttpStatus.OK);
		}
	}

	public ResponseEntity<Object> fetchById(int id) {
		Optional<Employee> optional = repository.findById(id);
		
		if(optional.isEmpty()) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("error", "No Record Found with Id: " + id);
			return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
		}
		else {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("message", "Record Found Success");
			map.put("data", optional.get());
			return new ResponseEntity<Object>(map, HttpStatus.OK);
		}
		
	}

	public ResponseEntity<Object> fetchByEmail(String email) {
		Optional<Employee> optional = repository.findByEmail(email);
		if (optional.isEmpty()) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("error", "No Record Found with Mobile: " + email);
			return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
		} else {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("message", "Record Found Success");
			map.put("data", optional.get());
			return new ResponseEntity<Object>(map, HttpStatus.OK);
		}
	}

	public ResponseEntity<Object> delete(int id) {
		if(repository.findById(id).isEmpty()) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("error", "No Data Present with Id: " + id);
			return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
		}else {
			repository.deleteById(id);
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("message", "Record Deleted Success");
			return new ResponseEntity<Object>(map, HttpStatus.OK);
		}
	}

	public ResponseEntity<Object> update(Employee employee) {
	    if (employee.getId() == null|| !repository.existsById(employee.getId())) {
	        Map<String, Object> map = new HashMap<>();
	        map.put("error", "No Data Present with Id: " + employee.getId());
	        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
	    }

	    // Update employee with new data
	    repository.save(employee);
	    Map<String, Object> map = new HashMap<>();
	    map.put("message", "Record Updated Successfully");
	    return new ResponseEntity<>(map, HttpStatus.OK);
	}

	
	public ResponseEntity<Object> update(Employee employee, int id) {
	    Optional<Employee> existingEmployee = repository.findById(id);
	    if (existingEmployee.isEmpty()) {
	        Map<String, Object> map = new HashMap<>();
	        map.put("error", "No Data Present with Id: " + id);
	        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
	    }

	    Employee employeeToUpdate = existingEmployee.get();
	    employeeToUpdate.setFirstName(employee.getFirstName());
	    employeeToUpdate.setLastName(employee.getLastName());
	    employeeToUpdate.setEmail(employee.getEmail());
	    repository.save(employeeToUpdate);

	    Map<String, Object> map = new HashMap<>();
	    map.put("message", "Record Updated Successfully");
	    return new ResponseEntity<>(map, HttpStatus.OK);
	}
	
	
	
	
	
	
	

}

















