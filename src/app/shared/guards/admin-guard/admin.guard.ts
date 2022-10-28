import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserProfileProviderService } from '../../providers/user-profile-provider/user-profile-provider.service';
import { RoutesConstants } from '../../constants/routes.constants';
import { Role } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, public userProfileProviderService: UserProfileProviderService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userProfileProviderService.user$.pipe(
      map((user) => {
        if (user?.role === Role.ADMIN) return true;
        else {
          this.router.navigateByUrl(RoutesConstants.HOME_ROUTE);
          return false;
        }
      })
    );
  }
}
