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
  cartDetails = [];
  total:number = 0;
  isPlaceOrder = false;
  constructor(private zone: NgZone,private winRef: WindowRefService,private buttonsheetref:MatBottomSheetRef) {
    this._window = this.winRef.nativeWindow;
    this.cartDetails = Items.cartItems;
    for(var i in this.cartDetails)  this.cartDetails[i][Name.count] = 1;
    this.updatePrize();
  }

  ngOnInit(): void {
  }

  updatePrize(){
    this.total = 0;
    for(var i in this.cartDetails){
      this.total += this.cartDetails[i][Name.count]*this.cartDetails[i][Name.prize];
    }
  }


  half(id){
    const i = this.getCartId(id);
    this.cartDetails[i][Name.isFull]=!this.cartDetails[i][Name.isFull];
  }

  getCartId(id){
    for(var i in this.cartDetails){
      if(this.cartDetails[i][Name.id]==id) return i;
    }
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

  add(id){
    var index = this.getCartId(id);
    var counter = document.getElementById(id).getElementsByClassName(Name.count);
    this.cartDetails[index][Name.count]++;
    counter[0].getElementsByTagName("p")[0].innerHTML=this.cartDetails[index][Name.count];
    this.updatePrize();
  }

  remove(id){
    var index = this.getCartId(id);
    var counter = document.getElementById(id).getElementsByClassName(Name.count);
    if(this.cartDetails[index][Name.count]>1)  this.cartDetails[index][Name.count]--;
    counter[0].getElementsByTagName("p")[0].innerHTML=this.cartDetails[index][Name.count];
    this.updatePrize();
  }

  removefromcart(id){
    var index = this.getCartId(id);
    this.cartDetails[index][Name.isAdded]=!this.cartDetails[index][Name.isAdded];
    this.cartDetails.splice(+index,+index)
    this.updatePrize();
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
