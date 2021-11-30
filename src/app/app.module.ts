import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgwWowModule } from 'ngx-wow';
import { OrderComponent } from './order/order.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { InfoComponent } from './info/info.component';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PrevOrdersComponent } from './prev-orders/prev-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CategoriesComponent,
    OrderComponent,
    InfoComponent,
    PlaceorderComponent,
    PrevOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatBottomSheetModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    NgwWowModule,
    MatStepperModule,
    MatRippleModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatSnackBarModule
  ],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
