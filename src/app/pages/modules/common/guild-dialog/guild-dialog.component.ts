import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';
import { GuildmemberListComponent } from '../guildmember-list/guildmember-list.component';
import { ViolatedAuditableItemComponent } from '../violatedAuditableItem/violatedAuditableItem.component';

@Component({
  selector: 'app-guild-dialog',
  templateUrl: './guild-dialog.component.html',
  styleUrls: ['./guild-dialog.component.scss']
})
export class GuildDialogComponent implements OnInit {

  guilds: GuildDto[]
  guild: GuildDto;
  selectedguilds: GuildDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.guilds = this.config.data
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
  isHasVal<T>(dto:Array<T>):boolean{
    if(dto==undefined||dto.length==0){
        return false;
    }else{
        return true;
    }
}
 

}
