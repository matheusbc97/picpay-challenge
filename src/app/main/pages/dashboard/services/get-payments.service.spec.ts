import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { Payment } from 'src/app/shared/models/payment.model';

import { GetPaymentsService } from './get-payments.service';
import { PaymentsService } from 'src/app/core/services/payments.service';
import { paymentsMock } from '../mocks/payments.mock';

describe('GetPaymentsService', () => {
  let service: GetPaymentsService;
  let paymentsService: PaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaymentsService],
    });
    service = TestBed.inject(GetPaymentsService);
    paymentsService = TestBed.inject(PaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get payments', fakeAsync(() => {
    const payments: Payment[] = [paymentsMock[0]];
    spyOn(paymentsService, 'get').and.returnValue(
      of({ items: payments, totalPage: 1 })
    );

    let result: any;

    service.getObservable().subscribe((response) => {
      result = response;
    });

    service.getPayments();

    tick();

    expect(result).toEqual(payments);
  }));

  it('isLoading should be true', () => {
    service.getPayments();

    expect(service.isLoading).toBeTrue();
  });

  it('isLoading should be false', () => {
    expect(service.isLoading).toBeFalse();
  });
});
