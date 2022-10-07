import { IProductModel } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { ProductsApiBaseService } from './product-api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetByIdResource } from '../common/interfaces/get-by-id.interface';

@Injectable({
  providedIn: 'root',
})
export class GetByIdProductsApiService extends ProductsApiBaseService implements IGetByIdResource<IProductModel> {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getById(id: number): Observable<IProductModel> {
    return this.httpClient.get<IProductModel>(`${this.PRODUCT_BASE_URL}/${id}`);
  }
}
