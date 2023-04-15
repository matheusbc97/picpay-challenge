import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.loginForm.getError('username'));
  }

  getErrorMessage(key: string) {
    const username = this.loginForm.get(key);

    if (!username) {
      return '';
    }

    if (username?.hasError('required')) {
      return 'Campo obrigatório';
    }

    return '';
  }
}
