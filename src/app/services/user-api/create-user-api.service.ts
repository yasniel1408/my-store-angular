import { Injectable } from '@angular/core';
import { CreateBaseApiService } from '../common/crud-base-api-service/create-base-api.service';
import { HttpClient } from '@angular/common/http';
import { IUserModel, ICreateUserModelDTO } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CreateUsersApiService extends CreateBaseApiService<IUserModel, ICreateUserModelDTO> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `users`);
  }
}
