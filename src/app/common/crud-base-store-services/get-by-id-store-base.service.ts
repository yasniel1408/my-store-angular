import { IBaseModel } from 'src/app/models/base-model.model';
import { GetByIdBaseApiService } from 'src/app/api/common/crud-base-api-service/get-by-id-base-api.service';
import { CrudBaseStoreService } from './crud-base-store-service';
import { IGetByIdResourceStoreService } from '../interfaces/get-by-id-store-service.interface';

export abstract class GetByIdStoreBaseService<M extends IBaseModel, S extends GetByIdBaseApiService<M>> extends CrudBaseStoreService<S> implements IGetByIdResourceStoreService<M> {
  protected resource: M | any = {
    id: 0,
  };

  getById(id: number) {
    this.isLoading = true;
    return this.baseService.getById(id).subscribe({
      next: (newData: M) => {
        this.resource = newData;
      },
      error: (err: Error) => {
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
        this.isLoading = false;
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
