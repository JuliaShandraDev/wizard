import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'plan-selection',
    pathMatch: 'full'
  },
  {
    path: 'plan-selection',
    loadChildren: () => import('./modules/plan-selection/plan-selection.module').then(m => m.PlanSelectionModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
