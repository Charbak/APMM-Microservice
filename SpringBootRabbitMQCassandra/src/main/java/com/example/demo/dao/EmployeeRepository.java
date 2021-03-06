package com.example.demo.dao;

import java.util.List;

import org.springframework.data.cassandra.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Employee;

/**
 * @author ANTARAMUKHERJEE
 *
 */
public interface EmployeeRepository extends CrudRepository<Employee, String>{
	@Query("Select * from employee where firstname=?0")
	Employee findByFirstName(String firstName);

	@Query("Select * from employee where lastname=?0")
	List<Employee> findByLastName(String lastName);

}
