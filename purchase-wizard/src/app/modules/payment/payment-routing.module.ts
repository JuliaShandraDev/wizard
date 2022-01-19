import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentComponent } from "./component/payment.component";
import { CardInfoComponent } from "./children/card-info/card-info.component";
import { InfoPreviewComponent } from "./children/info-preview/info-preview.component";
import { PaymentResultComponent } from "./children/payment-result/payment-result.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    children: [
      {
        path: '',
        redirectTo: 'card-info',
        pathMatch: 'full'
      },
      {
        path: 'card-info',
        component: CardInfoComponent
      },
      {
        path: 'info-preview',
        component: InfoPreviewComponent
      },
      {
        path: 'payment-result',
        component: PaymentResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {
}
