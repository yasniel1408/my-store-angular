import { IProductModel, ICreateProductModelDTO } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { CreateBaseApiService } from '../common/base/create-base.service';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/constants/endpoinds';

@Injectable({
  providedIn: 'root',
})
export class CreateProductsApiService extends CreateBaseApiService<IProductModel, ICreateProductModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.RESOURCE_BASE_URL = `${BASE_URL}/products`;
  }
}
