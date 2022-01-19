import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { ICardData } from "../../shared/card/card.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public cardInfo$: BehaviorSubject<ICardData | null> = new BehaviorSubject<ICardData | null>(null);
}
