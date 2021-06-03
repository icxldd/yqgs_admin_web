/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TakeAppleAppSiteAssociationResponse } from '../models/take-apple-app-site-association-response';
@Injectable({
  providedIn: 'root',
})
class WellKnownService extends __BaseService {
  static readonly TakeAppleAppSiteAssociationappleAppSiteAssociationGetPath = '/.well-known/apple-app-site-association';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 获取苹果应用程序关联
   *
   * 获取苹果应用程序关联
   * @param Accept Accept Header
   * @return Success
   */
  TakeAppleAppSiteAssociationappleAppSiteAssociationGetResponse(Accept: 'application/json'): __Observable<__StrictHttpResponse<TakeAppleAppSiteAssociationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Accept != null) __headers = __headers.set('Accept', Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/.well-known/apple-app-site-association`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TakeAppleAppSiteAssociationResponse>;
      })
    );
  }
  /**
   * 获取苹果应用程序关联
   *
   * 获取苹果应用程序关联
   * @param Accept Accept Header
   * @return Success
   */
  TakeAppleAppSiteAssociationappleAppSiteAssociationGet(Accept: 'application/json'): __Observable<TakeAppleAppSiteAssociationResponse> {
    return this.TakeAppleAppSiteAssociationappleAppSiteAssociationGetResponse(Accept).pipe(
      __map(_r => _r.body as TakeAppleAppSiteAssociationResponse)
    );
  }
}

module WellKnownService {
}

export { WellKnownService }
