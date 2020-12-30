import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
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
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getGuilds().subscribe(x=>{
       this.guilds =  <GuildDto[]>x.guilds
    })
  }


  DetailGuild(_guild:GuildDto){
    this.pagesrc.gotopage(`/pages/dashboards/guild-detail/${_guild.guildId}`)
  }
  openFiles(guild:GuildDto){
    this.dialogService.open(FileListComponent, {
      data:guild.files,
      header: '教会文件列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }
  isHasVal<T>(dto:Array<T>):boolean{
    if(dto==undefined||dto.length==0){
        return false;
    }else{
        return true;
    }
}
  setGuildStatus(guild){
    
    let value = guild.status==0?false:true;
    if(value){
      guild.status = 0;
    }else{
      guild.status = -1;
    }
    this.ddService.putBlocStatus(guild.guildId,3,value).subscribe(x=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: '更改状态成功', life: 3000});
    });
  }

 
}
