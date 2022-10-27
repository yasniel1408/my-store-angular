import { IProductModel } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetByIdBaseApiService } from 'src/app/shared/api/crud-base-api-service/get-by-id-base-api.service';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class GetByIdProductsApiService extends GetByIdBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.PRODUCTS_ROUTE);
  }
}
