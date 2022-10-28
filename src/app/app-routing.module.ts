import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayoutComponent } from './layout/components/public-layout/public-layout.component';
import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';
import { RoutesConstants } from './shared/constants/routes.constants';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './shared/guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: RoutesConstants.CART_ROUTE,
        loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: RoutesConstants.AUTH_ROUTE,
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      // {
      //   path: RoutesConstants.RECOVERY_ROUTE,
      //   component: RecoveryComponent,
      // },
      {
        path: RoutesConstants.PROFILE_ROUTE,
        loadChildren: () => import('./users/user.module').then((m) => m.UserModule),
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
