import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { paymentsMock } from './mocks/payments.mock';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormModalComponent } from './components/payment-form-modal/payment-form-modal.component';
import { Payment } from 'src/app/shared/models/payment.model';
import { DeletePaymentModalComponent } from './components/delete-payment-modal/delete-payment-modal.component';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { PaginationService } from '../../../core/services/pagination.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(public dialog: MatDialog) {}

  paymentsPagination = new PaginationService();

  searchControl = new FormControl('', { nonNullable: true });
  searchSubscription: Subscription | null = null;

  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
    'actions',
  ];

  ngOnInit(): void {
    this.paymentsPagination.setData(paymentsMock);
    this.searchSubscription = this.searchControl.valueChanges.subscribe(
      (searchValue) => {
        this.paymentsPagination.setData(
          paymentsMock.filter((payment) => {
            return payment.username
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          })
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

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
