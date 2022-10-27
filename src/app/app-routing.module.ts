import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayoutComponent } from './layout/components/public-layout/public-layout.component';
import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';
import { RoutesConstants } from './shared/constants/routes.constants';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
        data: { preload: true }, //esto es para la precarga junto con lo que esta en el import ngModule
      },
      {
        path: RoutesConstants.CART_ROUTE,
        loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
        data: { preload: true },
      },
      // {
      //   path: RoutesConstants.LOGIN_ROUTE,
      //   component: LoginComponent,
      // },
      // {
      //   path: RoutesConstants.REGISTER_ROUTE,
      //   component: RegisterComponent,
      // },
      // {
      //   path: RoutesConstants.RECOVERY_ROUTE,
      //   component: RecoveryComponent,
      // },
      // {
      //   path: RoutesConstants.PROFILE_ROUTE,
      //   component: ProfileComponent,
      // },
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
