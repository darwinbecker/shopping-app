import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductlistComponent } from './products/productlist.component';
import { ProductdetailComponent } from './products/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component'
import { CartService } from './cart/cart.service'
import { ShippingComponent } from './shipping/shipping.component';
import { ControlMessagesComponent } from './validation/validation.component'
import { ValidationService } from './validation/validation.service'



@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailComponent,
    CartComponent,
    HeaderComponent,
    ShippingComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // funktioniert auch ohne diesen import
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductlistComponent },
      { path: 'products/:productId', component: ProductdetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
