import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentsService } from 'src/app/core/services/payments.service';
import { ScreenLoaderService } from 'src/app/core/services/screen-loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ValidateDate } from 'src/app/core/validators/date.validator';
import { Payment } from 'src/app/shared/models/payment.model';
import { formatDate } from 'src/app/shared/utils/format-date';
import { GetPaymentsService } from '../../services/get-payments.service';

interface ParsedPaymentForm {
  username: string;
  title: string;
  value: number;
  date: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-payment-form-modal',
  templateUrl: './payment-form-modal.component.html',
  styleUrls: ['./payment-form-modal.component.scss'],
})
export class PaymentFormModalComponent {
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

  isUpdate = false;

  constructor(
    public dialogRef: MatDialogRef<PaymentFormModalComponent>,
    private screenLoaderService: ScreenLoaderService,
    private toastService: ToastService,
    private paymentsService: PaymentsService,
    private getPaymentsService: GetPaymentsService,
    @Inject(MAT_DIALOG_DATA) public originalPayment?: Payment
  ) {
    if (originalPayment) {
      this.isUpdate = true;

      const date = formatDate({
        date: originalPayment.date.split('T')[0],
        originalDateFormat: 'yyyy-MM-dd',
        toFormat: 'dd/MM/yyyy',
      });

      this.paymentForm.setValue({
        username: originalPayment.username,
        title: originalPayment.title,
        date,
        value: originalPayment.value.toString(),
        firstName: originalPayment.firstName,
        lastName: originalPayment.lastName,
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

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

    if (this.isUpdate) {
      this.updatePayment(parsedForm);
      return;
    }

    this.createPayment(parsedForm);
  }

  createPayment(form: ParsedPaymentForm) {
    this.screenLoaderService.open();

    this.paymentsService
      .create(form)
      .subscribe({
        next: () => {
          this.toastService.open('Pagamento salvo com sucesso!');
        },
        error: (error) => {
          console.log(error);
          this.toastService.open('Ocorreu um erro ao salvar o pagamento');
        },
      })
      .add(() => this.handleRequestEnd());
  }

  updatePayment(form: ParsedPaymentForm) {
    if (!this.originalPayment) return;

    this.screenLoaderService.open();

    this.paymentsService
      .update({
        id: this.originalPayment._id,
        ...form,
      })
      .subscribe({
        next: () => {
          this.toastService.open('Pagamento atualizado com sucesso!');
        },
        error: (error) => {
          console.log(error);
          this.toastService.open('Ocorreu um erro ao atualizado o pagamento');
        },
      })
      .add(() => this.handleRequestEnd());
  }

  private handleRequestEnd() {
    this.screenLoaderService.close();
    this.closeDialog();
    this.getPaymentsService.reload();
  }
}
