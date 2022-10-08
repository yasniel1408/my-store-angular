import { IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetByIdBaseApiService } from '../common/base/get-by-id-base.service';
import { BASE_URL } from 'src/app/constants/endpoinds';

@Injectable({
  providedIn: 'root',
})
export class GetByIdProductsApiService extends GetByIdBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.RESOURCE_BASE_URL = `${BASE_URL}/products`;
  }
}
