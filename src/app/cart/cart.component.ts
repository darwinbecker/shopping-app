import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from './cart.service';
import { ValidationService } from '../validation/validation.service';



@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    checkoutForm;
    changeAmountForm;

    constructor(private cartService: CartService, private form: FormBuilder) {
        this.checkoutForm = this.form.group({
            name: ['', [Validators.required]],
            address: ['', [Validators.required]],
            email: ['', [Validators.required, ValidationService.emailValidator]]
        });

        // TODO: dummmy validation
/*         this.heroForm = new FormGroup({
            'name': new FormControl(this.hero.name, [
                Validators.required,
                Validators.minLength(4),
                forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
            ]),
            'alterEgo': new FormControl(this.hero.alterEgo),
            'power': new FormControl(this.hero.power, Validators.required)
        }); */

        this.changeAmountForm = this.form.group({
            amount: ""
        });
    }

    ngOnInit() {
        console.log("opening cart view..");
        this.items = this.cartService.getItems();
    }

    getTotal() {
        return this.cartService.getTotal();
    }

    clearCart() {
        console.log("clearing cart..");
        this.items = this.cartService.clearCart();
    }

    deleteItem(item) {
        return this.items = this.cartService.deleteItem(item);
    }

    submitOrder(customerData) {
        console.log("submitting order..");
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
        console.log("Your order has been submitted!", customerData);
        alert("Your order has been submitted! Delivering to: " + customerData.address)
    }

    changeAmount(item, amount) {
        console.log("before");
        console.log(item.amount);
        item.amount = amount.amount;
        console.log(item.amount);
    }
}