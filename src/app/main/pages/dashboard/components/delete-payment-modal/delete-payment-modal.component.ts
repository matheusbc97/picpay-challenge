import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/app/shared/models/payment.model';
import { PaymentFormModalComponent } from '../payment-form-modal/payment-form-modal.component';

@Component({
  selector: 'app-delete-payment-modal',
  templateUrl: './delete-payment-modal.component.html',
  styleUrls: ['./delete-payment-modal.component.scss'],
})
export class DeletePaymentModalComponent {
  constructor(
    public dialogRef: MatDialogRef<PaymentFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public payment: Payment
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    //console.log(this.paymentForm.value);
  }
}
