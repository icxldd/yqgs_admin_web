/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class SampleService extends __BaseService {
  static readonly SampleGetDataPath = '/api/yqgs/sample/data';
  static readonly SampleGetData2Path = '/api/yqgs/sample/data2';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  SampleGetDataResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/yqgs/sample/data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }  SampleGetData(): __Observable<string> {
    return this.SampleGetDataResponse().pipe(
      __map(_r => _r.body as string)
    );
  }
  SampleGetData2Response(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/yqgs/sample/data2`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }  SampleGetData2(): __Observable<string> {
    return this.SampleGetData2Response().pipe(
      __map(_r => _r.body as string)
    );
  }
}

module SampleService {
}

export { SampleService }
