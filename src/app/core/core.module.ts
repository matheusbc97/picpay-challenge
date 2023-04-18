import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ScreenLoaderService } from './services/screen-loader.service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { APIInterceptor } from './interceptors/api.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatDialogModule, MatSnackBarModule],
  providers: [
    ScreenLoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
