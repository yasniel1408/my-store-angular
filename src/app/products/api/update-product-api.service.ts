import { IUpdateProductModelDTO, IProductModel } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateBaseApiService } from 'src/app/shared/api/crud-base-api-service/update-base-api.service';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductsApiService extends UpdateBaseApiService<IProductModel, IUpdateProductModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.PRODUCTS_ROUTE);
  }
}
