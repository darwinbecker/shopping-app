import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { products } from './products';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'productdetails',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product;
  amountForm;

  constructor(private route: ActivatedRoute, private cartService: CartService, private form: FormBuilder) {
    this.amountForm = this.form.group({
      amount: 1
    });
  }

  ngOnInit() {
    console.log("opening productdetail view..");
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
      console.log("opened product: " + this.product.name);
    });
  }

  addItemToCart(item, amount) {
    this.cartService.addItemWithAmount(item, amount);
    alert("You added " + amount.amount + "x " + item.name + " to your cart.");
  }

  share() {
    window.alert('The product has been shared!');
  }

}