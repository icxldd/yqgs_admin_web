/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PutAuditItemAdminResponse } from '../models/put-audit-item-admin-response';
import { PutAuditItemAdmin } from '../models/put-audit-item-admin';
import { ShowAbuseReportAuditAdminResponse } from '../models/show-abuse-report-audit-admin-response';
import { ShowAccountAdminResponse } from '../models/show-account-admin-response';
import { ShowDiscussAdminResponse } from '../models/show-discuss-admin-response';
import { ShowGuildDetailAdminResponse } from '../models/show-guild-detail-admin-response';
import { ShowGuildMemberAdminResponse } from '../models/show-guild-member-admin-response';
import { ShowGuildsAdminResponse } from '../models/show-guilds-admin-response';
import { ShowIdeaFeedbackAdminResponse } from '../models/show-idea-feedback-admin-response';
import { ShowLivecastsAdminResponse } from '../models/show-livecasts-admin-response';
import { ShowManualAuditAdminResponse } from '../models/show-manual-audit-admin-response';
import { ShowNotificationsAdminResponse } from '../models/show-notifications-admin-response';
import { ShowSystemAdminResponse } from '../models/show-system-admin-response';
import { ShowUserAuthViolationAdminResponse } from '../models/show-user-auth-violation-admin-response';
import { ChangeBlocStatusAdminResponse } from '../models/change-bloc-status-admin-response';
import { ChangeBlocStatusAdmin } from '../models/change-bloc-status-admin';
import { Object } from '../models/object';
import { ShowExportGuildContactAdmin } from '../models/show-export-guild-contact-admin';
import { ShowAccountDetailAdminResponse } from '../models/show-account-detail-admin-response';
import { ShowGuildLivecastFluxAdminResponse } from '../models/show-guild-livecast-flux-admin-response';
import { ShowGuildLivecastFluxDetailAdminResponse } from '../models/show-guild-livecast-flux-detail-admin-response';
import { ShowGuildsLazyAdminResponse } from '../models/show-guilds-lazy-admin-response';
import { ShowLivecastsLazyAdminResponse } from '../models/show-livecasts-lazy-admin-response';
import { ShowSystemDetailAdminResponse } from '../models/show-system-detail-admin-response';
import { ShowGuildBlocDetailAdminResponse } from '../models/show-guild-bloc-detail-admin-response';
@Injectable({
  providedIn: 'root',
})
class SpaadminService extends __BaseService {
  static readonly PutAuditItemAdminblocauditCreatePath = '/spaadmin/bloc/audit';
  static readonly ShowAbuseReportAuditAdminabuseReportAuditshowGetPath = '/spaadmin/abuse-report-audit/show';
  static readonly ShowAccountAdminaccountsshowGetPath = '/spaadmin/accounts/show';
  static readonly ShowDiscussAdmindiscussshowGetPath = '/spaadmin/discuss/show';
  static readonly ShowGuildDetailAdminguildshowGetPath = '/spaadmin/guild/show';
  static readonly ShowGuildMemberAdminguildmembershowGetPath = '/spaadmin/guildmember/show';
  static readonly ShowGuildsAdminguildsshowGetPath = '/spaadmin/guilds/show';
  static readonly ShowIdeaFeedbackAdminideaFeedbackshowGetPath = '/spaadmin/idea-feedback/show';
  static readonly ShowLivecastsAdminlivecastsshowGetPath = '/spaadmin/livecasts/show';
  static readonly ShowManualAuditAdminmanualAuditshowGetPath = '/spaadmin/manual-audit/show';
  static readonly ShowNotificationsAdminnotificationsshowGetPath = '/spaadmin/notifications/show';
  static readonly ShowSystemAdminsystemshowGetPath = '/spaadmin/system/show';
  static readonly ShowUserAuthViolationAdminaccountviolationGetPath = '/spaadmin/account/violation';
  static readonly ChangeBlocStatusAdminblocstatusCreatePath = '/spaadmin/bloc/status';
  static readonly ShowExportGuildContactAdminexportguildcontactPostPath = '/spaadmin/export/guildcontact';
  static readonly ShowAccountDetailAdminaccountdetailshowGetPath = '/spaadmin/account/detail/show';
  static readonly ShowGuildLivecastFluxAdminguildlivecastFluxshowGetPath = '/spaadmin/guild/livecastFlux/show';
  static readonly ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetPath = '/spaadmin/guild/livecastFluxDetail/show';
  static readonly ShowGuildsLazyAdminguildslazyshowGetPath = '/spaadmin/guilds/lazy/show';
  static readonly ShowLivecastsLazyAdminlivecastslazyshowGetPath = '/spaadmin/livecasts/lazy/show';
  static readonly ShowSystemDetailAdminsystemdetailshowGetPath = '/spaadmin/system/detail/show';
  static readonly ShowGuildBlocDetailAdminguildblocdetailshowGetPath = '/spaadmin/guild/bloc/detail/show';

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
   * @param params The `SpaadminService.PutAuditItemAdminblocauditCreateParams` containing the following parameters:
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
  PutAuditItemAdminblocauditCreateResponse(params: SpaadminService.PutAuditItemAdminblocauditCreateParams): __Observable<__StrictHttpResponse<PutAuditItemAdminResponse>> {
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
      this.rootUrl + `/spaadmin/bloc/audit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PutAuditItemAdminResponse>;
      })
    );
  }
  /**
   * 审核对象
   *
   * 审核对象
   * @param params The `SpaadminService.PutAuditItemAdminblocauditCreateParams` containing the following parameters:
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
  PutAuditItemAdminblocauditCreate(params: SpaadminService.PutAuditItemAdminblocauditCreateParams): __Observable<PutAuditItemAdminResponse> {
    return this.PutAuditItemAdminblocauditCreateResponse(params).pipe(
      __map(_r => _r.body as PutAuditItemAdminResponse)
    );
  }

  /**
   * 显示举报审核列表
   *
   * 显示举报审核列表
   * @param params The `SpaadminService.ShowAbuseReportAuditAdminabuseReportAuditshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowAbuseReportAuditAdminabuseReportAuditshowGetResponse(params: SpaadminService.ShowAbuseReportAuditAdminabuseReportAuditshowGetParams): __Observable<__StrictHttpResponse<ShowAbuseReportAuditAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/abuse-report-audit/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowAbuseReportAuditAdminResponse>;
      })
    );
  }
  /**
   * 显示举报审核列表
   *
   * 显示举报审核列表
   * @param params The `SpaadminService.ShowAbuseReportAuditAdminabuseReportAuditshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowAbuseReportAuditAdminabuseReportAuditshowGet(params: SpaadminService.ShowAbuseReportAuditAdminabuseReportAuditshowGetParams): __Observable<ShowAbuseReportAuditAdminResponse> {
    return this.ShowAbuseReportAuditAdminabuseReportAuditshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowAbuseReportAuditAdminResponse)
    );
  }

  /**
   * 显示用戶
   *
   * 显示用戶
   * @param params The `SpaadminService.ShowAccountAdminaccountsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowAccountAdminaccountsshowGetResponse(params: SpaadminService.ShowAccountAdminaccountsshowGetParams): __Observable<__StrictHttpResponse<ShowAccountAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/accounts/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowAccountAdminResponse>;
      })
    );
  }
  /**
   * 显示用戶
   *
   * 显示用戶
   * @param params The `SpaadminService.ShowAccountAdminaccountsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowAccountAdminaccountsshowGet(params: SpaadminService.ShowAccountAdminaccountsshowGetParams): __Observable<ShowAccountAdminResponse> {
    return this.ShowAccountAdminaccountsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowAccountAdminResponse)
    );
  }

  /**
   * 显示讨论
   *
   * 显示讨论
   * @param params The `SpaadminService.ShowDiscussAdmindiscussshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowDiscussAdmindiscussshowGetResponse(params: SpaadminService.ShowDiscussAdmindiscussshowGetParams): __Observable<__StrictHttpResponse<ShowDiscussAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/discuss/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowDiscussAdminResponse>;
      })
    );
  }
  /**
   * 显示讨论
   *
   * 显示讨论
   * @param params The `SpaadminService.ShowDiscussAdmindiscussshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowDiscussAdmindiscussshowGet(params: SpaadminService.ShowDiscussAdmindiscussshowGetParams): __Observable<ShowDiscussAdminResponse> {
    return this.ShowDiscussAdmindiscussshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowDiscussAdminResponse)
    );
  }

  /**
   * 显示教会详情的请求
   *
   * 显示教会详情的请求
   * @param params The `SpaadminService.ShowGuildDetailAdminguildshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildId`: 教会ID
   *
   * @return Success
   */
  ShowGuildDetailAdminguildshowGetResponse(params: SpaadminService.ShowGuildDetailAdminguildshowGetParams): __Observable<__StrictHttpResponse<ShowGuildDetailAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.guildId != null) __params = __params.set('guildId', params.guildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/guild/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildDetailAdminResponse>;
      })
    );
  }
  /**
   * 显示教会详情的请求
   *
   * 显示教会详情的请求
   * @param params The `SpaadminService.ShowGuildDetailAdminguildshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildId`: 教会ID
   *
   * @return Success
   */
  ShowGuildDetailAdminguildshowGet(params: SpaadminService.ShowGuildDetailAdminguildshowGetParams): __Observable<ShowGuildDetailAdminResponse> {
    return this.ShowGuildDetailAdminguildshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildDetailAdminResponse)
    );
  }

  /**
   * 显示教会成员
   *
   * 显示教会成员
   * @param params The `SpaadminService.ShowGuildMemberAdminguildmembershowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowGuildMemberAdminguildmembershowGetResponse(params: SpaadminService.ShowGuildMemberAdminguildmembershowGetParams): __Observable<__StrictHttpResponse<ShowGuildMemberAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/guildmember/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildMemberAdminResponse>;
      })
    );
  }
  /**
   * 显示教会成员
   *
   * 显示教会成员
   * @param params The `SpaadminService.ShowGuildMemberAdminguildmembershowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowGuildMemberAdminguildmembershowGet(params: SpaadminService.ShowGuildMemberAdminguildmembershowGetParams): __Observable<ShowGuildMemberAdminResponse> {
    return this.ShowGuildMemberAdminguildmembershowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildMemberAdminResponse)
    );
  }

  /**
   * 显示教会
   *
   * 显示教会
   * @param params The `SpaadminService.ShowGuildsAdminguildsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowGuildsAdminguildsshowGetResponse(params: SpaadminService.ShowGuildsAdminguildsshowGetParams): __Observable<__StrictHttpResponse<ShowGuildsAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/guilds/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildsAdminResponse>;
      })
    );
  }
  /**
   * 显示教会
   *
   * 显示教会
   * @param params The `SpaadminService.ShowGuildsAdminguildsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowGuildsAdminguildsshowGet(params: SpaadminService.ShowGuildsAdminguildsshowGetParams): __Observable<ShowGuildsAdminResponse> {
    return this.ShowGuildsAdminguildsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildsAdminResponse)
    );
  }

  /**
   * 显示意见反馈列表
   *
   * 显示意见反馈列表
   * @param params The `SpaadminService.ShowIdeaFeedbackAdminideaFeedbackshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowIdeaFeedbackAdminideaFeedbackshowGetResponse(params: SpaadminService.ShowIdeaFeedbackAdminideaFeedbackshowGetParams): __Observable<__StrictHttpResponse<ShowIdeaFeedbackAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/idea-feedback/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowIdeaFeedbackAdminResponse>;
      })
    );
  }
  /**
   * 显示意见反馈列表
   *
   * 显示意见反馈列表
   * @param params The `SpaadminService.ShowIdeaFeedbackAdminideaFeedbackshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowIdeaFeedbackAdminideaFeedbackshowGet(params: SpaadminService.ShowIdeaFeedbackAdminideaFeedbackshowGetParams): __Observable<ShowIdeaFeedbackAdminResponse> {
    return this.ShowIdeaFeedbackAdminideaFeedbackshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowIdeaFeedbackAdminResponse)
    );
  }

  /**
   * 显示直播
   *
   * 显示直播
   * @param params The `SpaadminService.ShowLivecastsAdminlivecastsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowLivecastsAdminlivecastsshowGetResponse(params: SpaadminService.ShowLivecastsAdminlivecastsshowGetParams): __Observable<__StrictHttpResponse<ShowLivecastsAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/livecasts/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowLivecastsAdminResponse>;
      })
    );
  }
  /**
   * 显示直播
   *
   * 显示直播
   * @param params The `SpaadminService.ShowLivecastsAdminlivecastsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowLivecastsAdminlivecastsshowGet(params: SpaadminService.ShowLivecastsAdminlivecastsshowGetParams): __Observable<ShowLivecastsAdminResponse> {
    return this.ShowLivecastsAdminlivecastsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowLivecastsAdminResponse)
    );
  }

  /**
   * 显示审核列表
   *
   * 显示审核列表
   * @param params The `SpaadminService.ShowManualAuditAdminmanualAuditshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowManualAuditAdminmanualAuditshowGetResponse(params: SpaadminService.ShowManualAuditAdminmanualAuditshowGetParams): __Observable<__StrictHttpResponse<ShowManualAuditAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/manual-audit/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowManualAuditAdminResponse>;
      })
    );
  }
  /**
   * 显示审核列表
   *
   * 显示审核列表
   * @param params The `SpaadminService.ShowManualAuditAdminmanualAuditshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowManualAuditAdminmanualAuditshowGet(params: SpaadminService.ShowManualAuditAdminmanualAuditshowGetParams): __Observable<ShowManualAuditAdminResponse> {
    return this.ShowManualAuditAdminmanualAuditshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowManualAuditAdminResponse)
    );
  }

  /**
   * 显示通知
   *
   * 显示通知
   * @param params The `SpaadminService.ShowNotificationsAdminnotificationsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowNotificationsAdminnotificationsshowGetResponse(params: SpaadminService.ShowNotificationsAdminnotificationsshowGetParams): __Observable<__StrictHttpResponse<ShowNotificationsAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.PageIndex != null) __params = __params.set('PageIndex', params.PageIndex.toString());
    if (params.PageCount != null) __params = __params.set('PageCount', params.PageCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/notifications/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowNotificationsAdminResponse>;
      })
    );
  }
  /**
   * 显示通知
   *
   * 显示通知
   * @param params The `SpaadminService.ShowNotificationsAdminnotificationsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `PageIndex`: 第几页
   *
   * - `PageCount`: 一页多少条
   *
   * @return Success
   */
  ShowNotificationsAdminnotificationsshowGet(params: SpaadminService.ShowNotificationsAdminnotificationsshowGetParams): __Observable<ShowNotificationsAdminResponse> {
    return this.ShowNotificationsAdminnotificationsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowNotificationsAdminResponse)
    );
  }

  /**
   * 显示系统详情的请求
   *
   * 显示系统详情的请求
   * @param Accept Accept Header
   * @return Success
   */
  ShowSystemAdminsystemshowGetResponse(Accept: 'application/json'): __Observable<__StrictHttpResponse<ShowSystemAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Accept != null) __headers = __headers.set('Accept', Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/system/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowSystemAdminResponse>;
      })
    );
  }
  /**
   * 显示系统详情的请求
   *
   * 显示系统详情的请求
   * @param Accept Accept Header
   * @return Success
   */
  ShowSystemAdminsystemshowGet(Accept: 'application/json'): __Observable<ShowSystemAdminResponse> {
    return this.ShowSystemAdminsystemshowGetResponse(Accept).pipe(
      __map(_r => _r.body as ShowSystemAdminResponse)
    );
  }

  /**
   * 显示用户违规记录
   *
   * 显示用户违规记录
   * @param params The `SpaadminService.ShowUserAuthViolationAdminaccountviolationGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `userId`: userid
   *
   * @return Success
   */
  ShowUserAuthViolationAdminaccountviolationGetResponse(params: SpaadminService.ShowUserAuthViolationAdminaccountviolationGetParams): __Observable<__StrictHttpResponse<ShowUserAuthViolationAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.userId != null) __params = __params.set('userId', params.userId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/account/violation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowUserAuthViolationAdminResponse>;
      })
    );
  }
  /**
   * 显示用户违规记录
   *
   * 显示用户违规记录
   * @param params The `SpaadminService.ShowUserAuthViolationAdminaccountviolationGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `userId`: userid
   *
   * @return Success
   */
  ShowUserAuthViolationAdminaccountviolationGet(params: SpaadminService.ShowUserAuthViolationAdminaccountviolationGetParams): __Observable<ShowUserAuthViolationAdminResponse> {
    return this.ShowUserAuthViolationAdminaccountviolationGetResponse(params).pipe(
      __map(_r => _r.body as ShowUserAuthViolationAdminResponse)
    );
  }

  /**
   * 更改业务状态
   *
   * 更改业务状态
   * @param params The `SpaadminService.ChangeBlocStatusAdminblocstatusCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `identificationId`: 标识ID
   *
   * - `body`:
   *
   * - `blocValue`: true:正常；false：删除
   *
   * - `blocType`: 类型0：通知；1：直播；2：讨论；3：教会；
   *
   * @return Success
   */
  ChangeBlocStatusAdminblocstatusCreateResponse(params: SpaadminService.ChangeBlocStatusAdminblocstatusCreateParams): __Observable<__StrictHttpResponse<ChangeBlocStatusAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.identificationId != null) { __formData.append('identificationId', params.identificationId as string | Blob);}
    __body = params.body;
    if (params.blocValue != null) { __formData.append('blocValue', JSON.stringify(params.blocValue));}
    if (params.blocType != null) { __formData.append('blocType', JSON.stringify(params.blocType));}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/spaadmin/bloc/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeBlocStatusAdminResponse>;
      })
    );
  }
  /**
   * 更改业务状态
   *
   * 更改业务状态
   * @param params The `SpaadminService.ChangeBlocStatusAdminblocstatusCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `identificationId`: 标识ID
   *
   * - `body`:
   *
   * - `blocValue`: true:正常；false：删除
   *
   * - `blocType`: 类型0：通知；1：直播；2：讨论；3：教会；
   *
   * @return Success
   */
  ChangeBlocStatusAdminblocstatusCreate(params: SpaadminService.ChangeBlocStatusAdminblocstatusCreateParams): __Observable<ChangeBlocStatusAdminResponse> {
    return this.ChangeBlocStatusAdminblocstatusCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeBlocStatusAdminResponse)
    );
  }

  /**
   * 导出教会联系人
   *
   * 导出教会联系人
   * @param params The `SpaadminService.ShowExportGuildContactAdminexportguildcontactPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildIds`: 教会ids
   *
   * - `body`:
   *
   * @return Success
   */
  ShowExportGuildContactAdminexportguildcontactPostResponse(params: SpaadminService.ShowExportGuildContactAdminexportguildcontactPostParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    (params.guildIds || []).forEach(val => {if (val != null) __formData.append('guildIds', val as string | Blob)});
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/spaadmin/export/guildcontact`,
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
   * 导出教会联系人
   *
   * 导出教会联系人
   * @param params The `SpaadminService.ShowExportGuildContactAdminexportguildcontactPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildIds`: 教会ids
   *
   * - `body`:
   *
   * @return Success
   */
  ShowExportGuildContactAdminexportguildcontactPost(params: SpaadminService.ShowExportGuildContactAdminexportguildcontactPostParams): __Observable<Object> {
    return this.ShowExportGuildContactAdminexportguildcontactPostResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 显示用戶detail
   *
   * 显示用戶detail
   * @param params The `SpaadminService.ShowAccountDetailAdminaccountdetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `userAuthId`: userAuthId
   *
   * - `searchType`: searchType
   *
   * @return Success
   */
  ShowAccountDetailAdminaccountdetailshowGetResponse(params: SpaadminService.ShowAccountDetailAdminaccountdetailshowGetParams): __Observable<__StrictHttpResponse<ShowAccountDetailAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.userAuthId != null) __params = __params.set('userAuthId', params.userAuthId.toString());
    if (params.searchType != null) __params = __params.set('searchType', params.searchType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/account/detail/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowAccountDetailAdminResponse>;
      })
    );
  }
  /**
   * 显示用戶detail
   *
   * 显示用戶detail
   * @param params The `SpaadminService.ShowAccountDetailAdminaccountdetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `userAuthId`: userAuthId
   *
   * - `searchType`: searchType
   *
   * @return Success
   */
  ShowAccountDetailAdminaccountdetailshowGet(params: SpaadminService.ShowAccountDetailAdminaccountdetailshowGetParams): __Observable<ShowAccountDetailAdminResponse> {
    return this.ShowAccountDetailAdminaccountdetailshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowAccountDetailAdminResponse)
    );
  }

  /**
   * 显示教会流量详情的请求
   *
   * 显示教会流量详情的请求
   * @param params The `SpaadminService.ShowGuildLivecastFluxAdminguildlivecastFluxshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildId`: 教会ID
   *
   * @return Success
   */
  ShowGuildLivecastFluxAdminguildlivecastFluxshowGetResponse(params: SpaadminService.ShowGuildLivecastFluxAdminguildlivecastFluxshowGetParams): __Observable<__StrictHttpResponse<ShowGuildLivecastFluxAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.guildId != null) __params = __params.set('guildId', params.guildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/guild/livecastFlux/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildLivecastFluxAdminResponse>;
      })
    );
  }
  /**
   * 显示教会流量详情的请求
   *
   * 显示教会流量详情的请求
   * @param params The `SpaadminService.ShowGuildLivecastFluxAdminguildlivecastFluxshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildId`: 教会ID
   *
   * @return Success
   */
  ShowGuildLivecastFluxAdminguildlivecastFluxshowGet(params: SpaadminService.ShowGuildLivecastFluxAdminguildlivecastFluxshowGetParams): __Observable<ShowGuildLivecastFluxAdminResponse> {
    return this.ShowGuildLivecastFluxAdminguildlivecastFluxshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildLivecastFluxAdminResponse)
    );
  }

  /**
   * 显示教会流量详情的请求
   *
   * 显示教会流量详情的请求
   * @param params The `SpaadminService.ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `showFluxType`: 1:充值；2：消费；
   *
   * - `guildId`: 教会ID
   *
   * @return Success
   */
  ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetResponse(params: SpaadminService.ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetParams): __Observable<__StrictHttpResponse<ShowGuildLivecastFluxDetailAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.showFluxType != null) __params = __params.set('showFluxType', params.showFluxType.toString());
    if (params.guildId != null) __params = __params.set('guildId', params.guildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/guild/livecastFluxDetail/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildLivecastFluxDetailAdminResponse>;
      })
    );
  }
  /**
   * 显示教会流量详情的请求
   *
   * 显示教会流量详情的请求
   * @param params The `SpaadminService.ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `showFluxType`: 1:充值；2：消费；
   *
   * - `guildId`: 教会ID
   *
   * @return Success
   */
  ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGet(params: SpaadminService.ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetParams): __Observable<ShowGuildLivecastFluxDetailAdminResponse> {
    return this.ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildLivecastFluxDetailAdminResponse)
    );
  }

  /**
   * 显示教会的请求
   *
   * 显示教会的请求
   * @param params The `SpaadminService.ShowGuildsLazyAdminguildslazyshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `sortOrder`: 排序方式
   *
   * - `sortField`: 排序字段
   *
   * - `rows`: 一页多少条
   *
   * - `first`: 跳过多少条
   *
   * - `data`: 搜索值
   *
   * @return Success
   */
  ShowGuildsLazyAdminguildslazyshowGetResponse(params: SpaadminService.ShowGuildsLazyAdminguildslazyshowGetParams): __Observable<__StrictHttpResponse<ShowGuildsLazyAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.sortOrder != null) __params = __params.set('sortOrder', params.sortOrder.toString());
    if (params.sortField != null) __params = __params.set('sortField', params.sortField.toString());
    if (params.rows != null) __params = __params.set('rows', params.rows.toString());
    if (params.first != null) __params = __params.set('first', params.first.toString());
    if (params.data != null) __params = __params.set('data', params.data.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/guilds/lazy/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildsLazyAdminResponse>;
      })
    );
  }
  /**
   * 显示教会的请求
   *
   * 显示教会的请求
   * @param params The `SpaadminService.ShowGuildsLazyAdminguildslazyshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `sortOrder`: 排序方式
   *
   * - `sortField`: 排序字段
   *
   * - `rows`: 一页多少条
   *
   * - `first`: 跳过多少条
   *
   * - `data`: 搜索值
   *
   * @return Success
   */
  ShowGuildsLazyAdminguildslazyshowGet(params: SpaadminService.ShowGuildsLazyAdminguildslazyshowGetParams): __Observable<ShowGuildsLazyAdminResponse> {
    return this.ShowGuildsLazyAdminguildslazyshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildsLazyAdminResponse)
    );
  }

  /**
   * Lazy显示直播
   *
   * Lazy显示直播
   * @param params The `SpaadminService.ShowLivecastsLazyAdminlivecastslazyshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `sortOrder`: 排序方式
   *
   * - `sortField`: 排序字段
   *
   * - `rows`: 一页多少条
   *
   * - `first`: 跳过多少条
   *
   * - `data`: 搜索值
   *
   * @return Success
   */
  ShowLivecastsLazyAdminlivecastslazyshowGetResponse(params: SpaadminService.ShowLivecastsLazyAdminlivecastslazyshowGetParams): __Observable<__StrictHttpResponse<ShowLivecastsLazyAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.sortOrder != null) __params = __params.set('sortOrder', params.sortOrder.toString());
    if (params.sortField != null) __params = __params.set('sortField', params.sortField.toString());
    if (params.rows != null) __params = __params.set('rows', params.rows.toString());
    if (params.first != null) __params = __params.set('first', params.first.toString());
    if (params.data != null) __params = __params.set('data', params.data.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/livecasts/lazy/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowLivecastsLazyAdminResponse>;
      })
    );
  }
  /**
   * Lazy显示直播
   *
   * Lazy显示直播
   * @param params The `SpaadminService.ShowLivecastsLazyAdminlivecastslazyshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `sortOrder`: 排序方式
   *
   * - `sortField`: 排序字段
   *
   * - `rows`: 一页多少条
   *
   * - `first`: 跳过多少条
   *
   * - `data`: 搜索值
   *
   * @return Success
   */
  ShowLivecastsLazyAdminlivecastslazyshowGet(params: SpaadminService.ShowLivecastsLazyAdminlivecastslazyshowGetParams): __Observable<ShowLivecastsLazyAdminResponse> {
    return this.ShowLivecastsLazyAdminlivecastslazyshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowLivecastsLazyAdminResponse)
    );
  }

  /**
   * 显示系统详情的请求
   *
   * 显示系统详情的请求
   * @param params The `SpaadminService.ShowSystemDetailAdminsystemdetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `findFalg`: findFalg
   *
   * @return Success
   */
  ShowSystemDetailAdminsystemdetailshowGetResponse(params: SpaadminService.ShowSystemDetailAdminsystemdetailshowGetParams): __Observable<__StrictHttpResponse<ShowSystemDetailAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.findFalg != null) __params = __params.set('findFalg', params.findFalg.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/system/detail/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowSystemDetailAdminResponse>;
      })
    );
  }
  /**
   * 显示系统详情的请求
   *
   * 显示系统详情的请求
   * @param params The `SpaadminService.ShowSystemDetailAdminsystemdetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `findFalg`: findFalg
   *
   * @return Success
   */
  ShowSystemDetailAdminsystemdetailshowGet(params: SpaadminService.ShowSystemDetailAdminsystemdetailshowGetParams): __Observable<ShowSystemDetailAdminResponse> {
    return this.ShowSystemDetailAdminsystemdetailshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowSystemDetailAdminResponse)
    );
  }

  /**
   * 显示教会业务detail
   *
   * 显示教会业务detail
   * @param params The `SpaadminService.ShowGuildBlocDetailAdminguildblocdetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `searchType`: searchType
   *
   * - `guildId`: guildId
   *
   * @return Success
   */
  ShowGuildBlocDetailAdminguildblocdetailshowGetResponse(params: SpaadminService.ShowGuildBlocDetailAdminguildblocdetailshowGetParams): __Observable<__StrictHttpResponse<ShowGuildBlocDetailAdminResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.searchType != null) __params = __params.set('searchType', params.searchType.toString());
    if (params.guildId != null) __params = __params.set('guildId', params.guildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/spaadmin/guild/bloc/detail/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildBlocDetailAdminResponse>;
      })
    );
  }
  /**
   * 显示教会业务detail
   *
   * 显示教会业务detail
   * @param params The `SpaadminService.ShowGuildBlocDetailAdminguildblocdetailshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `searchType`: searchType
   *
   * - `guildId`: guildId
   *
   * @return Success
   */
  ShowGuildBlocDetailAdminguildblocdetailshowGet(params: SpaadminService.ShowGuildBlocDetailAdminguildblocdetailshowGetParams): __Observable<ShowGuildBlocDetailAdminResponse> {
    return this.ShowGuildBlocDetailAdminguildblocdetailshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildBlocDetailAdminResponse)
    );
  }
}

module SpaadminService {

  /**
   * Parameters for PutAuditItemAdminblocauditCreate
   */
  export interface PutAuditItemAdminblocauditCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: PutAuditItemAdmin;

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
   * Parameters for ShowAbuseReportAuditAdminabuseReportAuditshowGet
   */
  export interface ShowAbuseReportAuditAdminabuseReportAuditshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowAccountAdminaccountsshowGet
   */
  export interface ShowAccountAdminaccountsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowDiscussAdmindiscussshowGet
   */
  export interface ShowDiscussAdmindiscussshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowGuildDetailAdminguildshowGet
   */
  export interface ShowGuildDetailAdminguildshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会ID
     */
    guildId?: string;
  }

  /**
   * Parameters for ShowGuildMemberAdminguildmembershowGet
   */
  export interface ShowGuildMemberAdminguildmembershowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowGuildsAdminguildsshowGet
   */
  export interface ShowGuildsAdminguildsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowIdeaFeedbackAdminideaFeedbackshowGet
   */
  export interface ShowIdeaFeedbackAdminideaFeedbackshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowLivecastsAdminlivecastsshowGet
   */
  export interface ShowLivecastsAdminlivecastsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowManualAuditAdminmanualAuditshowGet
   */
  export interface ShowManualAuditAdminmanualAuditshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowNotificationsAdminnotificationsshowGet
   */
  export interface ShowNotificationsAdminnotificationsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 第几页
     */
    PageIndex?: number;

    /**
     * 一页多少条
     */
    PageCount?: number;
  }

  /**
   * Parameters for ShowUserAuthViolationAdminaccountviolationGet
   */
  export interface ShowUserAuthViolationAdminaccountviolationGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * userid
     */
    userId?: number;
  }

  /**
   * Parameters for ChangeBlocStatusAdminblocstatusCreate
   */
  export interface ChangeBlocStatusAdminblocstatusCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 标识ID
     */
    identificationId?: string;
    body?: ChangeBlocStatusAdmin;

    /**
     * true:正常；false：删除
     */
    blocValue?: boolean;

    /**
     * 类型0：通知；1：直播；2：讨论；3：教会；
     */
    blocType?: number;
  }

  /**
   * Parameters for ShowExportGuildContactAdminexportguildcontactPost
   */
  export interface ShowExportGuildContactAdminexportguildcontactPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会ids
     */
    guildIds?: Array<string>;
    body?: ShowExportGuildContactAdmin;
  }

  /**
   * Parameters for ShowAccountDetailAdminaccountdetailshowGet
   */
  export interface ShowAccountDetailAdminaccountdetailshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * userAuthId
     */
    userAuthId?: number;

    /**
     * searchType
     */
    searchType?: number;
  }

  /**
   * Parameters for ShowGuildLivecastFluxAdminguildlivecastFluxshowGet
   */
  export interface ShowGuildLivecastFluxAdminguildlivecastFluxshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会ID
     */
    guildId?: string;
  }

  /**
   * Parameters for ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGet
   */
  export interface ShowGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 1:充值；2：消费；
     */
    showFluxType?: number;

    /**
     * 教会ID
     */
    guildId?: string;
  }

  /**
   * Parameters for ShowGuildsLazyAdminguildslazyshowGet
   */
  export interface ShowGuildsLazyAdminguildslazyshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 排序方式
     */
    sortOrder?: number;

    /**
     * 排序字段
     */
    sortField?: string;

    /**
     * 一页多少条
     */
    rows?: number;

    /**
     * 跳过多少条
     */
    first?: number;

    /**
     * 搜索值
     */
    data?: string;
  }

  /**
   * Parameters for ShowLivecastsLazyAdminlivecastslazyshowGet
   */
  export interface ShowLivecastsLazyAdminlivecastslazyshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 排序方式
     */
    sortOrder?: number;

    /**
     * 排序字段
     */
    sortField?: string;

    /**
     * 一页多少条
     */
    rows?: number;

    /**
     * 跳过多少条
     */
    first?: number;

    /**
     * 搜索值
     */
    data?: string;
  }

  /**
   * Parameters for ShowSystemDetailAdminsystemdetailshowGet
   */
  export interface ShowSystemDetailAdminsystemdetailshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * findFalg
     */
    findFalg?: string;
  }

  /**
   * Parameters for ShowGuildBlocDetailAdminguildblocdetailshowGet
   */
  export interface ShowGuildBlocDetailAdminguildblocdetailshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * searchType
     */
    searchType?: number;

    /**
     * guildId
     */
    guildId?: number;
  }
}

export { SpaadminService }
