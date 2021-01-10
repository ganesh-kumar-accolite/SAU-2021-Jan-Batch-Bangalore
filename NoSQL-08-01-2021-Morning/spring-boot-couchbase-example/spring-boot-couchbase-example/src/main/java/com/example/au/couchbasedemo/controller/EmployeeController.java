package com.example.au.couchbasedemo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.au.couchbasedemo.model.Employee;
import com.example.au.couchbasedemo.repository.EmployeeRepository;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    /*
     * @RequestMapping("/") public String index() { return
     * "Welcome to the CRUD application!!"; }
     */

    @PostMapping("/Employee")
    public Employee addEmployee(@RequestBody Employee newEmployee) {
        return employeeRepository.save(newEmployee);
    }

    @GetMapping("/Employee/{empId}")
    public Optional<Employee> getEmployee(@PathVariable String empId) {
        if (employeeRepository.existsById(empId)) {
            return employeeRepository.findById(empId);
        } else
            return Optional.empty();
    }

    @GetMapping("/Employee/location/{location}")
    public Employee getEmployeeByLocation(@PathVariable String location) {
        return employeeRepository.findByLocation(location);
    }

    @GetMapping("/Employee/pincode/{pincode}")
    public Employee getEmployeeByPincode(@PathVariable String pincode) {
        return employeeRepository.findByPinCode(pincode);
    }
}