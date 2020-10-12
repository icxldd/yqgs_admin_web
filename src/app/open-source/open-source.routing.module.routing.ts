

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LtappComponent } from './components/ltapp/ltapp.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
    {
        path: 'ltapp',
        component: LtappComponent
    },
    {
      path: 'shop',
      component: ShopComponent
  },
    { path: '', pathMatch: 'full', redirectTo: 'sili' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OpenSourceRoutingModule { }

