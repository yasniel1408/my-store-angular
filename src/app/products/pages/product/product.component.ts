import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamsConstants } from 'src/app/shared/constants/params.constants';
import { IProductModel } from 'src/app/shared/models/product.model';
import { CartProviderService } from 'src/app/shared/providers/cart-provider/cart-provider.service';
import { GetByIdProductsStoreService } from 'src/app/shared/providers/product/get-by-id-products-store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  public productId: string | null = null;
  public product: IProductModel = {
    id: 0,
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

  constructor(
    public activatedRoute: ActivatedRoute,
    public cartProviderService: CartProviderService,
    public getByIdProductsStoreService: GetByIdProductsStoreService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get(ParamsConstants.PRODUCT_ID);
      this.getByIdProductsStoreService.getById(Number(this.productId)).add(() => {
        this.product = this.getByIdProductsStoreService.getResource();
      });
    });
  }

  ngOnDestroy(): void {
    this.product = {
      id: 0,
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
  }

  addProductToCart(): void {
    this.cartProviderService.addProductToCart(this.product);
  }

  goToBack() {
    this.location.back();
  }
}
