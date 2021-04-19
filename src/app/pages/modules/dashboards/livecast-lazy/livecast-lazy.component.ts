import { Component, OnInit } from '@angular/core';
import { BlocCommon } from '@app/pages/common/bloc-common';
import { PagecontrolService } from '@app/pages/services/pagecontrol.service';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { GuildmemberListComponent } from '../../common/guildmember-list/guildmember-list.component';
import { livecastDto, queryDto } from '../../dtos/dashboards';
import { FileListComponent } from '../../manual-review/common-component/file-list/file-list.component';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-livecast-lazy',
  templateUrl: './livecast-lazy.component.html',
  styleUrls: ['./livecast-lazy.component.scss']
})
export class LivecastLazyComponent implements OnInit {

   livecasts: livecastDto[];
    totalRecords: number;
    cols: any[];
    loading: boolean;
    data:string='';

    displayModal: boolean = false;
    showProgress: boolean = false;
    livecast: livecastDto;
    constructor(private ddService: DashboardsService, protected pagesrc: PagecontrolService, private messageService: MessageService, protected dialogService: DialogService) { }

    ngOnInit() {
     

        this.loading = true;
    }

    DetailLivecast(livecast: livecastDto) {
      // let vvv =  Object.assign(new livecastDto(),livecast);
      this.displayModal = !this.displayModal;
      livecast.hlsPlayUrl = BlocCommon.livecastUrlBuild(livecast.hlsPlayUrl);
      this.showLivecast = livecast;
      // this.ddService.putEnterLivecast(livecast.livecastId).subscribe(x=>{
  
      //     this.displayModal = !this.displayModal;
      //       this.showLivecast = livecast;
      //   })
  
  
    }
  
    publishMessage(livecast: livecastDto, event) {
      if (event.keyCode == 13) {
        var message = event.target.value;
        this.ddService.postLivecastMessage(livecast.livecastId, message).subscribe(x => {
  
        })
      }
    }
    onHide(livecast: livecastDto) {
      // this.ddService.putLeaveLivecast(livecast.livecastId).subscribe(x=>{
      // })
    }
    openFiles(livecast: livecastDto) {
      this.dialogService.open(FileListComponent, {
        data: livecast.files,
        header: '文件列表',
        width: '70%',
        contentStyle: { "max-height": "700px", "overflow": "auto" },
        baseZIndex: 10000
      });
    }
    isHasVal<T>(dto: Array<T>): boolean {
      if (dto == undefined || dto.length == 0) {
        return false;
      } else {
        return true;
      }
    }
    setLivecastStatus(livecast) {
  
      let value = livecast.status == 0 ? false : true;
      if (value) {
        livecast.status = 0;
      } else {
        livecast.status = -1;
      }
      this.ddService.putBlocStatus(livecast.livecastId, 1, value).subscribe(x => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: '更改状态成功', life: 3000 });
      });
    }
  
    openDialog(livecast: livecastDto, type: number) {

      if (type == 0) {
        this.dialogService.open(GuildmemberListComponent, {
          data: livecast.hasViewMembers,
          header: '已查看成员列表',
          width: '70%',
          contentStyle: { "max-height": "700px", "overflow": "auto" },
          baseZIndex: 10000
        });
      }
      else if (type == 1) {
        this.dialogService.open(GuildmemberListComponent, {
          data: livecast.noViewMembers,
          header: '未查看成员列表',
          width: '70%',
          contentStyle: { "max-height": "700px", "overflow": "auto" },
          baseZIndex: 10000
        });
      }
  
    }
    showLivecast: livecastDto = new livecastDto();
    selfEvent:LazyLoadEvent;
    flushData(event){
      if(event.keyCode==13){
        this.loadCustomers(this.selfEvent);
      }
    }
    loadCustomers(event: LazyLoadEvent) {  
        this.selfEvent =event;
        this.loading = true;
        let query:queryDto=new queryDto();
        query.first = event.first;
        query.rows = event.rows;

        query.sortField = event.sortField==undefined?query.sortField:event.sortField;
        query.sortOrder = event.sortField==undefined?-1:event.sortOrder;
        query.data = this.data;

        this.ddService.getLivecastsLazy(query).subscribe(res => {
          this.livecasts = res.livecasts;
          this.totalRecords = res.totalRecords;
          this.loading = false;
      });
        // setTimeout(() => {
        //     this.ddService.getLivecastsLazy(query).subscribe(res => {
        //         this.livecasts = res.livecasts;
        //         this.totalRecords = res.totalRecords;
        //         this.loading = false;
        //     })
        // }, 1000);
    }
}
