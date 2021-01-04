import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { AuditableItemListComponent } from '../../common/auditableItem-list/auditableItem-list.component';
import { DiscussDialogComponent } from '../../common/discuss-dialog/discuss-dialog.component';
import { GuildDialogComponent } from '../../common/guild-dialog/guild-dialog.component';
import { LivecastDialogComponent } from '../../common/livecast-dialog/livecast-dialog.component';
import { NotificationDialogComponent } from '../../common/notification-dialog/notification-dialog.component';
import { accountAdminDto, accountDetailDto } from '../../dtos/dashboards';
import { auditableItemDto } from '../../dtos/manual-review';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts: accountAdminDto[]
  account: accountAdminDto;
  selectedaccounts: accountAdminDto[];
  showProgress:boolean=false;
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.showProgress=true;
    this.ddService.getAccounts().subscribe(x=>{

      this.accounts =  <accountAdminDto[]>x.accounts
      this.showProgress = false;
   })
  }
  openFiles(account:accountAdminDto){

    this.dialogService.open(FileListComponent, {
      data:account.files,
      header: '文件列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }

  //type 0:自己创建的教会 1:加入的教会 2:直播 3:讨论 4：通知
openDialog(account:accountAdminDto,type:number){
  this.showProgress=true;
  this.ddService.getAccountDetail(account.userAuthId,type).subscribe(x=>{
    
    switch (type) {
        case 0:
          this.dialogService.open(GuildDialogComponent, {
            data:x.createdGuilds,
            header: '创建教会列表',
            width: '70%',
            contentStyle: {"max-height": "700px", "overflow": "auto"},
            baseZIndex: 10000
        });
        break;
        case 1:
          this.dialogService.open(GuildDialogComponent, {
            data:x.joinGuilds,
            header: '加入教会列表',
            width: '70%',
            contentStyle: {"max-height": "700px", "overflow": "auto"},
            baseZIndex: 10000
        });
        break;
        case 2:
          this.dialogService.open(LivecastDialogComponent, {
            data:x.publishLivecast,
            header: '发布直播列表',
            width: '70%',
            contentStyle: {"max-height": "700px", "overflow": "auto"},
            baseZIndex: 10000
        });
        break;
        case 3:
          this.dialogService.open(DiscussDialogComponent, {
            data:x.publishDiscuss,
            header: '发布讨论列表',
            width: '70%',
            contentStyle: {"max-height": "700px", "overflow": "auto"},
            baseZIndex: 10000
        });
        break;
        case 4:
          this.dialogService.open(NotificationDialogComponent, {
            data:x.publishNotification,
            header: '发布通知列表',
            width: '70%',
            contentStyle: {"max-height": "700px", "overflow": "auto"},
            baseZIndex: 10000
        });
        break;
      default:
        break;
    }
    this.showProgress = false;
    



  })


}

  isHasVal<T>(dto:Array<T>):boolean{
    if(dto==undefined||dto.length==0){
        return false;
    }else{
        return true;
    }
}
  openViolation(account:accountAdminDto){
    this.dialogService.open(AuditableItemListComponent, {
      data:account.userAuthId,
      header: '违规记录列表',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  }).onClose.subscribe((xx:auditableItemDto)=>{

    // let index =  this.auditableItems.findIndex(x=>x.itemId==xx.itemId);
    // this.auditableItems[index] = xx;
  })
  }

}
