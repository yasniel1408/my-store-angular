import { Component, OnInit } from '@angular/core';
import { CartProviderService } from 'src/app/shared/providers/cart-provider/cart-provider.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cantProductsInCart: number = 0;

  constructor(public cartProviderService: CartProviderService) {}

  ngOnInit(): void {
    this.cartProviderService.myCart$.subscribe((products) => {
      this.cantProductsInCart = products.length;
    });
  }
}
