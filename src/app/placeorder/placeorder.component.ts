import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Items, Table } from '../Items';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {

  hotelname = '';
  tables: Table[] = [];
  select = [];
  isordered = false;
  tableAlreadySelected = undefined;
  itemsLength = Items.cartItems.length;
  prevSelected = -1;
  constructor(public route:ActivatedRoute,public db:AngularFirestore,public snackBar:MatSnackBar) {
    this.hotelname = (route.snapshot.params.hotel);
    db.collection('hotels').doc(this.hotelname).get().toPromise()
    .then(data => {
      this.tables = data.data()['tables'];
    });
    const i = sessionStorage.getItem('tableNumber');
    if (i) this.tableAlreadySelected = i;
  }

  ngOnInit(): void {
  }

  order() {
    this.isordered = true;
    if (this.tableAlreadySelected !== undefined) this.prevSelected = this.tableAlreadySelected;
    this.tables[this.prevSelected].order.push(...Items.cartItems);
    sessionStorage.setItem('tableNumber', this.prevSelected + "");
    this.db.collection('hotels').doc(this.hotelname).update({tables:this.tables})
      .then(() => {
        Items.prevCartItems.push(...Items.cartItems.splice(0, Items.cartItems.length));
        setTimeout(() => {
          const ele = document.getElementById("s");
          ele.style.transform = "scale(1)";
          document.getElementById('m').innerText = "Order Done, Go Back and Sit";
        }, 500);
    });
  }

  getIndex(id) {
    let index = -1;
    this.tables.forEach((val, i) => {
      if (val.tableNumber === id) index = i;
    })
    return index;
  }

  active(table:Table){
    const index = this.getIndex(table.tableNumber);
    if (this.prevSelected !== -1) {
      this.tables[this.prevSelected].status = 0;
    }
    if (this.tables[index].status === 0) {
      this.tables[index].status = 1;
      this.prevSelected = index;
    }
    else  this.snackBar.open('please select Active Table', 'Try again',{
      duration: 1000,
    });
  }

}
