import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { discussDto, GuildDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';
import { GuildmemberListComponent } from '../guildmember-list/guildmember-list.component';

@Component({
  selector: 'app-discuss-dialog',
  templateUrl: './discuss-dialog.component.html',
  styleUrls: ['./discuss-dialog.component.scss']
})
export class DiscussDialogComponent implements OnInit {

  discusss: discussDto[]
  discuss: discussDto;
  selecteddiscusss: discussDto[];
  displayModal:boolean=false;

  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.discusss = this.config.data
  }

  openFileDialog(discuss:discussDto){
    this.dialogService.open(FileListComponent, {
      data:discuss.files,
      header: '文件列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }
  openDialog(discuss:discussDto,type:number){

    if(type==0){
      this.dialogService.open(GuildmemberListComponent, {
        data:discuss.hasViewMembers,
        header: '已查看成员列表',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    }
    else if(type==1){
      this.dialogService.open(GuildmemberListComponent, {
        data:discuss.noViewMembers,
        header: '未查看成员列表',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    }
  
  }
}
