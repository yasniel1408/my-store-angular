import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamsConstants } from 'src/app/constants/params.constants';
import { GetProductsByCategoryStoreService } from './store/get-products-by-category-store.service';
import { IProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public categoryId: string | null = null;

  public products: IProductModel[] = [];

  protected limit: number = 4;
  protected offset: number = 0;

  constructor(public activatedRoute: ActivatedRoute, public getProductsByCategoryStoreService: GetProductsByCategoryStoreService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.offset = 0;
      this.categoryId = params.get(ParamsConstants.CATEGORY_ID);
      this.getProductsByCategoryStoreService.setParamsApiRoute(this.categoryId);
      this.getDataProductsByCategory({ isMore: false });
    });
  }

  getDataProductsByCategory({ isMore }: { isMore: boolean }) {
    this.getProductsByCategoryStoreService.getAll(this.limit, this.offset).add(() => {
      const products: IProductModel[] = this.getProductsByCategoryStoreService.getDataList();
      this.products = isMore ? this.products.concat(products) : products;
      if (isMore) {
        this.offset += this.limit;
      } else {
        this.offset = this.limit;
      }
    });
  }
}
