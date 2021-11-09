import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { NgwWowService } from 'ngx-wow';
import {Name,Items, HotelDetails} from '../Items';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { pipe } from 'rxjs';
import { HostListener } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { InfoComponent } from '../info/info.component';
import { HttpParams } from '@angular/common/http';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  data = [];
  specials = [];
  menuItems = {};
  categories: {name: string, image: string}[] = [];
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  db: AngularFirestore;
  hotel_name = '';
  blockColor = {};
  randomColor = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#2C73D2", "#0089BA", "#008E9B","#00C9A7","#4B4453"];
  @ViewChild("notify") cart_notification;

  constructor(private router: Router,public route:ActivatedRoute, db:AngularFirestore,private _bottomSheet: MatBottomSheet){
    this.db=db;
    this.hotel_name = route.snapshot.params.hotel;
    db.collection('hotels').doc(this.hotel_name).valueChanges().subscribe((val: HotelDetails) => {
      this.categories = val.categoriesData;
    });
  }

  cartupdate(){
    this.specials.forEach((item)=>{
      const [index,__id] = this.getId(item[Name.id]);
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
    this.cart_notification.nativeElement.innerText = Items.cartItems.length;
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
      this.specials.forEach((item)=>{
        this.addtocart(item[Name.id]);
      });
    })
  }


  ngOnInit() {


  }


}
