import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export const authGuardGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const hardcodedAuthenticationService = inject(HardcodedAuthenticationService);

  if (hardcodedAuthenticationService.isUserLoggedIn()) {
    return true;
  } else {
    return router.navigate(['login']);
  }
  return true;
};
