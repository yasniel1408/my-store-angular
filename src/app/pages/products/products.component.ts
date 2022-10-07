import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/app/models/product.model';
import { GetAllProductsApiService } from 'src/app/services/product-api/get-all-product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: IProductModel[] = [];
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(public getAllProductsApiService: GetAllProductsApiService) {}

  ngOnInit(): void {
    this.getAllProductsApiService.getAll().subscribe((data) => {
      this.products = data;
    });
  }
}
