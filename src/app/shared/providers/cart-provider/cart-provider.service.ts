import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductModel } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartProviderService {
  public shoppingCart: IProductModel[] = [];
  public total = 0;

  //programacion reactiva
  private myCart = new BehaviorSubject<IProductModel[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() {}

  addProductToCart(p: IProductModel): void {
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
