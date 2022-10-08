import { IUpdateProductModelDTO, IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateBaseApiService } from '../common/base/update-base.service';
import { BASE_URL } from 'src/app/constants/endpoinds';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductsApiService extends UpdateBaseApiService<IProductModel, IUpdateProductModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.RESOURCE_BASE_URL = `${BASE_URL}/products`;
  }
}
