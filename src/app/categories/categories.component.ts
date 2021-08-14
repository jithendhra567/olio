import { Component, OnInit, ViewChild } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AngularFirestore } from "@angular/fire/firestore";
import { OrderComponent } from '../order/order.component';
import { Items, Name } from '../Items';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoComponent } from '../info/info.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  items=[];
  hotel_name = '';
  @ViewChild("notify") cart_notification;

  constructor(private _bottomSheet: MatBottomSheet,public firestore: AngularFirestore,public route:ActivatedRoute,public router:Router) {

    this.hotel_name = route.snapshot.params.hotel;
    var menu:string = route.snapshot.params.menu;
    this.items = Items.allItems[menu];

    if(this.items == undefined) {
      var items = JSON.parse(sessionStorage.getItem(Name.data));
      Items.setData(items);
      this.items = Items.allItems[menu];
    }
    this.cartupdate();
  }

  cartupdate(){
    this.items.forEach((item)=>{
      const [index,__id] = this.getId(item[Name.id]);
      setTimeout(() => {
        Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
        this.addtocart(item[Name.id]);
      }, 1000);
    });
  }

  half(id){
    const [index,__id] = this.getId(id);
    Items.allItems[__id][index][Name.isFull]=!Items.allItems[__id][index][Name.isFull];
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

  addtocart(id:string){
    const [index,__id] = this.getId(id);
    var cart = <HTMLElement>document.getElementById(id).getElementsByClassName("addtocart")[0];
    cart.style.backgroundColor=Items.allItems[__id][index][Name.isAdded]?"#296fca":"#f44336";
    cart.getElementsByTagName("p")[0].innerHTML=Items.allItems[__id][index][Name.isAdded]?"Add ":"Added";
    Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
    Items.updateCart();
    this.cart_notification.nativeElement.innerText = Items.cartItems.length;
  }


  cart(){
    var bottomSheetRef = this._bottomSheet.open(OrderComponent);
    bottomSheetRef.afterDismissed().subscribe(() => {
      this.items.forEach((item)=>{
        const [index,__id] = this.getId(item[Name.id]);
        Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
        this.addtocart(item[Name.id]);
      });

      if(bottomSheetRef.instance.isPlaceOrder)
        this.router.navigate([this.hotel_name+'/placeorder']);
    });

  }


  itemInfo(id){
    var ref = this._bottomSheet.open(InfoComponent,{data: {id:id}});
    ref.afterDismissed().subscribe(() => {
      this.items.forEach((item)=>{
        const [index,__id] = this.getId(item[Name.id]);
        Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
        this.addtocart(item[Name.id]);
      });
    })
  }

  ngOnInit(){

  }

  search(){

  }


}
