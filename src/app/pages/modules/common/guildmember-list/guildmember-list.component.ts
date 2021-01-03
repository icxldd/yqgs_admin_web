import { guildMemberDto } from '../../dtos/dashboards';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-guildmember-list',
  templateUrl: './guildmember-list.component.html',
  styleUrls: ['./guildmember-list.component.scss']
})
export class GuildmemberListComponent implements OnInit {

  guildMembersDtos: guildMemberDto[]
  guildMember: guildMemberDto;
  selectedguildMembers: guildMemberDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.guildMembersDtos = this.config.data
  }

}
