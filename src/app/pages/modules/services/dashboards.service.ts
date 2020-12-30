import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Basichttpclient } from '../../services/basichttpclient';
import { ApiService } from '../basic/ApiService';
import { GuildDto } from '../dtos/dashboards';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService extends ApiService {
  constructor(private http: HttpClient) {
      super(http)
   }



   getUserViolations(userId:number):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/account/violation?userId=${userId}`,  { headers: this.header})
   }

   getGuilds():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guilds/show`,  { headers: this.header})
   }

   getAccounts():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/accounts/show`,  { headers: this.header})
   }

   getGuildMember():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guildmember/show`,  { headers: this.header})
   }

   getLivecasts():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/livecasts/show`,  { headers: this.header})
   }
   getDiscuss():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/discuss/show`,  { headers: this.header})
   }
   getNotifications():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/notifications/show`,  { headers: this.header})
   }

   getGuild(guildId:string):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/show?guildId=${guildId}`,  { headers: this.header})
   }

   setGuildStatus(guildId:string,status:boolean):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/show?guildId=${guildId}`,  { headers: this.header})
   }


  putBlocStatus(blocId:string,blocType:number,blocValue:boolean):Observable<any>{
    return this.http.put(this.uriBase+`/spaadmin/bloc/status`,{identificationId:blocId,blocType:blocType,blocValue:blocValue},  { headers: this.header})
  }

}

