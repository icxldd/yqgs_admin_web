import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {from, Observable, of}  from 'rxjs'
import { tap} from 'rxjs/operators';
import { Accountdto } from '../dto/accountdto';
import { AppCacheService } from './app-cache.service';
import { Basichttpclient } from './basichttpclient';
@Injectable({
  providedIn: 'root'
})
export class AccountService extends Basichttpclient {

  constructor(private http: HttpClient,protected cacheSrv: AppCacheService) {
    super(http)
   }

  getGuild(guildId:number):Observable<any>{
    return this.http.get(this.uriBase+`/organization/guild?GuildId=${guildId}`,  { headers: this.header})
  }
  getUser(userId:number):Observable<any>{
    return this.http.get(this.uriBase+`/people/user?UserId=${userId}`,  { headers: this.header})
  }
  login(reqdto:Accountdto):Observable<Object>{
    return from(this.http.post(this.uriBase+"/account/auth/mobile", reqdto, { headers: this.header }).toPromise())
  }

  initToken():Promise<any>{
    if(!this.cacheSrv.token){
     return this.login(new Accountdto('13588888888','8888')).toPromise()
    }
    else{
      return of(true).toPromise()
    }
  }

  getMyInfo():Observable<object>{
    return this.http.get(this.uriBase+"/account/show",  { headers: this.header})
  }
}
