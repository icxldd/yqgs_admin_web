import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module.routing';
import { AccountService } from './services/account.service';
import { DashboardsService } from './modules/services/dashboards.service';
import { DashboardspipePipe } from './modules/pipes/dashboardspipe.pipe';
import { GuildService } from './modules/services/guild.service';
import { ManualReviewService } from './modules/services/manual-review.service';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  declarations: [PagesComponent],
  providers:[AccountService,DashboardsService,GuildService,ManualReviewService]
})
export class PagesModule { }
