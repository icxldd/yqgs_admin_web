import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { BlocCommon } from 'src/app/pages/common/bloc-common';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { DiscussDialogComponent } from '../../common/discuss-dialog/discuss-dialog.component';
import { GuildmemberListComponent } from '../../common/guildmember-list/guildmember-list.component';
import { LivecastDialogComponent } from '../../common/livecast-dialog/livecast-dialog.component';
import { NotificationDialogComponent } from '../../common/notification-dialog/notification-dialog.component';
import { ViolatedAuditableItemComponent } from '../../common/violatedAuditableItem/violatedAuditableItem.component';
import { discussDto, GuildDto, livecastDto, MapperDto, notificationDto, queryDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';
import { GuildLivecastFluxTotalComponent } from '../guild/guild-livecast-flux-total/guild-livecast-flux-total.component';

@Component({
  selector: 'app-guild-lazy',
  templateUrl: './guild-lazy.component.html',
  styleUrls: ['./guild-lazy.component.scss']
})
export class GuildLazyComponent implements OnInit {

  guilds: GuildDto[]
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
   
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
  this.ddService.getGuildBlocDetail(guild.guildId,type).subscribe(x=>{
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

  data:string='';
  selfEvent:LazyLoadEvent;
  totalRecords: number;
  cols: any[];
  loading: boolean;
  flushData(event){
    if(event.keyCode==13){
      this.loadCustomers(this.selfEvent);
    }
  }
  loadCustomers(event: LazyLoadEvent) {  
      this.selfEvent =event;
      this.loading = true;
      let query:queryDto=new queryDto();
      query.first = event.first;
      query.rows = event.rows;
      query.sortField = event.sortField==undefined?query.sortField:event.sortField;
      query.sortOrder = event.sortField==undefined?-1:event.sortOrder;
      query.data = this.data;
      
      this.ddService.getGuildsLazy(query).subscribe(res => {
        this.guilds = res.guilds;
        this.totalRecords = res.totalRecords;
        this.loading = false;
    });
  }

}
