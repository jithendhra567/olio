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
  categories = [];
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  db: AngularFirestore;
  hotel_name = '';
  @ViewChild("notify") cart_notification;

  constructor(private router: Router,public route:ActivatedRoute, db:AngularFirestore,private _bottomSheet: MatBottomSheet){
    this.db=db;
    this.hotel_name = route.snapshot.params.hotel;
    sessionStorage.clear();
    // var items = JSON.parse(sessionStorage.getItem(Name.data));
    // if(items != undefined && items.length > 0) {
    //   Items.setData(items);
    //   this.data = items;
    //   this.specials = Items.specialItems;
    // }
    // else {
    //   db.collection(this.hotel_name).valueChanges().subscribe((val) => {
    //     console.log();
    //     // val.forEach((doc)=>this.data.push(doc));
    //     // Items.setData(this.data);
    //     // this.specials = Items.specialItems;
    //   });
    // }

    db.collection(this.hotel_name).valueChanges().subscribe((val) => {
      console.log(val);
      // val.forEach((doc)=>this.data.push(doc));
      // Items.setData(this.data);
      // this.specials = Items.specialItems;
    });
    db.collection('hotels').doc(this.hotel_name).valueChanges().subscribe((val: HotelDetails) => {
      const temp: string[] = val.categories;
      const cats: string[][] = [];
      const catTemp: string[] = [];
      let i = 0;
      temp.forEach(item => {
        catTemp.push(item);
        i++;
        if (i === 4) {
          cats.push(catTemp);
          i = 0;
        }
      });
      this.categories = cats;
    });

    //this.cartupdate();

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
      this.specials.forEach((item)=>{
        const [index,__id] = this.getId(item[Name.id]);
        this.addtocart(item[Name.id]);
      });

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
