import { Observable } from 'rxjs';

export interface ICreateResource<T> {
  create(resource: T): Observable<T>;
}
