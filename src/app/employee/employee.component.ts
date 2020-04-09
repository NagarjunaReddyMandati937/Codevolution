import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  template: `
  <h2>Employee List</h2>
  <h2>{{errorMsg}}</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _empservice: EmployeeService) { }

  ngOnInit() {
    this._empservice.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg=error
        );
  }

}
