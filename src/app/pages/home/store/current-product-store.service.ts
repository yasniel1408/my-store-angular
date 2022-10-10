import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentProductStoreService {
  //programacion reactiva
  private currentProductSelected = new BehaviorSubject<number>(0);
  currentProductSelected$ = this.currentProductSelected.asObservable();

  constructor() {}

  selectedProduct(productId: number): void {
    this.currentProductSelected.next(productId);
  }
}
