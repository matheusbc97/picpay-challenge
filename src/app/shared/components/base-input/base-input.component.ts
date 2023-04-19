import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: '',
})
export abstract class BaseInputComponent {
  @Input()
  control!: FormControl;
  @Input() name = '';

  @Input() width = '100%';

  get errorMessage() {
    const errors = this.control?.errors;

    if (!errors) {
      return '';
    }

    if (errors['required']) {
      return 'Campo obrigatório';
    }

    if (errors['invalidDate']) {
      return 'Data inválida';
    }

    return '';
  }
}
