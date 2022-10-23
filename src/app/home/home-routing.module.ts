import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/shared/constants/routes.constants';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    // component: LayoutDeEsteModulo,
    children: [
      {
        path: '',
        redirectTo: RoutesConstants.HOME_ROUTE, // config para redireccionar a otro path
        pathMatch: 'full',
      },
      {
        path: RoutesConstants.HOME_ROUTE,
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
