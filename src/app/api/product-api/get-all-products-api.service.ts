import { IProductModel } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GetAllBaseApiService } from '../common/crud-base-api-service/get-all-base-api.service';
import { Observable, retry, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsApiService extends GetAllBaseApiService<IProductModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `products`);
  }

  override getAll(limit?: number, offset?: number): Observable<IProductModel[]> {
    this.logger('GetAll');

    return this.httpClient
      .get<IProductModel[]>(`${this.RESOURCE_BASE_URL}?limit=${limit}&offset=${offset}`)
      .pipe(
        retry(3),
        map((products) =>
          products.map((item: IProductModel) => {
            return {
              ...item,
              taxes: 0.19 * item.price,
            };
          })
        )
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
