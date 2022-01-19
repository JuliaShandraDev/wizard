import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { LoaderService } from "../../services/loader/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: [ './loader.component.scss' ]
})
export class LoaderComponent implements OnInit {
  public isLoaderOn$: BehaviorSubject<boolean>;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.isLoaderOn$ = this.loaderService.loaderState$;
  }
}
