import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Payment } from 'src/app/shared/models/payment.model';
import { GetPaymentsService } from '../../services/get-payments.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnDestroy, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  @Output() editClick = new EventEmitter<Payment>();
  @Output() deleteClick = new EventEmitter<Payment>();

  @Input()
  set payments(value: Payment[]) {
    this.dataSource.data = value;
  }

  public dataSource: MatTableDataSource<Payment, MatTableDataSourcePaginator> =
    new MatTableDataSource<Payment, MatTableDataSourcePaginator>();

  constructor(public getPaymentsService: GetPaymentsService) {}

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

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

  handleEditClick(payment: Payment): void {
    this.editClick.emit(payment);
  }

  handleDeleteClick(payment: Payment): void {
    this.deleteClick.emit(payment);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
