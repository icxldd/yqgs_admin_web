/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuditGuildMemberResponse } from '../models/audit-guild-member-response';
import { AuditGuildMember } from '../models/audit-guild-member';
import { BlockGuildResponse } from '../models/block-guild-response';
import { BlockGuild } from '../models/block-guild';
import { ChangeGuildAddressResponse } from '../models/change-guild-address-response';
import { ChangeGuildAddress } from '../models/change-guild-address';
import { ChangeGuildAuditModeResponse } from '../models/change-guild-audit-mode-response';
import { ChangeGuildAuditMode } from '../models/change-guild-audit-mode';
import { ChangeGuildAvatarResponse } from '../models/change-guild-avatar-response';
import { ChangeGuildAvatar } from '../models/change-guild-avatar';
import { ChangeGuildBackgroundResponse } from '../models/change-guild-background-response';
import { ChangeGuildBackground } from '../models/change-guild-background';
import { ChangeGuildBaiscInfoResponse } from '../models/change-guild-baisc-info-response';
import { ChangeGuildBaiscInfo } from '../models/change-guild-baisc-info';
import { ChangeGuildCanSearchByPhoneNumberResponse } from '../models/change-guild-can-search-by-phone-number-response';
import { ChangeGuildCanSearchByPhoneNumber } from '../models/change-guild-can-search-by-phone-number';
import { ChangeGuildCoverResponse } from '../models/change-guild-cover-response';
import { ChangeGuildCover } from '../models/change-guild-cover';
import { ChangeGuildDescriptionResponse } from '../models/change-guild-description-response';
import { ChangeGuildDescription } from '../models/change-guild-description';
import { ChangeGuildDisplayNameResponse } from '../models/change-guild-display-name-response';
import { ChangeGuildDisplayName } from '../models/change-guild-display-name';
import { ChangeGuildDistrictResponse } from '../models/change-guild-district-response';
import { ChangeGuildDistrict } from '../models/change-guild-district';
import { ChangeGuildFullNameResponse } from '../models/change-guild-full-name-response';
import { ChangeGuildFullName } from '../models/change-guild-full-name';
import { ChangeGuildIsPublicResponse } from '../models/change-guild-is-public-response';
import { ChangeGuildIsPublic } from '../models/change-guild-is-public';
import { ChangeGuildJoinModeResponse } from '../models/change-guild-join-mode-response';
import { ChangeGuildJoinMode } from '../models/change-guild-join-mode';
import { CreateGuildAbuseReportResponse } from '../models/create-guild-abuse-report-response';
import { CreateGuildAbuseReport } from '../models/create-guild-abuse-report';
import { CreateGuildChargeResponse } from '../models/create-guild-charge-response';
import { CreateGuildCharge } from '../models/create-guild-charge';
import { SetGuildFileInfoResponse } from '../models/set-guild-file-info-response';
import { SetGuildFileInfo } from '../models/set-guild-file-info';
import { CreateGuildFileResponse } from '../models/create-guild-file-response';
import { CreateGuildFile } from '../models/create-guild-file';
import { DeleteGuildFileResponse } from '../models/delete-guild-file-response';
import { ListGuildFilesResponse } from '../models/list-guild-files-response';
import { CreateGuildFilesResponse } from '../models/create-guild-files-response';
import { CreateGuildFiles } from '../models/create-guild-files';
import { FileInfo } from '../models/file-info';
import { DeleteGuildFilesResponse } from '../models/delete-guild-files-response';
import { CreateGuildFolderResponse } from '../models/create-guild-folder-response';
import { CreateGuildFolder } from '../models/create-guild-folder';
import { DeleteGuildFolderResponse } from '../models/delete-guild-folder-response';
import { SetGuildGroupInfoResponse } from '../models/set-guild-group-info-response';
import { SetGuildGroupInfo } from '../models/set-guild-group-info';
import { CreateGuildGroupResponse } from '../models/create-guild-group-response';
import { CreateGuildGroup } from '../models/create-guild-group';
import { DeleteGuildGroupResponse } from '../models/delete-guild-group-response';
import { SearchGuildMembersResponse } from '../models/search-guild-members-response';
import { DeleteGuildMembersResponse } from '../models/delete-guild-members-response';
import { GuildHomeSearchResponse } from '../models/guild-home-search-response';
import { JoinGuildByGuildMemberResponse } from '../models/join-guild-by-guild-member-response';
import { JoinGuildByGuildMember } from '../models/join-guild-by-guild-member';
import { JoinGuildResponse } from '../models/join-guild-response';
import { JoinGuild } from '../models/join-guild';
import { LeaveGuildResponse } from '../models/leave-guild-response';
import { ListGuildChargesResponse } from '../models/list-guild-charges-response';
import { ListGuildConsumesResponse } from '../models/list-guild-consumes-response';
import { ListGuildFoldersResponse } from '../models/list-guild-folders-response';
import { SearchGuildGroupsResponse } from '../models/search-guild-groups-response';
import { ShowGuildResponse } from '../models/show-guild-response';
import { ShowGuildsResponse } from '../models/show-guilds-response';
import { ShowGuildTotalFluxResponse } from '../models/show-guild-total-flux-response';
import { ShowIsGuildMemberResponse } from '../models/show-is-guild-member-response';
import { TransferGuildResponse } from '../models/transfer-guild-response';
import { TransferGuild } from '../models/transfer-guild';
import { ShowGuildHomeResponse } from '../models/show-guild-home-response';
import { ChangeGuildMemberInfoResponse } from '../models/change-guild-member-info-response';
import { ChangeGuildMemberInfo } from '../models/change-guild-member-info';
import { ChangeGuildMemberNickNameResponse } from '../models/change-guild-member-nick-name-response';
import { ChangeGuildMemberNickName } from '../models/change-guild-member-nick-name';
import { SearchGuildGroupMembersResponse } from '../models/search-guild-group-members-response';
import { CreateGuildGroupMembersResponse } from '../models/create-guild-group-members-response';
import { CreateGuildGroupMembers } from '../models/create-guild-group-members';
import { DeleteGuildGroupMembersResponse } from '../models/delete-guild-group-members-response';
import { GenerateGuildCodeResponse } from '../models/generate-guild-code-response';
import { GenerateGuildCode } from '../models/generate-guild-code';
import { SetGuildMemberRoleResponse } from '../models/set-guild-member-role-response';
import { SetGuildMemberRole } from '../models/set-guild-member-role';
import { SetGuildMembersRoleResponse } from '../models/set-guild-members-role-response';
import { SetGuildMembersRole } from '../models/set-guild-members-role';
import { SetGuildMembersStatusResponse } from '../models/set-guild-members-status-response';
import { SetGuildMembersStatus } from '../models/set-guild-members-status';
import { SetGuildMemberStatusResponse } from '../models/set-guild-member-status-response';
import { SetGuildMemberStatus } from '../models/set-guild-member-status';
import { ShowGuildCategoriesResponse } from '../models/show-guild-categories-response';
import { ShowGuildGroupsResponse } from '../models/show-guild-groups-response';
import { ShowGuildMembersResponse } from '../models/show-guild-members-response';
import { SignupGuildMemberResponse } from '../models/signup-guild-member-response';
import { SignupGuildMember } from '../models/signup-guild-member';
import { TakeGuildResponse } from '../models/take-guild-response';
import { CreateGuildResponse } from '../models/create-guild-response';
import { CreateGuild } from '../models/create-guild';
import { DismissGuildResponse } from '../models/dismiss-guild-response';
@Injectable({
  providedIn: 'root',
})
class OrganizationService extends __BaseService {
  static readonly AuditGuildMemberguildauditCreatePath = '/organization/guild/audit';
  static readonly BlockGuildguildblockCreatePath = '/organization/guild/block';
  static readonly ChangeGuildAddressguildaddressCreatePath = '/organization/guild/address';
  static readonly ChangeGuildAuditModeguildauditmodelCreatePath = '/organization/guild/auditmodel';
  static readonly ChangeGuildAvatarguildavatarCreatePath = '/organization/guild/avatar';
  static readonly ChangeGuildBackgroundguildbackgroundCreatePath = '/organization/guild/background';
  static readonly ChangeGuildBaiscInfoguildbasicinfoCreatePath = '/organization/guild/basicinfo';
  static readonly ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreatePath = '/organization/guild/cansearchbyphonenumber';
  static readonly ChangeGuildCoverguildcoverCreatePath = '/organization/guild/cover';
  static readonly ChangeGuildDescriptionguilddescriptionCreatePath = '/organization/guild/description';
  static readonly ChangeGuildDisplayNameguilddisplaynameCreatePath = '/organization/guild/displayname';
  static readonly ChangeGuildDistrictguilddistrictCreatePath = '/organization/guild/district';
  static readonly ChangeGuildFullNameguildfullnameCreatePath = '/organization/guild/fullname';
  static readonly ChangeGuildIsPublicguildispublicCreatePath = '/organization/guild/ispublic';
  static readonly ChangeGuildJoinModeguildjoinmodeCreatePath = '/organization/guild/joinmode';
  static readonly CreateGuildAbuseReportguildabusereportPostPath = '/organization/guild/abusereport';
  static readonly CreateGuildChargeguildchargePostPath = '/organization/guild/charge';
  static readonly SetGuildFileInfoguildfileCreatePath = '/organization/guild/file';
  static readonly CreateGuildFileguildfilePostPath = '/organization/guild/file';
  static readonly DeleteGuildFileguildfileDeletePath = '/organization/guild/file';
  static readonly ListGuildFilesguildfilesGetPath = '/organization/guild/files';
  static readonly CreateGuildFilesguildfilesPostPath = '/organization/guild/files';
  static readonly DeleteGuildFilesguildfilesDeletePath = '/organization/guild/files';
  static readonly CreateGuildFolderguildfolderPostPath = '/organization/guild/folder';
  static readonly DeleteGuildFolderguildfolderDeletePath = '/organization/guild/folder';
  static readonly SetGuildGroupInfoguildgroupCreatePath = '/organization/guild/group';
  static readonly CreateGuildGroupguildgroupPostPath = '/organization/guild/group';
  static readonly DeleteGuildGroupguildgroupDeletePath = '/organization/guild/group';
  static readonly SearchGuildMembersguildmembersGetPath = '/organization/guild/members';
  static readonly DeleteGuildMembersguildmembersDeletePath = '/organization/guild/members';
  static readonly GuildHomeSearchguildglobalsearchGetPath = '/organization/guild/globalsearch';
  static readonly JoinGuildByGuildMemberguildjoinPostPath = '/organization/guild/join';
  static readonly JoinGuildguildmemberPostPath = '/organization/guild/member';
  static readonly LeaveGuildguildmemberDeletePath = '/organization/guild/member';
  static readonly ListGuildChargesguildchargesGetPath = '/organization/guild/charges';
  static readonly ListGuildConsumesguildconsumesGetPath = '/organization/guild/consumes';
  static readonly ListGuildFoldersguildfoldersGetPath = '/organization/guild/folders';
  static readonly SearchGuildGroupsguildgroupsGetPath = '/organization/guild/groups';
  static readonly ShowGuildguildshowGetPath = '/organization/guild/show';
  static readonly ShowGuildsguildsshowGetPath = '/organization/guilds/show';
  static readonly ShowGuildTotalFluxguildtotalfluxGetPath = '/organization/guild/totalflux';
  static readonly ShowIsGuildMemberguildmemberisshowGetPath = '/organization/guildmember/isshow';
  static readonly TransferGuildguildownerCreatePath = '/organization/guild/owner';
  static readonly ShowGuildHomeguildhomeshowGetPath = '/organization/guildhome/show';
  static readonly ChangeGuildMemberInfoguildmemberinfoCreatePath = '/organization/guild/member/info';
  static readonly ChangeGuildMemberNickNameguildmembernicknameCreatePath = '/organization/guild/member/nickname';
  static readonly SearchGuildGroupMembersguildgroupmembersGetPath = '/organization/guild/group/members';
  static readonly CreateGuildGroupMembersguildgroupmembersPostPath = '/organization/guild/group/members';
  static readonly DeleteGuildGroupMembersguildgroupmembersDeletePath = '/organization/guild/group/members';
  static readonly GenerateGuildCodeguildmembercodePostPath = '/organization/guild/member/code';
  static readonly SetGuildMemberRoleguildmemberroleCreatePath = '/organization/guild/member/role';
  static readonly SetGuildMembersRoleguildmembersroleCreatePath = '/organization/guild/members/role';
  static readonly SetGuildMembersStatusguildmembersstatusCreatePath = '/organization/guild/members/status';
  static readonly SetGuildMemberStatusguildmemberstatusCreatePath = '/organization/guild/member/status';
  static readonly ShowGuildCategoriesguildscategoriesshowGetPath = '/organization/guilds/categories/show';
  static readonly ShowGuildGroupsguildsgroupsshowGetPath = '/organization/guilds/groups/show';
  static readonly ShowGuildMembersguildsmembersshowGetPath = '/organization/guilds/members/show';
  static readonly SignupGuildMemberguildmembersignupPostPath = '/organization/guild/member/signup';
  static readonly TakeGuildguildGetPath = '/organization/guild';
  static readonly CreateGuildguildPostPath = '/organization/guild';
  static readonly DismissGuildguildDeletePath = '/organization/guild';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 教会成员审核
   *
   * 教会成员审核
   * @param params The `OrganizationService.AuditGuildMemberguildauditCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `IsAllow`: 是否审核通过(true:通过;false:拒绝) 默认true
   *
   * - `GuildMemberIds`: *教会成员编号列表
   *
   * - `GuildId`: *教会ID
   *
   * @return Success
   */
  AuditGuildMemberguildauditCreateResponse(params: OrganizationService.AuditGuildMemberguildauditCreateParams): __Observable<__StrictHttpResponse<AuditGuildMemberResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.IsAllow != null) { __formData.append('IsAllow', JSON.stringify(params.IsAllow));}
    (params.GuildMemberIds || []).forEach(val => {if (val != null) __formData.append('GuildMemberIds', val as string | Blob)});
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/audit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuditGuildMemberResponse>;
      })
    );
  }
  /**
   * 教会成员审核
   *
   * 教会成员审核
   * @param params The `OrganizationService.AuditGuildMemberguildauditCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `IsAllow`: 是否审核通过(true:通过;false:拒绝) 默认true
   *
   * - `GuildMemberIds`: *教会成员编号列表
   *
   * - `GuildId`: *教会ID
   *
   * @return Success
   */
  AuditGuildMemberguildauditCreate(params: OrganizationService.AuditGuildMemberguildauditCreateParams): __Observable<AuditGuildMemberResponse> {
    return this.AuditGuildMemberguildauditCreateResponse(params).pipe(
      __map(_r => _r.body as AuditGuildMemberResponse)
    );
  }

  /**
   * 屏蔽教会
   *
   * 屏蔽教会
   * @param params The `OrganizationService.BlockGuildguildblockCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Reason`: 理由
   *
   * - `GuildId`: 教会编号
   *
   * - `Duration`: 时长（单位：小时）
   *
   * @return Success
   */
  BlockGuildguildblockCreateResponse(params: OrganizationService.BlockGuildguildblockCreateParams): __Observable<__StrictHttpResponse<BlockGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Reason != null) { __formData.append('Reason', params.Reason as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.Duration != null) { __formData.append('Duration', JSON.stringify(params.Duration));}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/block`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BlockGuildResponse>;
      })
    );
  }
  /**
   * 屏蔽教会
   *
   * 屏蔽教会
   * @param params The `OrganizationService.BlockGuildguildblockCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Reason`: 理由
   *
   * - `GuildId`: 教会编号
   *
   * - `Duration`: 时长（单位：小时）
   *
   * @return Success
   */
  BlockGuildguildblockCreate(params: OrganizationService.BlockGuildguildblockCreateParams): __Observable<BlockGuildResponse> {
    return this.BlockGuildguildblockCreateResponse(params).pipe(
      __map(_r => _r.body as BlockGuildResponse)
    );
  }

  /**
   * 更改教会地址
   *
   * 更改教会地址
   * @param params The `OrganizationService.ChangeGuildAddressguildaddressCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `Address`: 地址
   *
   * @return Success
   */
  ChangeGuildAddressguildaddressCreateResponse(params: OrganizationService.ChangeGuildAddressguildaddressCreateParams): __Observable<__StrictHttpResponse<ChangeGuildAddressResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.Address != null) { __formData.append('Address', params.Address as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildAddressResponse>;
      })
    );
  }
  /**
   * 更改教会地址
   *
   * 更改教会地址
   * @param params The `OrganizationService.ChangeGuildAddressguildaddressCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `Address`: 地址
   *
   * @return Success
   */
  ChangeGuildAddressguildaddressCreate(params: OrganizationService.ChangeGuildAddressguildaddressCreateParams): __Observable<ChangeGuildAddressResponse> {
    return this.ChangeGuildAddressguildaddressCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildAddressResponse)
    );
  }

  /**
   * 更改教会审核模式的请求
   *
   * 更改教会审核模式的请求
   * @param params The `OrganizationService.ChangeGuildAuditModeguildauditmodelCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ModeTypeValue`: 更改的审核类型:(1.仅被邀请加入的新成员不需要审核 2.仅搜索加入的新成员需要审核 3.所有途径的新加入成员都需要审核 4.所有途径的新加入成员都不需要审核)
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildAuditModeguildauditmodelCreateResponse(params: OrganizationService.ChangeGuildAuditModeguildauditmodelCreateParams): __Observable<__StrictHttpResponse<ChangeGuildAuditModeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.ModeTypeValue != null) { __formData.append('ModeTypeValue', JSON.stringify(params.ModeTypeValue));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/auditmodel`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildAuditModeResponse>;
      })
    );
  }
  /**
   * 更改教会审核模式的请求
   *
   * 更改教会审核模式的请求
   * @param params The `OrganizationService.ChangeGuildAuditModeguildauditmodelCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ModeTypeValue`: 更改的审核类型:(1.仅被邀请加入的新成员不需要审核 2.仅搜索加入的新成员需要审核 3.所有途径的新加入成员都需要审核 4.所有途径的新加入成员都不需要审核)
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildAuditModeguildauditmodelCreate(params: OrganizationService.ChangeGuildAuditModeguildauditmodelCreateParams): __Observable<ChangeGuildAuditModeResponse> {
    return this.ChangeGuildAuditModeguildauditmodelCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildAuditModeResponse)
    );
  }

  /**
   * 更改教会标识图片
   *
   * 上传本地标识无须输入来源标识的地址。
   * @param params The `OrganizationService.ChangeGuildAvatarguildavatarCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  ChangeGuildAvatarguildavatarCreateResponse(params: OrganizationService.ChangeGuildAvatarguildavatarCreateParams): __Observable<__StrictHttpResponse<ChangeGuildAvatarResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/avatar`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildAvatarResponse>;
      })
    );
  }
  /**
   * 更改教会标识图片
   *
   * 上传本地标识无须输入来源标识的地址。
   * @param params The `OrganizationService.ChangeGuildAvatarguildavatarCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  ChangeGuildAvatarguildavatarCreate(params: OrganizationService.ChangeGuildAvatarguildavatarCreateParams): __Observable<ChangeGuildAvatarResponse> {
    return this.ChangeGuildAvatarguildavatarCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildAvatarResponse)
    );
  }

  /**
   * 更改教会背景图片
   *
   * 上传本地背景无须输入来源背景的地址。
   * @param params The `OrganizationService.ChangeGuildBackgroundguildbackgroundCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `BackgroundUrl`: 背景图片地址
   *
   * @return Success
   */
  ChangeGuildBackgroundguildbackgroundCreateResponse(params: OrganizationService.ChangeGuildBackgroundguildbackgroundCreateParams): __Observable<__StrictHttpResponse<ChangeGuildBackgroundResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.BackgroundUrl != null) { __formData.append('BackgroundUrl', params.BackgroundUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/background`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildBackgroundResponse>;
      })
    );
  }
  /**
   * 更改教会背景图片
   *
   * 上传本地背景无须输入来源背景的地址。
   * @param params The `OrganizationService.ChangeGuildBackgroundguildbackgroundCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `BackgroundUrl`: 背景图片地址
   *
   * @return Success
   */
  ChangeGuildBackgroundguildbackgroundCreate(params: OrganizationService.ChangeGuildBackgroundguildbackgroundCreateParams): __Observable<ChangeGuildBackgroundResponse> {
    return this.ChangeGuildBackgroundguildbackgroundCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildBackgroundResponse)
    );
  }

  /**
   * 更改教会基础开关数据的请求
   *
   * 更改教会基础开关数据的请求
   * @param params The `OrganizationService.ChangeGuildBaiscInfoguildbasicinfoCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `value`: 允许|不允许
   *
   * - `body`:
   *
   * - `ModeType`: 更改的审核类型:(1.是否允许新成员加入 2.是否允许管理员审核新成员 3.是否允许管理员踢出群员 4.是否允许通过手机号搜索教会 )
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildBaiscInfoguildbasicinfoCreateResponse(params: OrganizationService.ChangeGuildBaiscInfoguildbasicinfoCreateParams): __Observable<__StrictHttpResponse<ChangeGuildBaiscInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.value != null) { __formData.append('value', JSON.stringify(params.value));}
    __body = params.body;
    if (params.ModeType != null) { __formData.append('ModeType', JSON.stringify(params.ModeType));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/basicinfo`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildBaiscInfoResponse>;
      })
    );
  }
  /**
   * 更改教会基础开关数据的请求
   *
   * 更改教会基础开关数据的请求
   * @param params The `OrganizationService.ChangeGuildBaiscInfoguildbasicinfoCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `value`: 允许|不允许
   *
   * - `body`:
   *
   * - `ModeType`: 更改的审核类型:(1.是否允许新成员加入 2.是否允许管理员审核新成员 3.是否允许管理员踢出群员 4.是否允许通过手机号搜索教会 )
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildBaiscInfoguildbasicinfoCreate(params: OrganizationService.ChangeGuildBaiscInfoguildbasicinfoCreateParams): __Observable<ChangeGuildBaiscInfoResponse> {
    return this.ChangeGuildBaiscInfoguildbasicinfoCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildBaiscInfoResponse)
    );
  }

  /**
   * 更改教会是否通过手机号搜索
   *
   * 更改教会是否通过手机号搜索
   * @param params The `OrganizationService.ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `CanSearchByPhoneNumber`: 是否通过手机号搜索
   *
   * @return Success
   */
  ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreateResponse(params: OrganizationService.ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreateParams): __Observable<__StrictHttpResponse<ChangeGuildCanSearchByPhoneNumberResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.CanSearchByPhoneNumber != null) { __formData.append('CanSearchByPhoneNumber', JSON.stringify(params.CanSearchByPhoneNumber));}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/cansearchbyphonenumber`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildCanSearchByPhoneNumberResponse>;
      })
    );
  }
  /**
   * 更改教会是否通过手机号搜索
   *
   * 更改教会是否通过手机号搜索
   * @param params The `OrganizationService.ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `CanSearchByPhoneNumber`: 是否通过手机号搜索
   *
   * @return Success
   */
  ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreate(params: OrganizationService.ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreateParams): __Observable<ChangeGuildCanSearchByPhoneNumberResponse> {
    return this.ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildCanSearchByPhoneNumberResponse)
    );
  }

  /**
   * 更改教会封面图片
   *
   * 上传本地封面无须输入来源封面的地址。
   * @param params The `OrganizationService.ChangeGuildCoverguildcoverCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `CoverUrl`: 封面图片地址
   *
   * @return Success
   */
  ChangeGuildCoverguildcoverCreateResponse(params: OrganizationService.ChangeGuildCoverguildcoverCreateParams): __Observable<__StrictHttpResponse<ChangeGuildCoverResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.CoverUrl != null) { __formData.append('CoverUrl', params.CoverUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/cover`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildCoverResponse>;
      })
    );
  }
  /**
   * 更改教会封面图片
   *
   * 上传本地封面无须输入来源封面的地址。
   * @param params The `OrganizationService.ChangeGuildCoverguildcoverCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `CoverUrl`: 封面图片地址
   *
   * @return Success
   */
  ChangeGuildCoverguildcoverCreate(params: OrganizationService.ChangeGuildCoverguildcoverCreateParams): __Observable<ChangeGuildCoverResponse> {
    return this.ChangeGuildCoverguildcoverCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildCoverResponse)
    );
  }

  /**
   * 更改教会简介
   *
   * 更改教会简介
   * @param params The `OrganizationService.ChangeGuildDescriptionguilddescriptionCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  ChangeGuildDescriptionguilddescriptionCreateResponse(params: OrganizationService.ChangeGuildDescriptionguilddescriptionCreateParams): __Observable<__StrictHttpResponse<ChangeGuildDescriptionResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/description`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildDescriptionResponse>;
      })
    );
  }
  /**
   * 更改教会简介
   *
   * 更改教会简介
   * @param params The `OrganizationService.ChangeGuildDescriptionguilddescriptionCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  ChangeGuildDescriptionguilddescriptionCreate(params: OrganizationService.ChangeGuildDescriptionguilddescriptionCreateParams): __Observable<ChangeGuildDescriptionResponse> {
    return this.ChangeGuildDescriptionguilddescriptionCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildDescriptionResponse)
    );
  }

  /**
   * 更改教会显示名称
   *
   * 更改教会显示名称
   * @param params The `OrganizationService.ChangeGuildDisplayNameguilddisplaynameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `DisplayName`: 显示名称
   *
   * @return Success
   */
  ChangeGuildDisplayNameguilddisplaynameCreateResponse(params: OrganizationService.ChangeGuildDisplayNameguilddisplaynameCreateParams): __Observable<__StrictHttpResponse<ChangeGuildDisplayNameResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.DisplayName != null) { __formData.append('DisplayName', params.DisplayName as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/displayname`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildDisplayNameResponse>;
      })
    );
  }
  /**
   * 更改教会显示名称
   *
   * 更改教会显示名称
   * @param params The `OrganizationService.ChangeGuildDisplayNameguilddisplaynameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `DisplayName`: 显示名称
   *
   * @return Success
   */
  ChangeGuildDisplayNameguilddisplaynameCreate(params: OrganizationService.ChangeGuildDisplayNameguilddisplaynameCreateParams): __Observable<ChangeGuildDisplayNameResponse> {
    return this.ChangeGuildDisplayNameguilddisplaynameCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildDisplayNameResponse)
    );
  }

  /**
   * 更改教会所在地区
   *
   * 更改教会所在地区
   * @param params The `OrganizationService.ChangeGuildDistrictguilddistrictCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Province`: 省份
   *
   * - `GuildId`: 教会编号
   *
   * - `Country`: 国家
   *
   * - `City`: 城市
   *
   * @return Success
   */
  ChangeGuildDistrictguilddistrictCreateResponse(params: OrganizationService.ChangeGuildDistrictguilddistrictCreateParams): __Observable<__StrictHttpResponse<ChangeGuildDistrictResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Province != null) { __formData.append('Province', params.Province as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.Country != null) { __formData.append('Country', params.Country as string | Blob);}
    if (params.City != null) { __formData.append('City', params.City as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/district`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildDistrictResponse>;
      })
    );
  }
  /**
   * 更改教会所在地区
   *
   * 更改教会所在地区
   * @param params The `OrganizationService.ChangeGuildDistrictguilddistrictCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Province`: 省份
   *
   * - `GuildId`: 教会编号
   *
   * - `Country`: 国家
   *
   * - `City`: 城市
   *
   * @return Success
   */
  ChangeGuildDistrictguilddistrictCreate(params: OrganizationService.ChangeGuildDistrictguilddistrictCreateParams): __Observable<ChangeGuildDistrictResponse> {
    return this.ChangeGuildDistrictguilddistrictCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildDistrictResponse)
    );
  }

  /**
   * 更改教会真实全称
   *
   * 更改教会真实全称
   * @param params The `OrganizationService.ChangeGuildFullNameguildfullnameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `FullName`: 真实全称
   *
   * @return Success
   */
  ChangeGuildFullNameguildfullnameCreateResponse(params: OrganizationService.ChangeGuildFullNameguildfullnameCreateParams): __Observable<__StrictHttpResponse<ChangeGuildFullNameResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.FullName != null) { __formData.append('FullName', params.FullName as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/fullname`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildFullNameResponse>;
      })
    );
  }
  /**
   * 更改教会真实全称
   *
   * 更改教会真实全称
   * @param params The `OrganizationService.ChangeGuildFullNameguildfullnameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `FullName`: 真实全称
   *
   * @return Success
   */
  ChangeGuildFullNameguildfullnameCreate(params: OrganizationService.ChangeGuildFullNameguildfullnameCreateParams): __Observable<ChangeGuildFullNameResponse> {
    return this.ChangeGuildFullNameguildfullnameCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildFullNameResponse)
    );
  }

  /**
   * 更改教会是否公开
   *
   * 更改教会是否公开
   * @param params The `OrganizationService.ChangeGuildIsPublicguildispublicCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `IsPublic`: 是否公开
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildIsPublicguildispublicCreateResponse(params: OrganizationService.ChangeGuildIsPublicguildispublicCreateParams): __Observable<__StrictHttpResponse<ChangeGuildIsPublicResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.IsPublic != null) { __formData.append('IsPublic', JSON.stringify(params.IsPublic));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/ispublic`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildIsPublicResponse>;
      })
    );
  }
  /**
   * 更改教会是否公开
   *
   * 更改教会是否公开
   * @param params The `OrganizationService.ChangeGuildIsPublicguildispublicCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `IsPublic`: 是否公开
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildIsPublicguildispublicCreate(params: OrganizationService.ChangeGuildIsPublicguildispublicCreateParams): __Observable<ChangeGuildIsPublicResponse> {
    return this.ChangeGuildIsPublicguildispublicCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildIsPublicResponse)
    );
  }

  /**
   * 更改教会加入方式
   *
   * 更改教会加入方式
   * @param params The `OrganizationService.ChangeGuildJoinModeguildjoinmodeCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `JoinMode`: 加入方式（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildJoinModeguildjoinmodeCreateResponse(params: OrganizationService.ChangeGuildJoinModeguildjoinmodeCreateParams): __Observable<__StrictHttpResponse<ChangeGuildJoinModeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.JoinMode != null) { __formData.append('JoinMode', JSON.stringify(params.JoinMode));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/joinmode`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildJoinModeResponse>;
      })
    );
  }
  /**
   * 更改教会加入方式
   *
   * 更改教会加入方式
   * @param params The `OrganizationService.ChangeGuildJoinModeguildjoinmodeCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `JoinMode`: 加入方式（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ChangeGuildJoinModeguildjoinmodeCreate(params: OrganizationService.ChangeGuildJoinModeguildjoinmodeCreateParams): __Observable<ChangeGuildJoinModeResponse> {
    return this.ChangeGuildJoinModeguildjoinmodeCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildJoinModeResponse)
    );
  }

  /**
   * 创建教会举报
   *
   * 创建教会举报
   * @param params The `OrganizationService.CreateGuildAbuseReportguildabusereportPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `Description`: 描述
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  CreateGuildAbuseReportguildabusereportPostResponse(params: OrganizationService.CreateGuildAbuseReportguildabusereportPostParams): __Observable<__StrictHttpResponse<CreateGuildAbuseReportResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.Category != null) { __formData.append('Category', params.Category as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/abusereport`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildAbuseReportResponse>;
      })
    );
  }
  /**
   * 创建教会举报
   *
   * 创建教会举报
   * @param params The `OrganizationService.CreateGuildAbuseReportguildabusereportPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `Description`: 描述
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  CreateGuildAbuseReportguildabusereportPost(params: OrganizationService.CreateGuildAbuseReportguildabusereportPostParams): __Observable<CreateGuildAbuseReportResponse> {
    return this.CreateGuildAbuseReportguildabusereportPostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildAbuseReportResponse)
    );
  }

  /**
   * 创建教会充值
   *
   * 创建教会充值
   * @param params The `OrganizationService.CreateGuildChargeguildchargePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `isInward`: 是否是内部充值
   *
   * - `body`:
   *
   * - `Type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `Remark`: 备注
   *
   * - `ReferenceChargeId`: 关联充值编号
   *
   * - `GuildId`: 教会编号
   *
   * - `ConsumedMoney`: 消费金额（单位：元）
   *
   * - `Amount`: 数量（单位：0: 元; 1: M; 2: 分钟）
   *
   * @return Success
   */
  CreateGuildChargeguildchargePostResponse(params: OrganizationService.CreateGuildChargeguildchargePostParams): __Observable<__StrictHttpResponse<CreateGuildChargeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.isInward != null) { __formData.append('isInward', JSON.stringify(params.isInward));}
    __body = params.body;
    if (params.Type != null) { __formData.append('Type', JSON.stringify(params.Type));}
    if (params.Remark != null) { __formData.append('Remark', params.Remark as string | Blob);}
    if (params.ReferenceChargeId != null) { __formData.append('ReferenceChargeId', params.ReferenceChargeId as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.ConsumedMoney != null) { __formData.append('ConsumedMoney', JSON.stringify(params.ConsumedMoney));}
    if (params.Amount != null) { __formData.append('Amount', JSON.stringify(params.Amount));}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/charge`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildChargeResponse>;
      })
    );
  }
  /**
   * 创建教会充值
   *
   * 创建教会充值
   * @param params The `OrganizationService.CreateGuildChargeguildchargePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `isInward`: 是否是内部充值
   *
   * - `body`:
   *
   * - `Type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `Remark`: 备注
   *
   * - `ReferenceChargeId`: 关联充值编号
   *
   * - `GuildId`: 教会编号
   *
   * - `ConsumedMoney`: 消费金额（单位：元）
   *
   * - `Amount`: 数量（单位：0: 元; 1: M; 2: 分钟）
   *
   * @return Success
   */
  CreateGuildChargeguildchargePost(params: OrganizationService.CreateGuildChargeguildchargePostParams): __Observable<CreateGuildChargeResponse> {
    return this.CreateGuildChargeguildchargePostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildChargeResponse)
    );
  }

  /**
   * 设置教会文件信息
   *
   * 设置教会文件信息
   * @param params The `OrganizationService.SetGuildFileInfoguildfileCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Width`: 宽度
   *
   * - `Type`: 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
   *
   * - `Name`: 名称
   *
   * - `Height`: 高度
   *
   * - `FileId`: 文件编号
   *
   * - `Duration`: 时长（单位：秒）
   *
   * - `ContentType`: 内容类型
   *
   * - `ContentLength`: 内容长度
   *
   * - `Category`: 分类
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  SetGuildFileInfoguildfileCreateResponse(params: OrganizationService.SetGuildFileInfoguildfileCreateParams): __Observable<__StrictHttpResponse<SetGuildFileInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Width != null) { __formData.append('Width', JSON.stringify(params.Width));}
    if (params.Type != null) { __formData.append('Type', JSON.stringify(params.Type));}
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.Height != null) { __formData.append('Height', JSON.stringify(params.Height));}
    if (params.FileId != null) { __formData.append('FileId', params.FileId as string | Blob);}
    if (params.Duration != null) { __formData.append('Duration', JSON.stringify(params.Duration));}
    if (params.ContentType != null) { __formData.append('ContentType', params.ContentType as string | Blob);}
    if (params.ContentLength != null) { __formData.append('ContentLength', JSON.stringify(params.ContentLength));}
    if (params.Category != null) { __formData.append('Category', params.Category as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/file`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SetGuildFileInfoResponse>;
      })
    );
  }
  /**
   * 设置教会文件信息
   *
   * 设置教会文件信息
   * @param params The `OrganizationService.SetGuildFileInfoguildfileCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Width`: 宽度
   *
   * - `Type`: 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
   *
   * - `Name`: 名称
   *
   * - `Height`: 高度
   *
   * - `FileId`: 文件编号
   *
   * - `Duration`: 时长（单位：秒）
   *
   * - `ContentType`: 内容类型
   *
   * - `ContentLength`: 内容长度
   *
   * - `Category`: 分类
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  SetGuildFileInfoguildfileCreate(params: OrganizationService.SetGuildFileInfoguildfileCreateParams): __Observable<SetGuildFileInfoResponse> {
    return this.SetGuildFileInfoguildfileCreateResponse(params).pipe(
      __map(_r => _r.body as SetGuildFileInfoResponse)
    );
  }

  /**
   * 创建教会文件
   *
   * 创建教会文件
   * @param params The `OrganizationService.CreateGuildFileguildfilePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Width`: 宽度
   *
   * - `Url`: 地址
   *
   * - `Type`: 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
   *
   * - `Name`: 名称
   *
   * - `Height`: 高度
   *
   * - `GuildId`: 教会编号
   *
   * - `FolderId`: 文件夹编号
   *
   * - `Duration`: 时长（单位：秒）
   *
   * - `ContentType`: 内容类型
   *
   * - `ContentLength`: 内容长度
   *
   * - `Category`: 分类
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateGuildFileguildfilePostResponse(params: OrganizationService.CreateGuildFileguildfilePostParams): __Observable<__StrictHttpResponse<CreateGuildFileResponse>> {
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
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.Height != null) { __formData.append('Height', JSON.stringify(params.Height));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.FolderId != null) { __formData.append('FolderId', params.FolderId as string | Blob);}
    if (params.Duration != null) { __formData.append('Duration', JSON.stringify(params.Duration));}
    if (params.ContentType != null) { __formData.append('ContentType', params.ContentType as string | Blob);}
    if (params.ContentLength != null) { __formData.append('ContentLength', JSON.stringify(params.ContentLength));}
    if (params.Category != null) { __formData.append('Category', params.Category as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/file`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildFileResponse>;
      })
    );
  }
  /**
   * 创建教会文件
   *
   * 创建教会文件
   * @param params The `OrganizationService.CreateGuildFileguildfilePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Width`: 宽度
   *
   * - `Url`: 地址
   *
   * - `Type`: 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
   *
   * - `Name`: 名称
   *
   * - `Height`: 高度
   *
   * - `GuildId`: 教会编号
   *
   * - `FolderId`: 文件夹编号
   *
   * - `Duration`: 时长（单位：秒）
   *
   * - `ContentType`: 内容类型
   *
   * - `ContentLength`: 内容长度
   *
   * - `Category`: 分类
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateGuildFileguildfilePost(params: OrganizationService.CreateGuildFileguildfilePostParams): __Observable<CreateGuildFileResponse> {
    return this.CreateGuildFileguildfilePostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildFileResponse)
    );
  }

  /**
   * 删除教会文件
   *
   * 删除教会文件
   * @param params The `OrganizationService.DeleteGuildFileguildfileDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `FileId`: 文件编号
   *
   * @return Success
   */
  DeleteGuildFileguildfileDeleteResponse(params: OrganizationService.DeleteGuildFileguildfileDeleteParams): __Observable<__StrictHttpResponse<DeleteGuildFileResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.FileId != null) __params = __params.set('FileId', params.FileId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild/file`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteGuildFileResponse>;
      })
    );
  }
  /**
   * 删除教会文件
   *
   * 删除教会文件
   * @param params The `OrganizationService.DeleteGuildFileguildfileDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `FileId`: 文件编号
   *
   * @return Success
   */
  DeleteGuildFileguildfileDelete(params: OrganizationService.DeleteGuildFileguildfileDeleteParams): __Observable<DeleteGuildFileResponse> {
    return this.DeleteGuildFileguildfileDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteGuildFileResponse)
    );
  }

  /**
   * 列举一组教会文件
   *
   * 列举一组教会文件
   * @param params The `OrganizationService.ListGuildFilesguildfilesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Name, Type, Category, ContentType, ContentLength, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `FolderId`: 文件夹编号
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  ListGuildFilesguildfilesGetResponse(params: OrganizationService.ListGuildFilesguildfilesGetParams): __Observable<__StrictHttpResponse<ListGuildFilesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.FolderId != null) __params = __params.set('FolderId', params.FolderId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    if (params.Category != null) __params = __params.set('Category', params.Category.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/files`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ListGuildFilesResponse>;
      })
    );
  }
  /**
   * 列举一组教会文件
   *
   * 列举一组教会文件
   * @param params The `OrganizationService.ListGuildFilesguildfilesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Name, Type, Category, ContentType, ContentLength, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `FolderId`: 文件夹编号
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  ListGuildFilesguildfilesGet(params: OrganizationService.ListGuildFilesguildfilesGetParams): __Observable<ListGuildFilesResponse> {
    return this.ListGuildFilesguildfilesGetResponse(params).pipe(
      __map(_r => _r.body as ListGuildFilesResponse)
    );
  }

  /**
   * 批量创建教会文件
   *
   * 批量创建教会文件
   * @param params The `OrganizationService.CreateGuildFilesguildfilesPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `FolderId`: 文件夹编号
   *
   * - `Files`: 文件列表
   *
   * @return Success
   */
  CreateGuildFilesguildfilesPostResponse(params: OrganizationService.CreateGuildFilesguildfilesPostParams): __Observable<__StrictHttpResponse<CreateGuildFilesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.FolderId != null) { __formData.append('FolderId', params.FolderId as string | Blob);}
    (params.Files || []).forEach(val => {if (val != null) __formData.append('Files', JSON.stringify(val))});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/files`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildFilesResponse>;
      })
    );
  }
  /**
   * 批量创建教会文件
   *
   * 批量创建教会文件
   * @param params The `OrganizationService.CreateGuildFilesguildfilesPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会编号
   *
   * - `FolderId`: 文件夹编号
   *
   * - `Files`: 文件列表
   *
   * @return Success
   */
  CreateGuildFilesguildfilesPost(params: OrganizationService.CreateGuildFilesguildfilesPostParams): __Observable<CreateGuildFilesResponse> {
    return this.CreateGuildFilesguildfilesPostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildFilesResponse)
    );
  }

  /**
   * 批量删除教会文件
   *
   * 批量删除教会文件
   * @param params The `OrganizationService.DeleteGuildFilesguildfilesDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `FileIds`: 一组文件编号
   *
   * @return Success
   */
  DeleteGuildFilesguildfilesDeleteResponse(params: OrganizationService.DeleteGuildFilesguildfilesDeleteParams): __Observable<__StrictHttpResponse<DeleteGuildFilesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    (params.FileIds || []).forEach(val => {if (val != null) __params = __params.append('FileIds', val.toString())});
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild/files`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteGuildFilesResponse>;
      })
    );
  }
  /**
   * 批量删除教会文件
   *
   * 批量删除教会文件
   * @param params The `OrganizationService.DeleteGuildFilesguildfilesDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `FileIds`: 一组文件编号
   *
   * @return Success
   */
  DeleteGuildFilesguildfilesDelete(params: OrganizationService.DeleteGuildFilesguildfilesDeleteParams): __Observable<DeleteGuildFilesResponse> {
    return this.DeleteGuildFilesguildfilesDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteGuildFilesResponse)
    );
  }

  /**
   * 创建教会文件夹
   *
   * 创建教会文件夹
   * @param params The `OrganizationService.CreateGuildFolderguildfolderPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ParentFolderId`: 上级文件夹编号
   *
   * - `Name`: 名称
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  CreateGuildFolderguildfolderPostResponse(params: OrganizationService.CreateGuildFolderguildfolderPostParams): __Observable<__StrictHttpResponse<CreateGuildFolderResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.ParentFolderId != null) { __formData.append('ParentFolderId', params.ParentFolderId as string | Blob);}
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/folder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildFolderResponse>;
      })
    );
  }
  /**
   * 创建教会文件夹
   *
   * 创建教会文件夹
   * @param params The `OrganizationService.CreateGuildFolderguildfolderPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `ParentFolderId`: 上级文件夹编号
   *
   * - `Name`: 名称
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  CreateGuildFolderguildfolderPost(params: OrganizationService.CreateGuildFolderguildfolderPostParams): __Observable<CreateGuildFolderResponse> {
    return this.CreateGuildFolderguildfolderPostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildFolderResponse)
    );
  }

  /**
   * 删除教会文件夹
   *
   * 删除教会文件夹
   * @param params The `OrganizationService.DeleteGuildFolderguildfolderDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `FolderId`: 文件夹编号
   *
   * @return Success
   */
  DeleteGuildFolderguildfolderDeleteResponse(params: OrganizationService.DeleteGuildFolderguildfolderDeleteParams): __Observable<__StrictHttpResponse<DeleteGuildFolderResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.FolderId != null) __params = __params.set('FolderId', params.FolderId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild/folder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteGuildFolderResponse>;
      })
    );
  }
  /**
   * 删除教会文件夹
   *
   * 删除教会文件夹
   * @param params The `OrganizationService.DeleteGuildFolderguildfolderDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `FolderId`: 文件夹编号
   *
   * @return Success
   */
  DeleteGuildFolderguildfolderDelete(params: OrganizationService.DeleteGuildFolderguildfolderDeleteParams): __Observable<DeleteGuildFolderResponse> {
    return this.DeleteGuildFolderguildfolderDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteGuildFolderResponse)
    );
  }

  /**
   * 设置教会小组信息
   *
   * 设置教会小组信息
   * @param params The `OrganizationService.SetGuildGroupInfoguildgroupCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Name`: 名称
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  SetGuildGroupInfoguildgroupCreateResponse(params: OrganizationService.SetGuildGroupInfoguildgroupCreateParams): __Observable<__StrictHttpResponse<SetGuildGroupInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.GroupId != null) { __formData.append('GroupId', params.GroupId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/group`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SetGuildGroupInfoResponse>;
      })
    );
  }
  /**
   * 设置教会小组信息
   *
   * 设置教会小组信息
   * @param params The `OrganizationService.SetGuildGroupInfoguildgroupCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Name`: 名称
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  SetGuildGroupInfoguildgroupCreate(params: OrganizationService.SetGuildGroupInfoguildgroupCreateParams): __Observable<SetGuildGroupInfoResponse> {
    return this.SetGuildGroupInfoguildgroupCreateResponse(params).pipe(
      __map(_r => _r.body as SetGuildGroupInfoResponse)
    );
  }

  /**
   * 创建教会小组
   *
   * 创建教会小组
   * @param params The `OrganizationService.CreateGuildGroupguildgroupPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `Name`: 名称
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  CreateGuildGroupguildgroupPostResponse(params: OrganizationService.CreateGuildGroupguildgroupPostParams): __Observable<__StrictHttpResponse<CreateGuildGroupResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    (params.UserIds || []).forEach(val => {if (val != null) __formData.append('UserIds', val as string | Blob)});
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/group`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildGroupResponse>;
      })
    );
  }
  /**
   * 创建教会小组
   *
   * 创建教会小组
   * @param params The `OrganizationService.CreateGuildGroupguildgroupPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `Name`: 名称
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  CreateGuildGroupguildgroupPost(params: OrganizationService.CreateGuildGroupguildgroupPostParams): __Observable<CreateGuildGroupResponse> {
    return this.CreateGuildGroupguildgroupPostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildGroupResponse)
    );
  }

  /**
   * 删除教会小组
   *
   * 删除教会小组
   * @param params The `OrganizationService.DeleteGuildGroupguildgroupDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  DeleteGuildGroupguildgroupDeleteResponse(params: OrganizationService.DeleteGuildGroupguildgroupDeleteParams): __Observable<__StrictHttpResponse<DeleteGuildGroupResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GroupId != null) __params = __params.set('GroupId', params.GroupId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild/group`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteGuildGroupResponse>;
      })
    );
  }
  /**
   * 删除教会小组
   *
   * 删除教会小组
   * @param params The `OrganizationService.DeleteGuildGroupguildgroupDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  DeleteGuildGroupguildgroupDelete(params: OrganizationService.DeleteGuildGroupguildgroupDeleteParams): __Observable<DeleteGuildGroupResponse> {
    return this.DeleteGuildGroupguildgroupDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteGuildGroupResponse)
    );
  }

  /**
   * 查询一组教会成员
   *
   * 查询一组教会成员
   * @param params The `OrganizationService.SearchGuildMembersguildmembersGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `Skip`: 忽略的行数
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `Query`: 查询信息（昵称）
   *
   * - `OrderBy`: 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchGuildMembersguildmembersGetResponse(params: OrganizationService.SearchGuildMembersguildmembersGetParams): __Observable<__StrictHttpResponse<SearchGuildMembersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Status != null) __params = __params.set('Status', params.Status.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Role != null) __params = __params.set('Role', params.Role.toString());
    if (params.Query != null) __params = __params.set('Query', params.Query.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SearchGuildMembersResponse>;
      })
    );
  }
  /**
   * 查询一组教会成员
   *
   * 查询一组教会成员
   * @param params The `OrganizationService.SearchGuildMembersguildmembersGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `Skip`: 忽略的行数
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `Query`: 查询信息（昵称）
   *
   * - `OrderBy`: 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchGuildMembersguildmembersGet(params: OrganizationService.SearchGuildMembersguildmembersGetParams): __Observable<SearchGuildMembersResponse> {
    return this.SearchGuildMembersguildmembersGetResponse(params).pipe(
      __map(_r => _r.body as SearchGuildMembersResponse)
    );
  }

  /**
   * 批量删除教会成员
   *
   * 批量删除教会成员
   * @param params The `OrganizationService.DeleteGuildMembersguildmembersDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserIds`: 用户编号列表
   *
   * - `ShouldBlock`: 是否屏蔽
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  DeleteGuildMembersguildmembersDeleteResponse(params: OrganizationService.DeleteGuildMembersguildmembersDeleteParams): __Observable<__StrictHttpResponse<DeleteGuildMembersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    (params.UserIds || []).forEach(val => {if (val != null) __params = __params.append('UserIds', val.toString())});
    if (params.ShouldBlock != null) __params = __params.set('ShouldBlock', params.ShouldBlock.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild/members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteGuildMembersResponse>;
      })
    );
  }
  /**
   * 批量删除教会成员
   *
   * 批量删除教会成员
   * @param params The `OrganizationService.DeleteGuildMembersguildmembersDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserIds`: 用户编号列表
   *
   * - `ShouldBlock`: 是否屏蔽
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  DeleteGuildMembersguildmembersDelete(params: OrganizationService.DeleteGuildMembersguildmembersDeleteParams): __Observable<DeleteGuildMembersResponse> {
    return this.DeleteGuildMembersguildmembersDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteGuildMembersResponse)
    );
  }

  /**
   * 全站搜索
   *
   * 全站搜索
   * @param params The `OrganizationService.GuildHomeSearchguildglobalsearchGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `textHighlingPreSuffix`: 文本高亮前缀(默认：&lt;highlightcolor&gt;)
   *
   * - `textHighlingAfterSuffix`: 文本高亮后缀(默认：&lt;/highlightcolor&gt;)
   *
   * - `status`: 状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中（默认）; 1: 未开始; 2: 已结束; 3: 已中断）
   *
   * - `skip`: 跳过条数(默认：0)
   *
   * - `orderBy`: modifiedDate(默认),createdDate,status,viewCount(查看人数),type(0: 通知; 1: 直播; 2: 讨论)
   *
   * - `limit`: 获取条数(默认：5)
   *
   * - `keyWord`: 搜索关键字
   *
   * - `guildId`: *教会Id
   *
   * - `desc`: 是否倒序：是（默认），否
   *
   * @return Success
   */
  GuildHomeSearchguildglobalsearchGetResponse(params: OrganizationService.GuildHomeSearchguildglobalsearchGetParams): __Observable<__StrictHttpResponse<GuildHomeSearchResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.textHighlingPreSuffix != null) __params = __params.set('textHighlingPreSuffix', params.textHighlingPreSuffix.toString());
    if (params.textHighlingAfterSuffix != null) __params = __params.set('textHighlingAfterSuffix', params.textHighlingAfterSuffix.toString());
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.skip != null) __params = __params.set('skip', params.skip.toString());
    if (params.orderBy != null) __params = __params.set('orderBy', params.orderBy.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.keyWord != null) __params = __params.set('keyWord', params.keyWord.toString());
    if (params.guildId != null) __params = __params.set('guildId', params.guildId.toString());
    if (params.desc != null) __params = __params.set('desc', params.desc.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/globalsearch`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GuildHomeSearchResponse>;
      })
    );
  }
  /**
   * 全站搜索
   *
   * 全站搜索
   * @param params The `OrganizationService.GuildHomeSearchguildglobalsearchGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `textHighlingPreSuffix`: 文本高亮前缀(默认：&lt;highlightcolor&gt;)
   *
   * - `textHighlingAfterSuffix`: 文本高亮后缀(默认：&lt;/highlightcolor&gt;)
   *
   * - `status`: 状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中（默认）; 1: 未开始; 2: 已结束; 3: 已中断）
   *
   * - `skip`: 跳过条数(默认：0)
   *
   * - `orderBy`: modifiedDate(默认),createdDate,status,viewCount(查看人数),type(0: 通知; 1: 直播; 2: 讨论)
   *
   * - `limit`: 获取条数(默认：5)
   *
   * - `keyWord`: 搜索关键字
   *
   * - `guildId`: *教会Id
   *
   * - `desc`: 是否倒序：是（默认），否
   *
   * @return Success
   */
  GuildHomeSearchguildglobalsearchGet(params: OrganizationService.GuildHomeSearchguildglobalsearchGetParams): __Observable<GuildHomeSearchResponse> {
    return this.GuildHomeSearchguildglobalsearchGetResponse(params).pipe(
      __map(_r => _r.body as GuildHomeSearchResponse)
    );
  }

  /**
   * 使用教会ID或手机号加入教会
   *
   * 使用教会ID或手机号加入教会
   * @param params The `OrganizationService.JoinGuildByGuildMemberguildjoinPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `MemberNickname`: 成员昵称
   *
   * - `MemberAvatarUrl`: 成员头像地址
   *
   * - `JoinIdentification`: 教会编号|手机号
   *
   * - `Code`: 邀请码（无邀请码则必须输入教会编号）
   *
   * @return Success
   */
  JoinGuildByGuildMemberguildjoinPostResponse(params: OrganizationService.JoinGuildByGuildMemberguildjoinPostParams): __Observable<__StrictHttpResponse<JoinGuildByGuildMemberResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.MemberNickname != null) { __formData.append('MemberNickname', params.MemberNickname as string | Blob);}
    if (params.MemberAvatarUrl != null) { __formData.append('MemberAvatarUrl', params.MemberAvatarUrl as string | Blob);}
    if (params.JoinIdentification != null) { __formData.append('JoinIdentification', params.JoinIdentification as string | Blob);}
    if (params.Code != null) { __formData.append('Code', params.Code as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/join`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JoinGuildByGuildMemberResponse>;
      })
    );
  }
  /**
   * 使用教会ID或手机号加入教会
   *
   * 使用教会ID或手机号加入教会
   * @param params The `OrganizationService.JoinGuildByGuildMemberguildjoinPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `MemberNickname`: 成员昵称
   *
   * - `MemberAvatarUrl`: 成员头像地址
   *
   * - `JoinIdentification`: 教会编号|手机号
   *
   * - `Code`: 邀请码（无邀请码则必须输入教会编号）
   *
   * @return Success
   */
  JoinGuildByGuildMemberguildjoinPost(params: OrganizationService.JoinGuildByGuildMemberguildjoinPostParams): __Observable<JoinGuildByGuildMemberResponse> {
    return this.JoinGuildByGuildMemberguildjoinPostResponse(params).pipe(
      __map(_r => _r.body as JoinGuildByGuildMemberResponse)
    );
  }

  /**
   * 加入教会
   *
   * 加入教会
   * @param params The `OrganizationService.JoinGuildguildmemberPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `MemberNickname`: 成员昵称
   *
   * - `MemberAvatarUrl`: 成员头像地址
   *
   * - `GuildId`: 教会编号（无教会编号则必须输入邀请码）
   *
   * - `Code`: 邀请码（无邀请码则必须输入教会编号）
   *
   * @return Success
   */
  JoinGuildguildmemberPostResponse(params: OrganizationService.JoinGuildguildmemberPostParams): __Observable<__StrictHttpResponse<JoinGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.MemberNickname != null) { __formData.append('MemberNickname', params.MemberNickname as string | Blob);}
    if (params.MemberAvatarUrl != null) { __formData.append('MemberAvatarUrl', params.MemberAvatarUrl as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.Code != null) { __formData.append('Code', params.Code as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/member`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JoinGuildResponse>;
      })
    );
  }
  /**
   * 加入教会
   *
   * 加入教会
   * @param params The `OrganizationService.JoinGuildguildmemberPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `MemberNickname`: 成员昵称
   *
   * - `MemberAvatarUrl`: 成员头像地址
   *
   * - `GuildId`: 教会编号（无教会编号则必须输入邀请码）
   *
   * - `Code`: 邀请码（无邀请码则必须输入教会编号）
   *
   * @return Success
   */
  JoinGuildguildmemberPost(params: OrganizationService.JoinGuildguildmemberPostParams): __Observable<JoinGuildResponse> {
    return this.JoinGuildguildmemberPostResponse(params).pipe(
      __map(_r => _r.body as JoinGuildResponse)
    );
  }

  /**
   * 退出教会
   *
   * 退出教会
   * @param params The `OrganizationService.LeaveGuildguildmemberDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  LeaveGuildguildmemberDeleteResponse(params: OrganizationService.LeaveGuildguildmemberDeleteParams): __Observable<__StrictHttpResponse<LeaveGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild/member`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LeaveGuildResponse>;
      })
    );
  }
  /**
   * 退出教会
   *
   * 退出教会
   * @param params The `OrganizationService.LeaveGuildguildmemberDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  LeaveGuildguildmemberDelete(params: OrganizationService.LeaveGuildguildmemberDeleteParams): __Observable<LeaveGuildResponse> {
    return this.LeaveGuildguildmemberDeleteResponse(params).pipe(
      __map(_r => _r.body as LeaveGuildResponse)
    );
  }

  /**
   * 列举一组教会充值
   *
   * 列举一组教会充值
   * @param params The `OrganizationService.ListGuildChargesguildchargesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ListGuildChargesguildchargesGetResponse(params: OrganizationService.ListGuildChargesguildchargesGetParams): __Observable<__StrictHttpResponse<ListGuildChargesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/charges`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ListGuildChargesResponse>;
      })
    );
  }
  /**
   * 列举一组教会充值
   *
   * 列举一组教会充值
   * @param params The `OrganizationService.ListGuildChargesguildchargesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ListGuildChargesguildchargesGet(params: OrganizationService.ListGuildChargesguildchargesGetParams): __Observable<ListGuildChargesResponse> {
    return this.ListGuildChargesguildchargesGetResponse(params).pipe(
      __map(_r => _r.body as ListGuildChargesResponse)
    );
  }

  /**
   * 列举一组教会消费
   *
   * 列举一组教会消费
   * @param params The `OrganizationService.ListGuildConsumesguildconsumesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ListGuildConsumesguildconsumesGetResponse(params: OrganizationService.ListGuildConsumesguildconsumesGetParams): __Observable<__StrictHttpResponse<ListGuildConsumesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/consumes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ListGuildConsumesResponse>;
      })
    );
  }
  /**
   * 列举一组教会消费
   *
   * 列举一组教会消费
   * @param params The `OrganizationService.ListGuildConsumesguildconsumesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Type`: 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ListGuildConsumesguildconsumesGet(params: OrganizationService.ListGuildConsumesguildconsumesGetParams): __Observable<ListGuildConsumesResponse> {
    return this.ListGuildConsumesguildconsumesGetResponse(params).pipe(
      __map(_r => _r.body as ListGuildConsumesResponse)
    );
  }

  /**
   * 列举一组教会文件夹
   *
   * 列举一组教会文件夹
   * @param params The `OrganizationService.ListGuildFoldersguildfoldersGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `ParentFolderId`: 上级文件夹编号
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ListGuildFoldersguildfoldersGetResponse(params: OrganizationService.ListGuildFoldersguildfoldersGetParams): __Observable<__StrictHttpResponse<ListGuildFoldersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.ParentFolderId != null) __params = __params.set('ParentFolderId', params.ParentFolderId.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/folders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ListGuildFoldersResponse>;
      })
    );
  }
  /**
   * 列举一组教会文件夹
   *
   * 列举一组教会文件夹
   * @param params The `OrganizationService.ListGuildFoldersguildfoldersGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `ParentFolderId`: 上级文件夹编号
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ListGuildFoldersguildfoldersGet(params: OrganizationService.ListGuildFoldersguildfoldersGetParams): __Observable<ListGuildFoldersResponse> {
    return this.ListGuildFoldersguildfoldersGetResponse(params).pipe(
      __map(_r => _r.body as ListGuildFoldersResponse)
    );
  }

  /**
   * 查询一组教会小组
   *
   * 查询一组教会小组
   * @param params The `OrganizationService.SearchGuildGroupsguildgroupsGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息（名称）
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchGuildGroupsguildgroupsGetResponse(params: OrganizationService.SearchGuildGroupsguildgroupsGetParams): __Observable<__StrictHttpResponse<SearchGuildGroupsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Query != null) __params = __params.set('Query', params.Query.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SearchGuildGroupsResponse>;
      })
    );
  }
  /**
   * 查询一组教会小组
   *
   * 查询一组教会小组
   * @param params The `OrganizationService.SearchGuildGroupsguildgroupsGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息（名称）
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `GuildId`: 教会编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchGuildGroupsguildgroupsGet(params: OrganizationService.SearchGuildGroupsguildgroupsGetParams): __Observable<SearchGuildGroupsResponse> {
    return this.SearchGuildGroupsguildgroupsGetResponse(params).pipe(
      __map(_r => _r.body as SearchGuildGroupsResponse)
    );
  }

  /**
   * 显示教会
   *
   * 显示教会
   * @param params The `OrganizationService.ShowGuildguildshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowGuildguildshowGetResponse(params: OrganizationService.ShowGuildguildshowGetParams): __Observable<__StrictHttpResponse<ShowGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildResponse>;
      })
    );
  }
  /**
   * 显示教会
   *
   * 显示教会
   * @param params The `OrganizationService.ShowGuildguildshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowGuildguildshowGet(params: OrganizationService.ShowGuildguildshowGetParams): __Observable<ShowGuildResponse> {
    return this.ShowGuildguildshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildResponse)
    );
  }

  /**
   * 批量显示教会
   *
   * 批量显示教会
   * @param params The `OrganizationService.ShowGuildsguildsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `Skip`: 忽略的行数
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `OrderBy`: 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildsguildsshowGetResponse(params: OrganizationService.ShowGuildsguildsshowGetParams): __Observable<__StrictHttpResponse<ShowGuildsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Status != null) __params = __params.set('Status', params.Status.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Role != null) __params = __params.set('Role', params.Role.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guilds/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildsResponse>;
      })
    );
  }
  /**
   * 批量显示教会
   *
   * 批量显示教会
   * @param params The `OrganizationService.ShowGuildsguildsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `Skip`: 忽略的行数
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `OrderBy`: 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildsguildsshowGet(params: OrganizationService.ShowGuildsguildsshowGetParams): __Observable<ShowGuildsResponse> {
    return this.ShowGuildsguildsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildsResponse)
    );
  }

  /**
   * 显示教会总流量
   *
   * 显示教会总流量
   * @param params The `OrganizationService.ShowGuildTotalFluxguildtotalfluxGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowGuildTotalFluxguildtotalfluxGetResponse(params: OrganizationService.ShowGuildTotalFluxguildtotalfluxGetParams): __Observable<__StrictHttpResponse<ShowGuildTotalFluxResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/totalflux`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildTotalFluxResponse>;
      })
    );
  }
  /**
   * 显示教会总流量
   *
   * 显示教会总流量
   * @param params The `OrganizationService.ShowGuildTotalFluxguildtotalfluxGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowGuildTotalFluxguildtotalfluxGet(params: OrganizationService.ShowGuildTotalFluxguildtotalfluxGetParams): __Observable<ShowGuildTotalFluxResponse> {
    return this.ShowGuildTotalFluxguildtotalfluxGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildTotalFluxResponse)
    );
  }

  /**
   * 是否是教会成员
   *
   * 是否是教会成员
   * @param params The `OrganizationService.ShowIsGuildMemberguildmemberisshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowIsGuildMemberguildmemberisshowGetResponse(params: OrganizationService.ShowIsGuildMemberguildmemberisshowGetParams): __Observable<__StrictHttpResponse<ShowIsGuildMemberResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guildmember/isshow`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowIsGuildMemberResponse>;
      })
    );
  }
  /**
   * 是否是教会成员
   *
   * 是否是教会成员
   * @param params The `OrganizationService.ShowIsGuildMemberguildmemberisshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowIsGuildMemberguildmemberisshowGet(params: OrganizationService.ShowIsGuildMemberguildmemberisshowGetParams): __Observable<ShowIsGuildMemberResponse> {
    return this.ShowIsGuildMemberguildmemberisshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowIsGuildMemberResponse)
    );
  }

  /**
   * 转让教会
   *
   * 转让教会
   * @param params The `OrganizationService.TransferGuildguildownerCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserId`: 用户编号
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  TransferGuildguildownerCreateResponse(params: OrganizationService.TransferGuildguildownerCreateParams): __Observable<__StrictHttpResponse<TransferGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.UserId != null) { __formData.append('UserId', params.UserId as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/owner`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TransferGuildResponse>;
      })
    );
  }
  /**
   * 转让教会
   *
   * 转让教会
   * @param params The `OrganizationService.TransferGuildguildownerCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserId`: 用户编号
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  TransferGuildguildownerCreate(params: OrganizationService.TransferGuildguildownerCreateParams): __Observable<TransferGuildResponse> {
    return this.TransferGuildguildownerCreateResponse(params).pipe(
      __map(_r => _r.body as TransferGuildResponse)
    );
  }

  /**
   * 批量显示当前用户首页的消息
   *
   * 批量显示当前用户首页的消息
   * @param params The `OrganizationService.ShowGuildHomeguildhomeshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowGuildHomeguildhomeshowGetResponse(params: OrganizationService.ShowGuildHomeguildhomeshowGetParams): __Observable<__StrictHttpResponse<ShowGuildHomeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guildhome/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildHomeResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户首页的消息
   *
   * 批量显示当前用户首页的消息
   * @param params The `OrganizationService.ShowGuildHomeguildhomeshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  ShowGuildHomeguildhomeshowGet(params: OrganizationService.ShowGuildHomeguildhomeshowGetParams): __Observable<ShowGuildHomeResponse> {
    return this.ShowGuildHomeguildhomeshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildHomeResponse)
    );
  }

  /**
   * 更改教会成员信息
   *
   * 更改教会成员信息
   * @param params The `OrganizationService.ChangeGuildMemberInfoguildmemberinfoCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Nickname`: 昵称
   *
   * - `GuildId`: 教会编号
   *
   * - `AvatarUrl`: 头像地址
   *
   * @return Success
   */
  ChangeGuildMemberInfoguildmemberinfoCreateResponse(params: OrganizationService.ChangeGuildMemberInfoguildmemberinfoCreateParams): __Observable<__StrictHttpResponse<ChangeGuildMemberInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Nickname != null) { __formData.append('Nickname', params.Nickname as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/member/info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildMemberInfoResponse>;
      })
    );
  }
  /**
   * 更改教会成员信息
   *
   * 更改教会成员信息
   * @param params The `OrganizationService.ChangeGuildMemberInfoguildmemberinfoCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Nickname`: 昵称
   *
   * - `GuildId`: 教会编号
   *
   * - `AvatarUrl`: 头像地址
   *
   * @return Success
   */
  ChangeGuildMemberInfoguildmemberinfoCreate(params: OrganizationService.ChangeGuildMemberInfoguildmemberinfoCreateParams): __Observable<ChangeGuildMemberInfoResponse> {
    return this.ChangeGuildMemberInfoguildmemberinfoCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildMemberInfoResponse)
    );
  }

  /**
   * 更改教会其他成员名称及头像
   *
   * 更改教会其他成员名称及头像
   * @param params The `OrganizationService.ChangeGuildMemberNickNameguildmembernicknameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Nickname`: 昵称
   *
   * - `GuildMemberId`: 教会成员编号
   *
   * - `AvatarUrl`: 头像地址
   *
   * @return Success
   */
  ChangeGuildMemberNickNameguildmembernicknameCreateResponse(params: OrganizationService.ChangeGuildMemberNickNameguildmembernicknameCreateParams): __Observable<__StrictHttpResponse<ChangeGuildMemberNickNameResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Nickname != null) { __formData.append('Nickname', params.Nickname as string | Blob);}
    if (params.GuildMemberId != null) { __formData.append('GuildMemberId', params.GuildMemberId as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/member/nickname`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeGuildMemberNickNameResponse>;
      })
    );
  }
  /**
   * 更改教会其他成员名称及头像
   *
   * 更改教会其他成员名称及头像
   * @param params The `OrganizationService.ChangeGuildMemberNickNameguildmembernicknameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Nickname`: 昵称
   *
   * - `GuildMemberId`: 教会成员编号
   *
   * - `AvatarUrl`: 头像地址
   *
   * @return Success
   */
  ChangeGuildMemberNickNameguildmembernicknameCreate(params: OrganizationService.ChangeGuildMemberNickNameguildmembernicknameCreateParams): __Observable<ChangeGuildMemberNickNameResponse> {
    return this.ChangeGuildMemberNickNameguildmembernicknameCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeGuildMemberNickNameResponse)
    );
  }

  /**
   * 查询一组教会小组成员
   *
   * 查询一组教会小组成员
   * @param params The `OrganizationService.SearchGuildGroupMembersguildgroupmembersGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息（成员昵称）
   *
   * - `OrderBy`: 排序的字段（可选值：CreatedDate
   *
   * - `MemberStatus`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `MemberRole`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `Limit`: 获取的行数
   *
   * - `GroupId`: 小组编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchGuildGroupMembersguildgroupmembersGetResponse(params: OrganizationService.SearchGuildGroupMembersguildgroupmembersGetParams): __Observable<__StrictHttpResponse<SearchGuildGroupMembersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Query != null) __params = __params.set('Query', params.Query.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.MemberStatus != null) __params = __params.set('MemberStatus', params.MemberStatus.toString());
    if (params.MemberRole != null) __params = __params.set('MemberRole', params.MemberRole.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.GroupId != null) __params = __params.set('GroupId', params.GroupId.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild/group/members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SearchGuildGroupMembersResponse>;
      })
    );
  }
  /**
   * 查询一组教会小组成员
   *
   * 查询一组教会小组成员
   * @param params The `OrganizationService.SearchGuildGroupMembersguildgroupmembersGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息（成员昵称）
   *
   * - `OrderBy`: 排序的字段（可选值：CreatedDate
   *
   * - `MemberStatus`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `MemberRole`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `Limit`: 获取的行数
   *
   * - `GroupId`: 小组编号
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  SearchGuildGroupMembersguildgroupmembersGet(params: OrganizationService.SearchGuildGroupMembersguildgroupmembersGetParams): __Observable<SearchGuildGroupMembersResponse> {
    return this.SearchGuildGroupMembersguildgroupmembersGetResponse(params).pipe(
      __map(_r => _r.body as SearchGuildGroupMembersResponse)
    );
  }

  /**
   * 批量创建教会小组成员
   *
   * 批量创建教会小组成员
   * @param params The `OrganizationService.CreateGuildGroupMembersguildgroupmembersPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  CreateGuildGroupMembersguildgroupmembersPostResponse(params: OrganizationService.CreateGuildGroupMembersguildgroupmembersPostParams): __Observable<__StrictHttpResponse<CreateGuildGroupMembersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    (params.UserIds || []).forEach(val => {if (val != null) __formData.append('UserIds', val as string | Blob)});
    if (params.GroupId != null) { __formData.append('GroupId', params.GroupId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/group/members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildGroupMembersResponse>;
      })
    );
  }
  /**
   * 批量创建教会小组成员
   *
   * 批量创建教会小组成员
   * @param params The `OrganizationService.CreateGuildGroupMembersguildgroupmembersPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  CreateGuildGroupMembersguildgroupmembersPost(params: OrganizationService.CreateGuildGroupMembersguildgroupmembersPostParams): __Observable<CreateGuildGroupMembersResponse> {
    return this.CreateGuildGroupMembersguildgroupmembersPostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildGroupMembersResponse)
    );
  }

  /**
   * 批量删除教会小组成员
   *
   * 批量删除教会小组成员
   * @param params The `OrganizationService.DeleteGuildGroupMembersguildgroupmembersDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserIds`: 用户编号列表
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  DeleteGuildGroupMembersguildgroupmembersDeleteResponse(params: OrganizationService.DeleteGuildGroupMembersguildgroupmembersDeleteParams): __Observable<__StrictHttpResponse<DeleteGuildGroupMembersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    (params.UserIds || []).forEach(val => {if (val != null) __params = __params.append('UserIds', val.toString())});
    if (params.GroupId != null) __params = __params.set('GroupId', params.GroupId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild/group/members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeleteGuildGroupMembersResponse>;
      })
    );
  }
  /**
   * 批量删除教会小组成员
   *
   * 批量删除教会小组成员
   * @param params The `OrganizationService.DeleteGuildGroupMembersguildgroupmembersDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserIds`: 用户编号列表
   *
   * - `GroupId`: 小组编号
   *
   * @return Success
   */
  DeleteGuildGroupMembersguildgroupmembersDelete(params: OrganizationService.DeleteGuildGroupMembersguildgroupmembersDeleteParams): __Observable<DeleteGuildGroupMembersResponse> {
    return this.DeleteGuildGroupMembersguildgroupmembersDeleteResponse(params).pipe(
      __map(_r => _r.body as DeleteGuildGroupMembersResponse)
    );
  }

  /**
   * 生成教会邀请码
   *
   * 生成教会邀请码
   * @param params The `OrganizationService.GenerateGuildCodeguildmembercodePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  GenerateGuildCodeguildmembercodePostResponse(params: OrganizationService.GenerateGuildCodeguildmembercodePostParams): __Observable<__StrictHttpResponse<GenerateGuildCodeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Role != null) { __formData.append('Role', JSON.stringify(params.Role));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/member/code`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GenerateGuildCodeResponse>;
      })
    );
  }
  /**
   * 生成教会邀请码
   *
   * 生成教会邀请码
   * @param params The `OrganizationService.GenerateGuildCodeguildmembercodePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  GenerateGuildCodeguildmembercodePost(params: OrganizationService.GenerateGuildCodeguildmembercodePostParams): __Observable<GenerateGuildCodeResponse> {
    return this.GenerateGuildCodeguildmembercodePostResponse(params).pipe(
      __map(_r => _r.body as GenerateGuildCodeResponse)
    );
  }

  /**
   * 设置教会成员角色
   *
   * 设置教会成员角色
   * @param params The `OrganizationService.SetGuildMemberRoleguildmemberroleCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserId`: 用户编号
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMemberRoleguildmemberroleCreateResponse(params: OrganizationService.SetGuildMemberRoleguildmemberroleCreateParams): __Observable<__StrictHttpResponse<SetGuildMemberRoleResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.UserId != null) { __formData.append('UserId', params.UserId as string | Blob);}
    if (params.Role != null) { __formData.append('Role', JSON.stringify(params.Role));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/member/role`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SetGuildMemberRoleResponse>;
      })
    );
  }
  /**
   * 设置教会成员角色
   *
   * 设置教会成员角色
   * @param params The `OrganizationService.SetGuildMemberRoleguildmemberroleCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserId`: 用户编号
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMemberRoleguildmemberroleCreate(params: OrganizationService.SetGuildMemberRoleguildmemberroleCreateParams): __Observable<SetGuildMemberRoleResponse> {
    return this.SetGuildMemberRoleguildmemberroleCreateResponse(params).pipe(
      __map(_r => _r.body as SetGuildMemberRoleResponse)
    );
  }

  /**
   * 批量设置教会成员角色
   *
   * 批量设置教会成员角色
   * @param params The `OrganizationService.SetGuildMembersRoleguildmembersroleCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMembersRoleguildmembersroleCreateResponse(params: OrganizationService.SetGuildMembersRoleguildmembersroleCreateParams): __Observable<__StrictHttpResponse<SetGuildMembersRoleResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    (params.UserIds || []).forEach(val => {if (val != null) __formData.append('UserIds', val as string | Blob)});
    if (params.Role != null) { __formData.append('Role', JSON.stringify(params.Role));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/members/role`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SetGuildMembersRoleResponse>;
      })
    );
  }
  /**
   * 批量设置教会成员角色
   *
   * 批量设置教会成员角色
   * @param params The `OrganizationService.SetGuildMembersRoleguildmembersroleCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMembersRoleguildmembersroleCreate(params: OrganizationService.SetGuildMembersRoleguildmembersroleCreateParams): __Observable<SetGuildMembersRoleResponse> {
    return this.SetGuildMembersRoleguildmembersroleCreateResponse(params).pipe(
      __map(_r => _r.body as SetGuildMembersRoleResponse)
    );
  }

  /**
   * 批量设置教会成员状态
   *
   * 批量设置教会成员状态
   * @param params The `OrganizationService.SetGuildMembersStatusguildmembersstatusCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `StatusMessage`: 状态消息
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMembersStatusguildmembersstatusCreateResponse(params: OrganizationService.SetGuildMembersStatusguildmembersstatusCreateParams): __Observable<__StrictHttpResponse<SetGuildMembersStatusResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    (params.UserIds || []).forEach(val => {if (val != null) __formData.append('UserIds', val as string | Blob)});
    if (params.StatusMessage != null) { __formData.append('StatusMessage', params.StatusMessage as string | Blob);}
    if (params.Status != null) { __formData.append('Status', JSON.stringify(params.Status));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/members/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SetGuildMembersStatusResponse>;
      })
    );
  }
  /**
   * 批量设置教会成员状态
   *
   * 批量设置教会成员状态
   * @param params The `OrganizationService.SetGuildMembersStatusguildmembersstatusCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserIds`: 用户编号列表
   *
   * - `StatusMessage`: 状态消息
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMembersStatusguildmembersstatusCreate(params: OrganizationService.SetGuildMembersStatusguildmembersstatusCreateParams): __Observable<SetGuildMembersStatusResponse> {
    return this.SetGuildMembersStatusguildmembersstatusCreateResponse(params).pipe(
      __map(_r => _r.body as SetGuildMembersStatusResponse)
    );
  }

  /**
   * 设置教会成员状态
   *
   * 设置教会成员状态
   * @param params The `OrganizationService.SetGuildMemberStatusguildmemberstatusCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserId`: 用户编号
   *
   * - `StatusMessage`: 状态消息
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMemberStatusguildmemberstatusCreateResponse(params: OrganizationService.SetGuildMemberStatusguildmemberstatusCreateParams): __Observable<__StrictHttpResponse<SetGuildMemberStatusResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.UserId != null) { __formData.append('UserId', params.UserId as string | Blob);}
    if (params.StatusMessage != null) { __formData.append('StatusMessage', params.StatusMessage as string | Blob);}
    if (params.Status != null) { __formData.append('Status', JSON.stringify(params.Status));}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/organization/guild/member/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SetGuildMemberStatusResponse>;
      })
    );
  }
  /**
   * 设置教会成员状态
   *
   * 设置教会成员状态
   * @param params The `OrganizationService.SetGuildMemberStatusguildmemberstatusCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserId`: 用户编号
   *
   * - `StatusMessage`: 状态消息
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SetGuildMemberStatusguildmemberstatusCreate(params: OrganizationService.SetGuildMemberStatusguildmemberstatusCreateParams): __Observable<SetGuildMemberStatusResponse> {
    return this.SetGuildMemberStatusguildmemberstatusCreateResponse(params).pipe(
      __map(_r => _r.body as SetGuildMemberStatusResponse)
    );
  }

  /**
   * 查询一组教会分类的请求
   *
   * 查询一组教会分类的请求
   * @param params The `OrganizationService.ShowGuildCategoriesguildscategoriesshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildId`: 教会Id
   *
   * - `Usage`: 用途（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate
   *
   * - `MemberStatus`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `MemberRole`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildCategoriesguildscategoriesshowGetResponse(params: OrganizationService.ShowGuildCategoriesguildscategoriesshowGetParams): __Observable<__StrictHttpResponse<ShowGuildCategoriesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.guildId != null) __params = __params.set('guildId', params.guildId.toString());
    if (params.Usage != null) __params = __params.set('Usage', params.Usage.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.MemberStatus != null) __params = __params.set('MemberStatus', params.MemberStatus.toString());
    if (params.MemberRole != null) __params = __params.set('MemberRole', params.MemberRole.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guilds/categories/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildCategoriesResponse>;
      })
    );
  }
  /**
   * 查询一组教会分类的请求
   *
   * 查询一组教会分类的请求
   * @param params The `OrganizationService.ShowGuildCategoriesguildscategoriesshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `guildId`: 教会Id
   *
   * - `Usage`: 用途（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
   *
   * - `Skip`: 忽略的行数
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate
   *
   * - `MemberStatus`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `MemberRole`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildCategoriesguildscategoriesshowGet(params: OrganizationService.ShowGuildCategoriesguildscategoriesshowGetParams): __Observable<ShowGuildCategoriesResponse> {
    return this.ShowGuildCategoriesguildscategoriesshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildCategoriesResponse)
    );
  }

  /**
   * 查询一组当前用户所属的教会小组
   *
   * 查询一组当前用户所属的教会小组
   * @param params The `OrganizationService.ShowGuildGroupsguildsgroupsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息（名称）
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildGroupsguildsgroupsshowGetResponse(params: OrganizationService.ShowGuildGroupsguildsgroupsshowGetParams): __Observable<__StrictHttpResponse<ShowGuildGroupsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Query != null) __params = __params.set('Query', params.Query.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guilds/groups/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildGroupsResponse>;
      })
    );
  }
  /**
   * 查询一组当前用户所属的教会小组
   *
   * 查询一组当前用户所属的教会小组
   * @param params The `OrganizationService.ShowGuildGroupsguildsgroupsshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息（名称）
   *
   * - `OrderBy`: 排序的字段（可选值：Name, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildGroupsguildsgroupsshowGet(params: OrganizationService.ShowGuildGroupsguildsgroupsshowGetParams): __Observable<ShowGuildGroupsResponse> {
    return this.ShowGuildGroupsguildsgroupsshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildGroupsResponse)
    );
  }

  /**
   * 批量显示当前用户所属的教会成员
   *
   * 批量显示当前用户所属的教会成员
   * @param params The `OrganizationService.ShowGuildMembersguildsmembersshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `Skip`: 忽略的行数
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `OrderBy`: 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildMembersguildsmembersshowGetResponse(params: OrganizationService.ShowGuildMembersguildsmembersshowGetParams): __Observable<__StrictHttpResponse<ShowGuildMembersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    (params.Status || []).forEach(val => {if (val != null) __params = __params.append('Status', val.toString())});
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Role != null) __params = __params.set('Role', params.Role.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guilds/members/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowGuildMembersResponse>;
      })
    );
  }
  /**
   * 批量显示当前用户所属的教会成员
   *
   * 批量显示当前用户所属的教会成员
   * @param params The `OrganizationService.ShowGuildMembersguildsmembersshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Status`: 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   *
   * - `Skip`: 忽略的行数
   *
   * - `Role`: 角色（0: 信徒; 1: 同工; 2: 牧者）
   *
   * - `OrderBy`: 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * @return Success
   */
  ShowGuildMembersguildsmembersshowGet(params: OrganizationService.ShowGuildMembersguildsmembersshowGetParams): __Observable<ShowGuildMembersResponse> {
    return this.ShowGuildMembersguildsmembersshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowGuildMembersResponse)
    );
  }

  /**
   * 注册教会成员
   *
   * 注册教会成员
   * @param params The `OrganizationService.SignupGuildMemberguildmembersignupPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Token`: 验证码
   *
   * - `PhoneNumber`: 手机号码
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SignupGuildMemberguildmembersignupPostResponse(params: OrganizationService.SignupGuildMemberguildmembersignupPostParams): __Observable<__StrictHttpResponse<SignupGuildMemberResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Token != null) { __formData.append('Token', params.Token as string | Blob);}
    if (params.PhoneNumber != null) { __formData.append('PhoneNumber', params.PhoneNumber as string | Blob);}
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild/member/signup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SignupGuildMemberResponse>;
      })
    );
  }
  /**
   * 注册教会成员
   *
   * 注册教会成员
   * @param params The `OrganizationService.SignupGuildMemberguildmembersignupPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Token`: 验证码
   *
   * - `PhoneNumber`: 手机号码
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  SignupGuildMemberguildmembersignupPost(params: OrganizationService.SignupGuildMemberguildmembersignupPostParams): __Observable<SignupGuildMemberResponse> {
    return this.SignupGuildMemberguildmembersignupPostResponse(params).pipe(
      __map(_r => _r.body as SignupGuildMemberResponse)
    );
  }

  /**
   * 获取教会
   *
   * 获取教会
   * @param params The `OrganizationService.TakeGuildguildGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  TakeGuildguildGetResponse(params: OrganizationService.TakeGuildguildGetParams): __Observable<__StrictHttpResponse<TakeGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organization/guild`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TakeGuildResponse>;
      })
    );
  }
  /**
   * 获取教会
   *
   * 获取教会
   * @param params The `OrganizationService.TakeGuildguildGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  TakeGuildguildGet(params: OrganizationService.TakeGuildguildGetParams): __Observable<TakeGuildResponse> {
    return this.TakeGuildguildGetResponse(params).pipe(
      __map(_r => _r.body as TakeGuildResponse)
    );
  }

  /**
   * 创建教会
   *
   * 创建教会
   * @param params The `OrganizationService.CreateGuildguildPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Province`: 省份
   *
   * - `OwnerNickname`: 所有者昵称
   *
   * - `OwnerAvatarUrl`: 所有者头像地址
   *
   * - `DisplayName`: 显示名称
   *
   * - `Description`: 描述
   *
   * - `Country`: 国家
   *
   * - `City`: 城市
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateGuildguildPostResponse(params: OrganizationService.CreateGuildguildPostParams): __Observable<__StrictHttpResponse<CreateGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Province != null) { __formData.append('Province', params.Province as string | Blob);}
    if (params.OwnerNickname != null) { __formData.append('OwnerNickname', params.OwnerNickname as string | Blob);}
    if (params.OwnerAvatarUrl != null) { __formData.append('OwnerAvatarUrl', params.OwnerAvatarUrl as string | Blob);}
    if (params.DisplayName != null) { __formData.append('DisplayName', params.DisplayName as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.Country != null) { __formData.append('Country', params.Country as string | Blob);}
    if (params.City != null) { __formData.append('City', params.City as string | Blob);}
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/organization/guild`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateGuildResponse>;
      })
    );
  }
  /**
   * 创建教会
   *
   * 创建教会
   * @param params The `OrganizationService.CreateGuildguildPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Province`: 省份
   *
   * - `OwnerNickname`: 所有者昵称
   *
   * - `OwnerAvatarUrl`: 所有者头像地址
   *
   * - `DisplayName`: 显示名称
   *
   * - `Description`: 描述
   *
   * - `Country`: 国家
   *
   * - `City`: 城市
   *
   * - `AvatarUrl`: 标识图片地址
   *
   * @return Success
   */
  CreateGuildguildPost(params: OrganizationService.CreateGuildguildPostParams): __Observable<CreateGuildResponse> {
    return this.CreateGuildguildPostResponse(params).pipe(
      __map(_r => _r.body as CreateGuildResponse)
    );
  }

  /**
   * 解散教会
   *
   * 解散教会
   * @param params The `OrganizationService.DismissGuildguildDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  DismissGuildguildDeleteResponse(params: OrganizationService.DismissGuildguildDeleteParams): __Observable<__StrictHttpResponse<DismissGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.GuildId != null) __params = __params.set('GuildId', params.GuildId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/organization/guild`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DismissGuildResponse>;
      })
    );
  }
  /**
   * 解散教会
   *
   * 解散教会
   * @param params The `OrganizationService.DismissGuildguildDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `GuildId`: 教会编号
   *
   * @return Success
   */
  DismissGuildguildDelete(params: OrganizationService.DismissGuildguildDeleteParams): __Observable<DismissGuildResponse> {
    return this.DismissGuildguildDeleteResponse(params).pipe(
      __map(_r => _r.body as DismissGuildResponse)
    );
  }
}

module OrganizationService {

  /**
   * Parameters for AuditGuildMemberguildauditCreate
   */
  export interface AuditGuildMemberguildauditCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: AuditGuildMember;

    /**
     * 是否审核通过(true:通过;false:拒绝) 默认true
     */
    IsAllow?: boolean;

    /**
     * *教会成员编号列表
     */
    GuildMemberIds?: Array<string>;

    /**
     * *教会ID
     */
    GuildId?: string;
  }

  /**
   * Parameters for BlockGuildguildblockCreate
   */
  export interface BlockGuildguildblockCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: BlockGuild;

    /**
     * 理由
     */
    Reason?: string;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 时长（单位：小时）
     */
    Duration?: number;
  }

  /**
   * Parameters for ChangeGuildAddressguildaddressCreate
   */
  export interface ChangeGuildAddressguildaddressCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildAddress;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 地址
     */
    Address?: string;
  }

  /**
   * Parameters for ChangeGuildAuditModeguildauditmodelCreate
   */
  export interface ChangeGuildAuditModeguildauditmodelCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildAuditMode;

    /**
     * 更改的审核类型:(1.仅被邀请加入的新成员不需要审核 2.仅搜索加入的新成员需要审核 3.所有途径的新加入成员都需要审核 4.所有途径的新加入成员都不需要审核)
     */
    ModeTypeValue?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ChangeGuildAvatarguildavatarCreate
   */
  export interface ChangeGuildAvatarguildavatarCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildAvatar;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for ChangeGuildBackgroundguildbackgroundCreate
   */
  export interface ChangeGuildBackgroundguildbackgroundCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildBackground;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 背景图片地址
     */
    BackgroundUrl?: string;
  }

  /**
   * Parameters for ChangeGuildBaiscInfoguildbasicinfoCreate
   */
  export interface ChangeGuildBaiscInfoguildbasicinfoCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 允许|不允许
     */
    value?: boolean;
    body?: ChangeGuildBaiscInfo;

    /**
     * 更改的审核类型:(1.是否允许新成员加入 2.是否允许管理员审核新成员 3.是否允许管理员踢出群员 4.是否允许通过手机号搜索教会 )
     */
    ModeType?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreate
   */
  export interface ChangeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildCanSearchByPhoneNumber;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 是否通过手机号搜索
     */
    CanSearchByPhoneNumber?: boolean;
  }

  /**
   * Parameters for ChangeGuildCoverguildcoverCreate
   */
  export interface ChangeGuildCoverguildcoverCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildCover;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 封面图片地址
     */
    CoverUrl?: string;
  }

  /**
   * Parameters for ChangeGuildDescriptionguilddescriptionCreate
   */
  export interface ChangeGuildDescriptionguilddescriptionCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildDescription;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 描述
     */
    Description?: string;
  }

  /**
   * Parameters for ChangeGuildDisplayNameguilddisplaynameCreate
   */
  export interface ChangeGuildDisplayNameguilddisplaynameCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildDisplayName;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 显示名称
     */
    DisplayName?: string;
  }

  /**
   * Parameters for ChangeGuildDistrictguilddistrictCreate
   */
  export interface ChangeGuildDistrictguilddistrictCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildDistrict;

    /**
     * 省份
     */
    Province?: string;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 国家
     */
    Country?: string;

    /**
     * 城市
     */
    City?: string;
  }

  /**
   * Parameters for ChangeGuildFullNameguildfullnameCreate
   */
  export interface ChangeGuildFullNameguildfullnameCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildFullName;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 真实全称
     */
    FullName?: string;
  }

  /**
   * Parameters for ChangeGuildIsPublicguildispublicCreate
   */
  export interface ChangeGuildIsPublicguildispublicCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildIsPublic;

    /**
     * 是否公开
     */
    IsPublic?: boolean;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ChangeGuildJoinModeguildjoinmodeCreate
   */
  export interface ChangeGuildJoinModeguildjoinmodeCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildJoinMode;

    /**
     * 加入方式（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
     */
    JoinMode?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for CreateGuildAbuseReportguildabusereportPost
   */
  export interface CreateGuildAbuseReportguildabusereportPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateGuildAbuseReport;

    /**
     * 教会编号
     */
    GuildId?: string;

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
   * Parameters for CreateGuildChargeguildchargePost
   */
  export interface CreateGuildChargeguildchargePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 是否是内部充值
     */
    isInward?: boolean;
    body?: CreateGuildCharge;

    /**
     * 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     */
    Type?: number;

    /**
     * 备注
     */
    Remark?: string;

    /**
     * 关联充值编号
     */
    ReferenceChargeId?: string;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 消费金额（单位：元）
     */
    ConsumedMoney?: number;

    /**
     * 数量（单位：0: 元; 1: M; 2: 分钟）
     */
    Amount?: number;
  }

  /**
   * Parameters for SetGuildFileInfoguildfileCreate
   */
  export interface SetGuildFileInfoguildfileCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: SetGuildFileInfo;

    /**
     * 宽度
     */
    Width?: number;

    /**
     * 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
     */
    Type?: number;

    /**
     * 名称
     */
    Name?: string;

    /**
     * 高度
     */
    Height?: number;

    /**
     * 文件编号
     */
    FileId?: string;

    /**
     * 时长（单位：秒）
     */
    Duration?: number;

    /**
     * 内容类型
     */
    ContentType?: string;

    /**
     * 内容长度
     */
    ContentLength?: number;

    /**
     * 分类
     */
    Category?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for CreateGuildFileguildfilePost
   */
  export interface CreateGuildFileguildfilePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateGuildFile;

    /**
     * 宽度
     */
    Width?: number;

    /**
     * 地址
     */
    Url?: string;

    /**
     * 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
     */
    Type?: number;

    /**
     * 名称
     */
    Name?: string;

    /**
     * 高度
     */
    Height?: number;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 文件夹编号
     */
    FolderId?: string;

    /**
     * 时长（单位：秒）
     */
    Duration?: number;

    /**
     * 内容类型
     */
    ContentType?: string;

    /**
     * 内容长度
     */
    ContentLength?: number;

    /**
     * 分类
     */
    Category?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for DeleteGuildFileguildfileDelete
   */
  export interface DeleteGuildFileguildfileDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 文件编号
     */
    FileId?: string;
  }

  /**
   * Parameters for ListGuildFilesguildfilesGet
   */
  export interface ListGuildFilesguildfilesGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
     */
    Type?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：Name, Type, Category, ContentType, ContentLength, CreatedDate, ModifiedDate
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
     * 文件夹编号
     */
    FolderId?: string;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;

    /**
     * 分类
     */
    Category?: string;
  }

  /**
   * Parameters for CreateGuildFilesguildfilesPost
   */
  export interface CreateGuildFilesguildfilesPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateGuildFiles;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 文件夹编号
     */
    FolderId?: string;

    /**
     * 文件列表
     */
    Files?: Array<FileInfo>;
  }

  /**
   * Parameters for DeleteGuildFilesguildfilesDelete
   */
  export interface DeleteGuildFilesguildfilesDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 一组文件编号
     */
    FileIds?: Array<string>;
  }

  /**
   * Parameters for CreateGuildFolderguildfolderPost
   */
  export interface CreateGuildFolderguildfolderPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateGuildFolder;

    /**
     * 上级文件夹编号
     */
    ParentFolderId?: string;

    /**
     * 名称
     */
    Name?: string;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for DeleteGuildFolderguildfolderDelete
   */
  export interface DeleteGuildFolderguildfolderDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 文件夹编号
     */
    FolderId?: string;
  }

  /**
   * Parameters for SetGuildGroupInfoguildgroupCreate
   */
  export interface SetGuildGroupInfoguildgroupCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: SetGuildGroupInfo;

    /**
     * 名称
     */
    Name?: string;

    /**
     * 小组编号
     */
    GroupId?: string;
  }

  /**
   * Parameters for CreateGuildGroupguildgroupPost
   */
  export interface CreateGuildGroupguildgroupPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateGuildGroup;

    /**
     * 用户编号列表
     */
    UserIds?: Array<string>;

    /**
     * 名称
     */
    Name?: string;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for DeleteGuildGroupguildgroupDelete
   */
  export interface DeleteGuildGroupguildgroupDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 小组编号
     */
    GroupId?: string;
  }

  /**
   * Parameters for SearchGuildMembersguildmembersGet
   */
  export interface SearchGuildMembersguildmembersGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    Status?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    Role?: number;

    /**
     * 查询信息（昵称）
     */
    Query?: string;

    /**
     * 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
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
   * Parameters for DeleteGuildMembersguildmembersDelete
   */
  export interface DeleteGuildMembersguildmembersDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户编号列表
     */
    UserIds?: Array<string>;

    /**
     * 是否屏蔽
     */
    ShouldBlock?: boolean;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for GuildHomeSearchguildglobalsearchGet
   */
  export interface GuildHomeSearchguildglobalsearchGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 文本高亮前缀(默认：&lt;highlightcolor&gt;)
     */
    textHighlingPreSuffix?: string;

    /**
     * 文本高亮后缀(默认：&lt;/highlightcolor&gt;)
     */
    textHighlingAfterSuffix?: string;

    /**
     * 状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中（默认）; 1: 未开始; 2: 已结束; 3: 已中断）
     */
    status?: number;

    /**
     * 跳过条数(默认：0)
     */
    skip?: number;

    /**
     * modifiedDate(默认),createdDate,status,viewCount(查看人数),type(0: 通知; 1: 直播; 2: 讨论)
     */
    orderBy?: string;

    /**
     * 获取条数(默认：5)
     */
    limit?: number;

    /**
     * 搜索关键字
     */
    keyWord?: string;

    /**
     * *教会Id
     */
    guildId?: string;

    /**
     * 是否倒序：是（默认），否
     */
    desc?: boolean;
  }

  /**
   * Parameters for JoinGuildByGuildMemberguildjoinPost
   */
  export interface JoinGuildByGuildMemberguildjoinPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: JoinGuildByGuildMember;

    /**
     * 成员昵称
     */
    MemberNickname?: string;

    /**
     * 成员头像地址
     */
    MemberAvatarUrl?: string;

    /**
     * 教会编号|手机号
     */
    JoinIdentification?: string;

    /**
     * 邀请码（无邀请码则必须输入教会编号）
     */
    Code?: string;
  }

  /**
   * Parameters for JoinGuildguildmemberPost
   */
  export interface JoinGuildguildmemberPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: JoinGuild;

    /**
     * 成员昵称
     */
    MemberNickname?: string;

    /**
     * 成员头像地址
     */
    MemberAvatarUrl?: string;

    /**
     * 教会编号（无教会编号则必须输入邀请码）
     */
    GuildId?: string;

    /**
     * 邀请码（无邀请码则必须输入教会编号）
     */
    Code?: string;
  }

  /**
   * Parameters for LeaveGuildguildmemberDelete
   */
  export interface LeaveGuildguildmemberDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ListGuildChargesguildchargesGet
   */
  export interface ListGuildChargesguildchargesGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     */
    Type?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
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
   * Parameters for ListGuildConsumesguildconsumesGet
   */
  export interface ListGuildConsumesguildconsumesGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     */
    Type?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
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
   * Parameters for ListGuildFoldersguildfoldersGet
   */
  export interface ListGuildFoldersguildfoldersGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 上级文件夹编号
     */
    ParentFolderId?: string;

    /**
     * 排序的字段（可选值：Name, CreatedDate, ModifiedDate
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
   * Parameters for SearchGuildGroupsguildgroupsGet
   */
  export interface SearchGuildGroupsguildgroupsGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 查询信息（名称）
     */
    Query?: string;

    /**
     * 排序的字段（可选值：Name, CreatedDate, ModifiedDate
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
   * Parameters for ShowGuildguildshowGet
   */
  export interface ShowGuildguildshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ShowGuildsguildsshowGet
   */
  export interface ShowGuildsguildsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    Status?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    Role?: number;

    /**
     * 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
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
   * Parameters for ShowGuildTotalFluxguildtotalfluxGet
   */
  export interface ShowGuildTotalFluxguildtotalfluxGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ShowIsGuildMemberguildmemberisshowGet
   */
  export interface ShowIsGuildMemberguildmemberisshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for TransferGuildguildownerCreate
   */
  export interface TransferGuildguildownerCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: TransferGuild;

    /**
     * 用户编号
     */
    UserId?: string;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ShowGuildHomeguildhomeshowGet
   */
  export interface ShowGuildHomeguildhomeshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ChangeGuildMemberInfoguildmemberinfoCreate
   */
  export interface ChangeGuildMemberInfoguildmemberinfoCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildMemberInfo;

    /**
     * 昵称
     */
    Nickname?: string;

    /**
     * 教会编号
     */
    GuildId?: string;

    /**
     * 头像地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for ChangeGuildMemberNickNameguildmembernicknameCreate
   */
  export interface ChangeGuildMemberNickNameguildmembernicknameCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeGuildMemberNickName;

    /**
     * 昵称
     */
    Nickname?: string;

    /**
     * 教会成员编号
     */
    GuildMemberId?: string;

    /**
     * 头像地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for SearchGuildGroupMembersguildgroupmembersGet
   */
  export interface SearchGuildGroupMembersguildgroupmembersGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 查询信息（成员昵称）
     */
    Query?: string;

    /**
     * 排序的字段（可选值：CreatedDate
     */
    OrderBy?: string;

    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    MemberStatus?: number;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    MemberRole?: number;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 小组编号
     */
    GroupId?: string;

    /**
     * 是否按降序排序
     */
    Descending?: boolean;
  }

  /**
   * Parameters for CreateGuildGroupMembersguildgroupmembersPost
   */
  export interface CreateGuildGroupMembersguildgroupmembersPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateGuildGroupMembers;

    /**
     * 用户编号列表
     */
    UserIds?: Array<string>;

    /**
     * 小组编号
     */
    GroupId?: string;
  }

  /**
   * Parameters for DeleteGuildGroupMembersguildgroupmembersDelete
   */
  export interface DeleteGuildGroupMembersguildgroupmembersDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户编号列表
     */
    UserIds?: Array<string>;

    /**
     * 小组编号
     */
    GroupId?: string;
  }

  /**
   * Parameters for GenerateGuildCodeguildmembercodePost
   */
  export interface GenerateGuildCodeguildmembercodePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: GenerateGuildCode;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    Role?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for SetGuildMemberRoleguildmemberroleCreate
   */
  export interface SetGuildMemberRoleguildmemberroleCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: SetGuildMemberRole;

    /**
     * 用户编号
     */
    UserId?: string;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    Role?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for SetGuildMembersRoleguildmembersroleCreate
   */
  export interface SetGuildMembersRoleguildmembersroleCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: SetGuildMembersRole;

    /**
     * 用户编号列表
     */
    UserIds?: Array<string>;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    Role?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for SetGuildMembersStatusguildmembersstatusCreate
   */
  export interface SetGuildMembersStatusguildmembersstatusCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: SetGuildMembersStatus;

    /**
     * 用户编号列表
     */
    UserIds?: Array<string>;

    /**
     * 状态消息
     */
    StatusMessage?: string;

    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    Status?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for SetGuildMemberStatusguildmemberstatusCreate
   */
  export interface SetGuildMemberStatusguildmemberstatusCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: SetGuildMemberStatus;

    /**
     * 用户编号
     */
    UserId?: string;

    /**
     * 状态消息
     */
    StatusMessage?: string;

    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    Status?: number;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for ShowGuildCategoriesguildscategoriesshowGet
   */
  export interface ShowGuildCategoriesguildscategoriesshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会Id
     */
    guildId?: string;

    /**
     * 用途（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
     */
    Usage?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 排序的字段（可选值：Name, CreatedDate
     */
    OrderBy?: string;

    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    MemberStatus?: number;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    MemberRole?: number;

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
   * Parameters for ShowGuildGroupsguildsgroupsshowGet
   */
  export interface ShowGuildGroupsguildsgroupsshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 查询信息（名称）
     */
    Query?: string;

    /**
     * 排序的字段（可选值：Name, CreatedDate, ModifiedDate
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
   * Parameters for ShowGuildMembersguildsmembersshowGet
   */
  export interface ShowGuildMembersguildsmembersshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    Status?: Array<number>;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    Role?: number;

    /**
     * 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
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
   * Parameters for SignupGuildMemberguildmembersignupPost
   */
  export interface SignupGuildMemberguildmembersignupPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: SignupGuildMember;

    /**
     * 验证码
     */
    Token?: string;

    /**
     * 手机号码
     */
    PhoneNumber?: string;

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for TakeGuildguildGet
   */
  export interface TakeGuildguildGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    GuildId?: string;
  }

  /**
   * Parameters for CreateGuildguildPost
   */
  export interface CreateGuildguildPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: CreateGuild;

    /**
     * 省份
     */
    Province?: string;

    /**
     * 所有者昵称
     */
    OwnerNickname?: string;

    /**
     * 所有者头像地址
     */
    OwnerAvatarUrl?: string;

    /**
     * 显示名称
     */
    DisplayName?: string;

    /**
     * 描述
     */
    Description?: string;

    /**
     * 国家
     */
    Country?: string;

    /**
     * 城市
     */
    City?: string;

    /**
     * 标识图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for DismissGuildguildDelete
   */
  export interface DismissGuildguildDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 教会编号
     */
    GuildId?: string;
  }
}

export { OrganizationService }
