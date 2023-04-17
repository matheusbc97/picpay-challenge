import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-form-modal',
  templateUrl: './payment-form-modal.component.html',
  styleUrls: ['./payment-form-modal.component.scss'],
})
export class PaymentFormModalComponent {
  constructor(public dialogRef: MatDialogRef<PaymentFormModalComponent>) {}

  paymentForm = new FormGroup({
    username: new FormControl(''),
    title: new FormControl(''),
    date: new FormControl(''),
    value: new FormControl(''),
  });

  closeDialog() {
    this.dialogRef.close();
  }
}
