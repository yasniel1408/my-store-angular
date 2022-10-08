import { Observable } from 'rxjs';

export interface IDeleteResource {
  delete(id: number): Observable<boolean>;
}
