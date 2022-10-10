import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CrudBaseApiService } from '../common/crud-base-api-service/crud-base-api-service';
import { catchError } from 'rxjs';
import { IUserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class GetUserProfileApiService extends CrudBaseApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient, `auth/profile`);
  }

  profile() {
    this.logger('Get Profile');

    const token = localStorage.getItem('access_token');

    // De esta manera es mas recomendable en angular, pero ya aqui no lo hacemos porque tenemos un interceptor para eso
    //  const headers = new HttpHeaders({
    //    Authorization: 'Bearer ' + token,
    //  });

    return this.httpClient
      .get<IUserModel>(`${this.RESOURCE_BASE_URL}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
