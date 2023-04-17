import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-value-input',
  templateUrl: './currency-value-input.component.html',
  styleUrls: ['./currency-value-input.component.scss'],
})
export class CurrencyValueInputComponent {
  Number = Number;
  @Input() control: any;
  test = 0.02;

  @Input() label = '';

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

    return '';
  }
}
