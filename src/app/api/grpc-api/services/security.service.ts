/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RequestSecurityTokenResponse } from '../models/request-security-token-response';
import { RequestSecurityToken } from '../models/request-security-token';
import { TakeUploadTokenForQiniuResponse } from '../models/take-upload-token-for-qiniu-response';
import { VerifySecurityTokenResponse } from '../models/verify-security-token-response';
import { VerifySecurityToken } from '../models/verify-security-token';
@Injectable({
  providedIn: 'root',
})
class SecurityService extends __BaseService {
  static readonly RequestSecurityTokentokenPostPath = '/security/token';
  static readonly TakeUploadTokenForQiniuqiniuuploadtokenGetPath = '/security/qiniu/uploadtoken';
  static readonly VerifySecurityTokentokenverifyPostPath = '/security/token/verify';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 请求发送验证码
   *
   * 请求发送验证码
   * @param params The `SecurityService.RequestSecurityTokentokenPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Type`: 标识类型（0: 手机号码;1: 电子邮件）
   *
   * - `StampId`: 安全戳标识（手机号码或电子邮件地址）
   *
   * - `Purpose`: 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
   *
   * @return Success
   */
  RequestSecurityTokentokenPostResponse(params: SecurityService.RequestSecurityTokentokenPostParams): __Observable<__StrictHttpResponse<RequestSecurityTokenResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Type != null) { __formData.append('Type', JSON.stringify(params.Type));}
    if (params.StampId != null) { __formData.append('StampId', params.StampId as string | Blob);}
    if (params.Purpose != null) { __formData.append('Purpose', params.Purpose as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/security/token`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RequestSecurityTokenResponse>;
      })
    );
  }
  /**
   * 请求发送验证码
   *
   * 请求发送验证码
   * @param params The `SecurityService.RequestSecurityTokentokenPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Type`: 标识类型（0: 手机号码;1: 电子邮件）
   *
   * - `StampId`: 安全戳标识（手机号码或电子邮件地址）
   *
   * - `Purpose`: 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
   *
   * @return Success
   */
  RequestSecurityTokentokenPost(params: SecurityService.RequestSecurityTokentokenPostParams): __Observable<RequestSecurityTokenResponse> {
    return this.RequestSecurityTokentokenPostResponse(params).pipe(
      __map(_r => _r.body as RequestSecurityTokenResponse)
    );
  }

  /**
   * 获取七牛云上传凭证
   *
   * 获取七牛云上传凭证
   * @param params The `SecurityService.TakeUploadTokenForQiniuqiniuuploadtokenGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `KeyToOverwrite`: 要覆盖的关键字
   *
   * @return Success
   */
  TakeUploadTokenForQiniuqiniuuploadtokenGetResponse(params: SecurityService.TakeUploadTokenForQiniuqiniuuploadtokenGetParams): __Observable<__StrictHttpResponse<TakeUploadTokenForQiniuResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.KeyToOverwrite != null) __params = __params.set('KeyToOverwrite', params.KeyToOverwrite.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/security/qiniu/uploadtoken`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TakeUploadTokenForQiniuResponse>;
      })
    );
  }
  /**
   * 获取七牛云上传凭证
   *
   * 获取七牛云上传凭证
   * @param params The `SecurityService.TakeUploadTokenForQiniuqiniuuploadtokenGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `KeyToOverwrite`: 要覆盖的关键字
   *
   * @return Success
   */
  TakeUploadTokenForQiniuqiniuuploadtokenGet(params: SecurityService.TakeUploadTokenForQiniuqiniuuploadtokenGetParams): __Observable<TakeUploadTokenForQiniuResponse> {
    return this.TakeUploadTokenForQiniuqiniuuploadtokenGetResponse(params).pipe(
      __map(_r => _r.body as TakeUploadTokenForQiniuResponse)
    );
  }

  /**
   * 校验验证码
   *
   * 校验验证码
   * @param params The `SecurityService.VerifySecurityTokentokenverifyPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Type`: 标识类型（0: 手机号码;1: 电子邮件）
   *
   * - `Token`: 验证码
   *
   * - `StampId`: 安全戳标识（手机号码或电子邮件地址）
   *
   * - `Purpose`: 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
   *
   * @return Success
   */
  VerifySecurityTokentokenverifyPostResponse(params: SecurityService.VerifySecurityTokentokenverifyPostParams): __Observable<__StrictHttpResponse<VerifySecurityTokenResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    __body = params.body;
    if (params.Type != null) { __formData.append('Type', JSON.stringify(params.Type));}
    if (params.Token != null) { __formData.append('Token', params.Token as string | Blob);}
    if (params.StampId != null) { __formData.append('StampId', params.StampId as string | Blob);}
    if (params.Purpose != null) { __formData.append('Purpose', params.Purpose as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/security/token/verify`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VerifySecurityTokenResponse>;
      })
    );
  }
  /**
   * 校验验证码
   *
   * 校验验证码
   * @param params The `SecurityService.VerifySecurityTokentokenverifyPostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `body`:
   *
   * - `Type`: 标识类型（0: 手机号码;1: 电子邮件）
   *
   * - `Token`: 验证码
   *
   * - `StampId`: 安全戳标识（手机号码或电子邮件地址）
   *
   * - `Purpose`: 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
   *
   * @return Success
   */
  VerifySecurityTokentokenverifyPost(params: SecurityService.VerifySecurityTokentokenverifyPostParams): __Observable<VerifySecurityTokenResponse> {
    return this.VerifySecurityTokentokenverifyPostResponse(params).pipe(
      __map(_r => _r.body as VerifySecurityTokenResponse)
    );
  }
}

module SecurityService {

  /**
   * Parameters for RequestSecurityTokentokenPost
   */
  export interface RequestSecurityTokentokenPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: RequestSecurityToken;

    /**
     * 标识类型（0: 手机号码;1: 电子邮件）
     */
    Type?: number;

    /**
     * 安全戳标识（手机号码或电子邮件地址）
     */
    StampId?: string;

    /**
     * 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
     */
    Purpose?: string;
  }

  /**
   * Parameters for TakeUploadTokenForQiniuqiniuuploadtokenGet
   */
  export interface TakeUploadTokenForQiniuqiniuuploadtokenGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 要覆盖的关键字
     */
    KeyToOverwrite?: string;
  }

  /**
   * Parameters for VerifySecurityTokentokenverifyPost
   */
  export interface VerifySecurityTokentokenverifyPostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    body?: VerifySecurityToken;

    /**
     * 标识类型（0: 手机号码;1: 电子邮件）
     */
    Type?: number;

    /**
     * 验证码
     */
    Token?: string;

    /**
     * 安全戳标识（手机号码或电子邮件地址）
     */
    StampId?: string;

    /**
     * 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
     */
    Purpose?: string;
  }
}

export { SecurityService }
