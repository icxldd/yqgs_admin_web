/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuditItemResponse } from '../models/audit-item-response';
import { AuditItem } from '../models/audit-item';
import { Object } from '../models/object';
@Injectable({
  providedIn: 'root',
})
class AdminService extends __BaseService {
  static readonly AuditItemitemauditCreatePath = '/admin/item/audit';
  static readonly ViewManagerAbuseReportListabusereportlistviewGetPath = '/admin/abusereportlist/view';
  static readonly ViewManagerAbuseReportabusereportviewGetPath = '/admin/abusereport/view';
  static readonly ViewManagerAuditListauditlistviewGetPath = '/admin/auditlist/view';
  static readonly ViewManagerAuditauditviewGetPath = '/admin/audit/view';
  static readonly ViewManagerBlockedAuditListblockedauditlistviewGetPath = '/admin/blockedauditlist/view';
  static readonly ViewManagerChargeListchargelistviewGetPath = '/admin/chargelist/view';
  static readonly ViewManagerConsumeListconsumelistviewGetPath = '/admin/consumelist/view';
  static readonly ViewManagerFeedbackListfeedbacklistviewGetPath = '/admin/feedbacklist/view';
  static readonly ViewManagerFeedbackfeedbackviewGetPath = '/admin/feedback/view';
  static readonly ViewManagerGuildListguildlistviewGetPath = '/admin/guildlist/view';
  static readonly ViewManagerGuildViolationListguildviolationlistviewGetPath = '/admin/guildviolationlist/view';
  static readonly ViewManagerHomehomeviewGetPath = '/admin/home/view';
  static readonly ViewManagerLoginloginviewGetPath = '/admin/login/view';
  static readonly ViewManagerTotalAmountListtotalamountlistviewGetPath = '/admin/totalamountlist/view';
  static readonly ViewManagerUserListuserlistviewGetPath = '/admin/userlist/view';
  static readonly ViewManagerUserViolationListuserviolationlistviewGetPath = '/admin/userviolationlist/view';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 审核对象
   *
   * 审核对象
   * @param params The `AdminService.AuditItemitemauditCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Result`: 审核结果
   *
   * - `ItemId`: 对象编号
   *
   * @return Success
   */
  AuditItemitemauditCreateResponse(params: AdminService.AuditItemitemauditCreateParams): __Observable<__StrictHttpResponse<AuditItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Result != null) { __formData.append('Result', params.Result as string | Blob);}
    if (params.ItemId != null) { __formData.append('ItemId', params.ItemId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/item/audit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuditItemResponse>;
      })
    );
  }
  /**
   * 审核对象
   *
   * 审核对象
   * @param params The `AdminService.AuditItemitemauditCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Result`: 审核结果
   *
   * - `ItemId`: 对象编号
   *
   * @return Success
   */
  AuditItemitemauditCreate(params: AdminService.AuditItemitemauditCreateParams): __Observable<AuditItemResponse> {
    return this.AuditItemitemauditCreateResponse(params).pipe(
      __map(_r => _r.body as AuditItemResponse)
    );
  }

  /**
   * 查看举报列表页
   *
   * 查看举报列表页
   * @param params The `AdminService.ViewManagerAbuseReportListabusereportlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `page`: 页数
   *
   * - `owner`: 所有者编号
   *
   * - `item`: 对象编号
   *
   * - `category`: 分类
   *
   * @return Success
   */
  ViewManagerAbuseReportListabusereportlistviewGetResponse(params: AdminService.ViewManagerAbuseReportListabusereportlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.owner != null) __params = __params.set('owner', params.owner.toString());
    if (params.item != null) __params = __params.set('item', params.item.toString());
    if (params.category != null) __params = __params.set('category', params.category.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/abusereportlist/view`,
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
   * 查看举报列表页
   *
   * 查看举报列表页
   * @param params The `AdminService.ViewManagerAbuseReportListabusereportlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `page`: 页数
   *
   * - `owner`: 所有者编号
   *
   * - `item`: 对象编号
   *
   * - `category`: 分类
   *
   * @return Success
   */
  ViewManagerAbuseReportListabusereportlistviewGet(params: AdminService.ViewManagerAbuseReportListabusereportlistviewGetParams): __Observable<Object> {
    return this.ViewManagerAbuseReportListabusereportlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看举报页
   *
   * 查看举报页
   * @param params The `AdminService.ViewManagerAbuseReportabusereportviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `report`: 举报编号
   *
   * @return Success
   */
  ViewManagerAbuseReportabusereportviewGetResponse(params: AdminService.ViewManagerAbuseReportabusereportviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.report != null) __params = __params.set('report', params.report.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/abusereport/view`,
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
   * 查看举报页
   *
   * 查看举报页
   * @param params The `AdminService.ViewManagerAbuseReportabusereportviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `report`: 举报编号
   *
   * @return Success
   */
  ViewManagerAbuseReportabusereportviewGet(params: AdminService.ViewManagerAbuseReportabusereportviewGetParams): __Observable<Object> {
    return this.ViewManagerAbuseReportabusereportviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看可审核对象列表页
   *
   * 查看可审核对象列表页
   * @param params The `AdminService.ViewManagerAuditListauditlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `status`: 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * - `audited`: 是否已审核
   *
   * @return Success
   */
  ViewManagerAuditListauditlistviewGetResponse(params: AdminService.ViewManagerAuditListauditlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.user != null) __params = __params.set('user', params.user.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    if (params.audited != null) __params = __params.set('audited', params.audited.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/auditlist/view`,
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
   * 查看可审核对象列表页
   *
   * 查看可审核对象列表页
   * @param params The `AdminService.ViewManagerAuditListauditlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `status`: 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * - `audited`: 是否已审核
   *
   * @return Success
   */
  ViewManagerAuditListauditlistviewGet(params: AdminService.ViewManagerAuditListauditlistviewGetParams): __Observable<Object> {
    return this.ViewManagerAuditListauditlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看可审核对象页
   *
   * 查看可审核对象页
   * @param params The `AdminService.ViewManagerAuditauditviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `item`: 对象编号
   *
   * @return Success
   */
  ViewManagerAuditauditviewGetResponse(params: AdminService.ViewManagerAuditauditviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.item != null) __params = __params.set('item', params.item.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/audit/view`,
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
   * 查看可审核对象页
   *
   * 查看可审核对象页
   * @param params The `AdminService.ViewManagerAuditauditviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `item`: 对象编号
   *
   * @return Success
   */
  ViewManagerAuditauditviewGet(params: AdminService.ViewManagerAuditauditviewGetParams): __Observable<Object> {
    return this.ViewManagerAuditauditviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看被屏蔽可审核对象列表页
   *
   * 查看被屏蔽可审核对象列表页
   * @param params The `AdminService.ViewManagerBlockedAuditListblockedauditlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `status`: 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerBlockedAuditListblockedauditlistviewGetResponse(params: AdminService.ViewManagerBlockedAuditListblockedauditlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.user != null) __params = __params.set('user', params.user.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/blockedauditlist/view`,
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
   * 查看被屏蔽可审核对象列表页
   *
   * 查看被屏蔽可审核对象列表页
   * @param params The `AdminService.ViewManagerBlockedAuditListblockedauditlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `status`: 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerBlockedAuditListblockedauditlistviewGet(params: AdminService.ViewManagerBlockedAuditListblockedauditlistviewGetParams): __Observable<Object> {
    return this.ViewManagerBlockedAuditListblockedauditlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看教会充值列表页
   *
   * 查看教会充值列表页
   * @param params The `AdminService.ViewManagerChargeListchargelistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerChargeListchargelistviewGetResponse(params: AdminService.ViewManagerChargeListchargelistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/chargelist/view`,
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
   * 查看教会充值列表页
   *
   * 查看教会充值列表页
   * @param params The `AdminService.ViewManagerChargeListchargelistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerChargeListchargelistviewGet(params: AdminService.ViewManagerChargeListchargelistviewGetParams): __Observable<Object> {
    return this.ViewManagerChargeListchargelistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看教会消费列表页
   *
   * 查看教会消费列表页
   * @param params The `AdminService.ViewManagerConsumeListconsumelistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerConsumeListconsumelistviewGetResponse(params: AdminService.ViewManagerConsumeListconsumelistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/consumelist/view`,
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
   * 查看教会消费列表页
   *
   * 查看教会消费列表页
   * @param params The `AdminService.ViewManagerConsumeListconsumelistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerConsumeListconsumelistviewGet(params: AdminService.ViewManagerConsumeListconsumelistviewGetParams): __Observable<Object> {
    return this.ViewManagerConsumeListconsumelistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看反馈列表页
   *
   * 查看反馈列表页
   * @param params The `AdminService.ViewManagerFeedbackListfeedbacklistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `replied`: 是否已回复
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerFeedbackListfeedbacklistviewGetResponse(params: AdminService.ViewManagerFeedbackListfeedbacklistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.user != null) __params = __params.set('user', params.user.toString());
    if (params.replied != null) __params = __params.set('replied', params.replied.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/feedbacklist/view`,
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
   * 查看反馈列表页
   *
   * 查看反馈列表页
   * @param params The `AdminService.ViewManagerFeedbackListfeedbacklistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `replied`: 是否已回复
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerFeedbackListfeedbacklistviewGet(params: AdminService.ViewManagerFeedbackListfeedbacklistviewGetParams): __Observable<Object> {
    return this.ViewManagerFeedbackListfeedbacklistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看反馈页
   *
   * 查看反馈页
   * @param params The `AdminService.ViewManagerFeedbackfeedbackviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `feedback`: 反馈编号
   *
   * @return Success
   */
  ViewManagerFeedbackfeedbackviewGetResponse(params: AdminService.ViewManagerFeedbackfeedbackviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.feedback != null) __params = __params.set('feedback', params.feedback.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/feedback/view`,
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
   * 查看反馈页
   *
   * 查看反馈页
   * @param params The `AdminService.ViewManagerFeedbackfeedbackviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `feedback`: 反馈编号
   *
   * @return Success
   */
  ViewManagerFeedbackfeedbackviewGet(params: AdminService.ViewManagerFeedbackfeedbackviewGetParams): __Observable<Object> {
    return this.ViewManagerFeedbackfeedbackviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看教会违规列表页
   *
   * 查看教会违规列表页
   * @param params The `AdminService.ViewManagerGuildListguildlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `violations`: 违规次数
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerGuildListguildlistviewGetResponse(params: AdminService.ViewManagerGuildListguildlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.violations != null) __params = __params.set('violations', params.violations.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/guildlist/view`,
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
   * 查看教会违规列表页
   *
   * 查看教会违规列表页
   * @param params The `AdminService.ViewManagerGuildListguildlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `violations`: 违规次数
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerGuildListguildlistviewGet(params: AdminService.ViewManagerGuildListguildlistviewGetParams): __Observable<Object> {
    return this.ViewManagerGuildListguildlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看教会违规列表页
   *
   * 查看教会违规列表页
   * @param params The `AdminService.ViewManagerGuildViolationListguildviolationlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerGuildViolationListguildviolationlistviewGetResponse(params: AdminService.ViewManagerGuildViolationListguildviolationlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.guild != null) __params = __params.set('guild', params.guild.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/guildviolationlist/view`,
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
   * 查看教会违规列表页
   *
   * 查看教会违规列表页
   * @param params The `AdminService.ViewManagerGuildViolationListguildviolationlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `page`: 页数
   *
   * - `guild`: 教会编号
   *
   * @return Success
   */
  ViewManagerGuildViolationListguildviolationlistviewGet(params: AdminService.ViewManagerGuildViolationListguildviolationlistviewGetParams): __Observable<Object> {
    return this.ViewManagerGuildViolationListguildviolationlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看管理后台主页
   *
   * 查看管理后台主页
   * @param Accept Accept Header
   * @return Success
   */
  ViewManagerHomehomeviewGetResponse(Accept: 'application/json'): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Accept != null) __headers = __headers.set('Accept', Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/home/view`,
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
   * 查看管理后台主页
   *
   * 查看管理后台主页
   * @param Accept Accept Header
   * @return Success
   */
  ViewManagerHomehomeviewGet(Accept: 'application/json'): __Observable<Object> {
    return this.ViewManagerHomehomeviewGetResponse(Accept).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看管理后台登录页
   *
   * 查看管理后台登录页
   * @param Accept Accept Header
   * @return Success
   */
  ViewManagerLoginloginviewGetResponse(Accept: 'application/json'): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Accept != null) __headers = __headers.set('Accept', Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/login/view`,
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
   * 查看管理后台登录页
   *
   * 查看管理后台登录页
   * @param Accept Accept Header
   * @return Success
   */
  ViewManagerLoginloginviewGet(Accept: 'application/json'): __Observable<Object> {
    return this.ViewManagerLoginloginviewGetResponse(Accept).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看教会总数量列表页
   *
   * 查看教会总数量列表页
   * @param params The `AdminService.ViewManagerTotalAmountListtotalamountlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerTotalAmountListtotalamountlistviewGetResponse(params: AdminService.ViewManagerTotalAmountListtotalamountlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/totalamountlist/view`,
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
   * 查看教会总数量列表页
   *
   * 查看教会总数量列表页
   * @param params The `AdminService.ViewManagerTotalAmountListtotalamountlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerTotalAmountListtotalamountlistviewGet(params: AdminService.ViewManagerTotalAmountListtotalamountlistviewGetParams): __Observable<Object> {
    return this.ViewManagerTotalAmountListtotalamountlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看用户违规列表页
   *
   * 查看用户违规列表页
   * @param params The `AdminService.ViewManagerUserListuserlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `violations`: 违规次数
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerUserListuserlistviewGetResponse(params: AdminService.ViewManagerUserListuserlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.violations != null) __params = __params.set('violations', params.violations.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/userlist/view`,
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
   * 查看用户违规列表页
   *
   * 查看用户违规列表页
   * @param params The `AdminService.ViewManagerUserListuserlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `violations`: 违规次数
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerUserListuserlistviewGet(params: AdminService.ViewManagerUserListuserlistviewGetParams): __Observable<Object> {
    return this.ViewManagerUserListuserlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 查看用户违规列表页
   *
   * 查看用户违规列表页
   * @param params The `AdminService.ViewManagerUserViolationListuserviolationlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerUserViolationListuserviolationlistviewGetResponse(params: AdminService.ViewManagerUserViolationListuserviolationlistviewGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.user != null) __params = __params.set('user', params.user.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/userviolationlist/view`,
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
   * 查看用户违规列表页
   *
   * 查看用户违规列表页
   * @param params The `AdminService.ViewManagerUserViolationListuserviolationlistviewGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `user`: 用户编号
   *
   * - `type`: 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
   *
   * - `page`: 页数
   *
   * @return Success
   */
  ViewManagerUserViolationListuserviolationlistviewGet(params: AdminService.ViewManagerUserViolationListuserviolationlistviewGetParams): __Observable<Object> {
    return this.ViewManagerUserViolationListuserviolationlistviewGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }
}

module AdminService {

  /**
   * Parameters for AuditItemitemauditCreate
   */
  export interface AuditItemitemauditCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: AuditItem;

    /**
     * 审核结果
     */
    Result?: string;

    /**
     * 对象编号
     */
    ItemId?: string;
  }

  /**
   * Parameters for ViewManagerAbuseReportListabusereportlistviewGet
   */
  export interface ViewManagerAbuseReportListabusereportlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 页数
     */
    page?: number;

    /**
     * 所有者编号
     */
    owner?: string;

    /**
     * 对象编号
     */
    item?: string;

    /**
     * 分类
     */
    category?: string;
  }

  /**
   * Parameters for ViewManagerAbuseReportabusereportviewGet
   */
  export interface ViewManagerAbuseReportabusereportviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 举报编号
     */
    report?: string;
  }

  /**
   * Parameters for ViewManagerAuditListauditlistviewGet
   */
  export interface ViewManagerAuditListauditlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户编号
     */
    user?: string;

    /**
     * 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     */
    type?: number;

    /**
     * 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
     */
    status?: number;

    /**
     * 页数
     */
    page?: number;

    /**
     * 教会编号
     */
    guild?: string;

    /**
     * 是否已审核
     */
    audited?: boolean;
  }

  /**
   * Parameters for ViewManagerAuditauditviewGet
   */
  export interface ViewManagerAuditauditviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 对象编号
     */
    item?: string;
  }

  /**
   * Parameters for ViewManagerBlockedAuditListblockedauditlistviewGet
   */
  export interface ViewManagerBlockedAuditListblockedauditlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户编号
     */
    user?: string;

    /**
     * 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     */
    type?: number;

    /**
     * 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
     */
    status?: number;

    /**
     * 页数
     */
    page?: number;

    /**
     * 教会编号
     */
    guild?: string;
  }

  /**
   * Parameters for ViewManagerChargeListchargelistviewGet
   */
  export interface ViewManagerChargeListchargelistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     */
    type?: number;

    /**
     * 页数
     */
    page?: number;

    /**
     * 教会编号
     */
    guild?: string;
  }

  /**
   * Parameters for ViewManagerConsumeListconsumelistviewGet
   */
  export interface ViewManagerConsumeListconsumelistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     */
    type?: number;

    /**
     * 页数
     */
    page?: number;

    /**
     * 教会编号
     */
    guild?: string;
  }

  /**
   * Parameters for ViewManagerFeedbackListfeedbacklistviewGet
   */
  export interface ViewManagerFeedbackListfeedbacklistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户编号
     */
    user?: string;

    /**
     * 是否已回复
     */
    replied?: boolean;

    /**
     * 页数
     */
    page?: number;
  }

  /**
   * Parameters for ViewManagerFeedbackfeedbackviewGet
   */
  export interface ViewManagerFeedbackfeedbackviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 反馈编号
     */
    feedback?: string;
  }

  /**
   * Parameters for ViewManagerGuildListguildlistviewGet
   */
  export interface ViewManagerGuildListguildlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 违规次数
     */
    violations?: number;

    /**
     * 页数
     */
    page?: number;
  }

  /**
   * Parameters for ViewManagerGuildViolationListguildviolationlistviewGet
   */
  export interface ViewManagerGuildViolationListguildviolationlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     */
    type?: number;

    /**
     * 页数
     */
    page?: number;

    /**
     * 教会编号
     */
    guild?: string;
  }

  /**
   * Parameters for ViewManagerTotalAmountListtotalamountlistviewGet
   */
  export interface ViewManagerTotalAmountListtotalamountlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 页数
     */
    page?: number;
  }

  /**
   * Parameters for ViewManagerUserListuserlistviewGet
   */
  export interface ViewManagerUserListuserlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 违规次数
     */
    violations?: number;

    /**
     * 页数
     */
    page?: number;
  }

  /**
   * Parameters for ViewManagerUserViolationListuserviolationlistviewGet
   */
  export interface ViewManagerUserViolationListuserviolationlistviewGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户编号
     */
    user?: string;

    /**
     * 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     */
    type?: number;

    /**
     * 页数
     */
    page?: number;
  }
}

export { AdminService }
