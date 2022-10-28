import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from '../shared/constants/routes.constants';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { OnExitPageGuard } from '../shared/guards/on-exit-page-guard/on-exit-page.guard';

const routes: Routes = [
  {
    path: '',
    // component: LayoutDeEsteModulo,
    children: [
      {
        path: '',
        redirectTo: RoutesConstants.LOGIN_ROUTE, // config para redireccionar a otro path
        pathMatch: 'full',
      },
      {
        path: RoutesConstants.LOGIN_ROUTE,
        component: LoginComponent,
      },
      {
        path: RoutesConstants.REGISTER_ROUTE,
        component: RegisterComponent,
        canDeactivate: [OnExitPageGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
