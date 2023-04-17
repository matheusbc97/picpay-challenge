import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ValidateDate } from 'src/app/core/validators/date.validator';

@Component({
  selector: 'app-payment-form-modal',
  templateUrl: './payment-form-modal.component.html',
  styleUrls: ['./payment-form-modal.component.scss'],
})
export class PaymentFormModalComponent {
  constructor(public dialogRef: MatDialogRef<PaymentFormModalComponent>) {}

  paymentForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    date: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, ValidateDate],
    }),
    value: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.paymentForm.value);
  }
}
