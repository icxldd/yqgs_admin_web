/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Object } from '../models/object';
@Injectable({
  providedIn: 'root',
})
class PromotionService extends __BaseService {
  static readonly ViewGuildMemberJoinjoinviewGetPath = '/promotion/join/view';
  static readonly ViewGuildMemberResultresultviewGetPath = '/promotion/result/view';
  static readonly ViewGuildMemberSignupsignupviewGetPath = '/promotion/signup/view';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 查看加入教会的身份资料
   *
   * 查看加入教会的身份资料
   * @param params The `PromotionService.ViewGuildMemberJoinjoinviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewGuildMemberJoinjoinviewGetResponse(params: PromotionService.ViewGuildMemberJoinjoinviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/promotion/join/view`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Object>;
      })
    );
  }
  /**
   * 查看加入教会的身份资料
   *
   * 查看加入教会的身份资料
   * @param params The `PromotionService.ViewGuildMemberJoinjoinviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewGuildMemberJoinjoinviewGet(params: PromotionService.ViewGuildMemberJoinjoinviewGetParams): __Observable<Object> {
    return this.ViewGuildMemberJoinjoinviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看加入教会的结果
   *
   * 查看加入教会的结果
   * @param params The `PromotionService.ViewGuildMemberResultresultviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewGuildMemberResultresultviewGetResponse(params: PromotionService.ViewGuildMemberResultresultviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/promotion/result/view`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Object>;
      })
    );
  }
  /**
   * 查看加入教会的结果
   *
   * 查看加入教会的结果
   * @param params The `PromotionService.ViewGuildMemberResultresultviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewGuildMemberResultresultviewGet(params: PromotionService.ViewGuildMemberResultresultviewGetParams): __Observable<Object> {
    return this.ViewGuildMemberResultresultviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看加入教会的邀请函
   *
   * 查看加入教会的邀请函
   * @param params The `PromotionService.ViewGuildMemberSignupsignupviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `pastor`: 牧师编号
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewGuildMemberSignupsignupviewGetResponse(params: PromotionService.ViewGuildMemberSignupsignupviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.pastor != null) __params = __params.set('pastor', params.pastor.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/promotion/signup/view`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Object>;
      })
    );
  }
  /**
   * 查看加入教会的邀请函
   *
   * 查看加入教会的邀请函
   * @param params The `PromotionService.ViewGuildMemberSignupsignupviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `pastor`: 牧师编号
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewGuildMemberSignupsignupviewGet(params: PromotionService.ViewGuildMemberSignupsignupviewGetParams): __Observable<Object> {
    return this.ViewGuildMemberSignupsignupviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }
}

module PromotionService {

  /**
   * Parameters for ViewGuildMemberJoinjoinviewGet
   */
  export interface ViewGuildMemberJoinjoinviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    guild?: string;
  }

  /**
   * Parameters for ViewGuildMemberResultresultviewGet
   */
  export interface ViewGuildMemberResultresultviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    guild?: string;
  }

  /**
   * Parameters for ViewGuildMemberSignupsignupviewGet
   */
  export interface ViewGuildMemberSignupsignupviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 牧师编号
     */
    pastor?: string;

    /**
     * 教会编号
     */
    guild?: string;
  }
}

export { PromotionService }
