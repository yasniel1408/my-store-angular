import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ImgComponent } from './components/img/img.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/products/components/product-card/product-card.component';
import { ProductDetailModalComponent } from './components/products/components/product-detail-modal/product-detail-modal.component';
import { SwiperModule } from 'swiper/angular';
import { GlobalLoadingComponent } from './components/global-loading/global-loading.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CustomCurrencyPipe,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ImgComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailModalComponent,
    NotFoundComponent,
    RecoveryComponent,
    GlobalLoadingComponent,
  ],
  exports: [ImgComponent, ProductsComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ], //Ejecutamos los interceptores
  imports: [CommonModule, RouterModule, SwiperModule],
})
export class SharedModule {}
