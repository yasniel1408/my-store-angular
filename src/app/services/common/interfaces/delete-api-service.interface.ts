import { Observable } from 'rxjs';

export interface IDeleteResourceApiService {
  delete(id: number): Observable<boolean>;
}
