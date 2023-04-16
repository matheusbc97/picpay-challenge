import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PasswordInputComponent } from './components/password-input/password-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    LoadingIndicatorComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    LoadingIndicatorComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
