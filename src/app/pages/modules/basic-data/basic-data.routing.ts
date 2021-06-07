import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataCategoryTreeComponent } from './pages/data-category-tree/data-category-tree.component';
import { DataDictionaryComponent } from './pages/data-dictionary/data-dictionary.component';

const routes: Routes = [
  {
    path:'data-category-tree',component:DataCategoryTreeComponent
  },
  {
    path:'data-dictionary',component:DataDictionaryComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'data-category-tree' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicDataRoutingModule { }
