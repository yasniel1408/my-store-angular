import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/constants/endpoinds';

@Injectable({
  providedIn: 'root',
})
export abstract class ProductsApiBaseService {
  protected PRODUCT_BASE_URL: string = `${BASE_URL}/products`;

  constructor() {
    /* TODO document why this constructor is empty */
  }

  logger() {
    console.log('Products - ApiService');
    /* Podemos usar un logger para mostrar informació super util en los diferentes ambientes */
  }
}
