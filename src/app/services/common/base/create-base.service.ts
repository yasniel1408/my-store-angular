import { IBaseModel } from 'src/app/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { ICreateResource } from '../interfaces/create.interface';
import { IBaseService } from './base-service';
import { HttpErrorResponse } from '@angular/common/http';

export class CreateBaseApiService<M extends IBaseModel, D extends IBaseModel> extends IBaseService implements ICreateResource<M> {
  create(resource: D): Observable<M> {
    return this.httpClient
      .post<M>(this.RESOURCE_BASE_URL, resource)
      .pipe(retry(3))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
