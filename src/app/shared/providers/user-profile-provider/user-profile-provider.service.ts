import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IUserModel } from 'src/app/shared/models/user.model';
import { CrudBaseStoreService } from '../crud-base-store-services/crud-base-store-service';
import { GetUserProfileApiService } from '../../api/get-user-profile-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileProviderService extends CrudBaseStoreService<GetUserProfileApiService> {
  private user = new BehaviorSubject<IUserModel | null>(null);
  user$ = this.user.asObservable();

  constructor(public getUserProfileApiService: GetUserProfileApiService) {
    super(getUserProfileApiService);
  }

  setUserProfile(user: IUserModel): void {
    this.user.next(user);
  }

  logout() {
    this.user.next(null);
  }

  getProfile(): Subscription {
    this.isLoading = true;
    return this.baseService.profile().subscribe({
      next: (newData: IUserModel) => {
        this.setUserProfile(newData);
      },
      error: (err: Error) => {
        this.isLoading = false;
        console.log(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
