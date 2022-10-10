import { Injectable } from '@angular/core';
import { GetAllCategoriesApiService } from 'src/app/api/category-api/get-all-products-api.service';
import { GetAllStoreBaseService } from 'src/app/common/crud-base-store-services/get-all-store-base.service';
import { ICategoryModel } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesStoreService extends GetAllStoreBaseService<ICategoryModel, GetAllCategoriesApiService> {
  constructor(getAllCategoriesApiService: GetAllCategoriesApiService) {
    super(getAllCategoriesApiService);
  }
}
