import { Component, OnInit } from '@angular/core';
import { AppCacheService } from '../../services/app-cache.service';
import { WebsockertService } from '../../services/websockert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sockert:WebsockertService,protected cacheSrv: AppCacheService) { }

  ngOnInit() {
    // this.sockert.createObservableSocket(this.cacheSrv.token,'wss://church.yangqungongshe.com:8181').subscribe(x=>{
    //   console.log(x);
    // })

    // this.sockert.createObservableSocket(this.cacheSrv.token,'wss://192.168.31.114:8181').subscribe(x=>{
    //   console.log(x);
    // })
    
  }

}
