import { IProductModel } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllBaseApiService } from 'src/app/shared/api/crud-base-api-service/get-all-base-api.service';
import { BASE_URL } from 'src/app/shared/constants/endpoinds';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

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
