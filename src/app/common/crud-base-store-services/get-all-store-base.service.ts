import { IBaseModel } from 'src/app/models/base-model.model';
import { GetAllBaseApiService } from 'src/app/api/common/crud-base-api-service/get-all-base-api.service';
import { CrudBaseStoreService } from './crud-base-store-service';
import { IGetAllResourceStoreService } from '../interfaces/get-all-store-service.interface';

export abstract class GetAllStoreBaseService<M extends IBaseModel, S extends GetAllBaseApiService<M>> extends CrudBaseStoreService<S> implements IGetAllResourceStoreService<M> {
  protected limit: number = 4;
  protected offset: number = 0;

  protected dataList: M[] = [];

  getAll() {
    this.isLoading = true;
    return this.baseService.getAll(this.limit, this.offset).subscribe({
      next: (data: M[]) => {
        this.dataList = this.dataList.concat(data);
        this.offset += this.limit;
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
