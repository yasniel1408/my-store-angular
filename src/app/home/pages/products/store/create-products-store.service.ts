import { Injectable } from '@angular/core';
import { CreateStoreBaseService } from 'src/app/shared/store/crud-base-store-services/create-store-base.service';
import { IProductModel } from 'src/app/shared/models/product.model';
import { CreateProductsApiService } from 'src/app/home/api/create-product-api.service';
import { ICreateProductModelDTO } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CreateProductsStoreService extends CreateStoreBaseService<IProductModel, ICreateProductModelDTO, CreateProductsApiService> {
  constructor(createProductsApiService: CreateProductsApiService) {
    super(createProductsApiService);
  }
}
