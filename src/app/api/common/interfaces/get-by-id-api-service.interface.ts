import { Observable } from 'rxjs';

export interface IGetByIdResourceApiService<T> {
  getById(id: number): Observable<T>;
}
