import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class CartService {

    constructor(private http: HttpClient) {
    }

    getShippingPrices() {
        return this.http.get('../assets/shipping.json');
    }

    cart = [];

    addItem(item) {
        this.cart.push(item);
    }

    addItemWithAmount(item, amount) {
        if (this.cart.filter(x => x.productId == item.productId).length > 0) {
            this.cart.filter(function (i) {
                if (i.productId == item.productId) {
                    i.amount = parseInt(i.amount) + parseInt(amount.amount);
                }
            });
            console.log(this.cart);
        }
        else {
            item.amount = parseInt(amount.amount);
            this.cart.push(item);
            console.log(this.cart);
        }
        //this.cart.filter(x => console.log(x.productId));
    }

    getItems() {
        return this.cart;
    }

    getTotal() {
        let count = 0;
        this.cart.forEach(item => {
            count += (item.price * item.amount);
        });
        return count
    }

    clearCart() {
        return this.cart = [];
    }

    deleteItem(item) {
        return this.cart = this.cart.filter(i => i.productId !== item.productId);
    }

}