import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataCategoryTreeComponent } from './pages/data-category-tree/data-category-tree.component';

const routes: Routes = [
  {
    path:'data-category-tree',component:DataCategoryTreeComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'data-category-tree' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicDataRoutingModule { }
