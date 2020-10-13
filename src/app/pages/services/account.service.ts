import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {from, Observable}  from 'rxjs'
import { tap} from 'rxjs/operators';
import { Accountdto } from '../dto/accountdto';
import { Basichttpclient } from './basichttpclient';
@Injectable({
  providedIn: 'root'
})
export class AccountService extends Basichttpclient {

  constructor(private http: HttpClient) {
    super(http)
   }
  login(reqdto:Accountdto):Observable<Object>{
    return from(this.http.post(this.uriBase+"/account/auth/mobile", reqdto, { headers: this.header }).toPromise())
  }



  getMyInfo():Observable<object>{
    return this.http.get(this.uriBase+"/account/show",  { headers: this.header})
  }
}
