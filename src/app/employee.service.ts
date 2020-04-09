import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees() {
    return [
      { "id": 1, "name": "Nagarjuna Reddy", "age": 22 },
      { "id": 2, "name": "Venkata Reddy", "age": 67 },
      { "id": 3, "name": "Mastan Reddy", "age": 40 },
      { "id": 4, "name": "Rami Reddy", "age": 38 },
    ]
  }
}
