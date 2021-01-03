import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VerfiyObject } from 'src/app/pages/common/verfiy-object';
import { auditableItemDto, fileBasicDto } from '../../dtos/manual-review';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-violatedAuditableItem',
  templateUrl: './violatedAuditableItem.component.html',
  styleUrls: ['./violatedAuditableItem.component.scss']
})
export class ViolatedAuditableItemComponent implements OnInit {

  auditableItems: auditableItemDto[]
  auditableItem: auditableItemDto;
  selectedauditableItems: auditableItemDto[];
  accountId:number;

  constructor(private ddService: DashboardsService,public ref: DynamicDialogRef, public config: DynamicDialogConfig,private messageService: MessageService,protected dialogService: DialogService) {
   

   }

  ngOnInit() {
    this.auditableItems = this.config.data
  }

  openFiles(dto:auditableItemDto){
    let files:fileBasicDto[];
   files = dto.imageFiles.concat(dto.audioFiles).concat(dto.videoFiles).concat(dto.attachmentFiles);
   this.dialogService.open(FileListComponent, {
    data:files,
    header: 'file list',
    width: '70%',
    contentStyle: {"max-height": "700px", "overflow": "auto"},
    baseZIndex: 10000
})

  }
  isHasFile(dto:auditableItemDto):boolean{
    if(VerfiyObject.isHasVal(dto.videoFiles)||VerfiyObject.isHasVal(dto.audioFiles)||
    VerfiyObject.isHasVal(dto.imageFiles)||VerfiyObject.isHasVal(dto.attachmentFiles)
    ){
      return true;
    }else{
      return false;
    }
}

}
