import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shopping.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.sass']
})
export class ShoppingComponent implements OnInit {
  products;
  constructor(private sservice: ShoppingService, private cservice: CartService) {
  }

  ngOnInit() {
    this.sservice.getData().subscribe(x => this.products = x);
  }

  addToCart(item) {
    //window.alert('Your product has been added to the cart!');
    this.cservice.addToCart(item);
  }


}
