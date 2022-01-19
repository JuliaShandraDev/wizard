import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaderState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  openLoader(): void {
    this.loaderState$.next(true);
  }

  closeLoader(): void {
    this.loaderState$.next(false);
  }
}
