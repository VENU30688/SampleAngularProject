import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

   transform(age: number){
   var age_dt = new Date(age); 
   return Math.abs(age_dt.getUTCFullYear() - 2025);
  }

}
