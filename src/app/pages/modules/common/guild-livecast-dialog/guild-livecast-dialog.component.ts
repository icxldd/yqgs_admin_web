import { guildLivecastAdminDto, guildMemberDto, livecastDto } from '../../dtos/dashboards';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';
import { GuildmemberListComponent } from '../guildmember-list/guildmember-list.component';
import { BlocCommon } from 'src/app/pages/common/bloc-common';
import { CopyObject } from '@app/pages/common/copy-object';


@Component({
  selector: 'app-guild-livecast-dialog',
  templateUrl: './guild-livecast-dialog.component.html',
  styleUrls: ['./guild-livecast-dialog.component.scss']
})
export class GuildLivecastDialogComponent implements OnInit {

  
  guildLivecastDtos: guildLivecastAdminDto[]
  guildLivecast: guildLivecastAdminDto;
  selectedguildLivecasts: guildLivecastAdminDto[];
  selectedLivecasts: livecastDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  displayModal:boolean=false;
  showLivecast:livecastDto=new livecastDto();
  ngOnInit() {
    this.guildLivecastDtos = this.config.data;
    this.guildLivecastDtos.map(x=>{
      x.guildLivecastDto =  CopyObject.copyObject(x.guildLivecastDto,livecastDto);
    });
    // this.guildLivecastDtos = CopyObject.copyObject(<livecastDto[]>x.livecasts,livecastDto);
  }
  exportGuildExcel(){

    if(this.selectedguildLivecasts==undefined ||this.selectedguildLivecasts.length==0){
      this.messageService.add({severity:'error', summary: 'error', detail: '请先选中需要导出的教会', life: 3000});
    }else{
      
      this.ddService.getGuildContact(this.selectedguildLivecasts.map(x=>x.guildId)).subscribe(x=>{
        BlocCommon.downloadFile(x);
        this.messageService.add({severity:'success', summary: 'Successful', detail: `导出${this.selectedguildLivecasts.length}个教会成功`, life: 3000});
      });
     
    }

  }
  openDialog(livecast:livecastDto,type:number){

    if(type==0){
      this.dialogService.open(GuildmemberListComponent, {
        data:livecast.hasViewMembers,
        header: '已查看成员列表',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    }
    else if(type==1){
      this.dialogService.open(GuildmemberListComponent, {
        data:livecast.noViewMembers,
        header: '未查看成员列表',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    }
  
  }

  DetailLivecast(livecast:livecastDto){

    this.displayModal = !this.displayModal;
    livecast.hlsPlayUrl =  BlocCommon.livecastUrlBuild(livecast.hlsPlayUrl);
    this.showLivecast = livecast;
    

  }
  openFileDialog(livecast:livecastDto){
    this.dialogService.open(FileListComponent, {
      data:livecast.files,
      header: '文件列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }
}
