import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentFormModalComponent } from 'src/app/main/pages/dashboard/components/payment-form-modal/payment-form-modal.component';

@Component({
  selector: 'app-screen-loader-modal',
  templateUrl: './screen-loader-modal.component.html',
  styleUrls: ['./screen-loader-modal.component.scss'],
})
export class ScreenLoaderModalComponent {
  constructor(public dialogRef: MatDialogRef<PaymentFormModalComponent>) {}
}
