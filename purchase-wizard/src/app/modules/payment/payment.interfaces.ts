export interface IPaymentData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  state?: string,
  city: string,
  streetOne: string;
  streetTwo: string;
  cardNumber: number;
  cardType: string;
  zipCode: number;
  ccvCode: number;
  month: number;
  year: number;
}

export interface IPaymentsData {
  [key: string]: IPaymentData[]
}
