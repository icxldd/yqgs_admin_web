import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Accountdto } from '../../dto/accountdto';
import { AccountService } from '../../services/account.service';
import { AppCacheService } from '../../services/app-cache.service';
import { PagecontrolService } from '../../services/pagecontrol.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  requestDTO:Accountdto = new Accountdto()

  constructor(protected accsrc:AccountService,protected cacheSrv: AppCacheService,protected pagesrc:PagecontrolService) { }

  ngOnInit() {
  }
  onkeydown(){
    // console.log(this.ccc);
  }


  login(){
    this.accsrc.login(this.requestDTO).subscribe((x:any)=>{
      this.cacheSrv.token= x.sessionId
      this.pagesrc.gotopage('/pages/home')
    })
  }

}
