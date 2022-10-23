import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/shared/constants/routes.constants';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { ParamsConstants } from '../shared/constants/params.constants';

const routes: Routes = [
  {
    path: '',
    // component: LayoutDeEsteModulo,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'grid',
      //   pathMatch: 'full',
      // },
      {
        path: `:${ParamsConstants.PRODUCT_ID}`,
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
export class ProductsRoutingModule {}
