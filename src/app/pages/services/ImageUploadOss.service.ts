import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, Product } from '../models/product';
import { Basichttpclient } from './basichttpclient';
@Injectable({
  providedIn: 'root'
})
export class ImageUploadOssService extends Basichttpclient {

constructor(private http: HttpClient) { 
  super(http)
}

PostImageUploadOss(file:File):Observable<any>{
  const fd = new FormData();
  fd.append('file',file);
  this.header = new HttpHeaders({
    'Accept': 'multipart/form-data',
  });

  return this.http.post(this.uriBase+"/module/ImageUploadOss", fd, { headers: this.header})
}
}
