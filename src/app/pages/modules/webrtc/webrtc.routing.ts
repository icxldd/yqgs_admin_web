import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from '../basic/ApiService';
import { DashboardsService } from '../services/dashboards.service';
import { GuildService } from '../services/guild.service';
import { RoomPageComponent } from './room-page/room-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchPageComponent,
    },
    {
        path: 'room',
        component: RoomPageComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebrtcRoutingModule { }
