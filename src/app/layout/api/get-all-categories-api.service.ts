import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllBaseApiService } from 'src/app/shared/api/crud-base-api-service/get-all-base-api.service';
import { ICategoryModel } from 'src/app/shared/models/category.model';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesApiService extends GetAllBaseApiService<ICategoryModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.CATEGORIES_ROUTE);
  }
}
