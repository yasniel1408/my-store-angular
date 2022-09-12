import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = {
    id: 1,
    name: 'Nombre de ejemplo',
    image: '',
    price: 456,
  };

  constructor() {}

  ngOnInit(): void {}
}
