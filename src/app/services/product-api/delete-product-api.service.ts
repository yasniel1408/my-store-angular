import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteBaseApiService } from '../common/base/delete-base.service';
import { BASE_URL } from 'src/app/constants/endpoinds';

@Injectable({
  providedIn: 'root',
})
export class DeleteProductsApiService extends DeleteBaseApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.RESOURCE_BASE_URL = `${BASE_URL}/products`;
  }
}
