import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseInputComponent {
  @Input() control: any;
  @Input() name = '';

  @Input() width = '100%';

  get errorMessage() {
    const errors = this.control.errors as any;

    if (!errors) {
      return '';
    }

    if (errors.required) {
      return 'Campo obrigatório';
    }

    if (errors.invalidDate) {
      return 'Data inválida';
    }

    return '';
  }
}
