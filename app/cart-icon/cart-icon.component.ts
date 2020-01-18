import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.sass']
})
export class CartIconComponent implements OnInit {
  itemsLengths = 0;
  constructor(private cservice: CartService) { }

  ngOnInit() {
  }
}
