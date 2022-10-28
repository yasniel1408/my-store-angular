import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CrudBaseApiService } from 'src/app/shared/api/crud-base-api-service/crud-base-api-service';
import { catchError, Observable } from 'rxjs';
import { IUserModel } from 'src/app/shared/models/user.model';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class GetUserProfileApiService extends CrudBaseApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.PROFILE_ROUTE);
  }

  profile(): Observable<IUserModel> {
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
