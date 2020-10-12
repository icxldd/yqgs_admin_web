import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuanwangComponent } from './components/guanwang/guanwang.component';

const routes: Routes = [
    {
        path: 'guanwang',
        component: GuanwangComponent
    },
    { path: '', pathMatch: 'full', redirectTo: 'sili' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LveRoutingModule { }

