import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/shared/constants/routes.constants';
import { ParamsConstants } from '../shared/constants/params.constants';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

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
        component: ProductsComponent,
      },
      {
        path: `${RoutesConstants.PRODUCT_ROUTE}:${ParamsConstants.PRODUCT_ID}`,
        component: ProductComponent,
      },
      {
        path: `${RoutesConstants.CATEGORY_ROUTE}/:${ParamsConstants.CATEGORY_ID}`,
        component: CategoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
