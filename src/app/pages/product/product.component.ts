import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamsConstants } from 'src/app/constants/params.constants';
import { IProductModel } from 'src/app/models/product.model';
import { GetByIdProductsStoreService } from 'src/app/providers/product/get-by-id-products-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productId: string | null = null;
  public product: IProductModel = {
    id: 1,
    title: 'Nombre de ejemplo',
    images: [],
    description: '',
    category: {
      id: 0,
      name: '',
    },
    price: 456,
    taxes: 456,
  };

  constructor(public activatedRoute: ActivatedRoute, public getByIdProductsStoreService: GetByIdProductsStoreService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get(ParamsConstants.PRODUCT_ID);
      this.getByIdProductsStoreService.getById(Number(this.productId)).add(() => {
        this.product = this.getByIdProductsStoreService.getResource();
      });
    });
  }
}
