import { IProductModel, ICreateProductModelDTO } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { CreateBaseApiService } from '../common/crud-base-api-service/create-base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateProductsApiService extends CreateBaseApiService<IProductModel, ICreateProductModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `products`);
  }
}
