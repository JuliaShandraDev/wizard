export interface ICardData {
  chooseList: string[];
  price: number;
  title: string;
}

export interface ICardsData {
  [key: string]: ICardData[]
}
