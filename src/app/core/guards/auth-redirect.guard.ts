import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authRedirectGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  // if user already logged in → block login/register routes
  if (token) {
    router.navigate(['/user']); // redirect to home or dashboard
    return false;
  }

  return true; // allow access if not logged in


};
