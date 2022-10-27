import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductModel } from 'src/app/shared/models/product.model';
import { CurrentProductProviderService } from 'src/app/shared/providers/current-product-provider/current-product-provider.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products: IProductModel[] = [];

  public productIdModalActive: string | null = null;

  today = new Date();
  date = new Date(2021, 1, 21);

  @Input() isLoading: boolean = false;

  @Output() OnMoreData = new EventEmitter();

  constructor(public activatedRoute: ActivatedRoute, public currentProductProviderService: CurrentProductProviderService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.productIdModalActive = params.get('id');
      if (!!this.productIdModalActive) this.currentProductProviderService.selectedProduct(Number(this.productIdModalActive));
    });
  }

  getMoreData() {
    this.OnMoreData.emit();
  }
}
