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
export class SystemService extends ApiService {
  constructor(private http: HttpClient) {
      super(http)
   }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
    
    
    return this.getSystem()
}


getSystem():Observable<any>{
  return this.http.get(this.uriBase+`/spaadmin/system/show`,  { headers: this.header})
}



}
