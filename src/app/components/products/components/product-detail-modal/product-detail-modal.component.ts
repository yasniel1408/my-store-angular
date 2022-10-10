import { Component, OnInit } from '@angular/core';
import { CurrentProductStoreService } from 'src/app/pages/home/store/current-product-store.service';
import { IProductModel } from 'src/app/models/product.model';
import { CartProviderService } from 'src/app/providers/cart-provider/cart-provider.service';
import { GetByIdProductsStoreService } from '../../../../pages/home/store/get-by-id-products-store.service';

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
    public currentProductStoreService: CurrentProductStoreService,
    public cartProviderService: CartProviderService,
    public getByIdProductsStoreService: GetByIdProductsStoreService
  ) {}

  ngOnInit(): void {
    this.currentProductStoreService.currentProductSelected$.subscribe({
      next: (productId) => {
        if (productId !== 0) {
          this.isShowModal = true;
          this.getByIdProductsStoreService.getById(productId).add(() => {
            this.product = this.getByIdProductsStoreService.getResource();
          });
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
