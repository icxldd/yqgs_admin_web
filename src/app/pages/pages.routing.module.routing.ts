import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/Login/Login.component'
import { Post_Component } from './components/post_/post_.component';
import { TestComponent } from './components/test/test.component';
import { WebrtcComponent } from './components/webrtc/webrtc.component';
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'post',
        component: Post_Component,
    },
    {
        path: 'test',
        component: TestComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path:'webrtc',
        component:WebrtcComponent
    }
    ,
    {
        path: 'dashboards',
        loadChildren: () => import('./modules/dashboards/dashboards.module').then(m => m.DashboardsModule),
    },
    {
        path: 'manual-review',
        loadChildren: () => import('./modules/manual-review/manual-review.module').then(m => m.ManualReviewModule),
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
