import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { AuditableItemListComponent } from '../../common/auditableItem-list/auditableItem-list.component';
import { accountAdminDto } from '../../dtos/dashboards';
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
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getAccounts().subscribe(x=>{
      this.accounts =  <accountAdminDto[]>x.accounts
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
