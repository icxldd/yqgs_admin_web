import { discussDto } from '../../dtos/dashboards';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { livecastDto } from '../../dtos/dashboards';
import { DashboardsService } from '../../services/dashboards.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.scss']
})
export class DiscussComponent implements OnInit {
  discusss: discussDto[]
  discuss: discussDto;
  selecteddiscusss: discussDto[];
  displayModal:boolean=false;

  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getDiscuss().subscribe(x=>{
      this.discusss =  <discussDto[]>x.discuss
   })
  }


  openFiles(discuss:discussDto){
    this.dialogService.open(FileListComponent, {
      data:discuss.files,
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
  setDiscussStatus(discuss){
    
    let value = discuss.status==0?false:true;
    if(value){
      discuss.status = 0;
    }else{
      discuss.status = -1;
    }
    this.ddService.putBlocStatus(discuss.discussId,2,value).subscribe(x=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: '更改状态成功', life: 3000});
    });
  }
}
