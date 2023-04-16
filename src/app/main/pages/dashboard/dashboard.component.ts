import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { paymentsMock } from './mocks/payments.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  searchControl = new FormControl('');
  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
  ];

  payments = paymentsMock;
}
