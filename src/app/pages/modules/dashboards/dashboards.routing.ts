import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from '../basic/ApiService';
import { DashboardsService } from '../services/dashboards.service';
import { GuildService } from '../services/guild.service';
import { AccountComponent } from './account/account.component';
import { DiscussComponent } from './discuss/discuss.component';
import { GuildMemberComponent } from './guild-member/guild-member.component';
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
        path: 'guild-member',
        component:GuildMemberComponent
    },
    {
        path: 'account',
        component:AccountComponent
    },
    {
        path: 'guild-detail/:id',
        component: DetailGuildComponent,
        resolve:{
            guildObj:GuildService
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
