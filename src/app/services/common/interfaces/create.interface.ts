import { Observable } from 'rxjs';
import { IBaseModel } from 'src/app/models/base-model.model';

export interface ICreateResource<T> {
  create(resource: IBaseModel): Observable<T>;
}
