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

   getGuilds():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guilds/show`,  { headers: this.header})
   }

   getLivecasts():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/livecasts/show`,  { headers: this.header})
   }

   getGuild(guildId:string):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/show?guildId=${guildId}`,  { headers: this.header})
   }

   setGuildStatus(guildId:string,status:boolean):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/show?guildId=${guildId}`,  { headers: this.header})
   }
}

