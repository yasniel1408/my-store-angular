import { IBaseModel } from 'src/app/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { IBaseService } from './base-service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUpdateResource } from '../interfaces/update.interface';

export class UpdateBaseApiService<M extends IBaseModel, D extends IBaseModel> extends IBaseService implements IUpdateResource<M> {
  update(id: number, resource: D): Observable<M> {
    return this.httpClient
      .put<M>(`${this.RESOURCE_BASE_URL}/${id}`, resource)
      .pipe(retry(3))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
