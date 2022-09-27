import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  public shoppingCart: IProduct[] = [];
  public total = 0;

  addProductToCart(p: IProduct): void {
    this.shoppingCart.push(p);
    this.total += p.price;
  }

  removeDataCart() {
    this.shoppingCart = [];
    this.total = 0;
  }
}
