import { Directive, Input } from '@angular/core';

@Directive()
export class BaseInputComponent {
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
