import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public shoppingCart: IProduct[] = [];
  public total = 0;

  //programacion reactiva
  private myCart = new BehaviorSubject<IProduct[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() {}

  addProductToCart(p: IProduct): void {
    this.shoppingCart.push(p);
    this.myCart.next(this.shoppingCart);
    this.total += p.price;
  }

  removeDataCart() {
    this.shoppingCart = [];
    this.myCart.next(this.shoppingCart);
    this.total = 0;
  }
}
