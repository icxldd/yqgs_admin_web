/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BindAccountResponse } from '../models/bind-account-response';
import { BindAccount } from '../models/bind-account';
import { ChangeAccountAvatarResponse } from '../models/change-account-avatar-response';
import { ChangeAccountAvatar } from '../models/change-account-avatar';
import { ChangeAccountCoverResponse } from '../models/change-account-cover-response';
import { ChangeAccountCover } from '../models/change-account-cover';
import { ChangeAccountDefaultGuildResponse } from '../models/change-account-default-guild-response';
import { ChangeAccountDefaultGuild } from '../models/change-account-default-guild';
import { ChangeAccountDescriptionResponse } from '../models/change-account-description-response';
import { ChangeAccountDescription } from '../models/change-account-description';
import { ChangeAccountDisplayNameResponse } from '../models/change-account-display-name-response';
import { ChangeAccountDisplayName } from '../models/change-account-display-name';
import { ChangeAccountDistrictResponse } from '../models/change-account-district-response';
import { ChangeAccountDistrict } from '../models/change-account-district';
import { ChangeAccountFullNameResponse } from '../models/change-account-full-name-response';
import { ChangeAccountFullName } from '../models/change-account-full-name';
import { ChangeAccountIdentificationResponse } from '../models/change-account-identification-response';
import { ChangeAccountIdentification } from '../models/change-account-identification';
import { ChangeAccountPasswordResponse } from '../models/change-account-password-response';
import { ChangeAccountPassword } from '../models/change-account-password';
import { ResetAccountPasswordResponse } from '../models/reset-account-password-response';
import { ResetAccountPassword } from '../models/reset-account-password';
import { ChangeAccountSignatureResponse } from '../models/change-account-signature-response';
import { ChangeAccountSignature } from '../models/change-account-signature';
import { ClearAccountDataResponse } from '../models/clear-account-data-response';
import { LogoutAccountResponse } from '../models/logout-account-response';
import { RegisterDeviceResponse } from '../models/register-device-response';
import { RegisterDevice } from '../models/register-device';
import { UnregisterDeviceResponse } from '../models/unregister-device-response';
import { ShowAccountResponse } from '../models/show-account-response';
import { ShowCodeToSessionResponse } from '../models/show-code-to-session-response';
import { LoginAccountByMobileResponse } from '../models/login-account-by-mobile-response';
import { LoginAccountByMobile } from '../models/login-account-by-mobile';
import { LoginAccountByPasswordResponse } from '../models/login-account-by-password-response';
import { LoginAccountByPassword } from '../models/login-account-by-password';
import { LoginAccountByWechatResponse } from '../models/login-account-by-wechat-response';
import { LoginAccountByWechat } from '../models/login-account-by-wechat';
import { ShowH5AccessTokenResponse } from '../models/show-h5access-token-response';
import { ShowUserInfoByUnionIdResponse } from '../models/show-user-info-by-union-id-response';
import { WechatDecryptResponse } from '../models/wechat-decrypt-response';
import { WechatDecrypt } from '../models/wechat-decrypt';
import { LoginAccountByWechatMiniProgramResponse } from '../models/login-account-by-wechat-mini-program-response';
import { LoginAccountByWechatMiniProgram } from '../models/login-account-by-wechat-mini-program';
import { ShowJSSDKSignatureResponse } from '../models/show-jssdksignature-response';
@Injectable({
  providedIn: 'root',
})
class AccountService extends __BaseService {
  static readonly BindAccountbindCreatePath = '/account/bind';
  static readonly ChangeAccountAvataravatarCreatePath = '/account/avatar';
  static readonly ChangeAccountCovercoverCreatePath = '/account/cover';
  static readonly ChangeAccountDefaultGuilddefaultguildCreatePath = '/account/defaultguild';
  static readonly ChangeAccountDescriptiondescriptionCreatePath = '/account/description';
  static readonly ChangeAccountDisplayNamedisplaynameCreatePath = '/account/displayname';
  static readonly ChangeAccountDistrictdistrictCreatePath = '/account/district';
  static readonly ChangeAccountFullNamefullnameCreatePath = '/account/fullname';
  static readonly ChangeAccountIdentificationidentificationCreatePath = '/account/identification';
  static readonly ChangeAccountPasswordpasswordCreatePath = '/account/password';
  static readonly ResetAccountPasswordpasswordPostPath = '/account/password';
  static readonly ChangeAccountSignaturesignatureCreatePath = '/account/signature';
  static readonly ClearAccountDataclearaccountDeletePath = '/account/clearaccount';
  static readonly LogoutAccountauthDeletePath = '/account/auth';
  static readonly RegisterDevicedevicePostPath = '/account/device';
  static readonly UnregisterDevicedeviceDeletePath = '/account/device';
  static readonly ShowAccountshowGetPath = '/account/show';
  static readonly ShowCodeToSessioncodeToSessionGetPath = '/account/codeToSession';
  static readonly LoginAccountByMobileauthmobilePostPath = '/account/auth/mobile';
  static readonly LoginAccountByPasswordauthpasswordPostPath = '/account/auth/password';
  static readonly LoginAccountByWechatauthwechatPostPath = '/account/auth/wechat';
  static readonly ShowH5AccessTokenh5showGetPath = '/account/h5/show';
  static readonly ShowUserInfoByUnionIdunionidshowGetPath = '/account/unionid/show';
  static readonly WechatDecryptwechatMiniProgramdecryptPostPath = '/account/wechatMiniProgram/decrypt';
  static readonly LoginAccountByWechatMiniProgramauthwechatminiProgramPostPath = '/account/auth/wechat/miniProgram';
  static readonly ShowJSSDKSignaturejssdksignatureshowGetPath = '/account/jssdk/signature/show';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 账号绑定第三方账号：手机号，微信号
   *
   * 账号绑定第三方账号：手机号，微信号
   * @param params The `AccountService.BindAccountbindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `WeChatOpenId`: 微信OpenId（绑定微信时候填写）
   *
   * - `WeChatAccessToken`: 微信Token（绑定微信时候填写）
   *
   * - `ValueOfBind`: 绑定的手机号|绑定的微信unionID
   *
   * - `TypeOfBind`: 绑定类型 0:绑定手机号，1：绑定微信账号
   *
   * - `IsNewAccountOfBind`: 是否是新用户绑定
   *
   * @return Success
   */
  BindAccountbindCreateResponse(params: AccountService.BindAccountbindCreateParams): __Observable<__StrictHttpResponse<BindAccountResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.WeChatOpenId != null) { __formData.append('WeChatOpenId', params.WeChatOpenId as string | Blob);}
    if (params.WeChatAccessToken != null) { __formData.append('WeChatAccessToken', params.WeChatAccessToken as string | Blob);}
    if (params.ValueOfBind != null) { __formData.append('ValueOfBind', params.ValueOfBind as string | Blob);}
    if (params.TypeOfBind != null) { __formData.append('TypeOfBind', JSON.stringify(params.TypeOfBind));}
    if (params.IsNewAccountOfBind != null) { __formData.append('IsNewAccountOfBind', JSON.stringify(params.IsNewAccountOfBind));}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/bind`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BindAccountResponse>;
      })
    );
  }
  /**
   * 账号绑定第三方账号：手机号，微信号
   *
   * 账号绑定第三方账号：手机号，微信号
   * @param params The `AccountService.BindAccountbindCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `WeChatOpenId`: 微信OpenId（绑定微信时候填写）
   *
   * - `WeChatAccessToken`: 微信Token（绑定微信时候填写）
   *
   * - `ValueOfBind`: 绑定的手机号|绑定的微信unionID
   *
   * - `TypeOfBind`: 绑定类型 0:绑定手机号，1：绑定微信账号
   *
   * - `IsNewAccountOfBind`: 是否是新用户绑定
   *
   * @return Success
   */
  BindAccountbindCreate(params: AccountService.BindAccountbindCreateParams): __Observable<BindAccountResponse> {
    return this.BindAccountbindCreateResponse(params).pipe(
      __map(_r => _r.body as BindAccountResponse)
    );
  }

  /**
   * 更改帐户头像图片
   *
   * 上传本地头像无须输入来源头像的地址。
   * @param params The `AccountService.ChangeAccountAvataravatarCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `AvatarUrl`: 头像图片地址
   *
   * @return Success
   */
  ChangeAccountAvataravatarCreateResponse(params: AccountService.ChangeAccountAvataravatarCreateParams): __Observable<__StrictHttpResponse<ChangeAccountAvatarResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.AvatarUrl != null) { __formData.append('AvatarUrl', params.AvatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/avatar`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountAvatarResponse>;
      })
    );
  }
  /**
   * 更改帐户头像图片
   *
   * 上传本地头像无须输入来源头像的地址。
   * @param params The `AccountService.ChangeAccountAvataravatarCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `AvatarUrl`: 头像图片地址
   *
   * @return Success
   */
  ChangeAccountAvataravatarCreate(params: AccountService.ChangeAccountAvataravatarCreateParams): __Observable<ChangeAccountAvatarResponse> {
    return this.ChangeAccountAvataravatarCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountAvatarResponse)
    );
  }

  /**
   * 更改帐户封面图片
   *
   * 上传本地封面无须输入来源封面的地址。
   * @param params The `AccountService.ChangeAccountCovercoverCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `CoverUrl`: 封面图片地址
   *
   * @return Success
   */
  ChangeAccountCovercoverCreateResponse(params: AccountService.ChangeAccountCovercoverCreateParams): __Observable<__StrictHttpResponse<ChangeAccountCoverResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.CoverUrl != null) { __formData.append('CoverUrl', params.CoverUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/cover`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountCoverResponse>;
      })
    );
  }
  /**
   * 更改帐户封面图片
   *
   * 上传本地封面无须输入来源封面的地址。
   * @param params The `AccountService.ChangeAccountCovercoverCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `CoverUrl`: 封面图片地址
   *
   * @return Success
   */
  ChangeAccountCovercoverCreate(params: AccountService.ChangeAccountCovercoverCreateParams): __Observable<ChangeAccountCoverResponse> {
    return this.ChangeAccountCovercoverCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountCoverResponse)
    );
  }

  /**
   * 更改默认使用的教会
   *
   * 更改默认使用的教会
   * @param params The `AccountService.ChangeAccountDefaultGuilddefaultguildCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会ID
   *
   * @return Success
   */
  ChangeAccountDefaultGuilddefaultguildCreateResponse(params: AccountService.ChangeAccountDefaultGuilddefaultguildCreateParams): __Observable<__StrictHttpResponse<ChangeAccountDefaultGuildResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.GuildId != null) { __formData.append('GuildId', params.GuildId as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/defaultguild`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountDefaultGuildResponse>;
      })
    );
  }
  /**
   * 更改默认使用的教会
   *
   * 更改默认使用的教会
   * @param params The `AccountService.ChangeAccountDefaultGuilddefaultguildCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `GuildId`: 教会ID
   *
   * @return Success
   */
  ChangeAccountDefaultGuilddefaultguildCreate(params: AccountService.ChangeAccountDefaultGuilddefaultguildCreateParams): __Observable<ChangeAccountDefaultGuildResponse> {
    return this.ChangeAccountDefaultGuilddefaultguildCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountDefaultGuildResponse)
    );
  }

  /**
   * 更改帐户简介
   *
   * 更改帐户简介
   * @param params The `AccountService.ChangeAccountDescriptiondescriptionCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  ChangeAccountDescriptiondescriptionCreateResponse(params: AccountService.ChangeAccountDescriptiondescriptionCreateParams): __Observable<__StrictHttpResponse<ChangeAccountDescriptionResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/description`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountDescriptionResponse>;
      })
    );
  }
  /**
   * 更改帐户简介
   *
   * 更改帐户简介
   * @param params The `AccountService.ChangeAccountDescriptiondescriptionCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Description`: 描述
   *
   * @return Success
   */
  ChangeAccountDescriptiondescriptionCreate(params: AccountService.ChangeAccountDescriptiondescriptionCreateParams): __Observable<ChangeAccountDescriptionResponse> {
    return this.ChangeAccountDescriptiondescriptionCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountDescriptionResponse)
    );
  }

  /**
   * 更改帐户显示名称
   *
   * 更改帐户显示名称
   * @param params The `AccountService.ChangeAccountDisplayNamedisplaynameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `DisplayName`: 显示名称
   *
   * @return Success
   */
  ChangeAccountDisplayNamedisplaynameCreateResponse(params: AccountService.ChangeAccountDisplayNamedisplaynameCreateParams): __Observable<__StrictHttpResponse<ChangeAccountDisplayNameResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.DisplayName != null) { __formData.append('DisplayName', params.DisplayName as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/displayname`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountDisplayNameResponse>;
      })
    );
  }
  /**
   * 更改帐户显示名称
   *
   * 更改帐户显示名称
   * @param params The `AccountService.ChangeAccountDisplayNamedisplaynameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `DisplayName`: 显示名称
   *
   * @return Success
   */
  ChangeAccountDisplayNamedisplaynameCreate(params: AccountService.ChangeAccountDisplayNamedisplaynameCreateParams): __Observable<ChangeAccountDisplayNameResponse> {
    return this.ChangeAccountDisplayNamedisplaynameCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountDisplayNameResponse)
    );
  }

  /**
   * 更改帐户所在地区
   *
   * 更改帐户所在地区
   * @param params The `AccountService.ChangeAccountDistrictdistrictCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Province`: 省份
   *
   * - `Country`: 国家
   *
   * - `City`: 城市
   *
   * @return Success
   */
  ChangeAccountDistrictdistrictCreateResponse(params: AccountService.ChangeAccountDistrictdistrictCreateParams): __Observable<__StrictHttpResponse<ChangeAccountDistrictResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Province != null) { __formData.append('Province', params.Province as string | Blob);}
    if (params.Country != null) { __formData.append('Country', params.Country as string | Blob);}
    if (params.City != null) { __formData.append('City', params.City as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/district`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountDistrictResponse>;
      })
    );
  }
  /**
   * 更改帐户所在地区
   *
   * 更改帐户所在地区
   * @param params The `AccountService.ChangeAccountDistrictdistrictCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Province`: 省份
   *
   * - `Country`: 国家
   *
   * - `City`: 城市
   *
   * @return Success
   */
  ChangeAccountDistrictdistrictCreate(params: AccountService.ChangeAccountDistrictdistrictCreateParams): __Observable<ChangeAccountDistrictResponse> {
    return this.ChangeAccountDistrictdistrictCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountDistrictResponse)
    );
  }

  /**
   * 更改帐户真实姓名
   *
   * 更改帐户真实姓名
   * @param params The `AccountService.ChangeAccountFullNamefullnameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `FullName`: 真实姓名
   *
   * @return Success
   */
  ChangeAccountFullNamefullnameCreateResponse(params: AccountService.ChangeAccountFullNamefullnameCreateParams): __Observable<__StrictHttpResponse<ChangeAccountFullNameResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.FullName != null) { __formData.append('FullName', params.FullName as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/fullname`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountFullNameResponse>;
      })
    );
  }
  /**
   * 更改帐户真实姓名
   *
   * 更改帐户真实姓名
   * @param params The `AccountService.ChangeAccountFullNamefullnameCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `FullName`: 真实姓名
   *
   * @return Success
   */
  ChangeAccountFullNamefullnameCreate(params: AccountService.ChangeAccountFullNamefullnameCreateParams): __Observable<ChangeAccountFullNameResponse> {
    return this.ChangeAccountFullNamefullnameCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountFullNameResponse)
    );
  }

  /**
   * 更改帐户身份证照片
   *
   * 更改帐户身份证照片
   * @param params The `AccountService.ChangeAccountIdentificationidentificationCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `IdentificationUrl`: 身份证照片地址
   *
   * @return Success
   */
  ChangeAccountIdentificationidentificationCreateResponse(params: AccountService.ChangeAccountIdentificationidentificationCreateParams): __Observable<__StrictHttpResponse<ChangeAccountIdentificationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.IdentificationUrl != null) { __formData.append('IdentificationUrl', params.IdentificationUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/identification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountIdentificationResponse>;
      })
    );
  }
  /**
   * 更改帐户身份证照片
   *
   * 更改帐户身份证照片
   * @param params The `AccountService.ChangeAccountIdentificationidentificationCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `IdentificationUrl`: 身份证照片地址
   *
   * @return Success
   */
  ChangeAccountIdentificationidentificationCreate(params: AccountService.ChangeAccountIdentificationidentificationCreateParams): __Observable<ChangeAccountIdentificationResponse> {
    return this.ChangeAccountIdentificationidentificationCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountIdentificationResponse)
    );
  }

  /**
   * 更改帐户登录密码
   *
   * 更改帐户登录密码
   * @param params The `AccountService.ChangeAccountPasswordpasswordCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Password`: 密码
   *
   * @return Success
   */
  ChangeAccountPasswordpasswordCreateResponse(params: AccountService.ChangeAccountPasswordpasswordCreateParams): __Observable<__StrictHttpResponse<ChangeAccountPasswordResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Password != null) { __formData.append('Password', params.Password as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountPasswordResponse>;
      })
    );
  }
  /**
   * 更改帐户登录密码
   *
   * 更改帐户登录密码
   * @param params The `AccountService.ChangeAccountPasswordpasswordCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Password`: 密码
   *
   * @return Success
   */
  ChangeAccountPasswordpasswordCreate(params: AccountService.ChangeAccountPasswordpasswordCreateParams): __Observable<ChangeAccountPasswordResponse> {
    return this.ChangeAccountPasswordpasswordCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountPasswordResponse)
    );
  }

  /**
   * 重置登录密码
   *
   * 重置登录密码
   * @param params The `AccountService.ResetAccountPasswordpasswordPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Token`: 验证码
   *
   * - `PhoneNumber`: 手机号码
   *
   * - `Password`: 重置的密码
   *
   * @return Success
   */
  ResetAccountPasswordpasswordPostResponse(params: AccountService.ResetAccountPasswordpasswordPostParams): __Observable<__StrictHttpResponse<ResetAccountPasswordResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Token != null) { __formData.append('Token', params.Token as string | Blob);}
    if (params.PhoneNumber != null) { __formData.append('PhoneNumber', params.PhoneNumber as string | Blob);}
    if (params.Password != null) { __formData.append('Password', params.Password as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResetAccountPasswordResponse>;
      })
    );
  }
  /**
   * 重置登录密码
   *
   * 重置登录密码
   * @param params The `AccountService.ResetAccountPasswordpasswordPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Token`: 验证码
   *
   * - `PhoneNumber`: 手机号码
   *
   * - `Password`: 重置的密码
   *
   * @return Success
   */
  ResetAccountPasswordpasswordPost(params: AccountService.ResetAccountPasswordpasswordPostParams): __Observable<ResetAccountPasswordResponse> {
    return this.ResetAccountPasswordpasswordPostResponse(params).pipe(
      __map(_r => _r.body as ResetAccountPasswordResponse)
    );
  }

  /**
   * 更改帐户签名
   *
   * 更改帐户签名
   * @param params The `AccountService.ChangeAccountSignaturesignatureCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Signature`: 签名
   *
   * @return Success
   */
  ChangeAccountSignaturesignatureCreateResponse(params: AccountService.ChangeAccountSignaturesignatureCreateParams): __Observable<__StrictHttpResponse<ChangeAccountSignatureResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Signature != null) { __formData.append('Signature', params.Signature as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/signature`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChangeAccountSignatureResponse>;
      })
    );
  }
  /**
   * 更改帐户签名
   *
   * 更改帐户签名
   * @param params The `AccountService.ChangeAccountSignaturesignatureCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Signature`: 签名
   *
   * @return Success
   */
  ChangeAccountSignaturesignatureCreate(params: AccountService.ChangeAccountSignaturesignatureCreateParams): __Observable<ChangeAccountSignatureResponse> {
    return this.ChangeAccountSignaturesignatureCreateResponse(params).pipe(
      __map(_r => _r.body as ChangeAccountSignatureResponse)
    );
  }

  /**
   * 清除用户数据
   *
   * 清除用户数据
   * @param params The `AccountService.ClearAccountDataclearaccountDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserAuthId`: 用户ID
   *
   * @return Success
   */
  ClearAccountDataclearaccountDeleteResponse(params: AccountService.ClearAccountDataclearaccountDeleteParams): __Observable<__StrictHttpResponse<ClearAccountDataResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.UserAuthId != null) __params = __params.set('UserAuthId', params.UserAuthId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/account/clearaccount`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClearAccountDataResponse>;
      })
    );
  }
  /**
   * 清除用户数据
   *
   * 清除用户数据
   * @param params The `AccountService.ClearAccountDataclearaccountDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `UserAuthId`: 用户ID
   *
   * @return Success
   */
  ClearAccountDataclearaccountDelete(params: AccountService.ClearAccountDataclearaccountDeleteParams): __Observable<ClearAccountDataResponse> {
    return this.ClearAccountDataclearaccountDeleteResponse(params).pipe(
      __map(_r => _r.body as ClearAccountDataResponse)
    );
  }

  /**
   * 退出登录
   *
   * 退出登录
   * @param params The `AccountService.LogoutAccountauthDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  LogoutAccountauthDeleteResponse(params: AccountService.LogoutAccountauthDeleteParams): __Observable<__StrictHttpResponse<LogoutAccountResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.DeviceToken != null) __params = __params.set('DeviceToken', params.DeviceToken.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/account/auth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LogoutAccountResponse>;
      })
    );
  }
  /**
   * 退出登录
   *
   * 退出登录
   * @param params The `AccountService.LogoutAccountauthDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  LogoutAccountauthDelete(params: AccountService.LogoutAccountauthDeleteParams): __Observable<LogoutAccountResponse> {
    return this.LogoutAccountauthDeleteResponse(params).pipe(
      __map(_r => _r.body as LogoutAccountResponse)
    );
  }

  /**
   * 注册设备号
   *
   * 注册设备号
   * @param params The `AccountService.RegisterDevicedevicePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  RegisterDevicedevicePostResponse(params: AccountService.RegisterDevicedevicePostParams): __Observable<__StrictHttpResponse<RegisterDeviceResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.DeviceToken != null) { __formData.append('DeviceToken', params.DeviceToken as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/device`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisterDeviceResponse>;
      })
    );
  }
  /**
   * 注册设备号
   *
   * 注册设备号
   * @param params The `AccountService.RegisterDevicedevicePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  RegisterDevicedevicePost(params: AccountService.RegisterDevicedevicePostParams): __Observable<RegisterDeviceResponse> {
    return this.RegisterDevicedevicePostResponse(params).pipe(
      __map(_r => _r.body as RegisterDeviceResponse)
    );
  }

  /**
   * 注销设备号
   *
   * 注销设备号
   * @param params The `AccountService.UnregisterDevicedeviceDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  UnregisterDevicedeviceDeleteResponse(params: AccountService.UnregisterDevicedeviceDeleteParams): __Observable<__StrictHttpResponse<UnregisterDeviceResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.DeviceToken != null) __params = __params.set('DeviceToken', params.DeviceToken.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/account/device`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UnregisterDeviceResponse>;
      })
    );
  }
  /**
   * 注销设备号
   *
   * 注销设备号
   * @param params The `AccountService.UnregisterDevicedeviceDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  UnregisterDevicedeviceDelete(params: AccountService.UnregisterDevicedeviceDeleteParams): __Observable<UnregisterDeviceResponse> {
    return this.UnregisterDevicedeviceDeleteResponse(params).pipe(
      __map(_r => _r.body as UnregisterDeviceResponse)
    );
  }

  /**
   * 显示帐户信息
   *
   * 显示帐户信息
   * @param Accept Accept Header
   * @return Success
   */
  ShowAccountshowGetResponse(Accept: 'application/json'): __Observable<__StrictHttpResponse<ShowAccountResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Accept != null) __headers = __headers.set('Accept', Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowAccountResponse>;
      })
    );
  }
  /**
   * 显示帐户信息
   *
   * 显示帐户信息
   * @param Accept Accept Header
   * @return Success
   */
  ShowAccountshowGet(Accept: 'application/json'): __Observable<ShowAccountResponse> {
    return this.ShowAccountshowGetResponse(Accept).pipe(
      __map(_r => _r.body as ShowAccountResponse)
    );
  }

  /**
   * 微信小程序code换sessionkey。
   *
   * 微信小程序code换sessionkey。
   * @param params The `AccountService.ShowCodeToSessioncodeToSessionGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `js_code`: jscode
   *
   * @return Success
   */
  ShowCodeToSessioncodeToSessionGetResponse(params: AccountService.ShowCodeToSessioncodeToSessionGetParams): __Observable<__StrictHttpResponse<ShowCodeToSessionResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.jsCode != null) __params = __params.set('js_code', params.jsCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account/codeToSession`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowCodeToSessionResponse>;
      })
    );
  }
  /**
   * 微信小程序code换sessionkey。
   *
   * 微信小程序code换sessionkey。
   * @param params The `AccountService.ShowCodeToSessioncodeToSessionGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `js_code`: jscode
   *
   * @return Success
   */
  ShowCodeToSessioncodeToSessionGet(params: AccountService.ShowCodeToSessioncodeToSessionGetParams): __Observable<ShowCodeToSessionResponse> {
    return this.ShowCodeToSessioncodeToSessionGetResponse(params).pipe(
      __map(_r => _r.body as ShowCodeToSessionResponse)
    );
  }

  /**
   * 使用手机号码及验证码登录
   *
   * 使用手机号码及验证码登录
   * @param params The `AccountService.LoginAccountByMobileauthmobilePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Token`: 验证码
   *
   * - `PhoneNumber`: 手机号码
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  LoginAccountByMobileauthmobilePostResponse(params: AccountService.LoginAccountByMobileauthmobilePostParams): __Observable<__StrictHttpResponse<LoginAccountByMobileResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Token != null) { __formData.append('Token', params.Token as string | Blob);}
    if (params.PhoneNumber != null) { __formData.append('PhoneNumber', params.PhoneNumber as string | Blob);}
    if (params.DeviceToken != null) { __formData.append('DeviceToken', params.DeviceToken as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/auth/mobile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginAccountByMobileResponse>;
      })
    );
  }
  /**
   * 使用手机号码及验证码登录
   *
   * 使用手机号码及验证码登录
   * @param params The `AccountService.LoginAccountByMobileauthmobilePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Token`: 验证码
   *
   * - `PhoneNumber`: 手机号码
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  LoginAccountByMobileauthmobilePost(params: AccountService.LoginAccountByMobileauthmobilePostParams): __Observable<LoginAccountByMobileResponse> {
    return this.LoginAccountByMobileauthmobilePostResponse(params).pipe(
      __map(_r => _r.body as LoginAccountByMobileResponse)
    );
  }

  /**
   * 使用密码登录
   *
   * 使用密码登录
   * @param params The `AccountService.LoginAccountByPasswordauthpasswordPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserNameOrPhoneNumber`: 用户名称或手机号码
   *
   * - `Password`: 登录密码
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  LoginAccountByPasswordauthpasswordPostResponse(params: AccountService.LoginAccountByPasswordauthpasswordPostParams): __Observable<__StrictHttpResponse<LoginAccountByPasswordResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.UserNameOrPhoneNumber != null) { __formData.append('UserNameOrPhoneNumber', params.UserNameOrPhoneNumber as string | Blob);}
    if (params.Password != null) { __formData.append('Password', params.Password as string | Blob);}
    if (params.DeviceToken != null) { __formData.append('DeviceToken', params.DeviceToken as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/auth/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginAccountByPasswordResponse>;
      })
    );
  }
  /**
   * 使用密码登录
   *
   * 使用密码登录
   * @param params The `AccountService.LoginAccountByPasswordauthpasswordPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `UserNameOrPhoneNumber`: 用户名称或手机号码
   *
   * - `Password`: 登录密码
   *
   * - `DeviceToken`: 设备号
   *
   * @return Success
   */
  LoginAccountByPasswordauthpasswordPost(params: AccountService.LoginAccountByPasswordauthpasswordPostParams): __Observable<LoginAccountByPasswordResponse> {
    return this.LoginAccountByPasswordauthpasswordPostResponse(params).pipe(
      __map(_r => _r.body as LoginAccountByPasswordResponse)
    );
  }

  /**
   * 使用微信登录
   *
   * 使用微信登录
   * @param params The `AccountService.LoginAccountByWechatauthwechatPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `wechatOpenId`: 微信OpenId
   *
   * - `wechatAccessToken`: 微信访问Token
   *
   * - `unionId`: 微信访问unionId
   *
   * - `deviceToken`: 设备号
   *
   * - `body`:
   *
   * @return Success
   */
  LoginAccountByWechatauthwechatPostResponse(params: AccountService.LoginAccountByWechatauthwechatPostParams): __Observable<__StrictHttpResponse<LoginAccountByWechatResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.wechatOpenId != null) { __formData.append('wechatOpenId', params.wechatOpenId as string | Blob);}
    if (params.wechatAccessToken != null) { __formData.append('wechatAccessToken', params.wechatAccessToken as string | Blob);}
    if (params.unionId != null) { __formData.append('unionId', params.unionId as string | Blob);}
    if (params.deviceToken != null) { __formData.append('deviceToken', params.deviceToken as string | Blob);}
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/auth/wechat`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginAccountByWechatResponse>;
      })
    );
  }
  /**
   * 使用微信登录
   *
   * 使用微信登录
   * @param params The `AccountService.LoginAccountByWechatauthwechatPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `wechatOpenId`: 微信OpenId
   *
   * - `wechatAccessToken`: 微信访问Token
   *
   * - `unionId`: 微信访问unionId
   *
   * - `deviceToken`: 设备号
   *
   * - `body`:
   *
   * @return Success
   */
  LoginAccountByWechatauthwechatPost(params: AccountService.LoginAccountByWechatauthwechatPostParams): __Observable<LoginAccountByWechatResponse> {
    return this.LoginAccountByWechatauthwechatPostResponse(params).pipe(
      __map(_r => _r.body as LoginAccountByWechatResponse)
    );
  }

  /**
   * H5Code显示显示
   *
   * H5Code显示显示
   * @param params The `AccountService.ShowH5AccessTokenh5showGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `code`: code
   *
   * @return Success
   */
  ShowH5AccessTokenh5showGetResponse(params: AccountService.ShowH5AccessTokenh5showGetParams): __Observable<__StrictHttpResponse<ShowH5AccessTokenResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.code != null) __params = __params.set('code', params.code.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account/h5/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowH5AccessTokenResponse>;
      })
    );
  }
  /**
   * H5Code显示显示
   *
   * H5Code显示显示
   * @param params The `AccountService.ShowH5AccessTokenh5showGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `code`: code
   *
   * @return Success
   */
  ShowH5AccessTokenh5showGet(params: AccountService.ShowH5AccessTokenh5showGetParams): __Observable<ShowH5AccessTokenResponse> {
    return this.ShowH5AccessTokenh5showGetResponse(params).pipe(
      __map(_r => _r.body as ShowH5AccessTokenResponse)
    );
  }

  /**
   * unionid显示用户
   *
   * unionid显示用户
   * @param params The `AccountService.ShowUserInfoByUnionIdunionidshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `unionId`: unionid
   *
   * @return Success
   */
  ShowUserInfoByUnionIdunionidshowGetResponse(params: AccountService.ShowUserInfoByUnionIdunionidshowGetParams): __Observable<__StrictHttpResponse<ShowUserInfoByUnionIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.unionId != null) __params = __params.set('unionId', params.unionId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account/unionid/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowUserInfoByUnionIdResponse>;
      })
    );
  }
  /**
   * unionid显示用户
   *
   * unionid显示用户
   * @param params The `AccountService.ShowUserInfoByUnionIdunionidshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `unionId`: unionid
   *
   * @return Success
   */
  ShowUserInfoByUnionIdunionidshowGet(params: AccountService.ShowUserInfoByUnionIdunionidshowGetParams): __Observable<ShowUserInfoByUnionIdResponse> {
    return this.ShowUserInfoByUnionIdunionidshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowUserInfoByUnionIdResponse)
    );
  }

  /**
   * 解密微信小程序unionId
   *
   * 解密微信小程序unionId
   * @param params The `AccountService.WechatDecryptwechatMiniProgramdecryptPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `sessionKey`: sessionKey
   *
   * - `iv`: iv
   *
   * - `encryptedData`: encryptedData
   *
   * - `body`:
   *
   * @return Success
   */
  WechatDecryptwechatMiniProgramdecryptPostResponse(params: AccountService.WechatDecryptwechatMiniProgramdecryptPostParams): __Observable<__StrictHttpResponse<WechatDecryptResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.sessionKey != null) { __formData.append('sessionKey', params.sessionKey as string | Blob);}
    if (params.iv != null) { __formData.append('iv', params.iv as string | Blob);}
    if (params.encryptedData != null) { __formData.append('encryptedData', params.encryptedData as string | Blob);}
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/wechatMiniProgram/decrypt`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WechatDecryptResponse>;
      })
    );
  }
  /**
   * 解密微信小程序unionId
   *
   * 解密微信小程序unionId
   * @param params The `AccountService.WechatDecryptwechatMiniProgramdecryptPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `sessionKey`: sessionKey
   *
   * - `iv`: iv
   *
   * - `encryptedData`: encryptedData
   *
   * - `body`:
   *
   * @return Success
   */
  WechatDecryptwechatMiniProgramdecryptPost(params: AccountService.WechatDecryptwechatMiniProgramdecryptPostParams): __Observable<WechatDecryptResponse> {
    return this.WechatDecryptwechatMiniProgramdecryptPostResponse(params).pipe(
      __map(_r => _r.body as WechatDecryptResponse)
    );
  }

  /**
   * 微信小程序登陆
   *
   * 微信小程序登陆
   * @param params The `AccountService.LoginAccountByWechatMiniProgramauthwechatminiProgramPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `wechatOpenId`: 微信OpenId
   *
   * - `unionId`: 微信unionId
   *
   * - `nikeName`: 名字
   *
   * - `deviceToken`: 设备号
   *
   * - `body`:
   *
   * - `avatarUrl`: 头像
   *
   * @return Success
   */
  LoginAccountByWechatMiniProgramauthwechatminiProgramPostResponse(params: AccountService.LoginAccountByWechatMiniProgramauthwechatminiProgramPostParams): __Observable<__StrictHttpResponse<LoginAccountByWechatMiniProgramResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.wechatOpenId != null) { __formData.append('wechatOpenId', params.wechatOpenId as string | Blob);}
    if (params.unionId != null) { __formData.append('unionId', params.unionId as string | Blob);}
    if (params.nikeName != null) { __formData.append('nikeName', params.nikeName as string | Blob);}
    if (params.deviceToken != null) { __formData.append('deviceToken', params.deviceToken as string | Blob);}
    __body = params.body;
    if (params.avatarUrl != null) { __formData.append('avatarUrl', params.avatarUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/auth/wechat/miniProgram`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginAccountByWechatMiniProgramResponse>;
      })
    );
  }
  /**
   * 微信小程序登陆
   *
   * 微信小程序登陆
   * @param params The `AccountService.LoginAccountByWechatMiniProgramauthwechatminiProgramPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `wechatOpenId`: 微信OpenId
   *
   * - `unionId`: 微信unionId
   *
   * - `nikeName`: 名字
   *
   * - `deviceToken`: 设备号
   *
   * - `body`:
   *
   * - `avatarUrl`: 头像
   *
   * @return Success
   */
  LoginAccountByWechatMiniProgramauthwechatminiProgramPost(params: AccountService.LoginAccountByWechatMiniProgramauthwechatminiProgramPostParams): __Observable<LoginAccountByWechatMiniProgramResponse> {
    return this.LoginAccountByWechatMiniProgramauthwechatminiProgramPostResponse(params).pipe(
      __map(_r => _r.body as LoginAccountByWechatMiniProgramResponse)
    );
  }

  /**
   * 获取jssdk需要的签名
   *
   * 获取jssdk需要的签名
   * @param params The `AccountService.ShowJSSDKSignaturejssdksignatureshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `url`: url
   *
   * @return Success
   */
  ShowJSSDKSignaturejssdksignatureshowGetResponse(params: AccountService.ShowJSSDKSignaturejssdksignatureshowGetParams): __Observable<__StrictHttpResponse<ShowJSSDKSignatureResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.url != null) __params = __params.set('url', params.url.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account/jssdk/signature/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowJSSDKSignatureResponse>;
      })
    );
  }
  /**
   * 获取jssdk需要的签名
   *
   * 获取jssdk需要的签名
   * @param params The `AccountService.ShowJSSDKSignaturejssdksignatureshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `url`: url
   *
   * @return Success
   */
  ShowJSSDKSignaturejssdksignatureshowGet(params: AccountService.ShowJSSDKSignaturejssdksignatureshowGetParams): __Observable<ShowJSSDKSignatureResponse> {
    return this.ShowJSSDKSignaturejssdksignatureshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowJSSDKSignatureResponse)
    );
  }
}

module AccountService {

  /**
   * Parameters for BindAccountbindCreate
   */
  export interface BindAccountbindCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: BindAccount;

    /**
     * 微信OpenId（绑定微信时候填写）
     */
    WeChatOpenId?: string;

    /**
     * 微信Token（绑定微信时候填写）
     */
    WeChatAccessToken?: string;

    /**
     * 绑定的手机号|绑定的微信unionID
     */
    ValueOfBind?: string;

    /**
     * 绑定类型 0:绑定手机号，1：绑定微信账号
     */
    TypeOfBind?: number;

    /**
     * 是否是新用户绑定
     */
    IsNewAccountOfBind?: boolean;
  }

  /**
   * Parameters for ChangeAccountAvataravatarCreate
   */
  export interface ChangeAccountAvataravatarCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountAvatar;

    /**
     * 头像图片地址
     */
    AvatarUrl?: string;
  }

  /**
   * Parameters for ChangeAccountCovercoverCreate
   */
  export interface ChangeAccountCovercoverCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountCover;

    /**
     * 封面图片地址
     */
    CoverUrl?: string;
  }

  /**
   * Parameters for ChangeAccountDefaultGuilddefaultguildCreate
   */
  export interface ChangeAccountDefaultGuilddefaultguildCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountDefaultGuild;

    /**
     * 教会ID
     */
    GuildId?: string;
  }

  /**
   * Parameters for ChangeAccountDescriptiondescriptionCreate
   */
  export interface ChangeAccountDescriptiondescriptionCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountDescription;

    /**
     * 描述
     */
    Description?: string;
  }

  /**
   * Parameters for ChangeAccountDisplayNamedisplaynameCreate
   */
  export interface ChangeAccountDisplayNamedisplaynameCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountDisplayName;

    /**
     * 显示名称
     */
    DisplayName?: string;
  }

  /**
   * Parameters for ChangeAccountDistrictdistrictCreate
   */
  export interface ChangeAccountDistrictdistrictCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountDistrict;

    /**
     * 省份
     */
    Province?: string;

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
   * Parameters for ChangeAccountFullNamefullnameCreate
   */
  export interface ChangeAccountFullNamefullnameCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountFullName;

    /**
     * 真实姓名
     */
    FullName?: string;
  }

  /**
   * Parameters for ChangeAccountIdentificationidentificationCreate
   */
  export interface ChangeAccountIdentificationidentificationCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountIdentification;

    /**
     * 身份证照片地址
     */
    IdentificationUrl?: string;
  }

  /**
   * Parameters for ChangeAccountPasswordpasswordCreate
   */
  export interface ChangeAccountPasswordpasswordCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountPassword;

    /**
     * 密码
     */
    Password?: string;
  }

  /**
   * Parameters for ResetAccountPasswordpasswordPost
   */
  export interface ResetAccountPasswordpasswordPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ResetAccountPassword;

    /**
     * 验证码
     */
    Token?: string;

    /**
     * 手机号码
     */
    PhoneNumber?: string;

    /**
     * 重置的密码
     */
    Password?: string;
  }

  /**
   * Parameters for ChangeAccountSignaturesignatureCreate
   */
  export interface ChangeAccountSignaturesignatureCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: ChangeAccountSignature;

    /**
     * 签名
     */
    Signature?: string;
  }

  /**
   * Parameters for ClearAccountDataclearaccountDelete
   */
  export interface ClearAccountDataclearaccountDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 用户ID
     */
    UserAuthId?: string;
  }

  /**
   * Parameters for LogoutAccountauthDelete
   */
  export interface LogoutAccountauthDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 设备号
     */
    DeviceToken?: string;
  }

  /**
   * Parameters for RegisterDevicedevicePost
   */
  export interface RegisterDevicedevicePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: RegisterDevice;

    /**
     * 设备号
     */
    DeviceToken?: string;
  }

  /**
   * Parameters for UnregisterDevicedeviceDelete
   */
  export interface UnregisterDevicedeviceDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 设备号
     */
    DeviceToken?: string;
  }

  /**
   * Parameters for ShowCodeToSessioncodeToSessionGet
   */
  export interface ShowCodeToSessioncodeToSessionGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * jscode
     */
    jsCode?: string;
  }

  /**
   * Parameters for LoginAccountByMobileauthmobilePost
   */
  export interface LoginAccountByMobileauthmobilePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: LoginAccountByMobile;

    /**
     * 验证码
     */
    Token?: string;

    /**
     * 手机号码
     */
    PhoneNumber?: string;

    /**
     * 设备号
     */
    DeviceToken?: string;
  }

  /**
   * Parameters for LoginAccountByPasswordauthpasswordPost
   */
  export interface LoginAccountByPasswordauthpasswordPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: LoginAccountByPassword;

    /**
     * 用户名称或手机号码
     */
    UserNameOrPhoneNumber?: string;

    /**
     * 登录密码
     */
    Password?: string;

    /**
     * 设备号
     */
    DeviceToken?: string;
  }

  /**
   * Parameters for LoginAccountByWechatauthwechatPost
   */
  export interface LoginAccountByWechatauthwechatPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 微信OpenId
     */
    wechatOpenId?: string;

    /**
     * 微信访问Token
     */
    wechatAccessToken?: string;

    /**
     * 微信访问unionId
     */
    unionId?: string;

    /**
     * 设备号
     */
    deviceToken?: string;
    body?: LoginAccountByWechat;
  }

  /**
   * Parameters for ShowH5AccessTokenh5showGet
   */
  export interface ShowH5AccessTokenh5showGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * code
     */
    code?: string;
  }

  /**
   * Parameters for ShowUserInfoByUnionIdunionidshowGet
   */
  export interface ShowUserInfoByUnionIdunionidshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * unionid
     */
    unionId?: string;
  }

  /**
   * Parameters for WechatDecryptwechatMiniProgramdecryptPost
   */
  export interface WechatDecryptwechatMiniProgramdecryptPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * sessionKey
     */
    sessionKey?: string;

    /**
     * iv
     */
    iv?: string;

    /**
     * encryptedData
     */
    encryptedData?: string;
    body?: WechatDecrypt;
  }

  /**
   * Parameters for LoginAccountByWechatMiniProgramauthwechatminiProgramPost
   */
  export interface LoginAccountByWechatMiniProgramauthwechatminiProgramPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 微信OpenId
     */
    wechatOpenId?: string;

    /**
     * 微信unionId
     */
    unionId?: string;

    /**
     * 名字
     */
    nikeName?: string;

    /**
     * 设备号
     */
    deviceToken?: string;
    body?: LoginAccountByWechatMiniProgram;

    /**
     * 头像
     */
    avatarUrl?: string;
  }

  /**
   * Parameters for ShowJSSDKSignaturejssdksignatureshowGet
   */
  export interface ShowJSSDKSignaturejssdksignatureshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * url
     */
    url?: string;
  }
}

export { AccountService }
