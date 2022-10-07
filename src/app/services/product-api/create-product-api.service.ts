import { IProductModel } from 'src/app/models/product.model';
import { ProductsApiBaseService } from './product-api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateResource } from '../common/interfaces/create.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateProductsApiService extends ProductsApiBaseService implements ICreateResource<IProductModel> {
  constructor(private httpClient: HttpClient) {
    super();
  }

  create(product: IProductModel) {
    return this.httpClient.post<IProductModel>(`${this.PRODUCT_BASE_URL}`, product);
  }
}
