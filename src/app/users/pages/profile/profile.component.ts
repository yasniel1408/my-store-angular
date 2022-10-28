import { Component, OnInit } from '@angular/core';
import { UserProfileProviderService } from '../../../shared/providers/user-profile-provider/user-profile-provider.service';
import { IUserModel } from '../../../shared/models/user.model';
import { AuthGuard } from '../../../shared/guards/auth-guard/auth.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user: IUserModel | null = null;

  constructor(public userProfileProviderService: UserProfileProviderService, public authGuard: AuthGuard) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.userProfileProviderService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
