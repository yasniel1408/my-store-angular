import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, CategoryComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, SwiperModule],
  exports: [],
})
export class HomeModule {}
