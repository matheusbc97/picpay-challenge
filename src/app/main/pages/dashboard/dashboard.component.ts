import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { paymentsMock } from './mocks/payments.mock';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormModalComponent } from './components/payment-form-modal/payment-form-modal.component';
import { Payment } from 'src/app/shared/models/payment.model';
import { DeletePaymentModalComponent } from './components/delete-payment-modal/delete-payment-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) {}

  searchControl = new FormControl('');
  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
    'actions',
  ];

  payments = paymentsMock;

  openDialog(payment?: Payment): void {
    const dialogRef = this.dialog.open(PaymentFormModalComponent, {
      data: payment,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  openDeleteModal(payment: Payment): void {
    const dialogRef = this.dialog.open(DeletePaymentModalComponent, {
      data: payment,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
