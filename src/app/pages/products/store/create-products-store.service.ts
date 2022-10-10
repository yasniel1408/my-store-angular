import { Injectable } from '@angular/core';
import { CreateStoreBaseService } from 'src/app/common/crud-base-store-services/create-store-base.service';
import { IProductModel } from 'src/app/models/product.model';
import { CreateProductsApiService } from 'src/app/api/product-api/create-product-api.service';
import { ICreateProductModelDTO } from '../../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CreateProductsStoreService extends CreateStoreBaseService<IProductModel, ICreateProductModelDTO, CreateProductsApiService> {
  constructor(createProductsApiService: CreateProductsApiService) {
    super(createProductsApiService);
  }
}
