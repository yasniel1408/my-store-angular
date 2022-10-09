import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CrudBaseApiService } from '../common/crud-base-api-service/crud-base-api-service';
import { IUserAccessToken } from 'src/app/models/user.model';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService extends CrudBaseApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient, `auth`);
  }

  login(auth: Credential) {
    this.logger('Login');

    return this.httpClient.post<IUserAccessToken>(`${this.RESOURCE_BASE_URL}`, auth).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleErrors(err);
      })
    );
  }
}
