import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards.component';
import { DashboardsRoutingModule } from './dashboards.routing';
import { DiscussComponent } from './discuss/discuss.component';
import { GuildComponent } from './guild/guild.component';
import { NotificationComponent } from './notification/notification.component';
import { LivecastComponent } from './livecast/livecast.component';
import { DetailGuildComponent } from './guild/detail-guild/detail-guild.component';
import { CommonmModule } from 'src/app/common/common.module';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,CommonmModule,PanelModule
  ],
  declarations: [DashboardsComponent,DiscussComponent,NotificationComponent,DetailGuildComponent]
})
export class DashboardsModule { }
