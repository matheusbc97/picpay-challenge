import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';
import { ToastService } from '../services/toast.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(
    private router: Router,
    private authUserService: AuthUserService,
    private toastService: ToastService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUserName = this.authUserService.getUserName();
    const primaryUrl = state.url.split('/')[1];

    if (currentUserName || this.authUserService.loadUserFromLocalStorage()) {
      if (primaryUrl === 'auth') {
        this.router.navigate(['/main']);

        return false;
      }

      return true;
    }

    if (primaryUrl !== 'auth') {
      this.router.navigate(['/auth/login']);
      this.toastService.open('Sessão Expirada');

      return false;
    }

    return true;
  }
}
