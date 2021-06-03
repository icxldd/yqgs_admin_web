/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CreateBeliefEquipResponse } from '../models/create-belief-equip-response';
import { CreateBeliefEquip } from '../models/create-belief-equip';
import { FileInfo } from '../models/file-info';
import { CreateDiscussesResponse } from '../models/create-discusses-response';
import { CreateDiscusses } from '../models/create-discusses';
import { CreateLivecastsResponse } from '../models/create-livecasts-response';
import { CreateLivecasts } from '../models/create-livecasts';
import { CreateNotificationsResponse } from '../models/create-notifications-response';
import { CreateNotifications } from '../models/create-notifications';
import { DeleteBeliefEquipsResponse } from '../models/delete-belief-equips-response';
import { DeleteDiscussResponse } from '../models/delete-discuss-response';
import { DeleteInformationResponse } from '../models/delete-information-response';
import { DeleteLivecastResponse } from '../models/delete-livecast-response';
import { DeleteNotificationResponse } from '../models/delete-notification-response';
import { CreateDiscussContentCommentResponse } from '../models/create-discuss-content-comment-response';
import { CreateDiscussContentComment } from '../models/create-discuss-content-comment';
import { DeleteDiscussContentCommentResponse } from '../models/delete-discuss-content-comment-response';
import { ToggleDiscussContentLikeResponse } from '../models/toggle-discuss-content-like-response';
import { ToggleDiscussContentLike } from '../models/toggle-discuss-content-like';
import { CreateDiscussContentLikeResponse } from '../models/create-discuss-content-like-response';
import { CreateDiscussContentLike } from '../models/create-discuss-content-like';
import { DeleteDiscussContentLikeResponse } from '../models/delete-discuss-content-like-response';
import { EnterLivecastResponse } from '../models/enter-livecast-response';
import { EnterLivecast } from '../models/enter-livecast';
import { JoinDiscussResponse } from '../models/join-discuss-response';
import { JoinDiscuss } from '../models/join-discuss';
import { JoinLivecastResponse } from '../models/join-livecast-response';
import { JoinLivecast } from '../models/join-livecast';
import { LeaveLivecastResponse } from '../models/leave-livecast-response';
import { LeaveLivecast } from '../models/leave-livecast';
import { NotifyLivecastsEventResponse } from '../models/notify-livecasts-event-response';
import { NotifyLivecastsEventAliyun } from '../models/notify-livecasts-event-aliyun';
import { RemindDiscussReceiversResponse } from '../models/remind-discuss-receivers-response';
import { RemindDiscussReceivers } from '../models/remind-discuss-receivers';
import { RemindInformationReceiversResponse } from '../models/remind-information-receivers-response';
import { RemindInformationReceivers } from '../models/remind-information-receivers';
import { RemindLivecastReceiversResponse } from '../models/remind-livecast-receivers-response';
import { RemindLivecastReceivers } from '../models/remind-livecast-receivers';
import { RemindNotificationReceiversResponse } from '../models/remind-notification-receivers-response';
import { RemindNotificationReceivers } from '../models/remind-notification-receivers';
import { ShowFavoriteInformationsResponse } from '../models/show-favorite-informations-response';
import { ShowInformationReceiversResponse } from '../models/show-information-receivers-response';
import { ShowLivecastForH5Response } from '../models/show-livecast-for-h5response';
import { ShowLivecastRoomInfoResponse } from '../models/show-livecast-room-info-response';
import { CreateDiscussContentResponse } from '../models/create-discuss-content-response';
import { CreateDiscussContent } from '../models/create-discuss-content';
import { DeleteDiscussContentResponse } from '../models/delete-discuss-content-response';
import { CreateFavoriteResponse } from '../models/create-favorite-response';
import { CreateFavorite } from '../models/create-favorite';
import { DeleteFavoriteResponse } from '../models/delete-favorite-response';
import { CreateInformationAbuseReportResponse } from '../models/create-information-abuse-report-response';
import { CreateInformationAbuseReport } from '../models/create-information-abuse-report';
import { CreateLivecastMessageResponse } from '../models/create-livecast-message-response';
import { CreateLivecastMessage } from '../models/create-livecast-message';
import { DeleteLivecastMessageResponse } from '../models/delete-livecast-message-response';
import { CreateLivecastRtmpUrlResponse } from '../models/create-livecast-rtmp-url-response';
import { CreateLivecastRtmpUrl } from '../models/create-livecast-rtmp-url';
import { CreateLocalNotificationResponse } from '../models/create-local-notification-response';
import { CreateLocalNotification } from '../models/create-local-notification';
import { NotifyLivecastsEvent } from '../models/notify-livecasts-event';
import { SearchDiscussContentsResponse } from '../models/search-discuss-contents-response';
import { ShowBeliefEquipResponse } from '../models/show-belief-equip-response';
import { ShowBeliefEquipsResponse } from '../models/show-belief-equips-response';
import { ShowDiscussResponse } from '../models/show-discuss-response';
import { ShowInformationResponse } from '../models/show-information-response';
import { ShowInformationsResponse } from '../models/show-informations-response';
import { ShowLivecastResponse } from '../models/show-livecast-response';
import { ShowNotificationResponse } from '../models/show-notification-response';
import { StartLivecastsResponse } from '../models/start-livecasts-response';
import { StartLivecasts } from '../models/start-livecasts';
import { StopLivecastsResponse } from '../models/stop-livecasts-response';
import { StopLivecasts } from '../models/stop-livecasts';
import { TranspondInformationsResponse } from '../models/transpond-informations-response';
import { TranspondInformations } from '../models/transpond-informations';
import { ShowDiscussContentMessagesResponse } from '../models/show-discuss-content-messages-response';
import { ShowNewDiscussContentMessagesCountResponse } from '../models/show-new-discuss-content-messages-count-response';
@Injectable({
  providedIn: 'root',
})
class ModuleService extends __BaseService {
  static readonly CreateBeliefEquipbeliefequipPostPath = '/module/beliefequip';
  static readonly CreateDiscussesdiscussesPostPath = '/module/discusses';
  static readonly CreateLivecastslivecastsPostPath = '/module/livecasts';
  static readonly CreateNotificationsnotificationsPostPath = '/module/notifications';
  static readonly DeleteBeliefEquipsbeliefequipsDeletePath = '/module/beliefequips';
  static readonly DeleteDiscussdiscussDeletePath = '/module/discuss';
  static readonly DeleteInformationinformationDeletePath = '/module/information';
  static readonly DeleteLivecastlivecastDeletePath = '/module/livecast';
  static readonly DeleteNotificationnotificationDeletePath = '/module/notification';
  static readonly CreateDiscussContentCommentdiscusscontentcommentPostPath = '/module/discuss/content/comment';
  static readonly DeleteDiscussContentCommentdiscusscontentcommentDeletePath = '/module/discuss/content/comment';
  static readonly ToggleDiscussContentLikediscusscontentlikeCreatePath = '/module/discuss/content/like';
  static readonly CreateDiscussContentLikediscusscontentlikePostPath = '/module/discuss/content/like';
  static readonly DeleteDiscussContentLikediscusscontentlikeDeletePath = '/module/discuss/content/like';
  static readonly EnterLivecastlivecastreceiverenterCreatePath = '/module/livecast/receiver/enter';
  static readonly JoinDiscussdiscussreceiverjoinCreatePath = '/module/discuss/receiver/join';
  static readonly JoinLivecastlivecastreceiverjoinCreatePath = '/module/livecast/receiver/join';
  static readonly LeaveLivecastlivecastreceiverleaveCreatePath = '/module/livecast/receiver/leave';
  static readonly NotifyLivecastsEventAliyunlivecastsaliyuneventPostPath = '/module/livecasts/aliyun/event';
  static readonly RemindDiscussReceiversdiscussreceiversremindCreatePath = '/module/discuss/receivers/remind';
  static readonly RemindInformationReceiversinformationreceiversremindCreatePath = '/module/information/receivers/remind';
  static readonly RemindLivecastReceiverslivecastreceiversremindCreatePath = '/module/livecast/receivers/remind';
  static readonly RemindNotificationReceiversnotificationreceiversremindCreatePath = '/module/notification/receivers/remind';
  static readonly ShowFavoriteInformationsinformationsfavoriteshowGetPath = '/module/informations/favorite/show';
  static readonly ShowInformationReceiversinformationreceiversshowGetPath = '/module/information/receivers/show';
  static readonly ShowLivecastForH5livecasth5showGetPath = '/module/livecast/h5/show';
  static readonly ShowLivecastRoomInfolivecastroomshowGetPath = '/module/livecast/room/show';
  static readonly CreateDiscussContentdiscusscontentPostPath = '/module/discuss/content';
  static readonly DeleteDiscussContentdiscusscontentDeletePath = '/module/discuss/content';
  static readonly CreateFavoriteinformationfavoritePostPath = '/module/information/favorite';
  static readonly DeleteFavoriteinformationfavoriteDeletePath = '/module/information/favorite';
  static readonly CreateInformationAbuseReportinformationabusereportPostPath = '/module/information/abusereport';
  static readonly CreateLivecastMessagelivecastmessagePostPath = '/module/livecast/message';
  static readonly DeleteLivecastMessagelivecastmessageDeletePath = '/module/livecast/message';
  static readonly CreateLivecastRtmpUrllivecastrtmpurlPostPath = '/module/livecast/rtmpurl';
  static readonly CreateLocalNotificationnotificationlocalPostPath = '/module/notification/local';
  static readonly NotifyLivecastsEventlivecastseventPostPath = '/module/livecasts/event';
  static readonly SearchDiscussContentsdiscusscontentsGetPath = '/module/discuss/contents';
  static readonly ShowBeliefEquipbeliefequipshowGetPath = '/module/beliefequip/show';
  static readonly ShowBeliefEquipsbeliefequipsshowGetPath = '/module/beliefequips/show';
  static readonly ShowDiscussdiscussshowGetPath = '/module/discuss/show';
  static readonly ShowInformationinformationshowGetPath = '/module/information/show';
  static readonly ShowInformationsinformationsshowGetPath = '/module/informations/show';
  static readonly ShowLivecastlivecastshowGetPath = '/module/livecast/show';
  static readonly ShowNotificationnotificationshowGetPath = '/module/notification/show';
  static readonly StartLivecastslivecastsstartCreatePath = '/module/livecasts/start';
  static readonly StopLivecastslivecastsstopCreatePath = '/module/livecasts/stop';
  static readonly TranspondInformationsinformationTranspondPostPath = '/module/information/Transpond';
  static readonly ShowDiscussContentMessagesdiscusscontentmessagesshowGetPath = '/module/discuss/content/messages/show';
  static readonly ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetPath = '/module/discuss/content/messages/count/show';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 创建信仰装备
   *
   * 创建信仰装备
   * @param params The `ModuleService.CreateBeliefEquipbeliefequipPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `WorshipOwner`: 敬拜人|敬拜教会(默认：null)
   *
   * - `Type`: *信仰装备类型 (1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它)
   *
   * - `Title`: 标题
   *
   * - `ShouldPublish`: 是否发布(默认：true)
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中(默认：false)
   *
   * - `PublishedDate`: *敬拜时间
   *
   * - `LiveCastIds`: 导入直播ID时候，Yes：需要填写GuildId，Type  其它字段根据直播记录自动生成
   *
   * - `IsFeatured`: 是否置顶(默认：false)
   *
   * - `GuildId`: *教会ID
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间(默认：null)
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateBeliefEquipbeliefequipPostResponse(params: ModuleService.CreateBeliefEquipbeliefequipPostParams): __Observable<__StrictHttpResponse<CreateBeliefEquipResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.linkUrl != null) { __formData.append('linkUrl', params.linkUrl as string | Blob);}
    __body = params.body;
    if (params.WorshipOwner != null) { __formData.append('WorshipOwner', params.WorshipOwner as string | Blob);}
    if (params.Type != null) { __formData.append('Type', JSON.stringify(params.Type));}
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.ShouldPublish != null) { __formData.append('ShouldPublish', JSON.stringify(params.ShouldPublish));}
    if (params.ShouldCopyFiles != null) { __formData.append('ShouldCopyFiles', JSON.stringify(params.ShouldCopyFiles));}
    if (params.PublishedDate != null) { __formData.append('PublishedDate', params.PublishedDate as string | Blob);}
    (params.LiveCastIds || []).forEach(val => {if (val != null) __formData.append('LiveCastIds', val as string | Blob)});
    if (params.IsFeatured != null) { __formData.append('IsFeatured', JSON.stringify(params.IsFeatured));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    (params.Files || []).forEach(val => {if (val != null) __formData.append('Files', JSON.stringify(val))});
    if (params.FeaturedExpiryDate != null) { __formData.append('FeaturedExpiryDate', params.FeaturedExpiryDate as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/beliefequip`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateBeliefEquipResponse>;
      })
    );
  }
  /**
   * 创建信仰装备
   *
   * 创建信仰装备
   * @param params The `ModuleService.CreateBeliefEquipbeliefequipPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `WorshipOwner`: 敬拜人|敬拜教会(默认：null)
   *
   * - `Type`: *信仰装备类型 (1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它)
   *
   * - `Title`: 标题
   *
   * - `ShouldPublish`: 是否发布(默认：true)
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中(默认：false)
   *
   * - `PublishedDate`: *敬拜时间
   *
   * - `LiveCastIds`: 导入直播ID时候，Yes：需要填写GuildId，Type  其它字段根据直播记录自动生成
   *
   * - `IsFeatured`: 是否置顶(默认：false)
   *
   * - `GuildId`: *教会ID
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间(默认：null)
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateBeliefEquipbeliefequipPost(params: ModuleService.CreateBeliefEquipbeliefequipPostParams): __Observable<CreateBeliefEquipResponse> {
    return this.CreateBeliefEquipbeliefequipPostResponse(params).pipe(
      __map(_r => _r.body as CreateBeliefEquipResponse)
    );
  }

  /**
   * 创建讨论
   *
   * 创建讨论
   * @param params The `ModuleService.CreateDiscussesdiscussesPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `Title`: 主题
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中
   *
   * - `ReceiverMemberIds`: 接收者成员列表
   *
   * - `IsFeatured`: 是否置顶
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间
   *
   * - `EndDate`: 结束时间
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateDiscussesdiscussesPostResponse(params: ModuleService.CreateDiscussesdiscussesPostParams): __Observable<__StrictHttpResponse<CreateDiscussesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.linkUrl != null) { __formData.append('linkUrl', params.linkUrl as string | Blob);}
    __body = params.body;
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.ShouldCopyFiles != null) { __formData.append('ShouldCopyFiles', JSON.stringify(params.ShouldCopyFiles));}
    (params.ReceiverMemberIds || []).forEach(val => {if (val != null) __formData.append('ReceiverMemberIds', val as string | Blob)});
    if (params.IsFeatured != null) { __formData.append('IsFeatured', JSON.stringify(params.IsFeatured));}
    (params.Files || []).forEach(val => {if (val != null) __formData.append('Files', JSON.stringify(val))});
    if (params.FeaturedExpiryDate != null) { __formData.append('FeaturedExpiryDate', params.FeaturedExpiryDate as string | Blob);}
    if (params.EndDate != null) { __formData.append('EndDate', params.EndDate as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/discusses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateDiscussesResponse>;
      })
    );
  }
  /**
   * 创建讨论
   *
   * 创建讨论
   * @param params The `ModuleService.CreateDiscussesdiscussesPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `Title`: 主题
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中
   *
   * - `ReceiverMemberIds`: 接收者成员列表
   *
   * - `IsFeatured`: 是否置顶
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间
   *
   * - `EndDate`: 结束时间
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateDiscussesdiscussesPost(params: ModuleService.CreateDiscussesdiscussesPostParams): __Observable<CreateDiscussesResponse> {
    return this.CreateDiscussesdiscussesPostResponse(params).pipe(
      __map(_r => _r.body as CreateDiscussesResponse)
    );
  }

  /**
   * 创建直播
   *
   * 创建直播
   * @param params The `ModuleService.CreateLivecastslivecastsPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `Title`: 主题
   *
   * - `Speaker`: 主讲人
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中
   *
   * - `ReceiverMemberIds`: 接收者成员列表
   *
   * - `IsFeatured`: 是否置顶
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间
   *
   * - `EndDate`: 结束时间
   *
   * - `Description`: 描述
   *
   * - `BeginDate`: 开始时间
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateLivecastslivecastsPostResponse(params: ModuleService.CreateLivecastslivecastsPostParams): __Observable<__StrictHttpResponse<CreateLivecastsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.linkUrl != null) { __formData.append('linkUrl', params.linkUrl as string | Blob);}
    __body = params.body;
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.Speaker != null) { __formData.append('Speaker', params.Speaker as string | Blob);}
    if (params.ShouldCopyFiles != null) { __formData.append('ShouldCopyFiles', JSON.stringify(params.ShouldCopyFiles));}
    (params.ReceiverMemberIds || []).forEach(val => {if (val != null) __formData.append('ReceiverMemberIds', val as string | Blob)});
    if (params.IsFeatured != null) { __formData.append('IsFeatured', JSON.stringify(params.IsFeatured));}
    (params.Files || []).forEach(val => {if (val != null) __formData.append('Files', JSON.stringify(val))});
    if (params.FeaturedExpiryDate != null) { __formData.append('FeaturedExpiryDate', params.FeaturedExpiryDate as string | Blob);}
    if (params.EndDate != null) { __formData.append('EndDate', params.EndDate as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.BeginDate != null) { __formData.append('BeginDate', params.BeginDate as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/livecasts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateLivecastsResponse>;
      })
    );
  }
  /**
   * 创建直播
   *
   * 创建直播
   * @param params The `ModuleService.CreateLivecastslivecastsPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `Title`: 主题
   *
   * - `Speaker`: 主讲人
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中
   *
   * - `ReceiverMemberIds`: 接收者成员列表
   *
   * - `IsFeatured`: 是否置顶
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间
   *
   * - `EndDate`: 结束时间
   *
   * - `Description`: 描述
   *
   * - `BeginDate`: 开始时间
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateLivecastslivecastsPost(params: ModuleService.CreateLivecastslivecastsPostParams): __Observable<CreateLivecastsResponse> {
    return this.CreateLivecastslivecastsPostResponse(params).pipe(
      __map(_r => _r.body as CreateLivecastsResponse)
    );
  }

  /**
   * 创建通知
   *
   * 创建通知
   * @param params The `ModuleService.CreateNotificationsnotificationsPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `ShouldPublish`: 是否发布
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中
   *
   * - `ReceiverMemberIds`: 接收者成员列表
   *
   * - `PublishedScheduleDate`: 计划发布时间
   *
   * - `IsFeatured`: 是否置顶
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateNotificationsnotificationsPostResponse(params: ModuleService.CreateNotificationsnotificationsPostParams): __Observable<__StrictHttpResponse<CreateNotificationsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.linkUrl != null) { __formData.append('linkUrl', params.linkUrl as string | Blob);}
    __body = params.body;
    if (params.ShouldPublish != null) { __formData.append('ShouldPublish', JSON.stringify(params.ShouldPublish));}
    if (params.ShouldCopyFiles != null) { __formData.append('ShouldCopyFiles', JSON.stringify(params.ShouldCopyFiles));}
    (params.ReceiverMemberIds || []).forEach(val => {if (val != null) __formData.append('ReceiverMemberIds', val as string | Blob)});
    if (params.PublishedScheduleDate != null) { __formData.append('PublishedScheduleDate', params.PublishedScheduleDate as string | Blob);}
    if (params.IsFeatured != null) { __formData.append('IsFeatured', JSON.stringify(params.IsFeatured));}
    (params.Files || []).forEach(val => {if (val != null) __formData.append('Files', JSON.stringify(val))});
    if (params.FeaturedExpiryDate != null) { __formData.append('FeaturedExpiryDate', params.FeaturedExpiryDate as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateNotificationsResponse>;
      })
    );
  }
  /**
   * 创建通知
   *
   * 创建通知
   * @param params The `ModuleService.CreateNotificationsnotificationsPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `linkUrl`: linkUrl
   *
   * - `body`:
   *
   * - `ShouldPublish`: 是否发布
   *
   * - `ShouldCopyFiles`: 是否复制文件到教会文件中
   *
   * - `ReceiverMemberIds`: 接收者成员列表
   *
   * - `PublishedScheduleDate`: 计划发布时间
   *
   * - `IsFeatured`: 是否置顶
   *
   * - `Files`: 文件列表
   *
   * - `FeaturedExpiryDate`: 置顶过期时间
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateNotificationsnotificationsPost(params: ModuleService.CreateNotificationsnotificationsPostParams): __Observable<CreateNotificationsResponse> {
    return this.CreateNotificationsnotificationsPostResponse(params).pipe(
      __map(_r => _r.body as CreateNotificationsResponse)
    );
  }

  /**
   * 删除信仰装备
   *
   * 删除信仰装备
   * @param params The `ModuleService.DeleteBeliefEquipsbeliefequipsDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `BeliefEquipIds`: 信仰装备编号列表
   *
   * @return Success
   */
  DeleteBeliefEquipsbeliefequipsDeleteResponse(params: ModuleService.DeleteBeliefEquipsbeliefequipsDeleteParams): __Observable<__StrictHttpResponse<DeleteBeliefEquipsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    (params.BeliefEquipIds || []).forEach(val => {if (val != null) __params = __params.append('BeliefEquipIds', val.toString())});
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/beliefequips`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteBeliefEquipsResponse>;
      })
    );
  }
  /**
   * 删除信仰装备
   *
   * 删除信仰装备
   * @param params The `ModuleService.DeleteBeliefEquipsbeliefequipsDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `BeliefEquipIds`: 信仰装备编号列表
   *
   * @return Success
   */
  DeleteBeliefEquipsbeliefequipsDelete(params: ModuleService.DeleteBeliefEquipsbeliefequipsDeleteParams): __Observable<DeleteBeliefEquipsResponse> {
    return this.DeleteBeliefEquipsbeliefequipsDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteBeliefEquipsResponse)
    );
  }

  /**
   * 删除讨论
   *
   * 删除讨论
   * @param params The `ModuleService.DeleteDiscussdiscussDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  DeleteDiscussdiscussDeleteResponse(params: ModuleService.DeleteDiscussdiscussDeleteParams): __Observable<__StrictHttpResponse<DeleteDiscussResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.DiscussId != null) __params = __params.set('DiscussId', params.DiscussId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/discuss`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteDiscussResponse>;
      })
    );
  }
  /**
   * 删除讨论
   *
   * 删除讨论
   * @param params The `ModuleService.DeleteDiscussdiscussDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  DeleteDiscussdiscussDelete(params: ModuleService.DeleteDiscussdiscussDeleteParams): __Observable<DeleteDiscussResponse> {
    return this.DeleteDiscussdiscussDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteDiscussResponse)
    );
  }

  /**
   * 删除消息
   *
   * 删除消息
   * @param params The `ModuleService.DeleteInformationinformationDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  DeleteInformationinformationDeleteResponse(params: ModuleService.DeleteInformationinformationDeleteParams): __Observable<__StrictHttpResponse<DeleteInformationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.InformationId != null) __params = __params.set('InformationId', params.InformationId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/information`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteInformationResponse>;
      })
    );
  }
  /**
   * 删除消息
   *
   * 删除消息
   * @param params The `ModuleService.DeleteInformationinformationDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  DeleteInformationinformationDelete(params: ModuleService.DeleteInformationinformationDeleteParams): __Observable<DeleteInformationResponse> {
    return this.DeleteInformationinformationDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteInformationResponse)
    );
  }

  /**
   * 删除直播
   *
   * 删除直播
   * @param params The `ModuleService.DeleteLivecastlivecastDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  DeleteLivecastlivecastDeleteResponse(params: ModuleService.DeleteLivecastlivecastDeleteParams): __Observable<__StrictHttpResponse<DeleteLivecastResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.LivecastId != null) __params = __params.set('LivecastId', params.LivecastId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/livecast`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteLivecastResponse>;
      })
    );
  }
  /**
   * 删除直播
   *
   * 删除直播
   * @param params The `ModuleService.DeleteLivecastlivecastDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  DeleteLivecastlivecastDelete(params: ModuleService.DeleteLivecastlivecastDeleteParams): __Observable<DeleteLivecastResponse> {
    return this.DeleteLivecastlivecastDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteLivecastResponse)
    );
  }

  /**
   * 删除通知
   *
   * 删除通知
   * @param params The `ModuleService.DeleteNotificationnotificationDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `NotificationId`: 通知编号
   *
   * @return Success
   */
  DeleteNotificationnotificationDeleteResponse(params: ModuleService.DeleteNotificationnotificationDeleteParams): __Observable<__StrictHttpResponse<DeleteNotificationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.NotificationId != null) __params = __params.set('NotificationId', params.NotificationId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/notification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteNotificationResponse>;
      })
    );
  }
  /**
   * 删除通知
   *
   * 删除通知
   * @param params The `ModuleService.DeleteNotificationnotificationDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `NotificationId`: 通知编号
   *
   * @return Success
   */
  DeleteNotificationnotificationDelete(params: ModuleService.DeleteNotificationnotificationDeleteParams): __Observable<DeleteNotificationResponse> {
    return this.DeleteNotificationnotificationDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteNotificationResponse)
    );
  }

  /**
   * 创建讨论内容评论
   *
   * 创建讨论内容评论
   * @param params The `ModuleService.CreateDiscussContentCommentdiscusscontentcommentPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ParentCommentId`: 上级评论编号
   *
   * - `Description`: 描述
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  CreateDiscussContentCommentdiscusscontentcommentPostResponse(params: ModuleService.CreateDiscussContentCommentdiscusscontentcommentPostParams): __Observable<__StrictHttpResponse<CreateDiscussContentCommentResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.ParentCommentId != null) { __formData.append('ParentCommentId', params.ParentCommentId as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.ContentId != null) { __formData.append('ContentId', params.ContentId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/discuss/content/comment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateDiscussContentCommentResponse>;
      })
    );
  }
  /**
   * 创建讨论内容评论
   *
   * 创建讨论内容评论
   * @param params The `ModuleService.CreateDiscussContentCommentdiscusscontentcommentPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ParentCommentId`: 上级评论编号
   *
   * - `Description`: 描述
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  CreateDiscussContentCommentdiscusscontentcommentPost(params: ModuleService.CreateDiscussContentCommentdiscusscontentcommentPostParams): __Observable<CreateDiscussContentCommentResponse> {
    return this.CreateDiscussContentCommentdiscusscontentcommentPostResponse(params).pipe(
      __map(_r => _r.body as CreateDiscussContentCommentResponse)
    );
  }

  /**
   * 删除讨论内容评论
   *
   * 删除讨论内容评论
   * @param params The `ModuleService.DeleteDiscussContentCommentdiscusscontentcommentDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `CommentId`: 讨论内容评论编号
   *
   * @return Success
   */
  DeleteDiscussContentCommentdiscusscontentcommentDeleteResponse(params: ModuleService.DeleteDiscussContentCommentdiscusscontentcommentDeleteParams): __Observable<__StrictHttpResponse<DeleteDiscussContentCommentResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.CommentId != null) __params = __params.set('CommentId', params.CommentId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/discuss/content/comment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteDiscussContentCommentResponse>;
      })
    );
  }
  /**
   * 删除讨论内容评论
   *
   * 删除讨论内容评论
   * @param params The `ModuleService.DeleteDiscussContentCommentdiscusscontentcommentDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `CommentId`: 讨论内容评论编号
   *
   * @return Success
   */
  DeleteDiscussContentCommentdiscusscontentcommentDelete(params: ModuleService.DeleteDiscussContentCommentdiscusscontentcommentDeleteParams): __Observable<DeleteDiscussContentCommentResponse> {
    return this.DeleteDiscussContentCommentdiscusscontentcommentDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteDiscussContentCommentResponse)
    );
  }

  /**
   * 切换讨论内容点赞
   *
   * 切换讨论内容点赞
   * @param params The `ModuleService.ToggleDiscussContentLikediscusscontentlikeCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  ToggleDiscussContentLikediscusscontentlikeCreateResponse(params: ModuleService.ToggleDiscussContentLikediscusscontentlikeCreateParams): __Observable<__StrictHttpResponse<ToggleDiscussContentLikeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.ContentId != null) { __formData.append('ContentId', params.ContentId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/discuss/content/like`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ToggleDiscussContentLikeResponse>;
      })
    );
  }
  /**
   * 切换讨论内容点赞
   *
   * 切换讨论内容点赞
   * @param params The `ModuleService.ToggleDiscussContentLikediscusscontentlikeCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  ToggleDiscussContentLikediscusscontentlikeCreate(params: ModuleService.ToggleDiscussContentLikediscusscontentlikeCreateParams): __Observable<ToggleDiscussContentLikeResponse> {
    return this.ToggleDiscussContentLikediscusscontentlikeCreateResponse(params).pipe(
      __map(_r => _r.body as ToggleDiscussContentLikeResponse)
    );
  }

  /**
   * 创建讨论内容点赞
   *
   * 创建讨论内容点赞
   * @param params The `ModuleService.CreateDiscussContentLikediscusscontentlikePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  CreateDiscussContentLikediscusscontentlikePostResponse(params: ModuleService.CreateDiscussContentLikediscusscontentlikePostParams): __Observable<__StrictHttpResponse<CreateDiscussContentLikeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.ContentId != null) { __formData.append('ContentId', params.ContentId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/discuss/content/like`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateDiscussContentLikeResponse>;
      })
    );
  }
  /**
   * 创建讨论内容点赞
   *
   * 创建讨论内容点赞
   * @param params The `ModuleService.CreateDiscussContentLikediscusscontentlikePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  CreateDiscussContentLikediscusscontentlikePost(params: ModuleService.CreateDiscussContentLikediscusscontentlikePostParams): __Observable<CreateDiscussContentLikeResponse> {
    return this.CreateDiscussContentLikediscusscontentlikePostResponse(params).pipe(
      __map(_r => _r.body as CreateDiscussContentLikeResponse)
    );
  }

  /**
   * 删除讨论内容点赞
   *
   * 删除讨论内容点赞
   * @param params The `ModuleService.DeleteDiscussContentLikediscusscontentlikeDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  DeleteDiscussContentLikediscusscontentlikeDeleteResponse(params: ModuleService.DeleteDiscussContentLikediscusscontentlikeDeleteParams): __Observable<__StrictHttpResponse<DeleteDiscussContentLikeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.ContentId != null) __params = __params.set('ContentId', params.ContentId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/discuss/content/like`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteDiscussContentLikeResponse>;
      })
    );
  }
  /**
   * 删除讨论内容点赞
   *
   * 删除讨论内容点赞
   * @param params The `ModuleService.DeleteDiscussContentLikediscusscontentlikeDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  DeleteDiscussContentLikediscusscontentlikeDelete(params: ModuleService.DeleteDiscussContentLikediscusscontentlikeDeleteParams): __Observable<DeleteDiscussContentLikeResponse> {
    return this.DeleteDiscussContentLikediscusscontentlikeDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteDiscussContentLikeResponse)
    );
  }

  /**
   * 进入直播
   *
   * 进入直播
   * @param params The `ModuleService.EnterLivecastlivecastreceiverenterCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  EnterLivecastlivecastreceiverenterCreateResponse(params: ModuleService.EnterLivecastlivecastreceiverenterCreateParams): __Observable<__StrictHttpResponse<EnterLivecastResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.LivecastId != null) { __formData.append('LivecastId', params.LivecastId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/livecast/receiver/enter`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EnterLivecastResponse>;
      })
    );
  }
  /**
   * 进入直播
   *
   * 进入直播
   * @param params The `ModuleService.EnterLivecastlivecastreceiverenterCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  EnterLivecastlivecastreceiverenterCreate(params: ModuleService.EnterLivecastlivecastreceiverenterCreateParams): __Observable<EnterLivecastResponse> {
    return this.EnterLivecastlivecastreceiverenterCreateResponse(params).pipe(
      __map(_r => _r.body as EnterLivecastResponse)
    );
  }

  /**
   * 参与讨论
   *
   * 参与讨论
   * @param params The `ModuleService.JoinDiscussdiscussreceiverjoinCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  JoinDiscussdiscussreceiverjoinCreateResponse(params: ModuleService.JoinDiscussdiscussreceiverjoinCreateParams): __Observable<__StrictHttpResponse<JoinDiscussResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.DiscussId != null) { __formData.append('DiscussId', params.DiscussId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/discuss/receiver/join`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JoinDiscussResponse>;
      })
    );
  }
  /**
   * 参与讨论
   *
   * 参与讨论
   * @param params The `ModuleService.JoinDiscussdiscussreceiverjoinCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  JoinDiscussdiscussreceiverjoinCreate(params: ModuleService.JoinDiscussdiscussreceiverjoinCreateParams): __Observable<JoinDiscussResponse> {
    return this.JoinDiscussdiscussreceiverjoinCreateResponse(params).pipe(
      __map(_r => _r.body as JoinDiscussResponse)
    );
  }

  /**
   * 参与直播
   *
   * 参与直播
   * @param params The `ModuleService.JoinLivecastlivecastreceiverjoinCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  JoinLivecastlivecastreceiverjoinCreateResponse(params: ModuleService.JoinLivecastlivecastreceiverjoinCreateParams): __Observable<__StrictHttpResponse<JoinLivecastResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.LivecastId != null) { __formData.append('LivecastId', params.LivecastId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/livecast/receiver/join`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JoinLivecastResponse>;
      })
    );
  }
  /**
   * 参与直播
   *
   * 参与直播
   * @param params The `ModuleService.JoinLivecastlivecastreceiverjoinCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  JoinLivecastlivecastreceiverjoinCreate(params: ModuleService.JoinLivecastlivecastreceiverjoinCreateParams): __Observable<JoinLivecastResponse> {
    return this.JoinLivecastlivecastreceiverjoinCreateResponse(params).pipe(
      __map(_r => _r.body as JoinLivecastResponse)
    );
  }

  /**
   * 离开直播
   *
   * 离开直播
   * @param params The `ModuleService.LeaveLivecastlivecastreceiverleaveCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  LeaveLivecastlivecastreceiverleaveCreateResponse(params: ModuleService.LeaveLivecastlivecastreceiverleaveCreateParams): __Observable<__StrictHttpResponse<LeaveLivecastResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.LivecastId != null) { __formData.append('LivecastId', params.LivecastId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/livecast/receiver/leave`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LeaveLivecastResponse>;
      })
    );
  }
  /**
   * 离开直播
   *
   * 离开直播
   * @param params The `ModuleService.LeaveLivecastlivecastreceiverleaveCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  LeaveLivecastlivecastreceiverleaveCreate(params: ModuleService.LeaveLivecastlivecastreceiverleaveCreateParams): __Observable<LeaveLivecastResponse> {
    return this.LeaveLivecastlivecastreceiverleaveCreateResponse(params).pipe(
      __map(_r => _r.body as LeaveLivecastResponse)
    );
  }

  /**
   * 通知直播事件消息-阿里云
   *
   * 通知直播事件消息-阿里云
   * @param params The `ModuleService.NotifyLivecastsEventAliyunlivecastsaliyuneventPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`: uri
   *
   * - `stream`: stream
   *
   * - `stop_time`: stop_time
   *
   * - `start_time`: start_time
   *
   * - `event`: 事件
   *
   * - `duration`: duration
   *
   * - `domain`: domain
   *
   * - `body`:
   *
   * - `app`: app
   *
   * @return Success
   */
  NotifyLivecastsEventAliyunlivecastsaliyuneventPostResponse(params: ModuleService.NotifyLivecastsEventAliyunlivecastsaliyuneventPostParams): __Observable<__StrictHttpResponse<NotifyLivecastsEventResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) { __formData.append('uri', params.uri as string | Blob);}
    if (params.stream != null) { __formData.append('stream', params.stream as string | Blob);}
    if (params.stopTime != null) { __formData.append('stop_time', JSON.stringify(params.stopTime));}
    if (params.startTime != null) { __formData.append('start_time', JSON.stringify(params.startTime));}
    if (params.event != null) { __formData.append('event', params.event as string | Blob);}
    if (params.duration != null) { __formData.append('duration', JSON.stringify(params.duration));}
    if (params.domain != null) { __formData.append('domain', params.domain as string | Blob);}
    __body = params.body;
    if (params.app != null) { __formData.append('app', params.app as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/livecasts/aliyun/event`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotifyLivecastsEventResponse>;
      })
    );
  }
  /**
   * 通知直播事件消息-阿里云
   *
   * 通知直播事件消息-阿里云
   * @param params The `ModuleService.NotifyLivecastsEventAliyunlivecastsaliyuneventPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`: uri
   *
   * - `stream`: stream
   *
   * - `stop_time`: stop_time
   *
   * - `start_time`: start_time
   *
   * - `event`: 事件
   *
   * - `duration`: duration
   *
   * - `domain`: domain
   *
   * - `body`:
   *
   * - `app`: app
   *
   * @return Success
   */
  NotifyLivecastsEventAliyunlivecastsaliyuneventPost(params: ModuleService.NotifyLivecastsEventAliyunlivecastsaliyuneventPostParams): __Observable<NotifyLivecastsEventResponse> {
    return this.NotifyLivecastsEventAliyunlivecastsaliyuneventPostResponse(params).pipe(
      __map(_r => _r.body as NotifyLivecastsEventResponse)
    );
  }

  /**
   * 提醒讨论接收者
   *
   * 提醒讨论接收者
   * @param params The `ModuleService.RemindDiscussReceiversdiscussreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与）
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  RemindDiscussReceiversdiscussreceiversremindCreateResponse(params: ModuleService.RemindDiscussReceiversdiscussreceiversremindCreateParams): __Observable<__StrictHttpResponse<RemindDiscussReceiversResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.RemindType != null) { __formData.append('RemindType', JSON.stringify(params.RemindType));}
    if (params.DiscussId != null) { __formData.append('DiscussId', params.DiscussId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/discuss/receivers/remind`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemindDiscussReceiversResponse>;
      })
    );
  }
  /**
   * 提醒讨论接收者
   *
   * 提醒讨论接收者
   * @param params The `ModuleService.RemindDiscussReceiversdiscussreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与）
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  RemindDiscussReceiversdiscussreceiversremindCreate(params: ModuleService.RemindDiscussReceiversdiscussreceiversremindCreateParams): __Observable<RemindDiscussReceiversResponse> {
    return this.RemindDiscussReceiversdiscussreceiversremindCreateResponse(params).pipe(
      __map(_r => _r.body as RemindDiscussReceiversResponse)
    );
  }

  /**
   * 提醒消息接收者
   *
   * 提醒消息接收者
   * @param params The `ModuleService.RemindInformationReceiversinformationreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  RemindInformationReceiversinformationreceiversremindCreateResponse(params: ModuleService.RemindInformationReceiversinformationreceiversremindCreateParams): __Observable<__StrictHttpResponse<RemindInformationReceiversResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.RemindType != null) { __formData.append('RemindType', JSON.stringify(params.RemindType));}
    if (params.InformationId != null) { __formData.append('InformationId', params.InformationId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/information/receivers/remind`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemindInformationReceiversResponse>;
      })
    );
  }
  /**
   * 提醒消息接收者
   *
   * 提醒消息接收者
   * @param params The `ModuleService.RemindInformationReceiversinformationreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  RemindInformationReceiversinformationreceiversremindCreate(params: ModuleService.RemindInformationReceiversinformationreceiversremindCreateParams): __Observable<RemindInformationReceiversResponse> {
    return this.RemindInformationReceiversinformationreceiversremindCreateResponse(params).pipe(
      __map(_r => _r.body as RemindInformationReceiversResponse)
    );
  }

  /**
   * 提醒直播接收者
   *
   * 提醒直播接收者
   * @param params The `ModuleService.RemindLivecastReceiverslivecastreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  RemindLivecastReceiverslivecastreceiversremindCreateResponse(params: ModuleService.RemindLivecastReceiverslivecastreceiversremindCreateParams): __Observable<__StrictHttpResponse<RemindLivecastReceiversResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.RemindType != null) { __formData.append('RemindType', JSON.stringify(params.RemindType));}
    if (params.LivecastId != null) { __formData.append('LivecastId', params.LivecastId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/livecast/receivers/remind`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemindLivecastReceiversResponse>;
      })
    );
  }
  /**
   * 提醒直播接收者
   *
   * 提醒直播接收者
   * @param params The `ModuleService.RemindLivecastReceiverslivecastreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  RemindLivecastReceiverslivecastreceiversremindCreate(params: ModuleService.RemindLivecastReceiverslivecastreceiversremindCreateParams): __Observable<RemindLivecastReceiversResponse> {
    return this.RemindLivecastReceiverslivecastreceiversremindCreateResponse(params).pipe(
      __map(_r => _r.body as RemindLivecastReceiversResponse)
    );
  }

  /**
   * 提醒通知接收者
   *
   * 提醒通知接收者
   * @param params The `ModuleService.RemindNotificationReceiversnotificationreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与）
   *
   * - `NotificationId`: 通知编号
   *
   * @return Success
   */
  RemindNotificationReceiversnotificationreceiversremindCreateResponse(params: ModuleService.RemindNotificationReceiversnotificationreceiversremindCreateParams): __Observable<__StrictHttpResponse<RemindNotificationReceiversResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.RemindType != null) { __formData.append('RemindType', JSON.stringify(params.RemindType));}
    if (params.NotificationId != null) { __formData.append('NotificationId', params.NotificationId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/notification/receivers/remind`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemindNotificationReceiversResponse>;
      })
    );
  }
  /**
   * 提醒通知接收者
   *
   * 提醒通知接收者
   * @param params The `ModuleService.RemindNotificationReceiversnotificationreceiversremindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `RemindType`: 提醒类型（0: 未查看; 1: 未参与）
   *
   * - `NotificationId`: 通知编号
   *
   * @return Success
   */
  RemindNotificationReceiversnotificationreceiversremindCreate(params: ModuleService.RemindNotificationReceiversnotificationreceiversremindCreateParams): __Observable<RemindNotificationReceiversResponse> {
    return this.RemindNotificationReceiversnotificationreceiversremindCreateResponse(params).pipe(
      __map(_r => _r.body as RemindNotificationReceiversResponse)
    );
  }

  /**
   * 批量显示当前用户的收藏消息
   *
   * 批量显示当前用户的收藏消息
   * @param params The `ModuleService.ShowFavoriteInformationsinformationsfavoriteshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
   *
   * - `Status`: 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowFavoriteInformationsinformationsfavoriteshowGetResponse(params: ModuleService.ShowFavoriteInformationsinformationsfavoriteshowGetParams): __Observable<__StrictHttpResponse<ShowFavoriteInformationsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Status != null) __params = __params.set('Status', params.Status.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/informations/favorite/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowFavoriteInformationsResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户的收藏消息
   *
   * 批量显示当前用户的收藏消息
   * @param params The `ModuleService.ShowFavoriteInformationsinformationsfavoriteshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
   *
   * - `Status`: 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowFavoriteInformationsinformationsfavoriteshowGet(params: ModuleService.ShowFavoriteInformationsinformationsfavoriteshowGetParams): __Observable<ShowFavoriteInformationsResponse> {
    return this.ShowFavoriteInformationsinformationsfavoriteshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowFavoriteInformationsResponse)
    );
  }

  /**
   * 批量显示当前用户的消息接收者
   *
   * 批量显示当前用户的消息接收者
   * @param params The `ModuleService.ShowInformationReceiversinformationreceiversshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  ShowInformationReceiversinformationreceiversshowGetResponse(params: ModuleService.ShowInformationReceiversinformationreceiversshowGetParams): __Observable<__StrictHttpResponse<ShowInformationReceiversResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.InformationId != null) __params = __params.set('InformationId', params.InformationId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/information/receivers/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowInformationReceiversResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户的消息接收者
   *
   * 批量显示当前用户的消息接收者
   * @param params The `ModuleService.ShowInformationReceiversinformationreceiversshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  ShowInformationReceiversinformationreceiversshowGet(params: ModuleService.ShowInformationReceiversinformationreceiversshowGetParams): __Observable<ShowInformationReceiversResponse> {
    return this.ShowInformationReceiversinformationreceiversshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowInformationReceiversResponse)
    );
  }

  /**
   * 显示直播
   *
   * 显示直播
   * @param params The `ModuleService.ShowLivecastForH5livecasth5showGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号|直播标识
   *
   * @return Success
   */
  ShowLivecastForH5livecasth5showGetResponse(params: ModuleService.ShowLivecastForH5livecasth5showGetParams): __Observable<__StrictHttpResponse<ShowLivecastForH5Response>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.LivecastId != null) __params = __params.set('LivecastId', params.LivecastId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/livecast/h5/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowLivecastForH5Response>;
      })
    );
  }
  /**
   * 显示直播
   *
   * 显示直播
   * @param params The `ModuleService.ShowLivecastForH5livecasth5showGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号|直播标识
   *
   * @return Success
   */
  ShowLivecastForH5livecasth5showGet(params: ModuleService.ShowLivecastForH5livecasth5showGetParams): __Observable<ShowLivecastForH5Response> {
    return this.ShowLivecastForH5livecasth5showGetResponse(params).pipe(
      __map(_r => _r.body as ShowLivecastForH5Response)
    );
  }

  /**
   * 显示直播websocket房间的请求
   *
   * 显示直播websocket房间的请求
   * @param params The `ModuleService.ShowLivecastRoomInfolivecastroomshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  ShowLivecastRoomInfolivecastroomshowGetResponse(params: ModuleService.ShowLivecastRoomInfolivecastroomshowGetParams): __Observable<__StrictHttpResponse<ShowLivecastRoomInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.LivecastId != null) __params = __params.set('LivecastId', params.LivecastId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/livecast/room/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowLivecastRoomInfoResponse>;
      })
    );
  }
  /**
   * 显示直播websocket房间的请求
   *
   * 显示直播websocket房间的请求
   * @param params The `ModuleService.ShowLivecastRoomInfolivecastroomshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号
   *
   * @return Success
   */
  ShowLivecastRoomInfolivecastroomshowGet(params: ModuleService.ShowLivecastRoomInfolivecastroomshowGetParams): __Observable<ShowLivecastRoomInfoResponse> {
    return this.ShowLivecastRoomInfolivecastroomshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowLivecastRoomInfoResponse)
    );
  }

  /**
   * 创建讨论内容
   *
   * 创建讨论内容
   * @param params The `ModuleService.CreateDiscussContentdiscusscontentPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Type`: 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   *
   * - `Files`: 文件列表
   *
   * - `DiscussId`: 讨论编号
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  CreateDiscussContentdiscusscontentPostResponse(params: ModuleService.CreateDiscussContentdiscusscontentPostParams): __Observable<__StrictHttpResponse<CreateDiscussContentResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Type != null) { __formData.append('Type', JSON.stringify(params.Type));}
    (params.Files || []).forEach(val => {if (val != null) __formData.append('Files', JSON.stringify(val))});
    if (params.DiscussId != null) { __formData.append('DiscussId', params.DiscussId as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/discuss/content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateDiscussContentResponse>;
      })
    );
  }
  /**
   * 创建讨论内容
   *
   * 创建讨论内容
   * @param params The `ModuleService.CreateDiscussContentdiscusscontentPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Type`: 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   *
   * - `Files`: 文件列表
   *
   * - `DiscussId`: 讨论编号
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  CreateDiscussContentdiscusscontentPost(params: ModuleService.CreateDiscussContentdiscusscontentPostParams): __Observable<CreateDiscussContentResponse> {
    return this.CreateDiscussContentdiscusscontentPostResponse(params).pipe(
      __map(_r => _r.body as CreateDiscussContentResponse)
    );
  }

  /**
   * 删除讨论内容
   *
   * 删除讨论内容
   * @param params The `ModuleService.DeleteDiscussContentdiscusscontentDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  DeleteDiscussContentdiscusscontentDeleteResponse(params: ModuleService.DeleteDiscussContentdiscusscontentDeleteParams): __Observable<__StrictHttpResponse<DeleteDiscussContentResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.ContentId != null) __params = __params.set('ContentId', params.ContentId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/discuss/content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteDiscussContentResponse>;
      })
    );
  }
  /**
   * 删除讨论内容
   *
   * 删除讨论内容
   * @param params The `ModuleService.DeleteDiscussContentdiscusscontentDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `ContentId`: 讨论内容编号
   *
   * @return Success
   */
  DeleteDiscussContentdiscusscontentDelete(params: ModuleService.DeleteDiscussContentdiscusscontentDeleteParams): __Observable<DeleteDiscussContentResponse> {
    return this.DeleteDiscussContentdiscusscontentDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteDiscussContentResponse)
    );
  }

  /**
   * 创建收藏
   *
   * 创建收藏
   * @param params The `ModuleService.CreateFavoriteinformationfavoritePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  CreateFavoriteinformationfavoritePostResponse(params: ModuleService.CreateFavoriteinformationfavoritePostParams): __Observable<__StrictHttpResponse<CreateFavoriteResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.InformationId != null) { __formData.append('InformationId', params.InformationId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/information/favorite`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateFavoriteResponse>;
      })
    );
  }
  /**
   * 创建收藏
   *
   * 创建收藏
   * @param params The `ModuleService.CreateFavoriteinformationfavoritePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  CreateFavoriteinformationfavoritePost(params: ModuleService.CreateFavoriteinformationfavoritePostParams): __Observable<CreateFavoriteResponse> {
    return this.CreateFavoriteinformationfavoritePostResponse(params).pipe(
      __map(_r => _r.body as CreateFavoriteResponse)
    );
  }

  /**
   * 删除收藏
   *
   * 删除收藏
   * @param params The `ModuleService.DeleteFavoriteinformationfavoriteDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  DeleteFavoriteinformationfavoriteDeleteResponse(params: ModuleService.DeleteFavoriteinformationfavoriteDeleteParams): __Observable<__StrictHttpResponse<DeleteFavoriteResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.InformationId != null) __params = __params.set('InformationId', params.InformationId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/information/favorite`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteFavoriteResponse>;
      })
    );
  }
  /**
   * 删除收藏
   *
   * 删除收藏
   * @param params The `ModuleService.DeleteFavoriteinformationfavoriteDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `InformationId`: 消息编号
   *
   * @return Success
   */
  DeleteFavoriteinformationfavoriteDelete(params: ModuleService.DeleteFavoriteinformationfavoriteDeleteParams): __Observable<DeleteFavoriteResponse> {
    return this.DeleteFavoriteinformationfavoriteDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteFavoriteResponse)
    );
  }

  /**
   * 创建消息举报
   *
   * 创建消息举报
   * @param params The `ModuleService.CreateInformationAbuseReportinformationabusereportPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `InformationId`: 消息编号
   *
   * - `Description`: 描述
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  CreateInformationAbuseReportinformationabusereportPostResponse(params: ModuleService.CreateInformationAbuseReportinformationabusereportPostParams): __Observable<__StrictHttpResponse<CreateInformationAbuseReportResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.InformationId != null) { __formData.append('InformationId', params.InformationId as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.Category != null) { __formData.append('Category', params.Category as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/information/abusereport`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateInformationAbuseReportResponse>;
      })
    );
  }
  /**
   * 创建消息举报
   *
   * 创建消息举报
   * @param params The `ModuleService.CreateInformationAbuseReportinformationabusereportPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `InformationId`: 消息编号
   *
   * - `Description`: 描述
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  CreateInformationAbuseReportinformationabusereportPost(params: ModuleService.CreateInformationAbuseReportinformationabusereportPostParams): __Observable<CreateInformationAbuseReportResponse> {
    return this.CreateInformationAbuseReportinformationabusereportPostResponse(params).pipe(
      __map(_r => _r.body as CreateInformationAbuseReportResponse)
    );
  }

  /**
   * 创建直播消息
   *
   * 创建直播消息
   * @param params The `ModuleService.CreateLivecastMessagelivecastmessagePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Width`: 宽度
   *
   * - `Url`: 地址
   *
   * - `Type`: 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   *
   * - `LivecastId`: 直播编号
   *
   * - `Height`: 高度
   *
   * - `Duration`: 时长（单位：秒）
   *
   * - `Description`: 描述
   *
   * - `ContentLength`: 内容长度
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateLivecastMessagelivecastmessagePostResponse(params: ModuleService.CreateLivecastMessagelivecastmessagePostParams): __Observable<__StrictHttpResponse<CreateLivecastMessageResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Width != null) { __formData.append('Width', JSON.stringify(params.Width));}
    if (params.Url != null) { __formData.append('Url', params.Url as string | Blob);}
    if (params.Type != null) { __formData.append('Type', JSON.stringify(params.Type));}
    if (params.LivecastId != null) { __formData.append('LivecastId', params.LivecastId as string | Blob);}
    if (params.Height != null) { __formData.append('Height', JSON.stringify(params.Height));}
    if (params.Duration != null) { __formData.append('Duration', JSON.stringify(params.Duration));}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.ContentLength != null) { __formData.append('ContentLength', JSON.stringify(params.ContentLength));}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/livecast/message`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateLivecastMessageResponse>;
      })
    );
  }
  /**
   * 创建直播消息
   *
   * 创建直播消息
   * @param params The `ModuleService.CreateLivecastMessagelivecastmessagePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Width`: 宽度
   *
   * - `Url`: 地址
   *
   * - `Type`: 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   *
   * - `LivecastId`: 直播编号
   *
   * - `Height`: 高度
   *
   * - `Duration`: 时长（单位：秒）
   *
   * - `Description`: 描述
   *
   * - `ContentLength`: 内容长度
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateLivecastMessagelivecastmessagePost(params: ModuleService.CreateLivecastMessagelivecastmessagePostParams): __Observable<CreateLivecastMessageResponse> {
    return this.CreateLivecastMessagelivecastmessagePostResponse(params).pipe(
      __map(_r => _r.body as CreateLivecastMessageResponse)
    );
  }

  /**
   * 删除直播消息
   *
   * 删除直播消息
   * @param params The `ModuleService.DeleteLivecastMessagelivecastmessageDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `MessageId`: 直播消息编号
   *
   * @return Success
   */
  DeleteLivecastMessagelivecastmessageDeleteResponse(params: ModuleService.DeleteLivecastMessagelivecastmessageDeleteParams): __Observable<__StrictHttpResponse<DeleteLivecastMessageResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.MessageId != null) __params = __params.set('MessageId', params.MessageId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/module/livecast/message`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteLivecastMessageResponse>;
      })
    );
  }
  /**
   * 删除直播消息
   *
   * 删除直播消息
   * @param params The `ModuleService.DeleteLivecastMessagelivecastmessageDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `MessageId`: 直播消息编号
   *
   * @return Success
   */
  DeleteLivecastMessagelivecastmessageDelete(params: ModuleService.DeleteLivecastMessagelivecastmessageDeleteParams): __Observable<DeleteLivecastMessageResponse> {
    return this.DeleteLivecastMessagelivecastmessageDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteLivecastMessageResponse)
    );
  }

  /**
   * 创建直播地址生成
   *
   * 创建直播地址生成
   * @param params The `ModuleService.CreateLivecastRtmpUrllivecastrtmpurlPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * @return Success
   */
  CreateLivecastRtmpUrllivecastrtmpurlPostResponse(params: ModuleService.CreateLivecastRtmpUrllivecastrtmpurlPostParams): __Observable<__StrictHttpResponse<CreateLivecastRtmpUrlResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/livecast/rtmpurl`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateLivecastRtmpUrlResponse>;
      })
    );
  }
  /**
   * 创建直播地址生成
   *
   * 创建直播地址生成
   * @param params The `ModuleService.CreateLivecastRtmpUrllivecastrtmpurlPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * @return Success
   */
  CreateLivecastRtmpUrllivecastrtmpurlPost(params: ModuleService.CreateLivecastRtmpUrllivecastrtmpurlPostParams): __Observable<CreateLivecastRtmpUrlResponse> {
    return this.CreateLivecastRtmpUrllivecastrtmpurlPostResponse(params).pipe(
      __map(_r => _r.body as CreateLivecastRtmpUrlResponse)
    );
  }

  /**
   * 创建本地通知
   *
   * 创建本地通知
   * @param params The `ModuleService.CreateLocalNotificationnotificationlocalPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Title`: 标题
   *
   * - `GuildId`: 教会编号
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateLocalNotificationnotificationlocalPostResponse(params: ModuleService.CreateLocalNotificationnotificationlocalPostParams): __Observable<__StrictHttpResponse<CreateLocalNotificationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/notification/local`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateLocalNotificationResponse>;
      })
    );
  }
  /**
   * 创建本地通知
   *
   * 创建本地通知
   * @param params The `ModuleService.CreateLocalNotificationnotificationlocalPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Title`: 标题
   *
   * - `GuildId`: 教会编号
   *
   * - `Description`: 描述
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateLocalNotificationnotificationlocalPost(params: ModuleService.CreateLocalNotificationnotificationlocalPostParams): __Observable<CreateLocalNotificationResponse> {
    return this.CreateLocalNotificationnotificationlocalPostResponse(params).pipe(
      __map(_r => _r.body as CreateLocalNotificationResponse)
    );
  }

  /**
   * 通知直播事件消息
   *
   * 通知直播事件消息
   * @param params The `ModuleService.NotifyLivecastsEventlivecastseventPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `width`: 截图宽，单位为像素
   *
   * - `video_url`: 录制附加文件下载 URL
   *
   * - `user_ip`: 用户推流 IP
   *
   * - `t`: 事件通知签名过期UNIX时间戳
   *
   * - `stream_param`: 用户推流URL所带参数
   *
   * - `stream_id`: 直播流名称
   *
   * - `start_time`: 录制文件起始时间戳
   *
   * - `sign`: 事件通知签名
   *
   * - `sequence`: 消息序列号
   *
   * - `push_duration`: 断流事件通知推流时长，单位毫秒
   *
   * - `pic_url`: 截图文件路径
   *
   * - `pic_full_url`: 截图下载 URL
   *
   * - `node`: 直播接入点的 IP
   *
   * - `height`: 截图高，单位为像素
   *
   * - `file_size`: 录制文件大小，单位字节
   *
   * - `file_id`: 点播文件ID
   *
   * - `file_format`: 点播文件格式
   *
   * - `event_type`: 事件通知信息类型
   *
   * - `event_time`: 事件消息产生的UNIX时间戳
   *
   * - `errmsg`: 推断流错误描述
   *
   * - `errcode`: 推断流错误码
   *
   * - `end_time`: 录制文件结束时间戳
   *
   * - `duration`: 断流事件通知推流时长，单位毫秒
   *
   * - `create_time`: 录制文件结束时间戳
   *
   * - `channel_id`: 同直播流名称
   *
   * - `body`:
   *
   * - `appname`: 推流路径
   *
   * - `appid`: 用户的APPID
   *
   * - `app`: 推流域名
   *
   * @return Success
   */
  NotifyLivecastsEventlivecastseventPostResponse(params: ModuleService.NotifyLivecastsEventlivecastseventPostParams): __Observable<__StrictHttpResponse<NotifyLivecastsEventResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.width != null) { __formData.append('width', JSON.stringify(params.width));}
    if (params.videoUrl != null) { __formData.append('video_url', params.videoUrl as string | Blob);}
    if (params.userIp != null) { __formData.append('user_ip', params.userIp as string | Blob);}
    if (params.t != null) { __formData.append('t', JSON.stringify(params.t));}
    if (params.streamParam != null) { __formData.append('stream_param', params.streamParam as string | Blob);}
    if (params.streamId != null) { __formData.append('stream_id', params.streamId as string | Blob);}
    if (params.startTime != null) { __formData.append('start_time', JSON.stringify(params.startTime));}
    if (params.sign != null) { __formData.append('sign', params.sign as string | Blob);}
    if (params.sequence != null) { __formData.append('sequence', params.sequence as string | Blob);}
    if (params.pushDuration != null) { __formData.append('push_duration', JSON.stringify(params.pushDuration));}
    if (params.picUrl != null) { __formData.append('pic_url', params.picUrl as string | Blob);}
    if (params.picFullUrl != null) { __formData.append('pic_full_url', params.picFullUrl as string | Blob);}
    if (params.node != null) { __formData.append('node', params.node as string | Blob);}
    if (params.height != null) { __formData.append('height', JSON.stringify(params.height));}
    if (params.fileSize != null) { __formData.append('file_size', JSON.stringify(params.fileSize));}
    if (params.fileId != null) { __formData.append('file_id', params.fileId as string | Blob);}
    if (params.fileFormat != null) { __formData.append('file_format', params.fileFormat as string | Blob);}
    if (params.eventType != null) { __formData.append('event_type', JSON.stringify(params.eventType));}
    if (params.eventTime != null) { __formData.append('event_time', JSON.stringify(params.eventTime));}
    if (params.errmsg != null) { __formData.append('errmsg', params.errmsg as string | Blob);}
    if (params.errcode != null) { __formData.append('errcode', JSON.stringify(params.errcode));}
    if (params.endTime != null) { __formData.append('end_time', JSON.stringify(params.endTime));}
    if (params.duration != null) { __formData.append('duration', JSON.stringify(params.duration));}
    if (params.createTime != null) { __formData.append('create_time', JSON.stringify(params.createTime));}
    if (params.channelId != null) { __formData.append('channel_id', params.channelId as string | Blob);}
    __body = params.body;
    if (params.appname != null) { __formData.append('appname', params.appname as string | Blob);}
    if (params.appid != null) { __formData.append('appid', JSON.stringify(params.appid));}
    if (params.app != null) { __formData.append('app', params.app as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/livecasts/event`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotifyLivecastsEventResponse>;
      })
    );
  }
  /**
   * 通知直播事件消息
   *
   * 通知直播事件消息
   * @param params The `ModuleService.NotifyLivecastsEventlivecastseventPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `width`: 截图宽，单位为像素
   *
   * - `video_url`: 录制附加文件下载 URL
   *
   * - `user_ip`: 用户推流 IP
   *
   * - `t`: 事件通知签名过期UNIX时间戳
   *
   * - `stream_param`: 用户推流URL所带参数
   *
   * - `stream_id`: 直播流名称
   *
   * - `start_time`: 录制文件起始时间戳
   *
   * - `sign`: 事件通知签名
   *
   * - `sequence`: 消息序列号
   *
   * - `push_duration`: 断流事件通知推流时长，单位毫秒
   *
   * - `pic_url`: 截图文件路径
   *
   * - `pic_full_url`: 截图下载 URL
   *
   * - `node`: 直播接入点的 IP
   *
   * - `height`: 截图高，单位为像素
   *
   * - `file_size`: 录制文件大小，单位字节
   *
   * - `file_id`: 点播文件ID
   *
   * - `file_format`: 点播文件格式
   *
   * - `event_type`: 事件通知信息类型
   *
   * - `event_time`: 事件消息产生的UNIX时间戳
   *
   * - `errmsg`: 推断流错误描述
   *
   * - `errcode`: 推断流错误码
   *
   * - `end_time`: 录制文件结束时间戳
   *
   * - `duration`: 断流事件通知推流时长，单位毫秒
   *
   * - `create_time`: 录制文件结束时间戳
   *
   * - `channel_id`: 同直播流名称
   *
   * - `body`:
   *
   * - `appname`: 推流路径
   *
   * - `appid`: 用户的APPID
   *
   * - `app`: 推流域名
   *
   * @return Success
   */
  NotifyLivecastsEventlivecastseventPost(params: ModuleService.NotifyLivecastsEventlivecastseventPostParams): __Observable<NotifyLivecastsEventResponse> {
    return this.NotifyLivecastsEventlivecastseventPostResponse(params).pipe(
      __map(_r => _r.body as NotifyLivecastsEventResponse)
    );
  }

  /**
   * 查询一组讨论内容
   *
   * 查询一组讨论内容
   * @param params The `ModuleService.SearchDiscussContentsdiscusscontentsGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已删除; 0: 正常）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：UserAuthId, Type, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `DiscussId`: 讨论编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchDiscussContentsdiscusscontentsGetResponse(params: ModuleService.SearchDiscussContentsdiscusscontentsGetParams): __Observable<__StrictHttpResponse<SearchDiscussContentsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Status != null) __params = __params.set('Status', params.Status.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.DiscussId != null) __params = __params.set('DiscussId', params.DiscussId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/discuss/contents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SearchDiscussContentsResponse>;
      })
    );
  }
  /**
   * 查询一组讨论内容
   *
   * 查询一组讨论内容
   * @param params The `ModuleService.SearchDiscussContentsdiscusscontentsGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已删除; 0: 正常）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：UserAuthId, Type, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `DiscussId`: 讨论编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchDiscussContentsdiscusscontentsGet(params: ModuleService.SearchDiscussContentsdiscusscontentsGetParams): __Observable<SearchDiscussContentsResponse> {
    return this.SearchDiscussContentsdiscusscontentsGetResponse(params).pipe(
      __map(_r => _r.body as SearchDiscussContentsResponse)
    );
  }

  /**
   * 显示单个信仰装备的请求
   *
   * 显示单个信仰装备的请求
   * @param params The `ModuleService.ShowBeliefEquipbeliefequipshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `BeliefEquipId`: *信仰装备ID
   *
   * @return Success
   */
  ShowBeliefEquipbeliefequipshowGetResponse(params: ModuleService.ShowBeliefEquipbeliefequipshowGetParams): __Observable<__StrictHttpResponse<ShowBeliefEquipResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.BeliefEquipId != null) __params = __params.set('BeliefEquipId', params.BeliefEquipId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/beliefequip/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowBeliefEquipResponse>;
      })
    );
  }
  /**
   * 显示单个信仰装备的请求
   *
   * 显示单个信仰装备的请求
   * @param params The `ModuleService.ShowBeliefEquipbeliefequipshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `BeliefEquipId`: *信仰装备ID
   *
   * @return Success
   */
  ShowBeliefEquipbeliefequipshowGet(params: ModuleService.ShowBeliefEquipbeliefequipshowGetParams): __Observable<ShowBeliefEquipResponse> {
    return this.ShowBeliefEquipbeliefequipshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowBeliefEquipResponse)
    );
  }

  /**
   * 批量显示当前用户教会的信仰装备
   *
   * 批量显示当前用户教会的信仰装备
   * @param params The `ModuleService.ShowBeliefEquipsbeliefequipsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: *信仰装备类型 （1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它）
   *
   * - `Status`: -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待发布
   *
   * - `Skip`: 忽略的行数（默认：0）
   *
   * - `OrderBy`: 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate)（默认：CreatedDate）
   *
   * - `Limit`: 获取的行数（默认：5;不填取全部）
   *
   * - `GuildId`: *教会编号
   *
   * - `Descending`: 是否按降序排序（默认：是）
   *
   * @return Success
   */
  ShowBeliefEquipsbeliefequipsshowGetResponse(params: ModuleService.ShowBeliefEquipsbeliefequipsshowGetParams): __Observable<__StrictHttpResponse<ShowBeliefEquipsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Status != null) __params = __params.set('Status', params.Status.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/beliefequips/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowBeliefEquipsResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户教会的信仰装备
   *
   * 批量显示当前用户教会的信仰装备
   * @param params The `ModuleService.ShowBeliefEquipsbeliefequipsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: *信仰装备类型 （1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它）
   *
   * - `Status`: -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待发布
   *
   * - `Skip`: 忽略的行数（默认：0）
   *
   * - `OrderBy`: 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate)（默认：CreatedDate）
   *
   * - `Limit`: 获取的行数（默认：5;不填取全部）
   *
   * - `GuildId`: *教会编号
   *
   * - `Descending`: 是否按降序排序（默认：是）
   *
   * @return Success
   */
  ShowBeliefEquipsbeliefequipsshowGet(params: ModuleService.ShowBeliefEquipsbeliefequipsshowGetParams): __Observable<ShowBeliefEquipsResponse> {
    return this.ShowBeliefEquipsbeliefequipsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowBeliefEquipsResponse)
    );
  }

  /**
   * 显示讨论
   *
   * 显示讨论
   * @param params The `ModuleService.ShowDiscussdiscussshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  ShowDiscussdiscussshowGetResponse(params: ModuleService.ShowDiscussdiscussshowGetParams): __Observable<__StrictHttpResponse<ShowDiscussResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.DiscussId != null) __params = __params.set('DiscussId', params.DiscussId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/discuss/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowDiscussResponse>;
      })
    );
  }
  /**
   * 显示讨论
   *
   * 显示讨论
   * @param params The `ModuleService.ShowDiscussdiscussshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  ShowDiscussdiscussshowGet(params: ModuleService.ShowDiscussdiscussshowGetParams): __Observable<ShowDiscussResponse> {
    return this.ShowDiscussdiscussshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowDiscussResponse)
    );
  }

  /**
   * 显示单个information的请求
   *
   * 显示单个information的请求
   * @param params The `ModuleService.ShowInformationinformationshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `informationId`: *informationId
   *
   * @return Success
   */
  ShowInformationinformationshowGetResponse(params: ModuleService.ShowInformationinformationshowGetParams): __Observable<__StrictHttpResponse<ShowInformationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.informationId != null) __params = __params.set('informationId', params.informationId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/information/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowInformationResponse>;
      })
    );
  }
  /**
   * 显示单个information的请求
   *
   * 显示单个information的请求
   * @param params The `ModuleService.ShowInformationinformationshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `informationId`: *informationId
   *
   * @return Success
   */
  ShowInformationinformationshowGet(params: ModuleService.ShowInformationinformationshowGetParams): __Observable<ShowInformationResponse> {
    return this.ShowInformationinformationshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowInformationResponse)
    );
  }

  /**
   * 批量显示当前用户的消息
   *
   * 批量显示当前用户的消息
   * @param params The `ModuleService.ShowInformationsinformationsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契; 4: 系统消息）
   *
   * - `Status`: 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowInformationsinformationsshowGetResponse(params: ModuleService.ShowInformationsinformationsshowGetParams): __Observable<__StrictHttpResponse<ShowInformationsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Status != null) __params = __params.set('Status', params.Status.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/informations/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowInformationsResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户的消息
   *
   * 批量显示当前用户的消息
   * @param params The `ModuleService.ShowInformationsinformationsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契; 4: 系统消息）
   *
   * - `Status`: 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowInformationsinformationsshowGet(params: ModuleService.ShowInformationsinformationsshowGetParams): __Observable<ShowInformationsResponse> {
    return this.ShowInformationsinformationsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowInformationsResponse)
    );
  }

  /**
   * 显示直播
   *
   * 显示直播
   * @param params The `ModuleService.ShowLivecastlivecastshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号|直播标识
   *
   * @return Success
   */
  ShowLivecastlivecastshowGetResponse(params: ModuleService.ShowLivecastlivecastshowGetParams): __Observable<__StrictHttpResponse<ShowLivecastResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.LivecastId != null) __params = __params.set('LivecastId', params.LivecastId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/livecast/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowLivecastResponse>;
      })
    );
  }
  /**
   * 显示直播
   *
   * 显示直播
   * @param params The `ModuleService.ShowLivecastlivecastshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `LivecastId`: 直播编号|直播标识
   *
   * @return Success
   */
  ShowLivecastlivecastshowGet(params: ModuleService.ShowLivecastlivecastshowGetParams): __Observable<ShowLivecastResponse> {
    return this.ShowLivecastlivecastshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowLivecastResponse)
    );
  }

  /**
   * 显示通知
   *
   * 显示通知
   * @param params The `ModuleService.ShowNotificationnotificationshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `NotificationId`: 通知编号
   *
   * @return Success
   */
  ShowNotificationnotificationshowGetResponse(params: ModuleService.ShowNotificationnotificationshowGetParams): __Observable<__StrictHttpResponse<ShowNotificationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.NotificationId != null) __params = __params.set('NotificationId', params.NotificationId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/notification/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowNotificationResponse>;
      })
    );
  }
  /**
   * 显示通知
   *
   * 显示通知
   * @param params The `ModuleService.ShowNotificationnotificationshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `NotificationId`: 通知编号
   *
   * @return Success
   */
  ShowNotificationnotificationshowGet(params: ModuleService.ShowNotificationnotificationshowGetParams): __Observable<ShowNotificationResponse> {
    return this.ShowNotificationnotificationshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowNotificationResponse)
    );
  }

  /**
   * 开始直播
   *
   * 开始直播
   * @param params The `ModuleService.StartLivecastslivecastsstartCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Identifier`: 标识
   *
   * @return Success
   */
  StartLivecastslivecastsstartCreateResponse(params: ModuleService.StartLivecastslivecastsstartCreateParams): __Observable<__StrictHttpResponse<StartLivecastsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Identifier != null) { __formData.append('Identifier', params.Identifier as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/livecasts/start`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StartLivecastsResponse>;
      })
    );
  }
  /**
   * 开始直播
   *
   * 开始直播
   * @param params The `ModuleService.StartLivecastslivecastsstartCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Identifier`: 标识
   *
   * @return Success
   */
  StartLivecastslivecastsstartCreate(params: ModuleService.StartLivecastslivecastsstartCreateParams): __Observable<StartLivecastsResponse> {
    return this.StartLivecastslivecastsstartCreateResponse(params).pipe(
      __map(_r => _r.body as StartLivecastsResponse)
    );
  }

  /**
   * 停止直播
   *
   * 停止直播
   * @param params The `ModuleService.StopLivecastslivecastsstopCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Identifier`: 标识
   *
   * @return Success
   */
  StopLivecastslivecastsstopCreateResponse(params: ModuleService.StopLivecastslivecastsstopCreateParams): __Observable<__StrictHttpResponse<StopLivecastsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Identifier != null) { __formData.append('Identifier', params.Identifier as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/module/livecasts/stop`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StopLivecastsResponse>;
      })
    );
  }
  /**
   * 停止直播
   *
   * 停止直播
   * @param params The `ModuleService.StopLivecastslivecastsstopCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Identifier`: 标识
   *
   * @return Success
   */
  StopLivecastslivecastsstopCreate(params: ModuleService.StopLivecastslivecastsstopCreateParams): __Observable<StopLivecastsResponse> {
    return this.StopLivecastslivecastsstopCreateResponse(params).pipe(
      __map(_r => _r.body as StopLivecastsResponse)
    );
  }

  /**
   * 创建消息转发
   *
   * 创建消息转发
   * @param params The `ModuleService.TranspondInformationsinformationTranspondPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserAuthIds`: 用户编号集合
   *
   * - `InformationIds`: 消息编号集合
   *
   * @return Success
   */
  TranspondInformationsinformationTranspondPostResponse(params: ModuleService.TranspondInformationsinformationTranspondPostParams): __Observable<__StrictHttpResponse<TranspondInformationsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    (params.UserAuthIds || []).forEach(val => {if (val != null) __formData.append('UserAuthIds', val as string | Blob)});
    (params.InformationIds || []).forEach(val => {if (val != null) __formData.append('InformationIds', val as string | Blob)});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/module/information/Transpond`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TranspondInformationsResponse>;
      })
    );
  }
  /**
   * 创建消息转发
   *
   * 创建消息转发
   * @param params The `ModuleService.TranspondInformationsinformationTranspondPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserAuthIds`: 用户编号集合
   *
   * - `InformationIds`: 消息编号集合
   *
   * @return Success
   */
  TranspondInformationsinformationTranspondPost(params: ModuleService.TranspondInformationsinformationTranspondPostParams): __Observable<TranspondInformationsResponse> {
    return this.TranspondInformationsinformationTranspondPostResponse(params).pipe(
      __map(_r => _r.body as TranspondInformationsResponse)
    );
  }

  /**
   * 批量显示当前用户的讨论内容消息
   *
   * 批量显示当前用户的讨论内容消息
   * @param params The `ModuleService.ShowDiscussContentMessagesdiscusscontentmessagesshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：ContentId, ContentUserAuthId, ParentId, ParentUserAuthId, Type, UserAuthId, Description, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `DiscussId`: 讨论编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowDiscussContentMessagesdiscusscontentmessagesshowGetResponse(params: ModuleService.ShowDiscussContentMessagesdiscusscontentmessagesshowGetParams): __Observable<__StrictHttpResponse<ShowDiscussContentMessagesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.DiscussId != null) __params = __params.set('DiscussId', params.DiscussId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/discuss/content/messages/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowDiscussContentMessagesResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户的讨论内容消息
   *
   * 批量显示当前用户的讨论内容消息
   * @param params The `ModuleService.ShowDiscussContentMessagesdiscusscontentmessagesshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：ContentId, ContentUserAuthId, ParentId, ParentUserAuthId, Type, UserAuthId, Description, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `DiscussId`: 讨论编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowDiscussContentMessagesdiscusscontentmessagesshowGet(params: ModuleService.ShowDiscussContentMessagesdiscusscontentmessagesshowGetParams): __Observable<ShowDiscussContentMessagesResponse> {
    return this.ShowDiscussContentMessagesdiscusscontentmessagesshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowDiscussContentMessagesResponse)
    );
  }

  /**
   * 显示当前用户的新讨论内容消息总数
   *
   * 显示当前用户的新讨论内容消息总数
   * @param params The `ModuleService.ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetResponse(params: ModuleService.ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetParams): __Observable<__StrictHttpResponse<ShowNewDiscussContentMessagesCountResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.DiscussId != null) __params = __params.set('DiscussId', params.DiscussId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/module/discuss/content/messages/count/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowNewDiscussContentMessagesCountResponse>;
      })
    );
  }
  /**
   * 显示当前用户的新讨论内容消息总数
   *
   * 显示当前用户的新讨论内容消息总数
   * @param params The `ModuleService.ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DiscussId`: 讨论编号
   *
   * @return Success
   */
  ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGet(params: ModuleService.ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetParams): __Observable<ShowNewDiscussContentMessagesCountResponse> {
    return this.ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowNewDiscussContentMessagesCountResponse)
    );
  }
}

module ModuleService {

  /**
   * Parameters for CreateBeliefEquipbeliefequipPost
   */
  export interface CreateBeliefEquipbeliefequipPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * linkUrl
     */
    linkUrl?: string;
    body?: CreateBeliefEquip;

    /**
     * 敬拜人|敬拜教会(默认：null)
     */
    WorshipOwner?: string;

    /**
     * *信仰装备类型 (1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它)
     */
    Type?: number;

    /**
     * 标题
     */
    Title?: string;

    /**
     * 是否发布(默认：true)
     */
    ShouldPublish?: boolean;

    /**
     * 是否复制文件到教会文件中(默认：false)
     */
    ShouldCopyFiles?: boolean;

    /**
     * *敬拜时间
     */
    PublishedDate?: string;

    /**
     * 导入直播ID时候，Yes：需要填写GuildId，Type  其它字段根据直播记录自动生成
     */
    LiveCastIds?: Array<string>;

    /**
     * 是否置顶(默认：false)
     */
    IsFeatured?: boolean;

    /**
     * *教会ID
     */
    GuildId?: string;

    /**
     * 文件列表
     */
    Files?: Array<FileInfo>;

    /**
     * 置顶过期时间(默认：null)
     */
    FeaturedExpiryDate?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for CreateDiscussesdiscussesPost
   */
  export interface CreateDiscussesdiscussesPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * linkUrl
     */
    linkUrl?: string;
    body?: CreateDiscusses;

    /**
     * 主题
     */
    Title?: string;

    /**
     * 是否复制文件到教会文件中
     */
    ShouldCopyFiles?: boolean;

    /**
     * 接收者成员列表
     */
    ReceiverMemberIds?: Array<string>;

    /**
     * 是否置顶
     */
    IsFeatured?: boolean;

    /**
     * 文件列表
     */
    Files?: Array<FileInfo>;

    /**
     * 置顶过期时间
     */
    FeaturedExpiryDate?: string;

    /**
     * 结束时间
     */
    EndDate?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for CreateLivecastslivecastsPost
   */
  export interface CreateLivecastslivecastsPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * linkUrl
     */
    linkUrl?: string;
    body?: CreateLivecasts;

    /**
     * 主题
     */
    Title?: string;

    /**
     * 主讲人
     */
    Speaker?: string;

    /**
     * 是否复制文件到教会文件中
     */
    ShouldCopyFiles?: boolean;

    /**
     * 接收者成员列表
     */
    ReceiverMemberIds?: Array<string>;

    /**
     * 是否置顶
     */
    IsFeatured?: boolean;

    /**
     * 文件列表
     */
    Files?: Array<FileInfo>;

    /**
     * 置顶过期时间
     */
    FeaturedExpiryDate?: string;

    /**
     * 结束时间
     */
    EndDate?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 开始时间
     */
    BeginDate?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for CreateNotificationsnotificationsPost
   */
  export interface CreateNotificationsnotificationsPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * linkUrl
     */
    linkUrl?: string;
    body?: CreateNotifications;

    /**
     * 是否发布
     */
    ShouldPublish?: boolean;

    /**
     * 是否复制文件到教会文件中
     */
    ShouldCopyFiles?: boolean;

    /**
     * 接收者成员列表
     */
    ReceiverMemberIds?: Array<string>;

    /**
     * 计划发布时间
     */
    PublishedScheduleDate?: string;

    /**
     * 是否置顶
     */
    IsFeatured?: boolean;

    /**
     * 文件列表
     */
    Files?: Array<FileInfo>;

    /**
     * 置顶过期时间
     */
    FeaturedExpiryDate?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for DeleteBeliefEquipsbeliefequipsDelete
   */
  export interface DeleteBeliefEquipsbeliefequipsDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 信仰装备编号列表
     */
    BeliefEquipIds?: Array<string>;
  }

  /**
   * Parameters for DeleteDiscussdiscussDelete
   */
  export interface DeleteDiscussdiscussDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 讨论编号
     */
    DiscussId?: string;
  }

  /**
   * Parameters for DeleteInformationinformationDelete
   */
  export interface DeleteInformationinformationDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 消息编号
     */
    InformationId?: string;
  }

  /**
   * Parameters for DeleteLivecastlivecastDelete
   */
  export interface DeleteLivecastlivecastDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 直播编号
     */
    LivecastId?: string;
  }

  /**
   * Parameters for DeleteNotificationnotificationDelete
   */
  export interface DeleteNotificationnotificationDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 通知编号
     */
    NotificationId?: string;
  }

  /**
   * Parameters for CreateDiscussContentCommentdiscusscontentcommentPost
   */
  export interface CreateDiscussContentCommentdiscusscontentcommentPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateDiscussContentComment;

    /**
     * 上级评论编号
     */
    ParentCommentId?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 讨论内容编号
     */
    ContentId?: string;
  }

  /**
   * Parameters for DeleteDiscussContentCommentdiscusscontentcommentDelete
   */
  export interface DeleteDiscussContentCommentdiscusscontentcommentDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 讨论内容评论编号
     */
    CommentId?: string;
  }

  /**
   * Parameters for ToggleDiscussContentLikediscusscontentlikeCreate
   */
  export interface ToggleDiscussContentLikediscusscontentlikeCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ToggleDiscussContentLike;

    /**
     * 讨论内容编号
     */
    ContentId?: string;
  }

  /**
   * Parameters for CreateDiscussContentLikediscusscontentlikePost
   */
  export interface CreateDiscussContentLikediscusscontentlikePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateDiscussContentLike;

    /**
     * 讨论内容编号
     */
    ContentId?: string;
  }

  /**
   * Parameters for DeleteDiscussContentLikediscusscontentlikeDelete
   */
  export interface DeleteDiscussContentLikediscusscontentlikeDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 讨论内容编号
     */
    ContentId?: string;
  }

  /**
   * Parameters for EnterLivecastlivecastreceiverenterCreate
   */
  export interface EnterLivecastlivecastreceiverenterCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: EnterLivecast;

    /**
     * 直播编号
     */
    LivecastId?: string;
  }

  /**
   * Parameters for JoinDiscussdiscussreceiverjoinCreate
   */
  export interface JoinDiscussdiscussreceiverjoinCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: JoinDiscuss;

    /**
     * 讨论编号
     */
    DiscussId?: string;
  }

  /**
   * Parameters for JoinLivecastlivecastreceiverjoinCreate
   */
  export interface JoinLivecastlivecastreceiverjoinCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: JoinLivecast;

    /**
     * 直播编号
     */
    LivecastId?: string;
  }

  /**
   * Parameters for LeaveLivecastlivecastreceiverleaveCreate
   */
  export interface LeaveLivecastlivecastreceiverleaveCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: LeaveLivecast;

    /**
     * 直播编号
     */
    LivecastId?: string;
  }

  /**
   * Parameters for NotifyLivecastsEventAliyunlivecastsaliyuneventPost
   */
  export interface NotifyLivecastsEventAliyunlivecastsaliyuneventPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * uri
     */
    uri?: string;

    /**
     * stream
     */
    stream?: string;

    /**
     * stop_time
     */
    stopTime?: number;

    /**
     * start_time
     */
    startTime?: number;

    /**
     * 事件
     */
    event?: string;

    /**
     * duration
     */
    duration?: number;

    /**
     * domain
     */
    domain?: string;
    body?: NotifyLivecastsEventAliyun;

    /**
     * app
     */
    app?: string;
  }

  /**
   * Parameters for RemindDiscussReceiversdiscussreceiversremindCreate
   */
  export interface RemindDiscussReceiversdiscussreceiversremindCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: RemindDiscussReceivers;

    /**
     * 提醒类型（0: 未查看; 1: 未参与）
     */
    RemindType?: number;

    /**
     * 讨论编号
     */
    DiscussId?: string;
  }

  /**
   * Parameters for RemindInformationReceiversinformationreceiversremindCreate
   */
  export interface RemindInformationReceiversinformationreceiversremindCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: RemindInformationReceivers;

    /**
     * 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
     */
    RemindType?: number;

    /**
     * 消息编号
     */
    InformationId?: string;
  }

  /**
   * Parameters for RemindLivecastReceiverslivecastreceiversremindCreate
   */
  export interface RemindLivecastReceiverslivecastreceiversremindCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: RemindLivecastReceivers;

    /**
     * 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
     */
    RemindType?: number;

    /**
     * 直播编号
     */
    LivecastId?: string;
  }

  /**
   * Parameters for RemindNotificationReceiversnotificationreceiversremindCreate
   */
  export interface RemindNotificationReceiversnotificationreceiversremindCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: RemindNotificationReceivers;

    /**
     * 提醒类型（0: 未查看; 1: 未参与）
     */
    RemindType?: number;

    /**
     * 通知编号
     */
    NotificationId?: string;
  }

  /**
   * Parameters for ShowFavoriteInformationsinformationsfavoriteshowGet
   */
  export interface ShowFavoriteInformationsinformationsfavoriteshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
     */
    Type?: number;

    /**
     * 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
     */
    Status?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
     */
    OrderBy?: string;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowInformationReceiversinformationreceiversshowGet
   */
  export interface ShowInformationReceiversinformationreceiversshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 消息编号
     */
    InformationId?: string;
  }

  /**
   * Parameters for ShowLivecastForH5livecasth5showGet
   */
  export interface ShowLivecastForH5livecasth5showGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 直播编号|直播标识
     */
    LivecastId?: string;
  }

  /**
   * Parameters for ShowLivecastRoomInfolivecastroomshowGet
   */
  export interface ShowLivecastRoomInfolivecastroomshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 直播编号
     */
    LivecastId?: string;
  }

  /**
   * Parameters for CreateDiscussContentdiscusscontentPost
   */
  export interface CreateDiscussContentdiscusscontentPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateDiscussContent;

    /**
     * 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     */
    Type?: number;

    /**
     * 文件列表
     */
    Files?: Array<FileInfo>;

    /**
     * 讨论编号
     */
    DiscussId?: string;

    /**
     * 描述
     */
    Description?: string;
  }

  /**
   * Parameters for DeleteDiscussContentdiscusscontentDelete
   */
  export interface DeleteDiscussContentdiscusscontentDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 讨论内容编号
     */
    ContentId?: string;
  }

  /**
   * Parameters for CreateFavoriteinformationfavoritePost
   */
  export interface CreateFavoriteinformationfavoritePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateFavorite;

    /**
     * 消息编号
     */
    InformationId?: string;
  }

  /**
   * Parameters for DeleteFavoriteinformationfavoriteDelete
   */
  export interface DeleteFavoriteinformationfavoriteDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 消息编号
     */
    InformationId?: string;
  }

  /**
   * Parameters for CreateInformationAbuseReportinformationabusereportPost
   */
  export interface CreateInformationAbuseReportinformationabusereportPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateInformationAbuseReport;

    /**
     * 消息编号
     */
    InformationId?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 分类
     */
    Category?: string;
  }

  /**
   * Parameters for CreateLivecastMessagelivecastmessagePost
   */
  export interface CreateLivecastMessagelivecastmessagePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateLivecastMessage;

    /**
     * 宽度
     */
    Width?: number;

    /**
     * 地址
     */
    Url?: string;

    /**
     * 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     */
    Type?: number;

    /**
     * 直播编号
     */
    LivecastId?: string;

    /**
     * 高度
     */
    Height?: number;

    /**
     * 时长（单位：秒）
     */
    Duration?: number;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 内容长度
     */
    ContentLength?: number;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for DeleteLivecastMessagelivecastmessageDelete
   */
  export interface DeleteLivecastMessagelivecastmessageDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 直播消息编号
     */
    MessageId?: string;
  }

  /**
   * Parameters for CreateLivecastRtmpUrllivecastrtmpurlPost
   */
  export interface CreateLivecastRtmpUrllivecastrtmpurlPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateLivecastRtmpUrl;
  }

  /**
   * Parameters for CreateLocalNotificationnotificationlocalPost
   */
  export interface CreateLocalNotificationnotificationlocalPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateLocalNotification;

    /**
     * 标题
     */
    Title?: string;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for NotifyLivecastsEventlivecastseventPost
   */
  export interface NotifyLivecastsEventlivecastseventPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 截图宽，单位为像素
     */
    width?: number;

    /**
     * 录制附加文件下载 URL
     */
    videoUrl?: string;

    /**
     * 用户推流 IP
     */
    userIp?: string;

    /**
     * 事件通知签名过期UNIX时间戳
     */
    t?: number;

    /**
     * 用户推流URL所带参数
     */
    streamParam?: string;

    /**
     * 直播流名称
     */
    streamId?: string;

    /**
     * 录制文件起始时间戳
     */
    startTime?: number;

    /**
     * 事件通知签名
     */
    sign?: string;

    /**
     * 消息序列号
     */
    sequence?: string;

    /**
     * 断流事件通知推流时长，单位毫秒
     */
    pushDuration?: number;

    /**
     * 截图文件路径
     */
    picUrl?: string;

    /**
     * 截图下载 URL
     */
    picFullUrl?: string;

    /**
     * 直播接入点的 IP
     */
    node?: string;

    /**
     * 截图高，单位为像素
     */
    height?: number;

    /**
     * 录制文件大小，单位字节
     */
    fileSize?: number;

    /**
     * 点播文件ID
     */
    fileId?: string;

    /**
     * 点播文件格式
     */
    fileFormat?: string;

    /**
     * 事件通知信息类型
     */
    eventType?: number;

    /**
     * 事件消息产生的UNIX时间戳
     */
    eventTime?: number;

    /**
     * 推断流错误描述
     */
    errmsg?: string;

    /**
     * 推断流错误码
     */
    errcode?: number;

    /**
     * 录制文件结束时间戳
     */
    endTime?: number;

    /**
     * 断流事件通知推流时长，单位毫秒
     */
    duration?: number;

    /**
     * 录制文件结束时间戳
     */
    createTime?: number;

    /**
     * 同直播流名称
     */
    channelId?: string;
    body?: NotifyLivecastsEvent;

    /**
     * 推流路径
     */
    appname?: string;

    /**
     * 用户的APPID
     */
    appid?: number;

    /**
     * 推流域名
     */
    app?: string;
  }

  /**
   * Parameters for SearchDiscussContentsdiscusscontentsGet
   */
  export interface SearchDiscussContentsdiscusscontentsGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     */
    Type?: number;

    /**
     * 状态（-2: 已屏蔽; -1: 已删除; 0: 正常）
     */
    Status?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：UserAuthId, Type, CreatedDate, ModifiedDate, Status
     */
    OrderBy?: string;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 讨论编号
     */
    DiscussId?: string;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowBeliefEquipbeliefequipshowGet
   */
  export interface ShowBeliefEquipbeliefequipshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * *信仰装备ID
     */
    BeliefEquipId?: string;
  }

  /**
   * Parameters for ShowBeliefEquipsbeliefequipsshowGet
   */
  export interface ShowBeliefEquipsbeliefequipsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * *信仰装备类型 （1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它）
     */
    Type?: number;

    /**
     * -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待发布
     */
    Status?: number;

    /**
     * 忽略的行数（默认：0）
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate)（默认：CreatedDate）
     */
    OrderBy?: string;

    /**
     * 获取的行数（默认：5;不填取全部）
     */
    Limit?: number;

    /**
     * *教会编号
     */
    GuildId?: string;

    /**
     * 是否按降序排序（默认：是）
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowDiscussdiscussshowGet
   */
  export interface ShowDiscussdiscussshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 讨论编号
     */
    DiscussId?: string;
  }

  /**
   * Parameters for ShowInformationinformationshowGet
   */
  export interface ShowInformationinformationshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * *informationId
     */
    informationId?: string;
  }

  /**
   * Parameters for ShowInformationsinformationsshowGet
   */
  export interface ShowInformationsinformationsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契; 4: 系统消息）
     */
    Type?: number;

    /**
     * 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
     */
    Status?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
     */
    OrderBy?: string;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowLivecastlivecastshowGet
   */
  export interface ShowLivecastlivecastshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 直播编号|直播标识
     */
    LivecastId?: string;
  }

  /**
   * Parameters for ShowNotificationnotificationshowGet
   */
  export interface ShowNotificationnotificationshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 通知编号
     */
    NotificationId?: string;
  }

  /**
   * Parameters for StartLivecastslivecastsstartCreate
   */
  export interface StartLivecastslivecastsstartCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: StartLivecasts;

    /**
     * 标识
     */
    Identifier?: string;
  }

  /**
   * Parameters for StopLivecastslivecastsstopCreate
   */
  export interface StopLivecastslivecastsstopCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: StopLivecasts;

    /**
     * 标识
     */
    Identifier?: string;
  }

  /**
   * Parameters for TranspondInformationsinformationTranspondPost
   */
  export interface TranspondInformationsinformationTranspondPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: TranspondInformations;

    /**
     * 用户编号集合
     */
    UserAuthIds?: Array<string>;

    /**
     * 消息编号集合
     */
    InformationIds?: Array<string>;
  }

  /**
   * Parameters for ShowDiscussContentMessagesdiscusscontentmessagesshowGet
   */
  export interface ShowDiscussContentMessagesdiscusscontentmessagesshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：ContentId, ContentUserAuthId, ParentId, ParentUserAuthId, Type, UserAuthId, Description, CreatedDate, ModifiedDate
     */
    OrderBy?: string;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 讨论编号
     */
    DiscussId?: string;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGet
   */
  export interface ShowNewDiscussContentMessagesCountdiscusscontentmessagescountshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 讨论编号
     */
    DiscussId?: string;
  }
}

export { ModuleService }
