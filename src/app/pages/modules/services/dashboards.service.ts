import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basichttpclient } from '../../services/basichttpclient';
import { GuildDto } from '../dtos/dashboards';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService extends Basichttpclient {
  constructor(private http: HttpClient) {
      super(http)
   }



  getGuilds():Observable<any>{
    return this.http.get(this.uriBase+`/spaadmin/guilds/show`,  { headers: this.header})
   }

  // getProducts():Observable<any>{
  //   return this.http.get(this.uriBase+"/module/Post/show",  { headers: this.header})
  // }

  // PutProducts(Post:Post):Observable<any>{
  //   return this.http.put(this.uriBase+"/module/Post", {Post:Post}, { headers: this.header})
  // }

  // PostProducts(Post:Post):Observable<any>{
  //   return this.http.post(this.uriBase+"/module/Post", {Post:Post}, { headers: this.header})
  // }

  // DeleteProducts(PostId:string ):Observable<any>{
  //   return this.http.delete(this.uriBase+`/module/Post?PostId=${PostId}`,  { headers: this.header})
  // }

  // getProductsWithOrdersSmall() {
  //     return this.http.get<any>('assets/products-orders-small.json')
  //     .toPromise()
  //     .then(res => <Product[]>res.data)
  //     .then(data => { return data; });
  // }


}

