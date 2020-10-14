import { Component, OnInit } from '@angular/core';
import { AccountService } from './pages/services/account.service';
import {MenuItem} from 'primeng/api';
import { AppCacheService } from './pages/services/app-cache.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    
  items: MenuItem[];
  items2:MenuItem[];
  isShowTop:boolean

  get getIsShowTop(): boolean {
    return !location.pathname.includes("/pages/login")
  }
  constructor(protected accsrc:AccountService,protected tokensrc:AppCacheService) { 
    this.accsrc.getMyInfo().subscribe(x=>{
      // alert(JSON.stringify(x))
      // console.log(x)
    })
  }

  ngOnInit() {
      if(location.pathname.includes("/home")){
          location.href="/pages/post"
      }
    this.initdata()
  }

  initdata(){
    this.items = [
      {
         label:'内容管理',
         icon:'pi pi-fw pi-file',
         items:[
            // {
            //    label:'New',
            //    icon:'pi pi-fw pi-plus',
            //    items:[
            //       {
            //          label:'Bookmark',
            //          icon:'pi pi-fw pi-bookmark'
            //       },
            //       {
            //          label:'Video',
            //          icon:'pi pi-fw pi-video'
            //       },

            //    ]
            // },
            // {
            //    label:'Delete',
            //    icon:'pi pi-fw pi-trash'
            // },
            {
               label:'帖子发布',
               icon:'pi pi-fw pi-list',routerLink:'/pages/post'
            },
            {
                label:'测试路由',
                icon:'pi pi-fw pi-list',routerLink:'/pages/test'
             }
         ]
      },
      {
         label:'Edit',
         icon:'pi pi-fw pi-pencil',
         items:[
            {
               label:'Left',
               icon:'pi pi-fw pi-align-left'
            },
            {
               label:'Right',
               icon:'pi pi-fw pi-align-right'
            },
            {
               label:'Center',
               icon:'pi pi-fw pi-align-center'
            },
            {
               label:'Justify',
               icon:'pi pi-fw pi-align-justify'
            },

         ]
      },
      {
         label:'Users',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-user-plus',

            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-user-minus',

            },
            {
               label:'Search',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Filter',
                     icon:'pi pi-fw pi-filter',
                     items:[
                        {
                           label:'Print',
                           icon:'pi pi-fw pi-print'
                        }
                     ]
                  },
                  {
                     icon:'pi pi-fw pi-bars',
                     label:'List'
                  }
               ]
            }
         ]
      },
      {
         label:'Events',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'Edit',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Save',
                     icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-calendar-minus'
                  },

               ]
            },
            {
               label:'Archieve',
               icon:'pi pi-fw pi-calendar-times',
               items:[
                  {
                     label:'Remove',
                     icon:'pi pi-fw pi-calendar-minus'
                  }
               ]
            }
         ]
      }
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
