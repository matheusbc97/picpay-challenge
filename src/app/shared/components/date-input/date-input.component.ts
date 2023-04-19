import { Component } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input.component';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent extends BaseInputComponent {
  handleDateChange(date: Date) {
    this.control.setValue(
      date.toISOString().split('T')[0].split('-').reverse().join('/')
    );
  }
}
