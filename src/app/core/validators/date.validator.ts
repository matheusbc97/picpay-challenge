import { AbstractControl } from '@angular/forms';
import { validateDate } from 'src/app/shared/utils/validate-date';

export function ValidateDate(control: AbstractControl<string>) {
  const value = control.value;
  if (
    value.length !== 10 ||
    !validateDate({ date: value, dateFormat: 'dd/MM/yyyy' })
  )
    return { invalidDate: true };

  return null;
}
