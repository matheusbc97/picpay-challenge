import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent {
  @Input() width = '100%';

  @Input() control: any;

  handleDateChange(date: Date) {
    this.control.setValue(
      date.toISOString().split('T')[0].split('-').reverse().join('/')
    );
  }

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
