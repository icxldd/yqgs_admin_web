import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app/app.component'
import { WebComponent } from './components/web/web.component';
import { CsComponent } from './components/cs/cs.component';
const routes: Routes = [
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: 'web',
        component: WebComponent
    },
    {
      path: 'cs',
      component: CsComponent
  },
    { path: '', pathMatch: 'full', redirectTo: 'cs' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RuiKangRoutingModule { }
