import { Subscription } from 'rxjs';

export interface IDeleteResourceStoreService {
  delete(id: number): Subscription;
  getIsDeleted(): boolean;
}
