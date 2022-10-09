import { catchError, Observable, retry } from 'rxjs';
import { CrudBaseApiService } from './crud-base-api-service';
import { IDeleteResourceApiService } from '../interfaces/delete-api-service.interface';
import { HttpErrorResponse } from '@angular/common/http';

export class DeleteBaseApiService extends CrudBaseApiService implements IDeleteResourceApiService {
  delete(id: number): Observable<boolean> {
    this.logger('Delete', id);

    return this.httpClient
      .delete<boolean>(`${this.RESOURCE_BASE_URL}/${id}`)
      .pipe(retry(2))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleErrors(err);
        })
      );
  }
}
