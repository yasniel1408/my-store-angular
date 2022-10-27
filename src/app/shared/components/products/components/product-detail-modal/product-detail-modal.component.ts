import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentProductProviderService } from 'src/app/shared/providers/current-product-provider/current-product-provider.service';
import { IProductModel } from 'src/app/shared/models/product.model';
import { CartProviderService } from 'src/app/shared/providers/cart-provider/cart-provider.service';
import { GetByIdProductsStoreService } from './store/get-by-id-products-store.service';
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
    public currentProductProviderService: CurrentProductProviderService,
    public cartProviderService: CartProviderService,
    public getByIdProductsStoreService: GetByIdProductsStoreService
  ) {}

  ngOnInit(): void {
    this.currentProductProviderService.currentProductSelected$.subscribe({
      next: (productId) => {
        if (productId !== 0) {
          this.isShowModal = true;
          this.getByIdProductsStoreService.getById(productId).add(() => {
            this.product = this.getByIdProductsStoreService.getResource();
            this.goToProductRoute = `/${RoutesConstants.PRODUCTS_ROUTE}/${this.product.id}`;
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
    this.currentProductProviderService.cleanProduct();
    this.isShowModal = false;
  }
}
