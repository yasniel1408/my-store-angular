import { Observable } from 'rxjs';

export interface IGetAllResource<T> {
  getAll(limit?: number, offset?: number): Observable<T[]>;
}
