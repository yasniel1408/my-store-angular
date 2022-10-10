import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORY_ID } from 'src/app/constants/params';
import { GetProductsByCategoryStoreService } from './store/get-products-by-category-store.service';
import { IProductModel } from 'src/app/models/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public categoryId: string | null = null;

  public products: IProductModel[] = [];

  constructor(public activatedRoute: ActivatedRoute, public getProductsByCategoryStoreService: GetProductsByCategoryStoreService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoryId = params.get(CATEGORY_ID);
      this.getProductsByCategoryStoreService.setParamsApiRoute(this.categoryId);
      this.getDataProductsByCategory();
    });
  }

  getDataProductsByCategory() {
    this.products = [];
    this.getProductsByCategoryStoreService.getAll(4, 0).add(() => {
      const products: IProductModel[] = this.getProductsByCategoryStoreService.getDataList();
      this.products = products;
    });
  }
}
