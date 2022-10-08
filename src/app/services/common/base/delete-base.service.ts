import { catchError, Observable } from 'rxjs';
import { IBaseService } from './base-service';
import { IDeleteResource } from '../interfaces/delete.interface';
import { HttpErrorResponse } from '@angular/common/http';

export class DeleteBaseApiService extends IBaseService implements IDeleteResource {
  delete(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.RESOURCE_BASE_URL}/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleErrors(err);
      })
    );
  }
}
