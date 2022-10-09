import { IBaseModel } from 'src/app/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { ICreateResourceApiService } from '../interfaces/create-api-service.interface';
import { CrudBaseApiService } from './crud-base-api-service';
import { HttpErrorResponse } from '@angular/common/http';

export class CreateBaseApiService<M extends IBaseModel, D extends IBaseModel> extends CrudBaseApiService implements ICreateResourceApiService<M, D> {
  create(resource: D): Observable<M> {
    this.logger('Create', resource);

    return this.httpClient
      .post<M>(this.RESOURCE_BASE_URL, resource)
      .pipe(retry(2))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
