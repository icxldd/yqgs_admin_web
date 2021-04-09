import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { BlocCommon } from 'src/app/pages/common/bloc-common';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { DiscussDialogComponent } from '../../common/discuss-dialog/discuss-dialog.component';
import { GuildmemberListComponent } from '../../common/guildmember-list/guildmember-list.component';
import { LivecastDialogComponent } from '../../common/livecast-dialog/livecast-dialog.component';
import { NotificationDialogComponent } from '../../common/notification-dialog/notification-dialog.component';
import { ViolatedAuditableItemComponent } from '../../common/violatedAuditableItem/violatedAuditableItem.component';
import { discussDto, GuildDto, livecastDto, MapperDto, notificationDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';
import { GuildLivecastFluxTotalComponent } from './guild-livecast-flux-total/guild-livecast-flux-total.component';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {
  guilds: GuildDto[]
  guild: GuildDto;
  selectedguilds: GuildDto[];
  showProgress:boolean=false;
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.showProgress=true;
    this.ddService.getGuilds().subscribe(x=>{
       this.guilds =  <GuildDto[]>x.guilds;
       
       this.showProgress = false;
    })
  }


  exportGuildExcel(){

    if(this.selectedguilds==undefined ||this.selectedguilds.length==0){
      this.messageService.add({severity:'error', summary: 'error', detail: '请先选中需要导出的教会', life: 3000});
    }else{
      
      this.ddService.getGuildContact(this.selectedguilds.map(x=>x.guildId)).subscribe(x=>{
        BlocCommon.downloadFile(x);
        this.messageService.add({severity:'success', summary: 'Successful', detail: `导出${this.selectedguilds.length}个教会成功`, life: 3000});
      });
      
      
    }

  }
  DetailGuild(_guild:GuildDto){
    // this.pagesrc.gotopage(`/pages/dashboards/guild-detail/${_guild.guildId}`)
    window.open(`/pages/dashboards/guild-detail/${_guild.guildId}`);
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

openDialog(guild:GuildDto,type:number){
  if(type==0){
    this.dialogService.open(ViolatedAuditableItemComponent, {
      data:guild.auditables,
      header: '违规记录列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
    
  }else if(type==1){
    this.dialogService.open(GuildmemberListComponent, {
      data:guild.guildmembers,
      header: '教会成员列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }
}


openBlocDialog(guild:GuildDto,type:number){
  
  // let notifications:notificationDto[] =MapperDto.informationsToNotificationDto(guild.informations.filter(x=>x.type==0));
  // let discuss:discussDto[]= MapperDto.informationsToDiscussDto(guild.informations.filter(x=>x.type==2));
  // let livecasts:livecastDto[]= MapperDto.informationsToLivecastDto(guild.informations.filter(x=>x.type==1));
  this.showProgress = true;
  this.ddService.getGuildBlocDetail(guild.guildId,type).subscribe(x=>{
  this.showProgress = false;
    switch (type) {
      case 0:
        this.dialogService.open(NotificationDialogComponent, {
          data:x.publishNotification,
          header: '发布通知列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      break;
      case 1:
        this.dialogService.open(DiscussDialogComponent, {
          data:x.publishDiscuss,
          header: '发布讨论列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      break;
      case 2:
        this.dialogService.open(LivecastDialogComponent, {
          data:x.publishLivecast,
          header: '发布直播列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
       
      break;
    default:
      break;
  }


  });
  

}


openDialogLivecastFlux(guild:GuildDto){
this.ddService.getGuildTotalAmount(guild.guildId).subscribe(x=>{
  this.dialogService.open(GuildLivecastFluxTotalComponent, {
    data:{flux:x.guildLivecastFluxs,dto:guild},
    header: '教会直播流量',
    width: '70%',
    contentStyle: {"max-height": "700px", "overflow": "auto"},
    baseZIndex: 10000
  });
});


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
