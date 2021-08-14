import { PlaceorderComponent } from './placeorder/placeorder.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: ':hotel',
    component: MenuComponent,
    data: {animation: 'Home'}
  },
  {
    path: ':hotel/items/:menu',
    component: CategoriesComponent,
    data: {animation: 'items'}
  },
  {
    path: ':hotel/placeorder',
    component: PlaceorderComponent,
    data: {animation: 'placeorder'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
