

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiliComponent } from './components/sili/sili.component';

const routes: Routes = [
    {
        path: 'sili',
        component: SiliComponent
    },
    { path: '', pathMatch: 'full', redirectTo: 'sili' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class zidieRoutingModule { }

