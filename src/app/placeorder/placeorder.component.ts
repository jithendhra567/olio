import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {

  hotelname = '';
  tables = [];
  select = [];
  isordered = false;
  constructor(public route:ActivatedRoute,public db:AngularFirestore,public snackBar:MatSnackBar) {
    this.hotelname = (route.snapshot.params.hotel);
    db.collection('hotels').doc(this.hotelname).get().toPromise()
    .then(data => {
      this.tables = data.data()['tablesinfo'];
    });
  }

  ngOnInit(): void {
  }

  order(){
    var isselect = {id: 0,isselected:false};
    this.select.forEach((select,i) => {if(select) isselect = {id:i,isselected:true}});
    if(isselect.isselected)
    {
      this.isordered=!this.isordered;
      var cart  = JSON.parse(sessionStorage.getItem("cartdetails"));
      var cartdetails = [];
      for(var i in cart){
        if(cart[i].isadded) cartdetails.push(cart[i]);
      }
      this.tables[isselect.id-1]['orderitems'] = cartdetails.length;
      this.tables[isselect.id-1]['active'] = 'active';
      this.tables[isselect.id-1]['name'] = 'Occupied';
      this.tables[isselect.id-1]['orders'] = cartdetails;
      this.db.collection('hotels').doc(this.hotelname).set({tablesinfo:this.tables},{merge: true})
      .then(() => {
        var ele = document.getElementById("s");
        ele.style.transform = "scale(1)";
        document.getElementById('m').innerText="Order Done, Go Back and Sit";
      });

    }
    else var snackBarRef = this.snackBar.open('Select Any Table', 'Try again',{
      duration: 2000,
    });
  }

  active(id){
    this.select = [];
    if(this.tables[parseInt(id)-1]['active'] == 'inactive')
      this.select[id] = !this.select[id];
    else  this.snackBar.open('Select Active Table', 'Try again',{
      duration: 2000,
    });
  }

}
