import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { auditableItemDto } from '../../dtos/manual-review';
import { ManualReviewService } from '../../services/manual-review.service';

@Component({
  selector: 'app-manual-audit',
  templateUrl: './manual-audit.component.html',
  styleUrls: ['./manual-audit.component.scss']
})
export class ManualAuditComponent implements OnInit {

  auditableItems: auditableItemDto[]
  auditableItem: auditableItemDto;
  selectedauditableItems: auditableItemDto[];
  constructor(private ddService: ManualReviewService,protected pagesrc:PagecontrolService,private messageService: MessageService) { }

  ngOnInit() {
    this.ddService.getManualAuditList().subscribe(x=>{
      this.auditableItems =  <auditableItemDto[]>x.auditableItemDtos
   })
  }


}
