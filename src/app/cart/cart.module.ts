import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './pages/mycart/mycart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from 'src/app/cart/components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [MyCartComponent, CartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
