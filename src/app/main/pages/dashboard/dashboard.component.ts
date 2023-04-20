import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormModalComponent } from './components/payment-form-modal/payment-form-modal.component';
import { Payment } from 'src/app/shared/models/payment.model';
import { DeletePaymentModalComponent } from './components/delete-payment-modal/delete-payment-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { ToastService } from 'src/app/core/services/toast.service';
import { GetPaymentsService } from './services/get-payments.service';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, OnInit {
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor(
    public dialog: MatDialog,
    private toastService: ToastService,
    public getPaymentsService: GetPaymentsService
  ) {}

  searchControl = new FormControl('', { nonNullable: true });
  searchSubscription: Subscription | null = null;
  public payments: Payment[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  private table: DashboardTableComponent | null = null;

  @ViewChild(DashboardTableComponent) set tableContent(
    content: DashboardTableComponent
  ) {
    if (content) {
      this.table = content;
      this.applyFilter();
    }
  }

  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
    'actions',
  ];

  ngOnInit(): void {
    this.getPaymentsService.getPayments();

    this.getPaymentsService.getObservable().subscribe({
      next: (payments) => {
        this.payments = payments;
      },
      error: (error) => {
        console.log(error);
        this.toastService.open('Ocorreu um erro ao carregar os pagamentos');
      },
    });

    this.searchControl.valueChanges.subscribe((search) => {
      this.applyFilter(search);
    });
  }

  applyFilter(search?: string): void {
    this.table?.applyFilter(search ?? this.searchControl.value);
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
