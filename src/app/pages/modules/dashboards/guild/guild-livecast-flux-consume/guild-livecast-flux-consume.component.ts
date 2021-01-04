import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { guildConsumeDto } from '../../../dtos/dashboards';
import { DashboardsService } from '../../../services/dashboards.service';
@Component({
  selector: 'app-guild-livecast-flux-consume',
  templateUrl: './guild-livecast-flux-consume.component.html',
  styleUrls: ['./guild-livecast-flux-consume.component.scss']
})
export class GuildLivecastFluxConsumeComponent implements OnInit {

  guildConsumes: guildConsumeDto[]
  guildConsume: guildConsumeDto;
  selectedGuildConsumes: guildConsumeDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  ngOnInit() {
    this.guildConsumes = this.config.data;
  }
}
