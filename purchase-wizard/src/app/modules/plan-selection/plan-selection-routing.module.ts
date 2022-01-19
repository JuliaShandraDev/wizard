import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanSelectionComponent } from "./component/plan-selection.component";

const routes: Routes = [
  {
    path: '',
    component: PlanSelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanSelectionRoutingModule {
}
