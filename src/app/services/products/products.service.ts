import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');
  }
}
