import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit { 
employees:any=[];
selecfilter: string='all';
constructor(private objempserv:EmployeService){  }
ngOnInit(): void {
  this.onFilterChange();
}

onFilterChange(): void{
  switch(this.selecfilter){
    case 'male':this.employees=this.objempserv.getMaleEmployees();break;
    case 'female':this.employees=this.objempserv.getFemaleEmployee();break;
    default:
      this.employees=this.objempserv.getAllEmployees(); break;
    

  }
}
}
