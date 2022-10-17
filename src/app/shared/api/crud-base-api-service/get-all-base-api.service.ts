import { IBaseModel } from 'src/app/shared/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { CrudBaseApiService } from './crud-base-api-service';
import { IGetAllResourceApiService } from '../interfaces/get-all-api-service.interface';
import { HttpErrorResponse } from '@angular/common/http';

export class GetAllBaseApiService<M extends IBaseModel> extends CrudBaseApiService implements IGetAllResourceApiService<M> {
  getAll(limit?: number, offset?: number): Observable<M[]> {
    this.logger('GetAll');

    return this.httpClient
      .get<M[]>(`${this.RESOURCE_BASE_URL}?limit=${limit}&offset=${offset}`)
      .pipe(retry(3))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
