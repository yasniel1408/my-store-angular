import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = {
    id: 1,
    title: 'Nombre de ejemplo',
    image: '',
    description: '',
    category: '',
    price: 456,
  };

  @Output() addProduct = new EventEmitter<IProduct>();

  constructor() {}

  ngOnInit(): void {}

  addProductToCart(p: IProduct): void {
    this.addProduct.emit(p);
  }
}
