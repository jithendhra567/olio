import { Component, OnInit, ViewChild } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AngularFirestore } from "@angular/fire/firestore";
import { OrderComponent } from '../order/order.component';
import { Item, Items, Name } from '../Items';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoComponent } from '../info/info.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  items: Item[] = [];
  cartItems: number = Items.cartItems.length;
  hotel_name = '';
  @ViewChild("notify") cart_notification;

  constructor(private _bottomSheet: MatBottomSheet,public firestore: AngularFirestore,public route:ActivatedRoute,public router:Router) {
    this.hotel_name = route.snapshot.params.hotel;
    var menu:string = route.snapshot.params.menu;
    firestore.collection(this.hotel_name, ref => ref.where("categoryName", "==", menu))
      .get().toPromise().then(data => {
        const docs = data.docs;
        docs.forEach(doc => {
          const temp: any = doc.data();
          this.items.push(temp);
        });
      });
  }

  cartupdate(){
    this.items.forEach((item)=>{
      const [index,__id] = this.getId(item[Name.id]);
      setTimeout(() => {
        // Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
        this.addtocart(item[Name.id]);
      }, 1000);
    });
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

  addtocart(item:Item){
    const cart = <HTMLElement>document.getElementById(item.itemId).getElementsByClassName("cart")[0];
    const isAdded = Items.isAddedToCart(item);
    cart.style.backgroundColor=isAdded?"#296fca":"#f44336";
    cart.innerText = isAdded?"add":"added";
    if (isAdded) Items.removeFromCart(item);
    else Items.cartItems.push(item);
    this.cartItems = Items.cartItems.length;
  }


  cart(){
    var bottomSheetRef = this._bottomSheet.open(OrderComponent);
    bottomSheetRef.afterDismissed().subscribe(() => {
      if(bottomSheetRef.instance.isPlaceOrder)
        this.router.navigate([this.hotel_name+'/placeorder']);
    });
  }


  itemInfo(id){
    var ref = this._bottomSheet.open(InfoComponent,{data: {id:id}});
    ref.afterDismissed().subscribe(() => {
      this.items.forEach((item)=>{
        const [index,__id] = this.getId(item[Name.id]);
        // Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
        this.addtocart(item[Name.id]);
      });
    })
  }

  ngOnInit(){

  }

  search(){

  }


}
