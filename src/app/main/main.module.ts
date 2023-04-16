import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './root/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [MainComponent, DashboardComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
