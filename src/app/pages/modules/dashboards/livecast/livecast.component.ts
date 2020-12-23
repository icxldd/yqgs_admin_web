import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';
import { livecastDto } from '../../dtos/dashboards';
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
  constructor(private ddService: DashboardsService,protected pagesrc:PagecontrolService,private messageService: MessageService) { }

  ngOnInit() {
    this.ddService.getLivecasts().subscribe(x=>{


       this.livecasts =  <livecastDto[]>x.livecasts
    })
  }
  DetailLivecast(livecast){
    this.displayModal = !this.displayModal;
    this.showLivecast = livecast;
  }


}
