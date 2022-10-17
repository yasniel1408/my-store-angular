import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentProductStoreService } from 'src/app/shared/providers/product/current-product-store.service';
import { IProductModel } from 'src/app/shared/models/product.model';
import { CartProviderService } from 'src/app/shared/providers/cart-provider/cart-provider.service';
import { GetByIdProductsStoreService } from 'src/app/shared/providers/product/get-by-id-products-store.service';
import { RoutesConstants } from 'src/app/shared/constants/routes.constants';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent implements OnInit, OnDestroy {
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

  public goToProductRoute = '';

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
            this.goToProductRoute = `/${RoutesConstants.PRODUCT_ROUTE}/${this.product.id}`;
          });
        }
      },
      error: (err) => console.log(err),
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
    };
  }

  addProductToCart(): void {
    this.cartProviderService.addProductToCart(this.product);
  }

  hideModal() {
    this.currentProductStoreService.cleanProduct();
    this.isShowModal = false;
  }
}
