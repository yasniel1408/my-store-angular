import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from 'src/app/pages/products/store/product-store.service';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent implements OnInit {
  public product: IProduct = {
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

  constructor(public productStoreService: ProductStoreService) {}

  ngOnInit(): void {
    this.productStoreService.currentProductSelected$.subscribe(
      (product: IProduct) => {
        if (product.id !== 0) {
          this.product = product;
          this.isShowModal = true;
        }
      }
    );
  }

  hideModal() {
    this.isShowModal = false;
  }
}
