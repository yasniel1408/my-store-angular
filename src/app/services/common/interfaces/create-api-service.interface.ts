import { Observable } from 'rxjs';

export interface ICreateResourceApiService<T, D> {
  create(resource: D): Observable<T>;
}
