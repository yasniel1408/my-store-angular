import { Component, Input } from '@angular/core';
import { IProductModel } from 'src/app/models/product.model';
import { CurrentProductStoreService } from 'src/app/pages/products/store/current-product-store.service';
import { CartProviderService } from 'src/app/providers/cart-provider/cart-provider.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: IProductModel = {
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

  constructor(public currentProductStoreService: CurrentProductStoreService, public cartProviderService: CartProviderService) {}

  addProductToCart(p: IProductModel): void {
    this.cartProviderService.addProductToCart(p);
  }

  onSelectedProduct(productId: number) {
    this.currentProductStoreService.selectedProduct(productId);
  }
}
