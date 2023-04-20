import { Injectable } from '@angular/core';
import { Observable, Subject, take, tap } from 'rxjs';
import { PaymentsService } from 'src/app/core/services/payments.service';
import { Payment } from 'src/app/shared/models/payment.model';

@Injectable({
  providedIn: 'root',
})
export class GetPaymentsService {
  constructor(private paymentsService: PaymentsService) {}

  public isLoading = false;

  private subject = new Subject<Payment[]>();

  private _getPayments() {
    this.paymentsService.get().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.subject.next(response.items);
      },
      error: (error) => {
        this.isLoading = false;
        this.subject.error(error);
      },
    });
  }

  getPayments() {
    this.isLoading = true;
    this._getPayments();
  }

  getObservable(): Observable<Payment[]> {
    return this.subject.asObservable();
  }
}
