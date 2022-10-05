import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductStoreService } from 'src/app/pages/products/store/product-store.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: IProduct = {
    id: 1,
    title: 'Nombre de ejemplo',
    images: [],
    description: '',
    category: {
      id: 0,
      name: '',
    },
    price: 456,
  };

  constructor(
    public productStoreService: ProductStoreService,
    public cartService: CartService
  ) {}

  addProductToCart(p: IProduct): void {
    this.cartService.addProductToCart(p);
  }

  onSelectedProduct(product: IProduct) {
    this.productStoreService.selectedProduct(product);
  }
}
