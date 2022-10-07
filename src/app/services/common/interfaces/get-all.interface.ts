import { Observable } from 'rxjs';

export interface IGetAllResource<T> {
  getAll(): Observable<T[]>;
}
