import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/app/shared/models/payment.model';
import { PaymentFormModalComponent } from '../payment-form-modal/payment-form-modal.component';
import { ScreenLoaderService } from 'src/app/core/services/screen-loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { PaymentsService } from 'src/app/core/services/payments.service';
import { GetPaymentsService } from '../../services/get-payments.service';

@Component({
  selector: 'app-delete-payment-modal',
  templateUrl: './delete-payment-modal.component.html',
  styleUrls: ['./delete-payment-modal.component.scss'],
})
export class DeletePaymentModalComponent {
  constructor(
    public dialogRef: MatDialogRef<PaymentFormModalComponent>,
    private screenLoaderService: ScreenLoaderService,
    private toastService: ToastService,
    private paymentsService: PaymentsService,
    private getPaymentsService: GetPaymentsService,
    @Inject(MAT_DIALOG_DATA) public payment: Payment
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  deleteItem() {
    this.screenLoaderService.open();

    this.paymentsService
      .delete(this.payment._id)
      .subscribe({
        next: () => {
          this.closeDialog();
          this.toastService.open('Pagamento excluído com sucesso!');
          this.getPaymentsService.getPayments();
        },
        error: () => {
          this.toastService.open('Ocorreu um erro ao excluir o pagamento!');
        },
      })
      .add(() => this.screenLoaderService.close());
  }
}
