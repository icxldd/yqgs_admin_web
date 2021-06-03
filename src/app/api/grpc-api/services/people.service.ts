/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ReplyUserFeedbackResponse } from '../models/reply-user-feedback-response';
import { ReplyUserFeedback } from '../models/reply-user-feedback';
import { CreateUserFeedbackResponse } from '../models/create-user-feedback-response';
import { CreateUserFeedback } from '../models/create-user-feedback';
import { ShowUserFeedbacksResponse } from '../models/show-user-feedbacks-response';
import { ShowUserLogsResponse } from '../models/show-user-logs-response';
import { TakeUserResponse } from '../models/take-user-response';
@Injectable({
  providedIn: 'root',
})
class PeopleService extends __BaseService {
  static readonly ReplyUserFeedbackuserfeedbackCreatePath = '/people/user/feedback';
  static readonly CreateUserFeedbackuserfeedbackPostPath = '/people/user/feedback';
  static readonly ShowUserFeedbacksuserfeedbacksshowGetPath = '/people/user/feedbacks/show';
  static readonly ShowUserLogsuserlogsshowGetPath = '/people/user/logs/show';
  static readonly TakeUseruserGetPath = '/people/user';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 回复用户反馈
   *
   * 回复用户反馈
   * @param params The `PeopleService.ReplyUserFeedbackuserfeedbackCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `FeedbackId`: 反馈编号
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  ReplyUserFeedbackuserfeedbackCreateResponse(params: PeopleService.ReplyUserFeedbackuserfeedbackCreateParams): __Observable<__StrictHttpResponse<ReplyUserFeedbackResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.FeedbackId != null) { __formData.append('FeedbackId', params.FeedbackId as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/people/user/feedback`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReplyUserFeedbackResponse>;
      })
    );
  }
  /**
   * 回复用户反馈
   *
   * 回复用户反馈
   * @param params The `PeopleService.ReplyUserFeedbackuserfeedbackCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `FeedbackId`: 反馈编号
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  ReplyUserFeedbackuserfeedbackCreate(params: PeopleService.ReplyUserFeedbackuserfeedbackCreateParams): __Observable<ReplyUserFeedbackResponse> {
    return this.ReplyUserFeedbackuserfeedbackCreateResponse(params).pipe(
      __map(_r => _r.body as ReplyUserFeedbackResponse)
    );
  }

  /**
   * 创建用户反馈
   *
   * 创建用户反馈
   * @param params The `PeopleService.CreateUserFeedbackuserfeedbackPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  CreateUserFeedbackuserfeedbackPostResponse(params: PeopleService.CreateUserFeedbackuserfeedbackPostParams): __Observable<__StrictHttpResponse<CreateUserFeedbackResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/people/user/feedback`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateUserFeedbackResponse>;
      })
    );
  }
  /**
   * 创建用户反馈
   *
   * 创建用户反馈
   * @param params The `PeopleService.CreateUserFeedbackuserfeedbackPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  CreateUserFeedbackuserfeedbackPost(params: PeopleService.CreateUserFeedbackuserfeedbackPostParams): __Observable<CreateUserFeedbackResponse> {
    return this.CreateUserFeedbackuserfeedbackPostResponse(params).pipe(
      __map(_r => _r.body as CreateUserFeedbackResponse)
    );
  }

  /**
   * 批量显示当前用户的反馈
   *
   * 批量显示当前用户的反馈
   * @param params The `PeopleService.ShowUserFeedbacksuserfeedbacksshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：CreatedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowUserFeedbacksuserfeedbacksshowGetResponse(params: PeopleService.ShowUserFeedbacksuserfeedbacksshowGetParams): __Observable<__StrictHttpResponse<ShowUserFeedbacksResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/people/user/feedbacks/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowUserFeedbacksResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户的反馈
   *
   * 批量显示当前用户的反馈
   * @param params The `PeopleService.ShowUserFeedbacksuserfeedbacksshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：CreatedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowUserFeedbacksuserfeedbacksshowGet(params: PeopleService.ShowUserFeedbacksuserfeedbacksshowGetParams): __Observable<ShowUserFeedbacksResponse> {
    return this.ShowUserFeedbacksuserfeedbacksshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowUserFeedbacksResponse)
    );
  }

  /**
   * 批量显示当前用户的日志
   *
   * 批量显示当前用户的日志
   * @param params The `PeopleService.ShowUserLogsuserlogsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Action, CreatedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Action`: 操作
   *
   * @return Success
   */
  ShowUserLogsuserlogsshowGetResponse(params: PeopleService.ShowUserLogsuserlogsshowGetParams): __Observable<__StrictHttpResponse<ShowUserLogsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    if (params.Action != null) __params = __params.set('Action', params.Action.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/people/user/logs/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowUserLogsResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户的日志
   *
   * 批量显示当前用户的日志
   * @param params The `PeopleService.ShowUserLogsuserlogsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Action, CreatedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Action`: 操作
   *
   * @return Success
   */
  ShowUserLogsuserlogsshowGet(params: PeopleService.ShowUserLogsuserlogsshowGetParams): __Observable<ShowUserLogsResponse> {
    return this.ShowUserLogsuserlogsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowUserLogsResponse)
    );
  }

  /**
   * 获取用户
   *
   * 获取用户
   * @param params The `PeopleService.TakeUseruserGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserId`: 用户编号
   *
   * @return Success
   */
  TakeUseruserGetResponse(params: PeopleService.TakeUseruserGetParams): __Observable<__StrictHttpResponse<TakeUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.UserId != null) __params = __params.set('UserId', params.UserId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/people/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TakeUserResponse>;
      })
    );
  }
  /**
   * 获取用户
   *
   * 获取用户
   * @param params The `PeopleService.TakeUseruserGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserId`: 用户编号
   *
   * @return Success
   */
  TakeUseruserGet(params: PeopleService.TakeUseruserGetParams): __Observable<TakeUserResponse> {
    return this.TakeUseruserGetResponse(params).pipe(
      __map(_r => _r.body as TakeUserResponse)
    );
  }
}

module PeopleService {

  /**
   * Parameters for ReplyUserFeedbackuserfeedbackCreate
   */
  export interface ReplyUserFeedbackuserfeedbackCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ReplyUserFeedback;

    /**
     * 反馈编号
     */
    FeedbackId?: string;

    /**
     * 描述
     */
    Description?: string;
  }

  /**
   * Parameters for CreateUserFeedbackuserfeedbackPost
   */
  export interface CreateUserFeedbackuserfeedbackPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateUserFeedback;

    /**
     * 描述
     */
    Description?: string;
  }

  /**
   * Parameters for ShowUserFeedbacksuserfeedbacksshowGet
   */
  export interface ShowUserFeedbacksuserfeedbacksshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：CreatedDate
     */
    OrderBy?: string;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowUserLogsuserlogsshowGet
   */
  export interface ShowUserLogsuserlogsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：Action, CreatedDate
     */
    OrderBy?: string;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;

    /**
     * 操作
     */
    Action?: number;
  }

  /**
   * Parameters for TakeUseruserGet
   */
  export interface TakeUseruserGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户编号
     */
    UserId?: string;
  }
}

export { PeopleService }
