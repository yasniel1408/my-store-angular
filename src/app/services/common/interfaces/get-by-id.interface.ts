import { Observable } from 'rxjs';

export interface IGetByIdResource<T> {
  getById(id: number): Observable<T>;
}
