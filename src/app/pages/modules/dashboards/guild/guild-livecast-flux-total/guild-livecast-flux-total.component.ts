import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { GuildDto, guildTotalAmountDto } from '../../../dtos/dashboards';
import { DashboardsService } from '../../../services/dashboards.service';
import { GuildLivecastFluxChargeComponent } from '../guild-livecast-flux-charge/guild-livecast-flux-charge.component';
import { GuildLivecastFluxConsumeComponent } from '../guild-livecast-flux-consume/guild-livecast-flux-consume.component';

@Component({
  selector: 'app-guild-livecast-flux-total',
  templateUrl: './guild-livecast-flux-total.component.html',
  styleUrls: ['./guild-livecast-flux-total.component.scss']
})
export class GuildLivecastFluxTotalComponent implements OnInit {
  guildTotalAmounts: guildTotalAmountDto[]
  guildTotalAmount: guildTotalAmountDto;
  selectedGuildTotalAmounts: guildTotalAmountDto[];
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService,protected dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  flux:number;
  PayFlux(){
    let guildId = this.guildTotalAmounts[0].guildId;
    this.ddService.postPalyFlux(Number(guildId),this.flux).subscribe(x=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: `给教会编号为${guildId}成功充值${this.flux}GB直播流量。`, life: 3000});
    });
    // console.log(this.flux);
  }
  ngOnInit() {
    this.guildTotalAmounts = this.config.data;
  }

  
openDialog(guild:GuildDto,type:number){
  if(type==0){

    this.ddService.getGuildCharges(guild.guildId).subscribe(x=>{
      this.dialogService.open(GuildLivecastFluxChargeComponent, {
        data:x.objects,
        header: '直播流量充值记录',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    })
    
    
  }else if(type==1){

    this.ddService.getGuildConsumes(guild.guildId).subscribe(x=>{
      this.dialogService.open(GuildLivecastFluxConsumeComponent, {
        data:x.objects,
        header: '直播流量消费记录',
        width: '70%',
        contentStyle: {"max-height": "700px", "overflow": "auto"},
        baseZIndex: 10000
    });
    });

   
  }
}

}
