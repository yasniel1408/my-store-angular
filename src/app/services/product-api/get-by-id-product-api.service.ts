import { IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GetByIdBaseApiService } from '../common/base/get-by-id-base.service';
import { Observable, retry, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetByIdProductsApiService extends GetByIdBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `products`);
  }
}
