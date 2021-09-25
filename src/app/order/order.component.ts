import { Items, Name } from './../Items';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Component, OnInit,NgZone, ViewChild, ElementRef } from '@angular/core';
import {ICustomWindow, WindowRefService} from '../window-ref.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  isEditable = false;
  check = false;
  cartItems = Items.cartItems;
  total:number = 0;
  isPlaceOrder = false;
  constructor(private zone: NgZone,private winRef: WindowRefService,private buttonsheetref:MatBottomSheetRef) {
    this._window = this.winRef.nativeWindow;
    for (var i in this.cartItems) {
      this.cartItems[i][Name.count] = 1;
      this.total += +this.cartItems[i].rate;
    }

  }

  ngOnInit(): void {
  }

  getCartId(id) {
    for (let i = 0; i < this.cartItems.length; i++){
      if (this.cartItems[i].itemId === id) return i;
    }
    return -1;
  }

  getId(id){
    var __id = id.split("I")[0];
    var items = Items.allItems[__id];
    var index = "";
    for(var i in items){
      if(items[i][Name.id]==id) {
        index = i;
      }
    }
    return [index,__id];
  }

  add(id: string){
    var index = this.getCartId(id);
    this.cartItems[index][Name.count]++;
    this.total = 0;
    this.cartItems.forEach(val => this.total += +val.rate*(+val.count));
  }

  remove(id: string){
    var index = this.getCartId(id);
    if (this.cartItems[index][Name.count] > 1) this.cartItems[index][Name.count]--;
    this.total = 0;
    this.cartItems.forEach(val => this.total += +val.rate*(+val.count));
  }

  removefromcart(id: string){
    var index = this.getCartId(id);
    this.cartItems.splice(+index, 1);
    Items.cartItems.splice(+index, 1);
    this.total = 0;
    this.cartItems.forEach(val => this.total += +val.rate*(+val.count));
  }

  private _window: ICustomWindow;
  public rzp: any;
  public options: any = {
    key: 'rzp_test_p3yS9vCKJBJ4FJ', // add razorpay key here
    name: 'The Swag Coder',
    description: 'Shopping',
    amount: 100, // razorpay takes amount in paisa
    prefill: {
      name: 'The Swag Coder',
      email: 'jithendhra567@gmail.com', // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
          console.log("Check");

        })
      })
    }
  };



  initPay(): void {
    // this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    // this.rzp.open();
    this.isPlaceOrder=true;
    this.buttonsheetref.dismiss();
  }



  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
      console.log("Done");

    });
  }



}
