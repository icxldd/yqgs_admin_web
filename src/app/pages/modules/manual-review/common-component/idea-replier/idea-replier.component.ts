import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AppCacheService } from 'src/app/pages/services/app-cache.service';
import { userFeedbackDto } from '../../../dtos/manual-review';
import { ManualReviewService } from '../../../services/manual-review.service';

@Component({
  selector: 'app-idea-replier',
  templateUrl: './idea-replier.component.html',
  styleUrls: ['./idea-replier.component.scss']
})
export class IdeaReplierComponent implements OnInit {

  dto:userFeedbackDto

  thisDescription:string

  constructor(protected cacheSrv: AppCacheService,private mrSrc:ManualReviewService,public ref: DynamicDialogRef, public config: DynamicDialogConfig,private messageService: MessageService) {
    this.dto = config.data;
    this.thisDescription = this.dto.repliedDescription;
   }

  ngOnInit() {
  }



  onReplier(){
    this.mrSrc.putReplyUserFeedback(this.dto.feedbackId,this.thisDescription).subscribe(x=>{
      this.dto.repliedDescription = this.thisDescription
      this.dto.repliedDate = new Date().toLocaleString();
      this.dto.replierId = this.cacheSrv.userId.toString();
      this.messageService.add({severity:'success', summary: 'success', detail: '回复成功', life: 3000});
      this.ref.close();
    })
    
  }
}
