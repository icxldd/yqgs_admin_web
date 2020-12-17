import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards.component';
import { DashboardsRoutingModule } from './dashboards.routing';
import { DiscussComponent } from './discuss/discuss.component';
import { GuildComponent } from './guild/guild.component';
import { NotificationComponent } from './notification/notification.component';
import { LivecastComponent } from './livecast/livecast.component';
import { DetailGuildComponent } from './guild/detail-guild/detail-guild.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ],
  declarations: [DashboardsComponent,DiscussComponent,LivecastComponent,NotificationComponent,DetailGuildComponent]
})
export class DashboardsModule { }
