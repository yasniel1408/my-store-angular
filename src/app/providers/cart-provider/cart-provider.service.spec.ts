import { TestBed } from '@angular/core/testing';

import { CartProviderService } from './cart-provider.service';

describe('CartService', () => {
  let service: CartProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
