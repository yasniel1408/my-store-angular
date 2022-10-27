import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteBaseApiService } from 'src/app/shared/api/crud-base-api-service/delete-base-api.service';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class DeleteProductsApiService extends DeleteBaseApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.PRODUCTS_ROUTE);
  }
}
