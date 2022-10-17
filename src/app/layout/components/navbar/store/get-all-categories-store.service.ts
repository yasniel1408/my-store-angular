import { Injectable } from '@angular/core';
import { GetAllCategoriesApiService } from 'src/app/layout/api/get-all-categories-api.service';
import { GetAllStoreBaseService } from 'src/app/shared/store/crud-base-store-services/get-all-store-base.service';
import { ICategoryModel } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesStoreService extends GetAllStoreBaseService<ICategoryModel, GetAllCategoriesApiService> {
  constructor(getAllCategoriesApiService: GetAllCategoriesApiService) {
    super(getAllCategoriesApiService);
  }
}
