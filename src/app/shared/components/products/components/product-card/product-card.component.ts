import { Component, Input, OnInit } from '@angular/core';
import { IProductModel } from 'src/app/shared/models/product.model';
import { CurrentProductStoreService } from 'src/app/shared/providers/product/current-product-store.service';
import { CartProviderService } from 'src/app/shared/providers/cart-provider/cart-provider.service';
import { RoutesConstants } from 'src/app/shared/constants/routes.constants';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProductModel = {
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

  public goToProductRoute = '';

  constructor(public currentProductStoreService: CurrentProductStoreService, public cartProviderService: CartProviderService) {}

  ngOnInit(): void {
    this.goToProductRoute = `/${RoutesConstants.PRODUCTS_ROUTE}/${this.product.id}`;
  }

  addProductToCart(p: IProductModel): void {
    this.cartProviderService.addProductToCart(p);
  }

  onSelectedProduct(productId: number) {
    this.currentProductStoreService.selectedProduct(productId);
  }
}
