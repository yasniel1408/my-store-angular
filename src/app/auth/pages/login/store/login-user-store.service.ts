import { Injectable } from '@angular/core';
import { CrudBaseStoreService } from 'src/app/shared/providers/crud-base-store-services/crud-base-store-service';
import { IUserAccessToken } from 'src/app/shared/models/user.model';
import { IUserCredentials } from 'src/app/shared/models/user.model';
import { LoginApiService } from 'src/app/auth/api/login-user-api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginUserStoreService extends CrudBaseStoreService<LoginApiService> {
  private TOKEN: IUserAccessToken = { access_token: '' };

  constructor(loginApiService: LoginApiService) {
    super(loginApiService);
  }

  login(auth: IUserCredentials) {
    this.isLoading = true;
    return this.baseService.login(auth).subscribe({
      next: (newData: IUserAccessToken) => {
        this.TOKEN = newData;
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
