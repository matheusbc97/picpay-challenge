import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormModalComponent } from './components/payment-form-modal/payment-form-modal.component';
import { Payment } from 'src/app/shared/models/payment.model';
import { DeletePaymentModalComponent } from './components/delete-payment-modal/delete-payment-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ToastService } from 'src/app/core/services/toast.service';
import { GetPaymentsService } from './services/get-payments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor(
    public dialog: MatDialog,
    private toastService: ToastService,
    public getPaymentsService: GetPaymentsService
  ) {}

  searchControl = new FormControl('', { nonNullable: true });
  searchSubscription: Subscription | null = null;

  dataSource = new MatTableDataSource([] as Payment[]);
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

    this.getPaymentsService.get().subscribe({
      next: (response) => {
        this.dataSource.data = response;
      },
      error: (error) => {
        console.log(error);
        this.toastService.open('Ocorreu um erro ao carregar os pagamentos');
      },
    });
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
    this.dialog.open(PaymentFormModalComponent, {
      data: payment,
    });
  }

  openDeleteModal(payment: Payment): void {
    this.dialog.open(DeletePaymentModalComponent, {
      data: payment,
    });
  }
}
