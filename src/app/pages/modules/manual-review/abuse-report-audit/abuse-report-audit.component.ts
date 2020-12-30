import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { VerfiyObject } from 'src/app/pages/common/verfiy-object';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { abuseReportDto, auditableItemDto, fileBasicDto } from '../../dtos/manual-review';
import { ManualReviewService } from '../../services/manual-review.service';
import { FileListComponent } from '../common-component/file-list/file-list.component';
import { ManualAuditDetailComponent } from '../manual-audit/manual-audit-detail/manual-audit-detail.component';

@Component({
  selector: 'app-abuse-report-audit',
  templateUrl: './abuse-report-audit.component.html',
  styleUrls: ['./abuse-report-audit.component.scss']
})
export class AbuseReportAuditComponent implements OnInit {

  //abuseReportDto
  abuseReports: abuseReportDto[]
  abuseReport: abuseReportDto;
  selectedabuseReports: abuseReportDto[];
  constructor(protected ddService: ManualReviewService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getAbuseReportAuditList().subscribe(x=>{
      this.abuseReports =  <abuseReportDto[]>x.abuseReportDtos
   })

  }

  
  openFiles(dto2:abuseReportDto){
    let dto:auditableItemDto = dto2.item;
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


  openAudit(dto:abuseReportDto){
    this.dialogService.open(ManualAuditDetailComponent, {
      data:dto.item,
      header: '审核操作页',
      width: '70%',
      contentStyle: {"max-height": "700px", "overflow": "auto"},
      baseZIndex: 10000
  }).onClose.subscribe((xx:auditableItemDto)=>{

    // let index =  this.abuseReports.findIndex(x=>x.itemId==xx.itemId);
    // this.abuseReports[index].item = xx;
  })
  }

  isHasFile(dto2:abuseReportDto):boolean{
    let dto:auditableItemDto = dto2.item;
      if(VerfiyObject.isHasVal(dto.videoFiles)||VerfiyObject.isHasVal(dto.audioFiles)||
      VerfiyObject.isHasVal(dto.imageFiles)||VerfiyObject.isHasVal(dto.attachmentFiles)
      ){
        return true;
      }else{
        return false;
      }
  }

}
