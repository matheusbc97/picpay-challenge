import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { PasswordInputComponent } from './components/password-input/password-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [TextInputComponent, PasswordInputComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
