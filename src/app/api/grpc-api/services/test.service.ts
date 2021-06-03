/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { HealthVerifyResponse } from '../models/health-verify-response';
import { ShowTestResponse } from '../models/show-test-response';
@Injectable({
  providedIn: 'root',
})
class TestService extends __BaseService {
  static readonly HealthVerifyhealthGetPath = '/test/health';
  static readonly ShowTestshowGetPath = '/test/show';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 健康检查
   *
   * 健康检查。
   * @param Accept Accept Header
   * @return Success
   */
  HealthVerifyhealthGetResponse(Accept: 'application/json'): __Observable<__StrictHttpResponse<HealthVerifyResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Accept != null) __headers = __headers.set('Accept', Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/test/health`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HealthVerifyResponse>;
      })
    );
  }
  /**
   * 健康检查
   *
   * 健康检查。
   * @param Accept Accept Header
   * @return Success
   */
  HealthVerifyhealthGet(Accept: 'application/json'): __Observable<HealthVerifyResponse> {
    return this.HealthVerifyhealthGetResponse(Accept).pipe(
      __map(_r => _r.body as HealthVerifyResponse)
    );
  }

  /**
   * 测试接口
   *
   * 测试接口
   * @param Accept Accept Header
   * @return Success
   */
  ShowTestshowGetResponse(Accept: 'application/json'): __Observable<__StrictHttpResponse<ShowTestResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Accept != null) __headers = __headers.set('Accept', Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/test/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowTestResponse>;
      })
    );
  }
  /**
   * 测试接口
   *
   * 测试接口
   * @param Accept Accept Header
   * @return Success
   */
  ShowTestshowGet(Accept: 'application/json'): __Observable<ShowTestResponse> {
    return this.ShowTestshowGetResponse(Accept).pipe(
      __map(_r => _r.body as ShowTestResponse)
    );
  }
}

module TestService {
}

export { TestService }
