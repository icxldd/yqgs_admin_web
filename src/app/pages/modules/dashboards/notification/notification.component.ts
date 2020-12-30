import { notificationDto } from '../../dtos/dashboards';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { livecastDto } from '../../dtos/dashboards';
import { DashboardsService } from '../../services/dashboards.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: notificationDto[]
  notification: notificationDto;
  selectednotifications: notificationDto[];
  displayModal:boolean=false;

  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getNotifications().subscribe(x=>{
      this.notifications =  <notificationDto[]>x.notifications
   })
  }
  openFiles(livecast:notificationDto){
    this.dialogService.open(FileListComponent, {
      data:livecast.files,
      header: '文件列表',
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
  setNotificationStatus(notification){
    
    let value = notification.status==0?false:true;
    if(value){
      notification.status = 0;
    }else{
      notification.status = -1;
    }
    this.ddService.putBlocStatus(notification.notificationId,0,value).subscribe(x=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: '更改状态成功', life: 3000});
    });
  }
}
