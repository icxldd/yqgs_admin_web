import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { VerfiyObject } from 'src/app/pages/common/verfiy-object';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { auditableItemDto, fileBasicDto } from '../../dtos/manual-review';
import { ManualReviewService } from '../../services/manual-review.service';
import { FileListComponent } from '../common-component/file-list/file-list.component';
import { ManualAuditDetailComponent } from './manual-audit-detail/manual-audit-detail.component';

@Component({
  selector: 'app-manual-audit',
  templateUrl: './manual-audit.component.html',
  styleUrls: ['./manual-audit.component.scss']
})
export class ManualAuditComponent implements OnInit {

  auditableItems: auditableItemDto[]
  auditableItem: auditableItemDto;
  selectedauditableItems: auditableItemDto[];
  constructor(protected ddService: ManualReviewService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getManualAuditList().subscribe(x=>{
      this.auditableItems =  <auditableItemDto[]>x.auditableItemDtos
   })

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


  openAudit(dto:auditableItemDto){
    this.dialogService.open(ManualAuditDetailComponent, {
      data:dto,
      header: '审核操作页',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  }).onClose.subscribe((xx:auditableItemDto)=>{

    // let index =  this.auditableItems.findIndex(x=>x.itemId==xx.itemId);
    // this.auditableItems[index] = xx;
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
