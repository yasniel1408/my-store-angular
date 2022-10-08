import { Observable } from 'rxjs';
import { IUpdateProductModelDTO } from 'src/app/models/product.model';

export interface IUpdateResource<T> {
  update(id: number, resource: IUpdateProductModelDTO): Observable<T>;
}
