import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items;
  itemsLength = 0;
  price = 0;
  discount = 0;
  totalprice = 0;
  constructor(private cservice: CartService) { }

  ngOnInit() {
    this.items = this.cservice.getItems();
    this.cservice.getItems().forEach(x => {this.price += x.price;this.discount += ((x.price/100) * x.discount)});
    this.totalprice = (this.price - this.discount);
    this.itemsLength = this.items.length;
  }

  removeToCart(item) {
    window.alert('Your product has been removed from cart!');
    this.cservice.removeToCart(item);
  }

  countIncrease(){
    this.cservice.count++;
  }
  countDecrease(){
    if(this.cservice.count > 1)
    {
      this.cservice.count--;
    }
  }
}
