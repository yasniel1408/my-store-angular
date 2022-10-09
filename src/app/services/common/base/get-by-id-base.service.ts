import { IBaseModel } from 'src/app/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { IBaseService } from './base-service';
import { IGetByIdResource } from '../interfaces/get-by-id.interface';
import { HttpErrorResponse } from '@angular/common/http';

export class GetByIdBaseApiService<M extends IBaseModel> extends IBaseService implements IGetByIdResource<M> {
  getById(id: number): Observable<M> {
    this.logger('GetById', id);

    return this.httpClient
      .get<M>(`${this.RESOURCE_BASE_URL}/${id}`)
      .pipe(retry(2))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
