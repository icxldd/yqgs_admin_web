import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HisComponent } from './components/his/his.component';
import { GisComponent } from './components/gis/gis.component';

const routes: Routes = [
    {
        path: 'his',
        component: HisComponent
    },
    {
        path: 'gis',
        component: GisComponent
    },
    { path: '', pathMatch: 'full', redirectTo: 'his' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class henuoRoutingModule { }
