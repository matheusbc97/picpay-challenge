import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateDate } from 'src/app/core/validators/date.validator';
import { formatDate } from 'src/app/shared/utils/format-date';
import { ParsedPaymentForm } from './models/parsed-payment-form.model';
import { PaymentForm } from './models/payment-form.model';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
  @Output()
  submitSuccess = new EventEmitter<ParsedPaymentForm>();

  @Output()
  cancelClick = new EventEmitter<void>();

  @Input()
  isUpdate = false;

  @Input()
  initialValues?: Partial<ParsedPaymentForm>;

  ngOnInit(): void {
    if (this.initialValues) {
      this.patchValue(this.initialValues);
    }
  }

  paymentForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    date: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, ValidateDate],
    }),
    value: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  submit() {
    if (this.paymentForm.invalid) return;

    const paymentForm = this.paymentForm.getRawValue();

    const date = formatDate({
      date: paymentForm.date,
      originalDateFormat: 'dd/MM/yyyy',
      toFormat: 'yyyy-MM-dd',
    });

    const parsedForm: ParsedPaymentForm = {
      username: paymentForm.username,
      title: paymentForm.title,
      date,
      value: parseFloat(paymentForm.value),
      firstName: paymentForm.firstName,
      lastName: paymentForm.lastName,
    };

    this.submitSuccess.emit(parsedForm);
  }

  handleCancelClick() {
    this.cancelClick.emit();
  }

  patchValue(parsedForm: Partial<ParsedPaymentForm>) {
    const form: Partial<PaymentForm> = {
      username: parsedForm.username,
      title: parsedForm.title,
      firstName: parsedForm.firstName,
      lastName: parsedForm.lastName,
    };

    if (parsedForm.date) {
      const date = formatDate({
        date: parsedForm.date.split('T')[0],
        originalDateFormat: 'yyyy-MM-dd',
        toFormat: 'dd/MM/yyyy',
      });

      form.date = date;
    }

    if (parsedForm.value) {
      form.value = parsedForm.value.toString();
    }

    this.paymentForm.patchValue(form);
  }
}
