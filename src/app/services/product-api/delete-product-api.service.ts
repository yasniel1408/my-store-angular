import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteBaseApiService } from '../common/base/delete-base.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteProductsApiService extends DeleteBaseApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient, `products`);
  }
}
