import { Component, OnInit } from '@angular/core';
import { AccountService } from './pages/services/account.service';
import {MenuItem} from 'primeng/api';
import { AppCacheService } from './pages/services/app-cache.service';
import { Accounts } from './pages/models/account';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    
  items: MenuItem[]
  items2:MenuItem[]
  isShowTop:boolean

  obj:Accounts=new Accounts()

  get getIsShowTop(): boolean {
    return !location.pathname.includes("/pages/login")
  }
  constructor(protected accsrc:AccountService,protected tokensrc:AppCacheService) { 

  }

  ngOnInit() {
      // if(location.pathname.includes("/home")){
      //     location.href="/pages/home"
      // }
      if(this.getIsShowTop){
         this.initdata()
         this.accsrc.getMyInfo().subscribe((x:any)=>{
            this.obj = x.account
         },(e)=>{
            // location.href="/pages/login"
         })}
  }

  initdata(){
    this.items = [
      {
         label:'数据仪表盘',
         icon:'pi pi-fw pi-globe',
         items:[
            {
               label:'系统数据报表',
               icon:'pi pi-fw pi-home',routerLink:'/pages/dashboards/system'
            },
            {
               label:'云教会用户',
               icon:'pi pi-fw pi-user',routerLink:'/pages/dashboards/account'
            },
            // {
            //    label:'教会成员',
            //    icon:'pi pi-fw pi-user',routerLink:'/pages/dashboards/guild-member'
            // },
            {
               label:'教会管理',
               icon:'pi pi-fw pi-home',routerLink:'/pages/dashboards/guild'
            },
            {
               label:'直播',
               icon:'pi pi-fw pi-video',routerLink:'/pages/dashboards/livecast'
            },
            {
               label:'通知',
               icon:'pi pi-fw pi-bell',routerLink:'/pages/dashboards/notification'
            },
            {
               label:'讨论',
               icon:'pi pi-fw pi-comments',routerLink:'/pages/dashboards/discuss'
            },

         ]
      },
      {
         label:'人工巡查',
         icon:'pi pi-fw pi-eye',
         items:[
            {
               label:'人工审核',
               icon:'pi pi-fw pi-home',routerLink:'/pages/manual-review/manual-audit'

            },
            {
               label:'举报审核',
               icon:'pi pi-fw pi-exclamation-triangle',routerLink:'/pages/manual-review/abuse-report-audit'

            },
            {
               label:'意见反馈',
               icon:'pi pi-fw pi-external-link',routerLink:'/pages/manual-review/idea-feedback'

            }
            // ,
            // {
            //    label:'违规用户',
            //    icon:'pi pi-fw pi-user',

            // },
            // {
            //    label:'违规教会',
            //    icon:'pi pi-fw pi-cloud',

            // },
            // {
            //    label:'垃圾站',
            //    icon:'pi pi-fw pi-trash',

            // },
          
            // {
            //    label:'Search',
            //    icon:'pi pi-fw pi-users',
            //    items:[
            //       {
            //          label:'Filter',
            //          icon:'pi pi-fw pi-filter',
            //          items:[
            //             {
            //                label:'Print',
            //                icon:'pi pi-fw pi-print'
            //             }
            //          ]
            //       },
            //       {
            //          icon:'pi pi-fw pi-bars',
            //          label:'List'
            //       }
            //    ]
            // }
         ]
      },
      // {
      //    label:'WebRTC',
      //    icon:'pi pi-fw pi-calendar',
      //    items:[
      //       // {
      //       //    label:'Edit',
      //       //    icon:'pi pi-fw pi-pencil',
      //       //    items:[
      //       //       {
      //       //          label:'Save',
      //       //          icon:'pi pi-fw pi-calendar-plus'
      //       //       },
      //       //       {
      //       //          label:'Delete',
      //       //          icon:'pi pi-fw pi-calendar-minus'
      //       //       },

      //       //    ]
      //       // },
      //       // {
      //       //    label:'获取音频视频设备',
      //       //    icon:'pi pi-fw pi-calendar-times',
      //       //    items:[
      //       //       {
      //       //          label:'Remove',
      //       //          icon:'pi pi-fw pi-calendar-minus'
      //       //       }
      //       //    ]
      //       // }
      //       {
      //          label:'搜索房间',
      //          icon:'pi pi-fw pi-calendar-times',routerLink:'/pages/webrtc/search'
      //       },
      //    ]
      // },
  ];

  this.items2=[{
    label: '我的',
    items: [
      
        {label: '个人信息', icon: 'pi pi-fw pi-user'},  {label: '退出账号', icon: 'pi pi-fw pi-sign-out',command:()=>{
            this.tokensrc.clear()
            window.location.reload()
          }},
    ]
}
];
}

}
