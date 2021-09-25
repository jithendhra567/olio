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
  prevSelected = -1;
  constructor(public route:ActivatedRoute,public db:AngularFirestore,public snackBar:MatSnackBar) {
    this.hotelname = (route.snapshot.params.hotel);
    db.collection('hotels').doc(this.hotelname).get().toPromise()
    .then(data => {
      console.log(data.data())  
      this.tables = data.data()['tables'];
    });
  }

  ngOnInit(): void {
  }

  order() {
    this.isordered = true;
    this.tables[this.prevSelected].order = Items.cartItems;
    this.db.collection('hotels').doc(this.hotelname).set({tables:this.tables},{merge: true})
    .then(() => {
      setTimeout(() => {
        const ele = document.getElementById("s");
        console.log(ele)
        ele.style.transform = "scale(1)";
        document.getElementById('m').innerText = "Order Done, Go Back and Sit";
      }, 500);
    });
  }

  getIndex(id) {
    let index = -1;
    this.tables.forEach((val, i) => {
      if (val.tableNumber = id) index = i;
    })
    return index;
  }

  active(table:Table){
    const index = this.getIndex(table.tableNumber);
    if (this.prevSelected !== -1) {
      this.tables[this.prevSelected].status === 0;
    }
    if (this.tables[index].status === 0) {
      this.tables[index].status = 1;
      this.prevSelected = index;
    }
    else  this.snackBar.open('please select Active Table', 'Try again',{
      duration: 2000,
    });
  }

}
