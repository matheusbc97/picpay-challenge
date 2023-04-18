import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from 'src/app/shared/models/payment.model';

export interface GetPaymentsResponse {
  items: Payment[];
  totalPage: number;
}

export interface CreatePaymentParams {
  username: string;
  title: string;
  value: number;
  date: string;
  firstName: string;
  lastName: string;
}

export interface UpdatePaymentParams {
  id: string;
  username: string;
  title: string;
  value: number;
  date: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<GetPaymentsResponse>('payments');
  }

  create(params: CreatePaymentParams) {
    return this.http.post('payments', params);
  }

  update({ id, ...params }: UpdatePaymentParams) {
    return this.http.put(`payments/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`payments/${id}`);
  }
}
