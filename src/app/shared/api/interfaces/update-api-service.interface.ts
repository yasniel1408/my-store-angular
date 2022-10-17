import { Observable } from 'rxjs';

export interface IUpdateResourceApiService<T, D> {
  update(id: number, resource: D): Observable<T>;
}
