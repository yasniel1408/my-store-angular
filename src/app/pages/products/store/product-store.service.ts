import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  //programacion reactiva
  private currentProductSelected = new BehaviorSubject<IProduct>({
    id: 0,
    title: 'Nombre de ejemplo',
    images: [],
    description: '',
    category: {
      id: 0,
      name: '',
    },
    price: 456,
  });
  currentProductSelected$ = this.currentProductSelected.asObservable();

  constructor() {}

  selectedProduct(p: IProduct): void {
    this.currentProductSelected.next(p);
  }
}
