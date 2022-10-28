import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product.component';
import { SwiperModule } from 'swiper/angular';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SharedModule, SwiperModule, ProductRoutingModule],
  exports: [ProductComponent],
})
export class ProductModule {}
