import { Component, OnInit } from '@angular/core';
import { LoginUserStoreService } from '../store/login-user-store.service';
import { IUserCredentials, IUserModel, ICreateUserModelDTO } from '../../models/user.model';
import { CreateUserStoreService } from '../store/create-user-store.service';
import { GetUserProfileStoreService } from '../store/get-user-profile-store.service';
import { LogoutUserStoreService } from '../store/logout-user-store.service';
import { TokenProviderService } from '../../providers/token-provider/token-provider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  imgParent =
    'data:image/png;base64,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';

  public showMenu = false;

  public user: IUserModel = { id: 0, email: '', password: '', name: '' };

  toggleSideBar(): void {
    this.showMenu = !this.showMenu;
  }

  constructor(
    public loginUserStoreService: LoginUserStoreService,
    public createUserStoreService: CreateUserStoreService,
    public getUserProfileStoreService: GetUserProfileStoreService,
    public logoutUserStoreService: LogoutUserStoreService,
    public tokenProviderService: TokenProviderService
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  login() {
    const auth: IUserCredentials = { email: 'yasniel1@gmail.com', password: 'yasniel1' };
    this.loginUserStoreService.login(auth).add(() => {
      this.getUserProfile();
    });
  }

  createUser() {
    const user: ICreateUserModelDTO = { email: 'yasniel1@gmail.com', password: 'yasniel1', name: 'Yasniel Fajardo Egues1' };
    this.createUserStoreService.create(user);
  }

  getUserProfile() {
    this.tokenProviderService.existToken() &&
      this.getUserProfileStoreService.profile().add(() => {
        this.user = this.getUserProfileStoreService.getProfile();
      });
  }

  logout() {
    this.logoutUserStoreService.logout();
    this.user = { id: 0, email: '', password: '', name: '' };
  }
}
