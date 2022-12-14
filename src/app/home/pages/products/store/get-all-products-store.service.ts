import { Injectable } from '@angular/core';
import { IProductModel } from 'src/app/shared/models/product.model';
import { GetAllStoreBaseService } from 'src/app/shared/providers/crud-base-store-services/get-all-store-base.service';
import { GetAllProductsApiService } from 'src/app/home/api/get-all-products-api.service';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsStoreService extends GetAllStoreBaseService<IProductModel, GetAllProductsApiService> {
  constructor(getAllProductsApiService: GetAllProductsApiService) {
    super(getAllProductsApiService);
  }
}
