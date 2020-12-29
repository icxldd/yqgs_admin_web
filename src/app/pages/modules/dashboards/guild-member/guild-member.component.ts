import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { guildMemberAdminDto } from '../../dtos/dashboards';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-guild-member',
  templateUrl: './guild-member.component.html',
  styleUrls: ['./guild-member.component.scss']
})
export class GuildMemberComponent implements OnInit {
  guildMembers: guildMemberAdminDto[]
  guildMember: guildMemberAdminDto;
  selectedGuildMembers: guildMemberAdminDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService) { }

  ngOnInit() {
    this.ddService.getGuildMember().subscribe(x=>{
      this.guildMembers =  <guildMemberAdminDto[]>x.guildMemberAdminDto
      console.log(this.guildMembers)
   })
  }

}
