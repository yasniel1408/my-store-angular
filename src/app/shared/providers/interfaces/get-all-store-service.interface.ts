import { Subscription } from 'rxjs';

export interface IGetAllResourceStoreService<T> {
  getAll(limit?: number, offset?: number): Subscription;
  getDataList(): T[];
}
