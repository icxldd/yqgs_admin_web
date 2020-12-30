import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { livecastDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-livecast',
  templateUrl: './livecast.component.html',
  styleUrls: ['./livecast.component.scss']
})
export class LivecastComponent implements OnInit {
  livecasts: livecastDto[]
  livecast: livecastDto;
  selectedlivecasts: livecastDto[];
  displayModal:boolean=false;




  showLivecast:livecastDto=new livecastDto();
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService) { }

  ngOnInit() {
    this.ddService.getLivecasts().subscribe(x=>{


       this.livecasts =  <livecastDto[]>x.livecasts
    })
  }
  DetailLivecast(livecast){
    this.displayModal = !this.displayModal;
    this.showLivecast = livecast;
  }

  openFiles(livecast:livecastDto){
    this.dialogService.open(FileListComponent, {
      data:livecast.files,
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
  setLivecastStatus(livecast){
    
    let value = livecast.status==0?false:true;
    if(value){
      livecast.status = 0;
    }else{
      livecast.status =  -1;
    }
    this.ddService.putBlocStatus(livecast.livecastId,1,value).subscribe(x=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: '更改状态成功', life: 3000});
    });
  }
}
