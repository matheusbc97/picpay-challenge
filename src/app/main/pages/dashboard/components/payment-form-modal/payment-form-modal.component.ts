import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ValidateDate } from 'src/app/core/validators/date.validator';
import { Payment } from 'src/app/shared/models/payment.model';

@Component({
  selector: 'app-payment-form-modal',
  templateUrl: './payment-form-modal.component.html',
  styleUrls: ['./payment-form-modal.component.scss'],
})
export class PaymentFormModalComponent {
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

  isUpdate = false;

  constructor(
    public dialogRef: MatDialogRef<PaymentFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public payment?: Payment
  ) {
    if (payment) {
      this.isUpdate = true;
      this.paymentForm.setValue({
        username: payment.username,
        title: payment.title,
        date: payment.date,
        value: payment.value.toString(),
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.paymentForm.value);
  }
}
