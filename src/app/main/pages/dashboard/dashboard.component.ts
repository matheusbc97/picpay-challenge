import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { paymentsMock } from './mocks/payments.mock';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormModalComponent } from './components/payment-form-modal/payment-form-modal.component';
import { Payment } from 'src/app/shared/models/payment.model';
import { DeletePaymentModalComponent } from './components/delete-payment-modal/delete-payment-modal.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { PaginationService } from '../../../core/services/pagination.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor(public dialog: MatDialog) {}

  paymentsPagination = new PaginationService();

  searchControl = new FormControl('', { nonNullable: true });
  searchSubscription: Subscription | null = null;

  dataSource = new MatTableDataSource(paymentsMock);
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
    'actions',
  ];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.searchSubscription = this.searchControl.valueChanges.subscribe(
      (searchValue) => {
        this.applyFilter(searchValue);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
