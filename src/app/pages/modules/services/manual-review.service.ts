import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../basic/ApiService';

@Injectable({
  providedIn: 'root'
})
export class ManualReviewService extends ApiService {

constructor(private http: HttpClient) {
  super(http)

 }



 
 getManualAuditList():Observable<any>{
  return this.http.get(this.uriBase+`/spaadmin/manual-audit/show`,  { headers: this.header})
 }

}
