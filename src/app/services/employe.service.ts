import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  // constructor() { }
  employees = [
    { "id": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  getAllEmployees() {
    return this.employees;
  }

  getMaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'male');
  }

  getFemaleEmployee() {
    return this.employees.filter(emp => emp.gender === 'female')
  }
}

