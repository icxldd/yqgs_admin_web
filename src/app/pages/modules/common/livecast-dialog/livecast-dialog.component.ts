import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CopyObject } from 'src/app/pages/common/copy-object';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto, livecastDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';
import { GuildmemberListComponent } from '../guildmember-list/guildmember-list.component';

@Component({
  selector: 'app-livecast-dialog',
  templateUrl: './livecast-dialog.component.html',
  styleUrls: ['./livecast-dialog.component.scss']
})
export class LivecastDialogComponent implements OnInit {
  livecasts: livecastDto[]
  livecast: livecastDto;
  selectedlivecasts: livecastDto[];
  displayModal:boolean=false;
  showLivecast:livecastDto=new livecastDto();

  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.livecasts = CopyObject.copyObject(<livecastDto[]>this.config.data,livecastDto);
    // this.livecasts = this.config.data
  }

  DetailLivecast(livecast:livecastDto){

    this.displayModal = !this.displayModal;
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

}
