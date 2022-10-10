import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products: IProductModel[] = [];

  today = new Date();
  date = new Date(2021, 1, 21);

  @Input() isLoading: boolean = false;

  @Output() OnMoreData = new EventEmitter();

  constructor() {}

  getMoreData() {
    this.OnMoreData.emit();
  }
}
