import { notificationDto } from '../../dtos/dashboards';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { livecastDto } from '../../dtos/dashboards';
import { DashboardsService } from '../../services/dashboards.service';

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

  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService) { }

  ngOnInit() {
    this.ddService.getNotifications().subscribe(x=>{
      this.notifications =  <notificationDto[]>x.notifications
   })
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
