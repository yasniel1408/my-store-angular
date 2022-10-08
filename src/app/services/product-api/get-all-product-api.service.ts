import { IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllBaseApiService } from '../common/base/get-all-base.service';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsApiService extends GetAllBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `products`);
  }
}
