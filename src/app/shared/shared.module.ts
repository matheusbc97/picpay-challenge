import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PasswordInputComponent } from './components/password-input/password-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    LoadingIndicatorComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    LoadingIndicatorComponent,
  ],
})
export class SharedModule {}