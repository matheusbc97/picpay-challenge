import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class MainRouteGuard {
  constructor(
    private router: Router,
    private authUserService: AuthUserService
  ) {}

  canActivate() {
    const currentUserName = this.authUserService.getUserName();

    if (currentUserName || this.authUserService.loadUserFromLocalStorage()) {
      return true;
    }

    this.router.navigate(['/auth/login']);

    return false;
  }
}
