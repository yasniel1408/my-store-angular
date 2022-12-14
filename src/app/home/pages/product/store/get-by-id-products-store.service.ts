import { Injectable } from '@angular/core';
import { GetByIdStoreBaseService } from 'src/app/shared/providers/crud-base-store-services/get-by-id-store-base.service';
import { IProductModel } from 'src/app/shared/models/product.model';
import { GetByIdProductsApiService } from 'src/app/home/api/get-by-id-product-api.service';

@Injectable({
  providedIn: 'root',
})
export class GetByIdProductsStoreService extends GetByIdStoreBaseService<IProductModel, GetByIdProductsApiService> {
  constructor(getByIdProductsApiService: GetByIdProductsApiService) {
    super(getByIdProductsApiService);
  }
}
