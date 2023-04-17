import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl<string>) {
  const dateRegex =
    /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/;

  /*if (control.value.length === 1) {
    const isNumber = /^\d+$/.test(control.value);

    if (!isNumber)
      return {
        required: true,
      };
  }*/

  if (!dateRegex.test(control.value)) return { invalidDate: true };

  return null;
}
