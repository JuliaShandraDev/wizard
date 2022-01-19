import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.scss']
})
export class PaymentResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  viewResult(): void {
    this.router.navigate(['/'])
  }

}
