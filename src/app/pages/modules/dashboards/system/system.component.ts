import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { DetailBasic } from '../../basic/detail-basic';
import { AccountDialogComponent } from '../../common/account-dialog/account-dialog.component';
import { DiscussDialogComponent } from '../../common/discuss-dialog/discuss-dialog.component';
import { GuildLivecastDialogComponent } from '../../common/guild-livecast-dialog/guild-livecast-dialog.component';
import { LivecastDialogComponent } from '../../common/livecast-dialog/livecast-dialog.component';
import { NotificationDialogComponent } from '../../common/notification-dialog/notification-dialog.component';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent extends DetailBasic implements OnInit {

  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public router: ActivatedRoute) {
    super();

    let x:any= this.router.snapshot.data.obj;
    let self = this;
    let obj = x.systemDetail;
    self.toDayAbuseCount = obj.toDayAbuseCount;
    self.toDayNewUserCount = obj.toDayNewUserCount;
    self.toDayLivecastCount = obj.toDayLivecastCount;
    self.toDayDiscussCount = obj.toDayDiscussCount;
    self.toDayNotificationCount = obj.toDayNotificationCount;
    self.toDayUserFeedback = obj.toDayUserFeedback;

    self.yesterDayAbuseCount = obj.yesterDayAbuseCount;
    self.yesterDayNewUserCount = obj.yesterDayNewUserCount;
    self.yesterDayLivecastCount = obj.yesterDayLivecastCount;
    self.yesterDayDiscussCount = obj.yesterDayDiscussCount;
    self.yesterDayNotificationCount = obj.yesterDayNotificationCount;
    self.yesterDayUserFeedback = obj.yesterDayUserFeedback;


    self.sumAbuseCount = obj.sumAbuseCount;
    self.sumNewUserCount = obj.sumNewUserCount;
    self.sumLivecastCount = obj.sumLivecastCount;
    self.sumDiscussCount = obj.sumDiscussCount;
    self.sumNotificationCount = obj.sumNotificationCount;
    self.sumUserFeedback = obj.sumUserFeedback;
    self.sumUsingFluxCount = obj.sumUsingFluxCount;

    self.currentMonthNewUserCount = obj.currentMonthNewUserCount;
    self.currentMonthLiveCastUseCount = obj.currentMonthLiveCastUseCount;
    self.currentMonthAbuseCount = obj.currentMonthAbuseCount;
    self.currentMonthUserFeedback = obj.currentMonthUserFeedback;
    self.currentMonthBlocCount = obj.currentMonthBlocCount;

    self.currentYearNewUserCount = obj.currentYearNewUserCount;
    self.currentYearLiveCastUseCount = obj.currentYearLiveCastUseCount;
    self.currentYearAbuseCount = obj.currentYearAbuseCount;
    self.currentYearUserFeedback = obj.currentYearUserFeedback;
    self.currentYearBlocCount = obj.currentYearBlocCount;

    self.currentYestYearNewUserCount = obj.currentYestYearNewUserCount;
    self.currentYestYearLiveCastUseCount = obj.currentYestYearLiveCastUseCount;
    self.currentYestYearAbuseCount = obj.currentYestYearAbuseCount;
    self.currentYestYearUserFeedback = obj.currentYestYearUserFeedback;
    self.currentYestYearBlocCount = obj.currentYestYearBlocCount;
   
   }
  toDayAbuseCount= {};
  toDayNewUserCount= {};
  toDayLivecastCount= {};
  toDayDiscussCount= {};
  toDayNotificationCount= {};
  toDayUserFeedback= {};

  yesterDayAbuseCount= {};
  yesterDayNewUserCount= {};
  yesterDayLivecastCount= {};
  yesterDayDiscussCount= {};
  yesterDayNotificationCount= {};
  yesterDayUserFeedback= {};


  sumAbuseCount= {};
  sumNewUserCount= {};
  sumLivecastCount= {};
  sumDiscussCount= {};
  sumNotificationCount= {};
  sumUserFeedback= {};
  sumUsingFluxCount={};


  currentMonthNewUserCount = {};
  currentMonthLiveCastUseCount = {};
  currentMonthAbuseCount = {};
  currentMonthUserFeedback = {};
  currentMonthBlocCount = {};


  currentYearNewUserCount = {};
  currentYearLiveCastUseCount = {};
  currentYearAbuseCount = {};
  currentYearUserFeedback = {};
  currentYearBlocCount = {};

  currentYestYearNewUserCount = {};
  currentYestYearLiveCastUseCount = {};
  currentYestYearAbuseCount = {};
  currentYestYearUserFeedback = {};
  currentYestYearBlocCount = {};
  showProgress:boolean=false;

  textClick(flag){
    this.showProgress = true;
    this.ddService.getSystemDetail(flag).subscribe(x=>{
      this.showProgress = false;
      let result;
      if(flag==='toDayNewUserCount'){
        result = x.systemDetailInfo.todayAccounts;
        this.dialogService.open(AccountDialogComponent, {
          data:result,
          header: '云教会用户',
          width: '85%',
          contentStyle: {"max-height": "900px", "overflow": "auto"},
          baseZIndex: 10000
      });
      }
      else if(flag==='toDayLivecastCount'){
        result = x.systemDetailInfo.todayLivecasts;
        this.dialogService.open(GuildLivecastDialogComponent, {
          data:result,
          header: '教会直播列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      }
      else if(flag==='toDayDiscussCount'){
        result = x.systemDetailInfo.todayDiscuss;
        this.dialogService.open(DiscussDialogComponent, {
          data:result,
          header: '发布讨论列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      }
      else if(flag==='toDayNotificationCount'){
        result = x.systemDetailInfo.todayNotifications;
        this.dialogService.open(NotificationDialogComponent, {
          data:result,
          header: '发布通知列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      }
      else if(flag==='yesterDayNewUserCount'){
        result = x.systemDetailInfo.yesterdayAccounts;
        this.dialogService.open(AccountDialogComponent, {
          data:result,
          header: '云教会用户',
          width: '85%',
          contentStyle: {"max-height": "900px", "overflow": "auto"},
          baseZIndex: 10000
      });
      }
      else if(flag==='yesterDayLivecastCount'){
        result = x.systemDetailInfo.yesterdayLivecasts;
        this.dialogService.open(GuildLivecastDialogComponent, {
          data:result,
          header: '教会直播列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      }
      else if(flag==='yesterDayDiscussCount'){
        result = x.systemDetailInfo.yesterdayDiscuss;
        this.dialogService.open(DiscussDialogComponent, {
          data:result,
          header: '发布讨论列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      } else if(flag==='yesterDayNotificationCount'){
        result = x.systemDetailInfo.yesterdayNotifications;
        this.dialogService.open(NotificationDialogComponent, {
          data:result,
          header: '发布通知列表',
          width: '70%',
          contentStyle: {"max-height": "700px", "overflow": "auto"},
          baseZIndex: 10000
      });
      }
    });
    
  }

  ngOnInit() {
    


  }

}
