import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const teacherGuard: CanActivateFn = (route, state) => {
  const userService=inject(UserService);
  if(userService.userRole=='teahcer'){
    return true;
  }else{
    alert('Sorry.. not for u');
    return false;
  }
};
