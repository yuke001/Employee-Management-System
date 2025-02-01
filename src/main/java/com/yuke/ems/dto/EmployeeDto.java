package com.yuke.ems.dto;

import org.springframework.beans.factory.annotation.Autowired;

import com.yuke.ems.entity.Employee;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
	
	
	private long id ;
	private String firstName ;
	private String lastName ;
	private String email ;
	

}
