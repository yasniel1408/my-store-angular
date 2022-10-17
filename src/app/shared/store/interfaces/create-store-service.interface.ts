import { Subscription } from 'rxjs';

export interface ICreateResourceStoreService<T, D> {
  create(resource: D): Subscription;
  getResource(): T;
}
