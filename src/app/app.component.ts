import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AngularFirestore } from "@angular/fire/firestore";
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})


export class AppComponent implements OnInit{
  title = 'Olio';

  constructor(private _bottomSheet: MatBottomSheet,public firestore: AngularFirestore) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("loaded");
    setTimeout(() => {
      document.getElementById("vex-splash-screen").style.display="none";
    }, 1000);
  }
  
}
