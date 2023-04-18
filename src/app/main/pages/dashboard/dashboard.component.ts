import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { paymentsMock } from './mocks/payments.mock';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormModalComponent } from './components/payment-form-modal/payment-form-modal.component';
import { Payment } from 'src/app/shared/models/payment.model';
import { DeletePaymentModalComponent } from './components/delete-payment-modal/delete-payment-modal.component';
import { PageEvent } from '@angular/material/paginator';
import { PaginationService } from './services/pagination.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) {}

  paymentsPagination = new PaginationService(paymentsMock);

  searchControl = new FormControl('');
  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
    'actions',
  ];

  openPaymentFormModal(payment?: Payment): void {
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

  handlePageEvent(pageEvent: PageEvent) {
    if (pageEvent.pageSize !== this.paymentsPagination.pageSize) {
      this.paymentsPagination.setPageSize(pageEvent.pageSize);
      return;
    }

    this.paymentsPagination.setPageIndex(pageEvent.pageIndex);
  }
}
