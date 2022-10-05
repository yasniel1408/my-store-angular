import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductStoreService } from 'src/app/pages/products/store/product-store.service';

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

  @Output() addProduct = new EventEmitter<IProduct>();

  constructor(public productStoreService: ProductStoreService) {}

  addProductToCart(p: IProduct): void {
    this.addProduct.emit(p);
  }

  onSelectedProduct(product: IProduct) {
    this.productStoreService.selectedProduct(product)
  }
}
