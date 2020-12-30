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

 
 getAbuseReportAuditList():Observable<any>{
  return this.http.get(this.uriBase+`/spaadmin/abuse-report-audit/show`,  { headers: this.header})
 }

 getIdeaFeedbackList():Observable<any>{
  return this.http.get(this.uriBase+`/spaadmin/idea-feedback/show`,  { headers: this.header})
 }

 
putReplyUserFeedback(FeedbackId:string,Description:string):Observable<any>{
  return this.http.put(this.uriBase+`/people/user/feedback`,{FeedbackId:FeedbackId,Description:Description},  { headers: this.header})
}

 putBlocStatus(ItemId:string,Result:string):Observable<any>{
  return this.http.put(this.uriBase+`/spaadmin/bloc/audit`,{ItemId:ItemId,Result:Result},  { headers: this.header})
}
}
