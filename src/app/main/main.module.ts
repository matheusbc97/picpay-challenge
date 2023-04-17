import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './root/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDialogModule } from '@angular/material/dialog';
import { PaymentFormModalComponent } from './pages/dashboard/components/payment-form-modal/payment-form-modal.component';
import { DeletePaymentModalComponent } from './pages/dashboard/components/delete-payment-modal/delete-payment-modal.component';

@NgModule({
  declarations: [MainComponent, DashboardComponent, HeaderComponent, PaymentFormModalComponent, DeletePaymentModalComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
})
export class MainModule {}
