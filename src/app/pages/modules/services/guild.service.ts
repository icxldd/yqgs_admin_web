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
export class GuildService extends ApiService {
  constructor(private http: HttpClient) {
      super(http)
   }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
    let id = route.paramMap.get('id');
    
    return this.getGuild(id)
}

getGuild(guildId:string):Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guild/show?guildId=${guildId}`,  { headers: this.header})
}


}
