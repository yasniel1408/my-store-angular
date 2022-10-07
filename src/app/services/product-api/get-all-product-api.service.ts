import { IProductModel } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { ProductsApiBaseService } from './product-api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetAllResource } from '../common/interfaces/get-all.interface';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsApiService extends ProductsApiBaseService implements IGetAllResource<IProductModel> {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<IProductModel[]> {
    return this.httpClient.get<IProductModel[]>(`${this.PRODUCT_BASE_URL}`);
  }
}
