import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './common/pages/not-found/not-found.component';
import { CategoryComponent } from './products/pages/category/category.component';
import { MyCartComponent } from './cart/pages/mycart/mycart.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { RecoveryComponent } from './common/pages/recovery/recovery.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { HomeComponent } from './home/pages/home/home.component';
import { ProductComponent } from './products/pages/product/product.component';
import { RoutesConstants } from './shared/constants/routes.constants';
import { ParamsConstants } from './shared/constants/params.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesConstants.HOME_ROUTE, // config para redireccionar a otro path
    pathMatch: 'full',
  },
  {
    path: RoutesConstants.HOME_ROUTE,
    component: HomeComponent,
  },
  {
    path: `${RoutesConstants.PRODUCT_ROUTE}/:${ParamsConstants.PRODUCT_ID}`,
    component: ProductComponent,
  },
  {
    path: `${RoutesConstants.CATEGORY_ROUTE}/:${ParamsConstants.CATEGORY_ID}`,
    component: CategoryComponent,
  },
  {
    path: RoutesConstants.CART_ROUTE,
    component: MyCartComponent,
  },
  {
    path: RoutesConstants.LOGIN_ROUTE,
    component: LoginComponent,
  },
  {
    path: RoutesConstants.REGISTER_ROUTE,
    component: RegisterComponent,
  },
  {
    path: RoutesConstants.RECOVERY_ROUTE,
    component: RecoveryComponent,
  },
  {
    path: RoutesConstants.PROFILE_ROUTE,
    component: ProfileComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
