package com.example.au.couchbasedemo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;
import org.springframework.data.couchbase.core.mapping.Field;
import com.sun.istack.NotNull;


@Document
public class Employee {

	@Id
	private String empId;

	@NotNull
	private String empName;

	private String Address;

	@NotNull
	private String location;

	@NotNull
	private String pincode;


	public Employee(String empId, String empName, String Address,String location, String pincode) {
		this.empId = empId;
		this.empName = empName;
		this.Address = Address;
		this.location= location;
		this.pincode = pincode;

	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	public String getAddress() {
		return Address;
	}

	public void setAddress(String Address) {
		this.Address = Address;
	}
	public String getPincode() {
		return pincode;
	}

	public void setPinCode(String pincode) {
		this.pincode = pincode;
	}

}