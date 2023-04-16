import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form-modal',
  templateUrl: './payment-form-modal.component.html',
  styleUrls: ['./payment-form-modal.component.scss'],
})
export class PaymentFormModalComponent {
  paymentForm = new FormGroup({
    username: new FormControl(''),
    title: new FormControl(''),
    date: new FormControl(''),
    value: new FormControl(''),
  });
}
