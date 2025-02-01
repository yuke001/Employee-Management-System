package com.yuke.ems.mapper;

import com.yuke.ems.dto.EmployeeDto;
import com.yuke.ems.entity.Employee;

public class EmployeeMapper {
	
	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(
			employee.getId(),
			employee.getFirstName(),
			employee.getLastName(),
			employee.getEmail()
		);
	}
}
