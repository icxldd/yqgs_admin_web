import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from '../basic/ApiService';
import { DashboardsService } from '../services/dashboards.service';
import { DiscussComponent } from './discuss/discuss.component';
import { DetailGuildComponent } from './guild/detail-guild/detail-guild.component';
import { GuildComponent } from './guild/guild.component';
import { LivecastComponent } from './livecast/livecast.component';
import { NotificationComponent } from './notification/notification.component';
const routes: Routes = [
    {
        path: 'guild',
        component: GuildComponent
    },
    {
        path: 'guild-detail/:id',
        component: DetailGuildComponent,
        resolve:{
            guildObj:DashboardsService
        }
    },
    {
        path: 'discuss',
        component: DiscussComponent,
    },
    {
        path: 'livecast',
        component: LivecastComponent,
    },
    {
        path: 'notification',
        component: NotificationComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
