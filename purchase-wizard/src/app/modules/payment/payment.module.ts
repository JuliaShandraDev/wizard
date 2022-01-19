import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PaymentComponent } from './component/payment.component';
import { PaymentRoutingModule } from "./payment-routing.module";
import { CardInfoComponent } from './children/card-info/card-info.component';
import { InfoPreviewComponent } from './children/info-preview/info-preview.component';
import { PaymentResultComponent } from './children/payment-result/payment-result.component';

@NgModule({
  declarations: [
    PaymentComponent,
    CardInfoComponent,
    InfoPreviewComponent,
    PaymentResultComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule {
}
