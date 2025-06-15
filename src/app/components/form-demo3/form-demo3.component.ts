import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@anguar/forms';

@Component({
  selector: 'app-form-demo3',
  imports: [
ReactiveFormsModule,
CommonModule,

  ],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {
userForm: FormGroup;

constructor(){
 this.userForm=new FormGroup({
name:new FormControl(),
age: new FormControl(),
email: new FormControl(),
address:new FormControl({
street:new FormControl(),
city: new FormControl(),
pincode: new FormControl(),

})
});
}




}
