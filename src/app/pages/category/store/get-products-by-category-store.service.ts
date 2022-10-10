import { GetAllStoreBaseService } from 'src/app/common/crud-base-store-services/get-all-store-base.service';
import { IProductModel } from 'src/app/models/product.model';
import { GetProductsByCategoryApiService } from 'src/app/api/product-api/get-products-by-category-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetProductsByCategoryStoreService extends GetAllStoreBaseService<IProductModel, GetProductsByCategoryApiService> {
  constructor(getProductsByCategoryApiService: GetProductsByCategoryApiService) {
    super(getProductsByCategoryApiService);
  }

  setParamsApiRoute(categoryId: string | null) {
    categoryId && this.baseService.setParamsApiRoute(categoryId);
  }
}
