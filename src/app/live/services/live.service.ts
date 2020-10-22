import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accountdto } from 'src/app/pages/dto/accountdto';
import { AccountService } from 'src/app/pages/services/account.service';
import { AppCacheService } from 'src/app/pages/services/app-cache.service';
import { Basichttpclient } from 'src/app/pages/services/basichttpclient';

@Injectable({
  providedIn: 'root'
})
export class LiveService extends Basichttpclient {

constructor(private http: HttpClient,private accSrc:AccountService,protected cacheSrv: AppCacheService) {super(http) }




  async getLiveInfo(livecastId:string):Promise<Observable<any>>{
    await this.accSrc.initToken().then((x:any)=>{
      if(x!=true){
        this.cacheSrv.token = x.sessionId
      }
    })
    
    return this.http.get(this.uriBase+"/module/livecast/show?LivecastId="+livecastId, { headers: this.header})
  }
}
