import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentsService } from 'src/app/core/services/payments.service';
import { ScreenLoaderService } from 'src/app/core/services/screen-loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Payment } from 'src/app/shared/models/payment.model';
import { GetPaymentsService } from '../../services/get-payments.service';
import { ParsedPaymentForm } from './components/payment-form/models/parsed-payment-form.model';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';

@Component({
  selector: 'app-payment-form-modal',
  templateUrl: './payment-form-modal.component.html',
  styleUrls: ['./payment-form-modal.component.scss'],
})
export class PaymentFormModalComponent {
  isUpdate = false;
  @ViewChild(PaymentFormComponent) paymentForm!: PaymentFormComponent;

  paymentFormInitialValues?: Partial<ParsedPaymentForm>;

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

      this.paymentFormInitialValues = {
        username: originalPayment.username,
        title: originalPayment.title,
        date: originalPayment.date,
        value: originalPayment.value,
        firstName: originalPayment.firstName,
        lastName: originalPayment.lastName,
      };
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  handleSubmitSuccess(form: ParsedPaymentForm) {
    if (this.isUpdate) {
      this.updatePayment(form);
      return;
    }

    this.createPayment(form);
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
    this.getPaymentsService.getPayments();
  }
}
