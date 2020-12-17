import { Component, OnInit } from '@angular/core';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto } from '../../dtos/dashboards';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {
  guilds: GuildDto[]
  guild: GuildDto;
  selectedguilds: GuildDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService) { }

  ngOnInit() {
    this.ddService.getGuilds().subscribe(x=>{
       this.guilds =  <GuildDto[]>x.guilds
    })
  }


  DetailGuild(_guild:GuildDto){
    this.pagesrc.gotopage(`/pages/dashboards/guild-detail/${_guild.guildId}`)
  }

}
