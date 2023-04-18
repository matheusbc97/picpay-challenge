import { TestBed } from '@angular/core/testing';

import { GetPaymentsService } from './get-payments.service';

describe('GetPaymentsService', () => {
  let service: GetPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
