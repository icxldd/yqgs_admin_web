import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/Login/Login.component'
import { AuthGuardService } from './services/auth-guard.service';
import { PostComponent } from './components/post/post.component';
import { TestComponent } from './components/test/test.component';
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'post',
        component: PostComponent,
    },
    {
        path: 'test',
        component: TestComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
