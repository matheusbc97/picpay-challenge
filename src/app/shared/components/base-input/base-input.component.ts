import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputErrorMessageEnum } from 'src/app/core/enums/input_error_messages.enum';

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
      return InputErrorMessageEnum.REQUIRED;
    }

    if (errors['invalidDate']) {
      return InputErrorMessageEnum.INVALID_DATE;
    }

    return '';
  }
}
