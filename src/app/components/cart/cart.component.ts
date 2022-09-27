import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  counter = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }
}
