import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CrudBaseApiService } from '../common/crud-base-api-service/crud-base-api-service';
import { catchError } from 'rxjs';
import { IUserModel, IUserAccessToken } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class GetUserProfilesApiService extends CrudBaseApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient, `profile`);
  }

  profile(token: IUserAccessToken) {
    this.logger('Get Profile');

    return this.httpClient.get<IUserModel>(`${this.RESOURCE_BASE_URL}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleErrors(err);
      })
    );
  }
}
