import { IBaseModel } from 'src/app/shared/models/base-model.model';
import { catchError, Observable, retry } from 'rxjs';
import { CrudBaseApiService } from './crud-base-api-service';
import { IGetByIdResourceApiService } from '../interfaces/get-by-id-api-service.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { checkTime } from 'src/app/shared/interceptors/time.interceptor';

export class GetByIdBaseApiService<M extends IBaseModel> extends CrudBaseApiService implements IGetByIdResourceApiService<M> {
  getById(id: number): Observable<M> {
    this.logger('GetById', id);

    return this.httpClient
      .get<M>(`${this.RESOURCE_BASE_URL}/${id}`, { context: checkTime() }) //usar un cotext para los inteceptores
      .pipe(retry(2))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
