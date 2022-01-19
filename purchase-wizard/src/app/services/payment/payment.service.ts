import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { ICardData } from '../../shared/card/card.interfaces';
import { IPaymentData } from '../../modules/payment/payment.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public cardInfo$: BehaviorSubject<ICardData | null> = new BehaviorSubject<ICardData | null>(null);
  public paymentInfo$: BehaviorSubject<IPaymentData | null> = new BehaviorSubject<IPaymentData | null>(null);
}
