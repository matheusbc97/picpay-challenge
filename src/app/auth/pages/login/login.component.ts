import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoginForm } from './components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private authUserService: AuthUserService,
    private toastService: ToastService
  ) {}

  public isLoading = false;

  handleLoginSuccess(username: string, token: string) {
    this.authUserService.setAuthenticatedUser(username, token);
    this.router.navigate(['/main']);
  }

  onSubmit(loginForm: LoginForm) {
    const { username, password } = loginForm;

    this.isLoading = true;

    this.authService
      .login(username, password)
      .subscribe({
        next: ({ access_token }) => {
          this.handleLoginSuccess(username, access_token);
        },
        error: (error) => {
          console.log(error);
          this.toastService.open('Ocorreu um erro ao fazer login');
        },
      })
      .add(() => (this.isLoading = false));
  }
}
