import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import {Name,Items} from '../Items';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  item = {};
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data,public ref: MatBottomSheetRef<InfoComponent>) {
    const [index,__id] = this.getId(data.id);
    this.item = Items.allItems[__id][index];
    setTimeout(() => {
      if(this.item[Name.isAdded]==true){
        this.item[Name.isAdded] = false;
        this.addtocart(this.item[Name.id]);
      }
    }, 500);
  }

  ngOnInit(): void {

  }

  close(){
    this.ref.dismiss();
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
  half(id){
    const [index,__id] = this.getId(id);
    Items.allItems[__id][index][Name.isFull]=!Items.allItems[__id][index][Name.isFull];
  }


  addtocart(id:string){
    const [index,__id] = this.getId(id);
    var cart = <HTMLElement>document.getElementById("c");
    cart.style.backgroundColor=Items.allItems[__id][index][Name.isAdded]?"#296fca":"#f44336";
    cart.getElementsByTagName("h3")[0].innerHTML=Items.allItems[__id][index][Name.isAdded]?"Add ":"Added";
    Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
    Items.updateCart();
  }


}
