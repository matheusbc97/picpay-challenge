import { FormControl, Validators } from '@angular/forms';
import { BaseInputComponent } from './base-input.component';
import { ValidateDate } from 'src/app/core/validators/date.validator';
import { InputErrorMessageEnum } from 'src/app/core/enums/input_error_messages.enum';

class MockBaseInputComponent extends BaseInputComponent {}

describe('BaseInputComponent', () => {
  let component: BaseInputComponent;

  beforeEach(() => {
    component = new MockBaseInputComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty error message', () => {
    component.control = new FormControl('');

    expect(component.errorMessage).toBe('');
  });

  it('should have required error message', () => {
    component.control = new FormControl('', {
      validators: [Validators.required],
    });

    expect(component.errorMessage).toBe(InputErrorMessageEnum.REQUIRED);
  });

  it('should have invalid date error message', () => {
    component.control = new FormControl('10/14/2023', {
      validators: [ValidateDate],
    });

    expect(component.errorMessage).toBe(InputErrorMessageEnum.INVALID_DATE);
  });

  it('should have name', () => {
    const name = 'name';
    component.name = name;

    expect(component.name).toBe(name);
  });
});
