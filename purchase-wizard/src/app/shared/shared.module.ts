import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from "./card/component/card.component";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    LoaderComponent
  ]
})
export class SharedModule {
}
