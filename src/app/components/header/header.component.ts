import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ opacity: '1' })),
      state('false', style({ opacity: '0' })),
      transition('false <=> true', animate(1500))
    ])
  ],
})
export class HeaderComponent implements OnInit {


  title="Check Url";
  constructor(public route:ActivatedRoute,public db:AngularFirestore) {
    var hotel = window.location.pathname.split("/")[1];
    db.collection("hotels").doc(hotel).get().toPromise()
    .then(data=>this.title=data.data()['title'])
    .catch(err=>console.log(err))
  }

  ngOnInit(): void {

  }


}
