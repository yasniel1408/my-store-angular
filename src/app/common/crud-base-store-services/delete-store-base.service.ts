import { IBaseModel } from 'src/app/models/base-model.model';
import { CrudBaseStoreService } from './crud-base-store-service';
import { DeleteBaseApiService } from 'src/app/api/common/crud-base-api-service/delete-base-api.service';
import { IDeleteResourceStoreService } from '../interfaces/delete-store-service.interface';

export abstract class DeleteStoreBaseService<M extends IBaseModel, S extends DeleteBaseApiService> extends CrudBaseStoreService<S> implements IDeleteResourceStoreService {
  protected isDeleted: boolean = false;

  delete(id: number) {
    this.isLoading = true;
    return this.baseService.delete(id).subscribe({
      next: (res: boolean) => {
        if (res) {
          this.isDeleted = true;
        }
      },
      error: (err) => {
        this.isLoading = false;
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  getIsDeleted(): boolean {
    return this.isDeleted;
  }
}
