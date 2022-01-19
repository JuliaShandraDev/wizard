import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICardData } from "../card.interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData: ICardData;
  @Input() isBestOffer: boolean;
  @Output() submitCard: EventEmitter<boolean> = new EventEmitter<boolean>();

  onSubmitCard(): void {
    this.submitCard.emit(true);
  }
}
