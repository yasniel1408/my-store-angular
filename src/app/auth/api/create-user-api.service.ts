import { Injectable } from '@angular/core';
import { CreateBaseApiService } from 'src/app/shared/api/crud-base-api-service/create-base-api.service';
import { HttpClient } from '@angular/common/http';
import { IUserModel, ICreateUserModelDTO } from 'src/app/shared/models/user.model';
import { APiRoutesConstants } from 'src/app/shared/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class CreateUsersApiService extends CreateBaseApiService<IUserModel, ICreateUserModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.USERS_ROUTE);
  }
}
