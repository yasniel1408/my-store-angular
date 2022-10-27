import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SharedModule, SwiperModule],
  exports: [ProductComponent],
})
export class ProductModule {}
