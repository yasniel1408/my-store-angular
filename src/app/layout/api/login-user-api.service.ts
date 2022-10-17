import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUserAccessToken } from 'src/app/shared/models/user.model';
import { catchError, tap } from 'rxjs';
import { IUserCredentials } from 'src/app/shared/models/user.model';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';
import { CrudBaseApiService } from 'src/app/shared/api/crud-base-api-service/crud-base-api-service';
import { TokenProviderService } from 'src/app/shared/providers/token-provider/token-provider.service';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService extends CrudBaseApiService {
  constructor(httpClient: HttpClient, private tokenProviderService: TokenProviderService) {
    super(httpClient, APiRoutesConstants.LOGIN_ROUTE);
  }

  login(auth: IUserCredentials) {
    this.logger('Login');

    return this.httpClient.post<IUserAccessToken>(`${this.RESOURCE_BASE_URL}`, auth).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleErrors(err);
      }),
      tap((response) => this.tokenProviderService.saveToken(response.access_token))
    );
  }
}
