import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScreenLoaderService } from './services/screen-loader.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatDialogModule],
  providers: [ScreenLoaderService],
})
export class CoreModule {}
