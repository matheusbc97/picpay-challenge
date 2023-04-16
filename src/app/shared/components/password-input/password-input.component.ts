import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  @Input() control: any;

  @Input() label = '';

  @Input() placeholder = '';

  @Input() name = '';

  public hide = true;

  get errorMessage() {
    const errors = this.control.errors as any;

    if (!errors) {
      return '';
    }

    if (errors.required) {
      return 'Campo obrigatório';
    }

    return '';
  }
}
