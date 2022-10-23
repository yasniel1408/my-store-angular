import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { SwiperModule } from 'swiper/angular';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [CategoryComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, SwiperModule],
  exports: [CategoryComponent, ProductComponent],
})
export class ProductsModule {}
