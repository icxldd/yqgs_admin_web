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
    this.sockert.createObservableSocket(this.cacheSrv.token).subscribe(x=>{
      console.log("createObservableSocket"+x);
    })
  }

}
