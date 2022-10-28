import { Component, OnInit } from '@angular/core';
import { ICreateUserModelDTO, Role } from '../../../shared/models/user.model';
import { CreateUserStoreService } from './store/create-user-store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(public createUserStoreService: CreateUserStoreService) {}

  createUser() {
    const user: ICreateUserModelDTO = { email: 'yasniel1@gmail.com', password: 'yasniel1', name: 'Yasniel Fajardo Egues1', role: Role.ADMIN };
    this.createUserStoreService.create(user);
  }
}
