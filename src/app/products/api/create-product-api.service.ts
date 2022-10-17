import { IProductModel, ICreateProductModelDTO } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';
import { CreateBaseApiService } from 'src/app/shared/api/crud-base-api-service/create-base-api.service';
import { HttpClient } from '@angular/common/http';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class CreateProductsApiService extends CreateBaseApiService<IProductModel, ICreateProductModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.PRODUCTS_ROUTE);
  }
}
