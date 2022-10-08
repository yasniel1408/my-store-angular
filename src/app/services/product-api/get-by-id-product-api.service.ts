import { IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetByIdBaseApiService } from '../common/base/get-by-id-base.service';

@Injectable({
  providedIn: 'root',
})
export class GetByIdProductsApiService extends GetByIdBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `products`);
  }
}
