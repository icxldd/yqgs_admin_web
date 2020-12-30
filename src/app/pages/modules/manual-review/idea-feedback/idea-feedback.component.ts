import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { VerfiyObject } from 'src/app/pages/common/verfiy-object';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { userFeedbackDto, fileBasicDto } from '../../dtos/manual-review';
import { ManualReviewService } from '../../services/manual-review.service';
import { FileListComponent } from '../common-component/file-list/file-list.component';
import { IdeaReplierComponent } from '../common-component/idea-replier/idea-replier.component';

@Component({
  selector: 'app-idea-feedback',
  templateUrl: './idea-feedback.component.html',
  styleUrls: ['./idea-feedback.component.scss']
})
export class IdeaFeedbackComponent implements OnInit {

 
  userFeedbacks: userFeedbackDto[]
  userFeedback: userFeedbackDto;
  selecteduserFeedbacks: userFeedbackDto[];
  constructor(protected ddService: ManualReviewService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getIdeaFeedbackList().subscribe(x=>{
      this.userFeedbacks =  <userFeedbackDto[]>x.userFeedbackDtos
   })

  }
onReplier(dto:userFeedbackDto){
  this.dialogService.open(IdeaReplierComponent, {
    data:dto,
    header: 'Idea Replier',
    width: '70%',
    contentStyle: {"max-height": "700px", "overflow": "auto"},
    baseZIndex: 10000
})

}
}
