import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllBaseApiService } from '../common/crud-base-api-service/get-all-base-api.service';
import { IUserModel } from 'src/app/models/user.model';
import { APiRoutesConstants } from 'src/app/constants/api-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class GetAllUsersApiService extends GetAllBaseApiService<IUserModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, APiRoutesConstants.USERS_ROUTE);
  }
}
