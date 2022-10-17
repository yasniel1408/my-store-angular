import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './shared/components/img/img.component';
import { ProductCardComponent } from './shared/components/products/components/product-card/product-card.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { TimeAgoPipe } from './shared/pipes/time-ago.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductDetailModalComponent } from './shared/components/products/components/product-detail-modal/product-detail-modal.component';

import { SwiperModule } from 'swiper/angular';
import { TimeInterceptor } from './shared/interceptors/time.interceptor';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';

import { NotFoundComponent } from './common/pages/not-found/not-found.component';
import { CategoryComponent } from './products/pages/category/category.component';
import { MyCartComponent } from './cart/pages/mycart/mycart.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { RecoveryComponent } from './common/pages/recovery/recovery.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { HomeComponent } from './home/pages/home/home.component';
import { ProductComponent } from './products/pages/product/product.component';

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
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    HomeComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ], //Ejecutamos los interceptores
  bootstrap: [AppComponent],
})
export class AppModule {}
