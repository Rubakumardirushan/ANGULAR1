import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const localData =  localStorage.getItem('angular17token');
  if(localData != null) {
    return true;
  } else {
    router.navigateByUrl('/login')
    return false;
  }


};
