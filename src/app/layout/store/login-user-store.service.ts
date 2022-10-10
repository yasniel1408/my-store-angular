import { Injectable } from '@angular/core';
import { LoginApiService } from 'src/app/api/user-api/login-user-api.service';
import { CrudBaseStoreService } from 'src/app/common/crud-base-store-services/crud-base-store-service';
import { IUserAccessToken } from 'src/app/models/user.model';
import { IUserCredentials } from 'src/app/models/user.model';
import { TokenProviderService } from 'src/app/providers/token-provider/token-provider.service';

@Injectable({
  providedIn: 'root',
})
export class LoginUserStoreService extends CrudBaseStoreService<LoginApiService> {
  private TOKEN: IUserAccessToken = { access_token: '' };

  constructor(loginApiService: LoginApiService, private tokenProviderService: TokenProviderService) {
    super(loginApiService);
  }

  login(auth: IUserCredentials) {
    this.isLoading = true;
    return this.baseService.login(auth).subscribe({
      next: (newData: IUserAccessToken) => {
        this.TOKEN = newData;
        this.tokenProviderService.saveToken(newData.access_token);
      },
      error: (err: Error) => {
        this.isLoading = false;
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  getToken() {
    return this.TOKEN;
  }
}
