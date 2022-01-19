import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";

import { DataService } from "../../../services/data.service";
import { ICardData, ICardsData } from "../../../shared/card/card.interfaces";

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent implements OnInit, OnDestroy {
  public cardsData$: Observable<ICardsData>;
  public unsubscribe$: Subject<void> = new Subject<void>();
  public cardsData: ICardsData;
  public personalHighestPriceIndex: number | null;
  public enterpriseHighestPriceIndex: number | null;
  public active = 1;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getCardsData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getCardsData(): void {
    this.cardsData$ = this.dataService.getCardsData();
    this.cardsData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(cardsData => {
        if (cardsData) {
          this.cardsData = cardsData;
          this.personalHighestPriceIndex = this.checkIsHighestPrice(cardsData['personal']);
          this.enterpriseHighestPriceIndex = this.checkIsHighestPrice(cardsData['enterprise']);
        }
      });
  }

  checkIsHighestPrice(cardsList: ICardData[]): number | null {
    if (cardsList.length) {
      const indexData = cardsList.reduce((acc, item, index) => {
        if (item.price > acc.price) {
          acc.price = item.price;
          acc.index = index;
        }
        return acc;
      }, { price: 0, index: 0 });
      return indexData.index;
    }
    return null;
  }

  buyCard(cardData: ICardData): void {
    console.log(cardData);
  }
}
