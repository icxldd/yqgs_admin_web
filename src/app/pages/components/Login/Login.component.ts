import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { Accountdto } from '../../dto/accountdto';
import { AccountService } from '../../services/account.service';
import { AppCacheService } from '../../services/app-cache.service';
import { PagecontrolService } from '../../services/pagecontrol.service';
import { WebsockertService } from '../../services/websockert.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  requestDTO:Accountdto = new Accountdto('','')

  constructor(protected accsrc:AccountService,protected cacheSrv: AppCacheService,protected pagesrc:PagecontrolService,private messageService: MessageService,private sockert:WebsockertService) { }

  ngOnInit() {
  }
  onkeydown(event){
    if(event.keyCode=="13"){
      this.login()
    }
  }


  login(){
    this.accsrc.login(this.requestDTO).subscribe((x:any)=>{
      this.cacheSrv.token= x.sessionId
      this.cacheSrv.userId = x.userId
      window.location.href ='/pages/home' 
      
    },err=>{
      var msg =  err.error.responseStatus.message
      this.messageService.add({severity:'error', summary: 'Error', detail: msg})
    })
  }

}
