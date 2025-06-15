import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LargeComponent } from '../large/large.component';

@Component({
  selector: 'app-aboutus',
  imports: [
    RouterLink,
    LargeComponent,
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  constructor(private router:Router){

  }
dosomethingandgotohoem(){
console.log('DO SOMETHISNG');
this.router.navigate(['/home']);
}
}
