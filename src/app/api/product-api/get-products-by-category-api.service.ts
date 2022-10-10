import { IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllBaseApiService } from '../common/crud-base-api-service/get-all-base-api.service';
import { BASE_URL } from 'src/app/constants/endpoinds';

@Injectable({
  providedIn: 'root',
})
export class GetProductsByCategoryApiService extends GetAllBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '');
  }

  setParamsApiRoute(categoryId: string) {
    this.RESOURCE_BASE_URL = this.RESOURCE_BASE_URL = `${BASE_URL}/categories/${categoryId}/products`;
  }
}
