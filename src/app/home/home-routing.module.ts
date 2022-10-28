import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/shared/constants/routes.constants';
import { ParamsConstants } from '../shared/constants/params.constants';

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
        loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: `${RoutesConstants.PRODUCTS_ROUTE}/:${ParamsConstants.PRODUCT_ID}`,
        loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: `${RoutesConstants.PRODUCTS_ROUTE}/${RoutesConstants.CATEGORY_ROUTE}/:${ParamsConstants.CATEGORY_ID}`,
        loadChildren: () => import('./pages/category/category.module').then((m) => m.CategoryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
