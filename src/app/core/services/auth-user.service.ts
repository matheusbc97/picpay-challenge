import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  constructor(private router: Router) {}

  private username: string | null = null;
  private token: string | null = null;

  private localStorageKeys = {
    username: '@picpay-challenge/username',
    token: '@picpay-challenge/token',
  };

  getUserName() {
    return this.username;
  }

  loadUserFromLocalStorage(): boolean {
    const username = localStorage.getItem(this.localStorageKeys.username);

    const token = localStorage.getItem(this.localStorageKeys.token);

    if (username && token) {
      this.username = username;
      this.token = token;

      return true;
    }

    return false;
  }

  getToken() {
    return this.token;
  }

  private setUser(username: string, token: string) {
    this.username = username;
    this.token = token;
  }

  setAuthenticatedUser(username: string, token: string) {
    localStorage.setItem(
      this.localStorageKeys.username,
      JSON.stringify(username)
    );
    localStorage.setItem(this.localStorageKeys.token, token);

    this.setUser(username, token);
  }

  logOut() {
    this.username = null;
    this.token = null;

    localStorage.removeItem(this.localStorageKeys.username);
    localStorage.removeItem(this.localStorageKeys.token);

    this.router.navigate(['/auth/login']);
  }
}
