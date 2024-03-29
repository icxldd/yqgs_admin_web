import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Basichttpclient } from '../../services/basichttpclient';
import { ApiService } from '../basic/ApiService';
import { GuildDto, queryDto } from '../dtos/dashboards';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService extends ApiService {
  constructor(private http: HttpClient) {
      super(http)
   }




   
   getGuildContact(guildIds:string[]) :Observable<any>{
     return this.http.post(this.uriBase+`/spaadmin/export/guildcontact`,{guildIds:guildIds},{ headers: this.header,responseType: "blob"});
   }




   postPalyFlux(guildId:number,count:number){
      return this.http.post(this.uriBase+`/organization/guild/charge`,{GuildId:guildId,Type:1,Amount:count*1024,ConsumedMoney:0,Remark:'网页后台充值',isInward:true},  { headers: this.header})
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

   getAccountDetail(userId:string,searchType:number):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/account/detail/show?userAuthId=${userId}&searchType=${searchType}`,  { headers: this.header})
   }

   getGuildBlocDetail(guildId:string,searchType:number):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/bloc/detail/show?guildId=${guildId}&searchType=${searchType}`,  { headers: this.header})
   }


   getGuildMember():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guildmember/show`,  { headers: this.header})
   }

   getLivecasts():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/livecasts/show`,  { headers: this.header})
   }
   getLivecastsLazy(query:queryDto):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/livecasts/lazy/show?first=${query.first}&rows=${query.rows}&sortField=${query.sortField}&sortOrder=${query.sortOrder}&data=${query.data}`,  { headers: this.header})
   }

   getGuildsLazy(query:queryDto):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guilds/lazy/show?first=${query.first}&rows=${query.rows}&sortField=${query.sortField}&sortOrder=${query.sortOrder}&data=${query.data}`,  { headers: this.header})
   }

   getDiscuss():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/discuss/show`,  { headers: this.header})
   }
   getNotifications():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/notifications/show`,  { headers: this.header})
   }


   getGuildTotalAmount(guildId:string):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/livecastFlux/show?guildId=${guildId}`,  { headers: this.header})
   }
   getGuildCharges(guildId:string):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/livecastFluxDetail/show?guildId=${guildId}&showFluxType=1`,  { headers: this.header})
   }

   getGuildConsumes(guildId:string):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/livecastFluxDetail/show?guildId=${guildId}&showFluxType=2`,  { headers: this.header})
   }



   getSystemDetail(falg:string):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/system/detail/show?findFalg=${falg}`,  { headers: this.header})
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


  putEnterLivecast(LivecastId:string):Observable<any>{
    return this.http.put(this.uriBase+`/module/livecast/receiver/enter`,{LivecastId:LivecastId},  { headers: this.header})
  }


  putLeaveLivecast(LivecastId:string):Observable<any>{
    return this.http.put(this.uriBase+`/module/livecast/receiver/leave`,{LivecastId:LivecastId},  { headers: this.header})
  }


  postLivecastMessage(LivecastId:string,message:string):Observable<any>{
    return this.http.post(this.uriBase+`/module/livecast/message`,{LivecastId:LivecastId,Type:0,Description:message},  { headers: this.header})
  }


}

