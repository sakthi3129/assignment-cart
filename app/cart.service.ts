import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //items = [{"id":9090,"name":"Item1","price":200,"discount":10,"category":"fiction","img_url":"http://lorempixel.com/500/600/technics/"}];
  items = [];
  count = 1;
  constructor() { }


  addToCart(product) {
    this.items.push(product);
  }

  removeToCart(product) {
    this.items.splice(product);
  }

  getItems() {
    return this.items;
  }
}
