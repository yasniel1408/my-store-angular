import { Observable } from 'rxjs';

export interface IGetAllResourceApiService<T> {
  getAll(limit?: number, offset?: number): Observable<T[]>;
}
