import { IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllBaseApiService } from '../common/crud-base-api-service/get-all-base-api.service';
import { BASE_URL } from 'src/app/constants/endpoinds';
import { APiRoutesConstants } from 'src/app/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class GetProductsByCategoryApiService extends GetAllBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '');
  }

  setParamsApiRoute(categoryId: string) {
    this.RESOURCE_BASE_URL = this.RESOURCE_BASE_URL = `${BASE_URL}/${APiRoutesConstants.CATEGORIES_ROUTE}/${categoryId}/${APiRoutesConstants.PRODUCTS_ROUTE}`;
  }
}
