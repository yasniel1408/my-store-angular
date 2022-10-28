import { Injectable } from '@angular/core';
import { CreateStoreBaseService } from 'src/app/shared/providers/crud-base-store-services/create-store-base.service';
import { IUserModel, ICreateUserModelDTO } from 'src/app/shared/models/user.model';
import { CreateUsersApiService } from 'src/app/auth/api/create-user-api.service';

@Injectable({
  providedIn: 'root',
})
export class CreateUserStoreService extends CreateStoreBaseService<IUserModel, ICreateUserModelDTO, CreateUsersApiService> {
  constructor(createUsersApiService: CreateUsersApiService) {
    super(createUsersApiService);
  }
}
