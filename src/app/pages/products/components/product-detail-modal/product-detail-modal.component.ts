import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from 'src/app/pages/products/store/product-store.service';
import { IProductModel } from 'src/app/models/product.model';
import { CartProviderService } from 'src/app/providers/cart-provider/cart-provider.service';
import { GetByIdProductsApiService } from 'src/app/services/product-api/get-by-id-product-api.service';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent implements OnInit {
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
  };
  public isShowModal: boolean = false;

  constructor(
    public productStoreService: ProductStoreService,
    public cartProviderService: CartProviderService,
    public getByIdProductsApiService: GetByIdProductsApiService
  ) {}

  ngOnInit(): void {
    this.productStoreService.currentProductSelected$.subscribe({
      next: (productId) => {
        if (productId !== 0) {
          this.getByIdProductsApiService.getById(productId).subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (err) => alert(err),
          });
          this.isShowModal = true;
        }
      },
      error: (err) => console.log(err),
    });
  }

  addProductToCart(): void {
    this.cartProviderService.addProductToCart(this.product);
  }

  hideModal() {
    this.isShowModal = false;
  }
}
