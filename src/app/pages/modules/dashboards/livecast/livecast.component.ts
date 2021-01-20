import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { WebsockertService } from 'src/app/pages/services/websockert.service';
import { GuildmemberListComponent } from '../../common/guildmember-list/guildmember-list.component';
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
  showProgress:boolean=false;
  messages:string[]=[];
  onlineCount:number=0;


  openDialog(livecast:livecastDto,type:number){

    if(type==0){
      this.dialogService.open(GuildmemberListComponent, {
        data:livecast.hasViewMembers,
        header: '已查看成员列表',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    }
    else if(type==1){
      this.dialogService.open(GuildmemberListComponent, {
        data:livecast.noViewMembers,
        header: '未查看成员列表',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    }
  
  }
  showLivecast:livecastDto=new livecastDto();
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,private sockert:WebsockertService) { }

  ngOnInit() {
    this.showProgress = true;
    this.ddService.getLivecasts().subscribe(x=>{

       this.livecasts =  <livecastDto[]>x.livecasts;
       this.showProgress = false;
    })

    this.sockert.onmessage$.subscribe(x=>{
      if(x.type=='message'){
        let message = '';

        let obj = JSON.parse(x.data);
        let onlineSumDeviceCountByRoom = obj.roomDto.onlineSumDeviceCountByRoom;
        message+=obj.roomDto.triggerGuildMember.nickname;
        if(obj.eventType==1){
          this.onlineCount= onlineSumDeviceCountByRoom;
          message+="解散房间。聊天结束";
        }
        else if(obj.eventType==2){
          this.onlineCount= onlineSumDeviceCountByRoom;
          message+="加入房间";
        }
        else if(obj.eventType==3){
          this.onlineCount= onlineSumDeviceCountByRoom;
          message+="离开房间";
        }
        else if(obj.eventType==10){
          message+="发送消息:";
          message+=obj.messageBody;
        }


        this.messages.push(message)
      }
      
      console.log(x)
    })
  }
  DetailLivecast(livecast:livecastDto){

    this.displayModal = !this.displayModal;
    this.showLivecast = livecast;
  // this.ddService.putEnterLivecast(livecast.livecastId).subscribe(x=>{

  //     this.displayModal = !this.displayModal;
  //       this.showLivecast = livecast;
  //   })
  

  }

  publishMessage(livecast:livecastDto,event){
    if(event.keyCode==13){
    var message = event.target.value;
    this.ddService.postLivecastMessage(livecast.livecastId,message).subscribe(x=>{

    })
  }
  }
  onHide(livecast:livecastDto){
    // this.ddService.putLeaveLivecast(livecast.livecastId).subscribe(x=>{
    // })
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
