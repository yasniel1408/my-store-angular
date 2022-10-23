import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/shared/constants/routes.constants';
import { MyCartComponent } from './pages/mycart/mycart.component';

const routes: Routes = [
  {
    path: '',
    // component: LayoutDeEsteModulo,
    children: [
      {
        path: '',
        redirectTo: RoutesConstants.CART_ROUTE, // config para redireccionar a otro path
        pathMatch: 'full',
      },
      {
        path: RoutesConstants.CART_ROUTE,
        component: MyCartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
