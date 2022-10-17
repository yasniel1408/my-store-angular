import { IBaseModel } from 'src/app/shared/models/base-model.model';
import { CrudBaseStoreService } from './crud-base-store-service';
import { UpdateBaseApiService } from 'src/app/shared/api/crud-base-api-service/update-base-api.service';
import { IUpdateResourceStoreService } from '../interfaces/update-store-service.interface';

export abstract class UpdateStoreBaseService<M extends IBaseModel, D extends IBaseModel, S extends UpdateBaseApiService<M, D>>
  extends CrudBaseStoreService<S>
  implements IUpdateResourceStoreService<M, D>
{
  protected resource: M | any = {
    id: 0,
  };

  update(id: number, data: D) {
    this.isLoading = true;
    return this.baseService.update(id, data).subscribe({
      next: (newData: M) => {
        this.resource = newData;
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

  getResource(): M {
    return this.resource;
  }
}
