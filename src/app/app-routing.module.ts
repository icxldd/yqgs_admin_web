import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './pages/services/auth-guard.service';
const routes: Routes = [
    {
        path: 'he-nuo',
        loadChildren: () => import('./he-nuo/he-nuo.module').then(m => m.HeNuoModule)
    },
    {
        path: 'zi-die',
        loadChildren: () => import('./zi-die/zi-die.module').then(m => m.ZiDieModule)
    },
    {
        path: 'rui-kang',
        loadChildren: () => import('./rui-kang/rui-kang.module').then(m => m.RuiKangModule)
    },
    {
        path: 'lv-e',
        loadChildren: () => import('./lv-e/lv-e.module').then(m => m.LvEModule)
    }
    ,
    {
        path: 'hui-jing',
        loadChildren: () => import('./hui-jing/hui-jing.module').then(m => m.HuiJingModule)
    },
    {
        path: 'open-source',
        loadChildren: () => import('./open-source/open-source.module').then(m => m.OpenSourceModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        canActivate: [AuthGuardService]
      
    },
    
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
