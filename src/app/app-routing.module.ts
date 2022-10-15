import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { RoutesConstants } from './constants/routes.constants';
import { ParamsConstants } from './constants/params.constants';

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
