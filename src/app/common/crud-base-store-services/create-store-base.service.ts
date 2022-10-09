import { IBaseModel } from 'src/app/models/base-model.model';
import { CreateBaseApiService } from 'src/app/services/common/crud-base-api-service/create-base-api.service';
import { CrudBaseStoreService } from './crud-base-store-service';
import { ICreateResourceStoreService } from '../interfaces/create-store-service.interface';

export abstract class CreateStoreBaseService<M extends IBaseModel, D extends IBaseModel, S extends CreateBaseApiService<M, D>>
  extends CrudBaseStoreService<S>
  implements ICreateResourceStoreService<M, D>
{
  protected resource: M | any = {
    id: 0,
  };

  create(data: D) {
    this.isLoading = true;

    return this.baseService.create(data).subscribe({
      next: (newData: M) => {
        this.resource = newData;
      },
      error: (err: Error) => {
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
