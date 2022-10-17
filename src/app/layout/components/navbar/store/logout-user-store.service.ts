import { Injectable } from '@angular/core';
import { TokenProviderService } from 'src/app/shared/providers/token-provider/token-provider.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutUserStoreService {
  constructor(private tokenProviderService: TokenProviderService) {}

  logout() {
    this.tokenProviderService.removeToken();
  }
}
