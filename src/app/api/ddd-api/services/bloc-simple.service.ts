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
class BlocSimpleService extends __BaseService {
  static readonly BlocSimpleGetDataPath = '/api/bloc/bloc-simple/data';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  BlocSimpleGetDataResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bloc/bloc-simple/data`,
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
  }  BlocSimpleGetData(): __Observable<string> {
    return this.BlocSimpleGetDataResponse().pipe(
      __map(_r => _r.body as string)
    );
  }
}

module BlocSimpleService {
}

export { BlocSimpleService }
