import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { PasswordInputComponent } from './components/password-input/password-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ButtonComponent } from './components/button/button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    LoadingIndicatorComponent,
    ButtonComponent,
    IconButtonComponent,
    TextButtonComponent,
    DateInputComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    LoadingIndicatorComponent,
    ButtonComponent,
    IconButtonComponent,
    TextButtonComponent,
    DateInputComponent,
  ],
  providers: [MatDatepickerModule],
})
export class SharedModule {}
