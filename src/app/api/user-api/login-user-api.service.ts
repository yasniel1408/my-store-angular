import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CrudBaseApiService } from '../common/crud-base-api-service/crud-base-api-service';
import { IUserAccessToken } from 'src/app/models/user.model';
import { catchError, tap } from 'rxjs';
import { IUserCredentials } from 'src/app/models/user.model';
import { TokenProviderService } from '../../providers/token-provider/token-provider.service';
import { APiRoutesConstants } from 'src/app/constants/api-routes.constants';

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
