import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TokenProviderService } from '../../providers/token-provider/token-provider.service';
import { RoutesConstants } from '../../constants/routes.constants';
import { UserProfileProviderService } from '../../providers/user-profile-provider/user-profile-provider.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public tokenProviderService: TokenProviderService, private router: Router, public userProfileProviderService: UserProfileProviderService) {}

  //esto es para que si el user esta logeado y existe un token entonces tendra acceso
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const isExistToken: boolean = this.tokenProviderService.existToken();

    // if (!isExistToken) {
    //   this.router.navigateByUrl(RoutesConstants.HOME_ROUTE);
    //   return false;
    // }

    // return true;

    return this.userProfileProviderService.user$.pipe(
      map((user) => {
        if (user) return true;
        else {
          this.router.navigateByUrl(RoutesConstants.HOME_ROUTE);
          return false;
        }
      })
    );
  }
}
