import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductCardComponent } from './pages/products/components/product-card/product-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailModalComponent } from './pages/products/components/product-detail-modal/product-detail-modal.component';
import { LandingComponent } from './pages/landing/landing.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductCardComponent,
    ProductsComponent,
    NavbarComponent,
    CustomCurrencyPipe,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    CartComponent,
    ProductDetailModalComponent,
    LandingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
