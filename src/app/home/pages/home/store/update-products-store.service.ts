import { Injectable } from '@angular/core';
import { UpdateStoreBaseService } from 'src/app/shared/store/crud-base-store-services/update-store-base.service';
import { IProductModel } from 'src/app/shared/models/product.model';
import { IUpdateProductModelDTO } from 'src/app/shared/models/product.model';
import { UpdateProductsApiService } from 'src/app/products/api/update-product-api.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductsStoreService extends UpdateStoreBaseService<IProductModel, IUpdateProductModelDTO, UpdateProductsApiService> {
  constructor(updateProductsApiService: UpdateProductsApiService) {
    super(updateProductsApiService);
  }
}
