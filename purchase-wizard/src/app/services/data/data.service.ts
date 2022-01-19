import { Injectable } from '@angular/core';

import {ICardsData} from "../../shared/card/card.interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly cardsData: ICardsData = {
    personal: [
      { title: 'Title 1', price: 10, chooseList: ['Low price', 'Excellent quality', 'Guarantee'] },
      { title: 'Title 2', price: 20, chooseList: ['Low price', 'Excellent quality', 'Guarantee'] },
      { title: 'Title 3', price: 30, chooseList: ['Low price', 'Excellent quality', 'Guarantee'] }
    ],
    enterprise: [
      { title: 'Title 4', price: 40, chooseList: ['Low price', 'Excellent quality', 'Guarantee'] },
      { title: 'Title 5', price: 50, chooseList: ['Low price', 'Excellent quality', 'Guarantee'] },
      { title: 'Title 6', price: 60, chooseList: ['Low price', 'Excellent quality', 'Guarantee'] }]
  }

  getCardsData(): Observable<ICardsData> {
    return new Observable(observer => {
      observer.next(this.cardsData);
      observer.complete();
    });
  }
}
