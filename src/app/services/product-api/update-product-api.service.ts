import { IUpdateProductModelDTO, IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateBaseApiService } from '../common/crud-base-api-service/update-base-api.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductsApiService extends UpdateBaseApiService<IProductModel, IUpdateProductModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `products`);
  }
}
