import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PlanSelectionComponent } from './component/plan-selection.component';
import { PlanSelectionRoutingModule } from "./plan-selection-routing.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    PlanSelectionComponent
  ],
  imports: [
    CommonModule,
    PlanSelectionRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PlanSelectionModule {
}
