import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UsersComponent } from '../users/users.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ProductsComponent } from '../products/products.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { Demo2Component } from '../demo2/demo2.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { EmployeeComponent } from '../employee/employee.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { ProductListComponent } from '../product-list/product-list.component';
//import { StarRatingComponent } from '../star-rating/star-rating.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // DirectivesComponent
    // UsersComponent
    // MyModalComponent
    // ProductsComponent
    // Demo1Component,
    // Demo2Component
    // EmployeeCrudComponent
    // PipesComponent
    // ParentComponent
   // Math1Component,
   // Math2Component,
   //EmployeeComponent
   //HttpDemo1Component
   //ProductListComponent
   //StarRatingComponent
   //FormDemo2Component
   //FormDemo3Component
   RouterOutlet,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BodyComponent {
  flag: boolean = true;
}
