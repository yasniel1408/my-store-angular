import { Injectable } from '@angular/core';
import { DeleteStoreBaseService } from 'src/app/shared/providers/crud-base-store-services/delete-store-base.service';
import { IProductModel } from 'src/app/shared/models/product.model';
import { DeleteProductsApiService } from 'src/app/home/api/delete-product-api.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteProductsStoreService extends DeleteStoreBaseService<IProductModel, DeleteProductsApiService> {
  constructor(deleteProductsApiService: DeleteProductsApiService) {
    super(deleteProductsApiService);
  }
}
