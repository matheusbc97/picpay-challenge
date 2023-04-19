import { Component, Input } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input.component';

@Component({
  selector: 'app-currency-value-input',
  templateUrl: './currency-value-input.component.html',
  styleUrls: ['./currency-value-input.component.scss'],
})
export class CurrencyValueInputComponent extends BaseInputComponent {
  Number = Number;
  @Input() label = '';
}
