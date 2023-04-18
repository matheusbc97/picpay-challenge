import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PaymentsService } from 'src/app/core/services/payments.service';
import { Payment } from 'src/app/shared/models/payment.model';

@Injectable({
  providedIn: 'root',
})
export class GetPaymentsService {
  constructor(private paymentsService: PaymentsService) {}

  public isLoading = false;

  private subjectName = new Subject<Payment[]>(); //need to create a subject

  private _getPayments() {
    this.paymentsService
      .get()
      .subscribe({
        next: (response) => {
          this.subjectName.next(response.items);
        },
        error: (error) => {
          this.subjectName.error(error);
        },
      })
      .add(() => (this.isLoading = false));
  }

  reload() {
    this.isLoading = true;
    this._getPayments();
  }

  get(): Observable<Payment[]> {
    this.isLoading = true;
    this._getPayments();

    return this.subjectName.asObservable();
  }
}
