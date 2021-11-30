import { Component, OnInit } from '@angular/core';
import { Items } from '../Items';

@Component({
  selector: 'app-prev-orders',
  templateUrl: './prev-orders.component.html',
  styleUrls: ['./prev-orders.component.scss']
})
export class PrevOrdersComponent implements OnInit {

  cartItems = Items.prevCartItems;
  constructor() { }

  ngOnInit(): void {
  }

}
