import { Component, OnInit } from '@angular/core';
import { IUserCredentials } from '../../../shared/models/user.model';
import { LoginUserStoreService } from './store/login-user-store.service';
import { UserProfileProviderService } from '../../../shared/providers/user-profile-provider/user-profile-provider.service';
import { Router } from '@angular/router';
import { RoutesConstants } from '../../../shared/constants/routes.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public loginUserStoreService: LoginUserStoreService, public userProfileProviderService: UserProfileProviderService, public router: Router) {}

  login() {
    const auth: IUserCredentials = { email: 'yasniel1@gmail.com', password: 'yasniel1' };
    this.loginUserStoreService.login(auth).add(() => {
      this.userProfileProviderService.getProfile().add(() => {
        this.router.navigateByUrl(RoutesConstants.HOME_ROUTE);
      });
    });
  }
}
