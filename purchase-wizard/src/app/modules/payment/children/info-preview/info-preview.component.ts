import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {PaymentService} from "../../../../services/payment/payment.service";
import {BehaviorSubject} from "rxjs";
import {ICardData} from "../../../../shared/card/card.interfaces";
import {IPaymentData} from "../../payment.interfaces";

@Component({
  selector: 'app-info-preview',
  templateUrl: './info-preview.component.html',
  styleUrls: ['./info-preview.component.scss']
})
export class InfoPreviewComponent implements OnInit {
  public cardData$: BehaviorSubject<ICardData | null>;
  public paymentData$: BehaviorSubject<IPaymentData | null>;

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.cardData$ = this.paymentService.cardInfo$;
    this.paymentData$ = this.paymentService.paymentInfo$;
  }
  viewResult(): void {
    this.router.navigate(['/payment/payment-result'])
  }
}
