import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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



}

