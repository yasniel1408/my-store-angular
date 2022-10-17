import { IBaseModel } from './base-model.model';
export interface IUserModel extends IBaseModel {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface ICreateUserModelDTO extends Omit<IUserModel, 'id'> {}

export interface IUpdateUserModelDTO extends Partial<ICreateUserModelDTO> {}

export interface IUserCredentials {
  email: string;
  password: string;
}
export interface IUserAccessToken {
  access_token: string;
}
