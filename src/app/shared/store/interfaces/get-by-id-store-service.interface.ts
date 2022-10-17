import { Subscription } from 'rxjs';

export interface IGetByIdResourceStoreService<T> {
  getById(id: number): Subscription;
  getResource(): T;
}
