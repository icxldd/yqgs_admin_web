import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto, livecastDto, notificationDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';
import { GuildmemberListComponent } from '../guildmember-list/guildmember-list.component';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {
  notifications: notificationDto[]
  notification: notificationDto;
  selectednotifications: notificationDto[];
  displayModal:boolean=false;
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.notifications = this.config.data
  }

  openFileDialog(notification:notificationDto){
    this.dialogService.open(FileListComponent, {
      data:notification.files,
      header: '文件列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }
openDialog(notification:notificationDto,type:number){

  if(type==0){
    this.dialogService.open(GuildmemberListComponent, {
      data:notification.hasViewMembers,
      header: '已查看成员列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }
  else if(type==1){
    this.dialogService.open(GuildmemberListComponent, {
      data:notification.noViewMembers,
      header: '未查看成员列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }

}
}
