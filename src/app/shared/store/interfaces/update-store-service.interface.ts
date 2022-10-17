import { Subscription } from 'rxjs';

export interface IUpdateResourceStoreService<T, D> {
  update(id: number, resource: D): Subscription;
  getResource(): T;
}
