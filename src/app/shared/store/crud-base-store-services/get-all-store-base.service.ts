import { IBaseModel } from 'src/app/shared/models/base-model.model';
import { GetAllBaseApiService } from 'src/app/shared/api/crud-base-api-service/get-all-base-api.service';
import { CrudBaseStoreService } from './crud-base-store-service';
import { IGetAllResourceStoreService } from '../interfaces/get-all-store-service.interface';

export abstract class GetAllStoreBaseService<M extends IBaseModel, S extends GetAllBaseApiService<M>> extends CrudBaseStoreService<S> implements IGetAllResourceStoreService<M> {
  private dataList: M[] = [];

  getAll(limit?: number, offset?: number) {
    this.isLoading = true;
    return this.baseService.getAll(limit, offset).subscribe({
      next: (data: M[]) => {
        this.dataList = data;
      },
      error: (err: Error) => {
        this.isLoading = false;
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  getDataList(): M[] {
    return this.dataList;
  }
}
