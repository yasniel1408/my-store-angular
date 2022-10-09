import { IBaseModel } from 'src/app/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { CrudBaseApiService } from './crud-base-api-service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUpdateResourceApiService } from '../interfaces/update-api-service.interface';

export class UpdateBaseApiService<M extends IBaseModel, D extends IBaseModel> extends CrudBaseApiService implements IUpdateResourceApiService<M, D> {
  update(id: number, resource: D): Observable<M> {
    this.logger(`Update id:${id}`, resource);

    return this.httpClient
      .put<M>(`${this.RESOURCE_BASE_URL}/${id}`, resource)
      .pipe(retry(2))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
