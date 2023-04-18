import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

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

  loginForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;

    const { username, password } = this.loginForm.getRawValue();

    this.authService
      .login(username, password)
      .subscribe({
        next: (response) => {
          this.authUserService.setAuthenticatedUser(
            username,
            response.access_token
          );
          this.router.navigate(['/main']);
        },
        error: (error) => {
          console.log(error);
          this.toastService.open('Ocorreu um erro ao fazer login');
        },
      })
      .add(() => (this.isLoading = false));
  }
}
