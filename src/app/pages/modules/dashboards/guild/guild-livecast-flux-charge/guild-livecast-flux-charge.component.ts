import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { guildChargeDto } from '../../../dtos/dashboards';
import { DashboardsService } from '../../../services/dashboards.service';

@Component({
  selector: 'app-guild-livecast-flux-charge',
  templateUrl: './guild-livecast-flux-charge.component.html',
  styleUrls: ['./guild-livecast-flux-charge.component.scss']
})
export class GuildLivecastFluxChargeComponent implements OnInit {
  guildCharges: guildChargeDto[]
  guildCharge: guildChargeDto;
  selectedGuildCharges: guildChargeDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  ngOnInit() {
    this.guildCharges = this.config.data;
  }
}
