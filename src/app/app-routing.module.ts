import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './pages/services/auth-guard.service';
const routes: Routes = [
    {
        path: 'home',
        component:AppComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'live',
        loadChildren: () => import('./live/live.module').then(m => m.LiveModule),
    },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        canActivate: [AuthGuardService]
    },
    
    { path: '', pathMatch: 'full', redirectTo: 'pages' },
    { path: '**', redirectTo: 'pages' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
