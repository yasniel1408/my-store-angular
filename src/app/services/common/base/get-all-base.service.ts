import { IBaseModel } from 'src/app/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { IBaseService } from './base-service';
import { IGetAllResource } from '../interfaces/get-all.interface';
import { HttpErrorResponse } from '@angular/common/http';

export class GetAllBaseApiService<M extends IBaseModel> extends IBaseService implements IGetAllResource<M> {
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
