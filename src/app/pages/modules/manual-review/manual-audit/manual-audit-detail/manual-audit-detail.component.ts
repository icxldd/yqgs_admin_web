import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { auditableItemDto } from '../../../dtos/manual-review';
import { ManualReviewService } from '../../../services/manual-review.service';

@Component({
  selector: 'app-manual-audit-detail',
  templateUrl: './manual-audit-detail.component.html',
  styleUrls: ['./manual-audit-detail.component.scss']
})
export class ManualAuditDetailComponent implements OnInit {
  dto:auditableItemDto
  constructor(private mrSrc:ManualReviewService,public ref: DynamicDialogRef, public config: DynamicDialogConfig,private messageService: MessageService) {

    this.dto = config.data
  }
  audit:string=''
  ngOnInit() {
  }
  onAudit(){
    if(this.audit==''){
      this.messageService.add({severity:'error', summary: 'error', detail: '请填写审核结果', life: 3000});
    }else{
      this.mrSrc.putBlocStatus(this.dto.itemId,this.audit).subscribe(x=>{
        this.messageService.add({severity:'success', summary: 'success', detail: '审核成功', life: 3000});
        if(this.verifyAuditReusltIsNormal(this.audit)){
          this.dto.status = 0;
          this.dto.auditMessage = this.audit;
          this.dto.statusName = '正常/进行中';
        }else{
          this.dto.status = -2;
          this.dto.auditMessage = this.audit;
          this.dto.statusName ='已屏蔽';
        }
        this.ref.close(this.dto);
      })
    }
  }

  verifyAuditReusltIsNormal(str:string){
    if(str=='正常'){
      return true;
    }else{
      return false;
    }
  }

}
