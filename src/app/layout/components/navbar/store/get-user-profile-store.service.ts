import { Injectable } from '@angular/core';
import { CrudBaseStoreService } from 'src/app/shared/store/crud-base-store-services/crud-base-store-service';
import { GetUserProfileApiService } from 'src/app/layout/api/get-user-profile-api.service';
import { IUserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class GetUserProfileStoreService extends CrudBaseStoreService<GetUserProfileApiService> {
  private user: IUserModel = { id: 0, email: '', password: '', name: '' };

  constructor(getUserProfileApiService: GetUserProfileApiService) {
    super(getUserProfileApiService);
  }

  profile() {
    this.isLoading = true;
    return this.baseService.profile().subscribe({
      next: (newData: IUserModel) => {
        this.user = newData;
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

  getProfile() {
    return this.user;
  }
}
