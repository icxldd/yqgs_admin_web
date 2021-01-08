import { Component, OnInit } from '@angular/core';
import { AppCacheService } from '../../services/app-cache.service';
import { ProductService } from '../../services/product.service';
import { WebsockertService } from '../../services/websockert.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  strArr:string[]
  constructor(private sockert:WebsockertService,protected cacheSrv: AppCacheService) { }

  ngOnInit() {
    // this.sockert.createObservableSocket(this.cacheSrv.token).subscribe(x=>{
    //   if(x.type=='message'){
    //     this.strArr.push(x.data);
    //   }
    //   // this.strArr.push(x);
    // })

  }







}
