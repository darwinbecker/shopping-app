import { Component } from '@angular/core';

import { products } from './products';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products = products;

  constructor() {
  }

  share() {
    window.alert('The product has been shared!');
  }

  buy() {
    window.alert('The product has been bought!');
  }
}