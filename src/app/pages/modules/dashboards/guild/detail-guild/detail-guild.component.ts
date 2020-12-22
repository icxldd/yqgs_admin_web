import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PieChartComponentReq } from 'src/app/globaldata';
import { BasicAreaComponentReq } from 'src/app/globaldata/component-dtos/basic-area-component-req';
import { MultiAreaComponentReq } from 'src/app/globaldata/component-dtos/multi-area-component-req';
import { DetailBasic } from '../../../basic/detail-basic';
import { DashboardsService } from '../../../services/dashboards.service';

@Component({
  selector: 'app-detail-guild',
  templateUrl: './detail-guild.component.html',
  styleUrls: ['./detail-guild.component.scss']
})
export class DetailGuildComponent extends DetailBasic implements OnInit {

  id:string;
  /*
        <app-text-area id="toDayguildAbuseCount" [from]="todayJoinMember" class="card"></app-text-area>
        <app-text-area id="toDayliveUseCount" [from]="todayJoinMember" class="card"></app-text-area>
        <app-text-area id="toDayguildMemberJoinCount" [from]="todayJoinMember" class="card"></app-text-area><br/>
        <app-pie-chart id="toDayguildBlocCount" [req]="todayBlocObject" class="pieLine"></app-pie-chart>
        <!-- <app-pie-chart [req]="todayBlocObject" class="pieLine"></app-pie-chart> -->
      </div>
    </p-panel>


    <p-panel header="总共统计" [toggleable]="true">
      <div [ngStyle]="{'background-color': backcolor,'height':'100%'}">
        <app-text-area id="sumGuildAbuseCount" [from]="todayJoinMember" class="card"></app-text-area>
        <app-text-area id="sumLiveUseCount" [from]="todayJoinMember" class="card"></app-text-area>
        <app-text-area id="sumGuildMemberJoinCount" [from]="todayJoinMember" class="card"></app-text-area><br/>
        <app-pie-chart id="sumguildBlocCount" [req]="todayBlocObject" class="pieLine"></app-pie-chart>
        <!-- <app-pie-chart [req]="todayBlocObject" class="pieLine"></app-pie-chart> -->
      </div>
    </p-panel>

    <p-panel header="本月统计" [toggleable]="true">
      <div [ngStyle]="{'background-color': backcolor,'height':'100%'}">
        <app-basic-area id="monthJoinCount" [req]="todayBlocBasicAreaObject"  class="singleLine"></app-basic-area>
        <app-basic-area id="monthLivecastCount" [req]="todayBlocBasicAreaObject"  class="singleLine"></app-basic-area>
        <app-basic-area id="monthAbuseCount" [req]="todayBlocBasicAreaObject"  class="singleLine"></app-basic-area>
  
  */
  toDayguildMemberJoinCount= {};
  toDayguildAbuseCount= {};
  toDayliveUseCount= {};
  toDayguildBlocCount:PieChartComponentReq = new PieChartComponentReq();


  sumGuildAbuseCount= {};
  sumLiveUseCount= {};
  sumGuildMemberJoinCount= {};
  sumguildBlocCount:PieChartComponentReq = new PieChartComponentReq();

  monthJoinCount:BasicAreaComponentReq = new BasicAreaComponentReq();
  monthLivecastCount:BasicAreaComponentReq = new BasicAreaComponentReq();
  monthAbuseCount:BasicAreaComponentReq = new BasicAreaComponentReq();

  todayBlocMultiAreaObject:MultiAreaComponentReq = new MultiAreaComponentReq();


  constructor(public router: ActivatedRoute) { 
    super();
    let x:any= this.router.snapshot.data.guildObj;
    let self = this;
    self.toDayguildMemberJoinCount = x.guildDetail.toDayNewJoinCount;
    self.toDayguildAbuseCount = x.guildDetail.toDayGuildAbuseCount;
    self.toDayliveUseCount = x.guildDetail.toDayLiveCastUseCount;

    self.toDayguildBlocCount = x.guildDetail.toDayGuildBlocCount;




    self.sumGuildAbuseCount = x.guildDetail.sumGuildAbuseCount;
    self.sumLiveUseCount = x.guildDetail.sumLiveCastUseCount;
    self.sumGuildMemberJoinCount = x.guildDetail.sumNewJoinCount;
    self.sumguildBlocCount = x.guildDetail.sumGuildBlocCount;



    self.monthJoinCount = x.guildDetail.currentMonthNewJoinCount;
    self.monthLivecastCount = x.guildDetail.currentMonthLiveCastUseCount;
    self.monthAbuseCount = x.guildDetail.currentMonthGuildAbuseCount;
  //   this.todayBlocObject.titleAfterStr="发布次数";
  //   this.todayBlocObject.titlePreStr="今日";
  //   this.todayBlocObject.titleContextStr="通知，讨论，直播";
  //   this.todayBlocObject.data = [{name:'通知',value:1},{name:'讨论',value:1},{name:'直播',value:1}];
  //   this.todayBlocObject.nameData = ["通知","讨论","直播"]


  //   // this.todayBlocBasicAreaObject.unit = "MB";
  //   this.todayBlocBasicAreaObject.titleAfterStr="单位(MB)";
  //   this.todayBlocBasicAreaObject.titlePreStr="本月";
  //   this.todayBlocBasicAreaObject.titleContextStr="流量使用情况";
  //   this.todayBlocBasicAreaObject.nameData = ['1号','2号','3号','4号','5号','7号','8号','9号','10号','1号','2号','3号','4号','5号','7号','8号','9号','10号','1号','2号','3号','4号','5号','7号','8号','9号','10号'];
  //   this.todayBlocBasicAreaObject.valData = [1,2,3,4,5,6,1,8,9,1,1,2,3,4,5,6,1,8,9,1,1,2,3,4,5,6,1,8,9,1];

    
  //   this.todayBlocMultiAreaObject.titleAfterStr="发布次数";
  //   this.todayBlocMultiAreaObject.titlePreStr="本月";
  //   this.todayBlocMultiAreaObject.titleContextStr="通知，讨论，直播";
  //   this.todayBlocMultiAreaObject.nameData = ['1号','2号','3号','4号','5号','7号','8号','9号','10号','1号','2号','3号','4号','5号','7号','8号','9号','10号','1号','2号','3号','4号','5号','7号','8号','9号','10号'];
  //   this.todayBlocMultiAreaObject.lableNameData =  ["通知","讨论","直播"]
  //   this.todayBlocMultiAreaObject.valData = [{
  //     name: '通知',
  //     type: 'line',
  //     stack: '总量',
  //     areaStyle: {},
  //     data: [120, 132, 101, 134, 90, 230, 210,1,2,3,120, 132, 101, 134, 90, 230, 210,1,2,3,120, 132, 101, 134, 90, 230, 210,1,2,3]
  // },
  // {
  //     name: '讨论',
  //     type: 'line',
  //     stack: '总量',
  //     areaStyle: {},
  //     data: [220, 182, 191, 234, 290, 330, 310,1,54,1,220, 182, 191, 234, 290, 330, 310,1,54,1,220, 182, 191, 234, 290, 330, 310,1,54,1]
  // },
  // {
  //     name: '直播',
  //     type: 'line',
  //     stack: '总量',
  //     areaStyle: {},
  //     data: [150, 232, 201, 154, 190, 330, 410,5,1,2,150, 232, 201, 154, 190, 330, 410,5,1,2,150, 232, 201, 154, 190, 330, 410,5,1,2,]
  // }]
 

  }

ngOnChanges(){

   


  }
ngOnInit() {
   
    // this.id = this.router.browserUrlTree.queryParamMap.get('id')

  }

}
