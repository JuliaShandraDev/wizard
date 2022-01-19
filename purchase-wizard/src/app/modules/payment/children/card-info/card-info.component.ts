import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject, takeUntil} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {PaymentService} from "../../../../services/payment/payment.service";
import {ICardData, ICardsData} from "../../../../shared/card/card.interfaces";
import {countries, ICountries} from "../../../../services/country/country.service";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit, OnDestroy {
  public userData$: Observable<ICardData>;
  public cardData$: BehaviorSubject<ICardData | null>;
  public unsubscribe$: Subject<void> = new Subject<void>();
  public paymentForm: FormGroup;
  public countries: ICountries[] = countries;

  public isUSA: boolean = false;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.cardData$ = this.paymentService.cardInfo$;
    this.initForm();
    this.countries = countries;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  initForm(): void {
    this.paymentForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      country: [null, [Validators.required]],
      state: [null],
      city: [null],
      streetOne: [null, [Validators.required]],
      streetTwo: [null, [Validators.required]],
      cardNumber: [null, [Validators.required]],
      cardType: [null, [Validators.required]],
      zipCode: [null, [Validators.required]],
      ccvCode: [null, [Validators.required]],
      month: [null, [Validators.required]],
      year: [null, [Validators.required]]
    });
    this.checkIsUSA();
  }

  checkIsUSA(): void {
    this.paymentForm.get('country')?.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(country => {
        if (country === 'United States of America (the)') {
          this.isUSA = true;
          this.paymentForm.addControl('state', this.fb.control([null, [Validators.required]]));
        } else {
          this.isUSA = false;
          this.paymentForm.removeControl('state');
        }
      })
  }

  viewOrder(): void {
    const validForm = this.paymentForm.valid;
    console.log('viewOrder', validForm);
    if (validForm) {
      this.paymentService.paymentInfo$.next(this.paymentForm.value);
      this.router.navigate(['/payment/info-preview'])
    }
  }
}
