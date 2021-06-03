/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthenticateResponse } from '../models/authenticate-response';
import { Authenticate } from '../models/authenticate';
@Injectable({
  providedIn: 'root',
})
class AuthService extends __BaseService {
  static readonly AuthenticateGetPath = '/auth';
  static readonly AuthenticateCreatePath = '/auth';
  static readonly AuthenticatePostPath = '/auth';
  static readonly AuthenticateDeletePath = '/auth';
  static readonly AuthenticateproviderGetPath = '/auth/{provider}';
  static readonly AuthenticateproviderCreatePath = '/auth/{provider}';
  static readonly AuthenticateproviderPostPath = '/auth/{provider}';
  static readonly AuthenticateproviderDeletePath = '/auth/{provider}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AuthService.AuthenticateGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateGetResponse(params: AuthService.AuthenticateGetParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.provider != null) __params = __params.set('provider', params.provider.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticateGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateGet(params: AuthService.AuthenticateGetParams): __Observable<AuthenticateResponse> {
    return this.AuthenticateGetResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }

  /**
   * @param params The `AuthService.AuthenticateCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateCreateResponse(params: AuthService.AuthenticateCreateParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.provider != null) __params = __params.set('provider', params.provider.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    __body = params.body;
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/auth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticateCreateParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateCreate(params: AuthService.AuthenticateCreateParams): __Observable<AuthenticateResponse> {
    return this.AuthenticateCreateResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }

  /**
   * @param params The `AuthService.AuthenticatePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticatePostResponse(params: AuthService.AuthenticatePostParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.provider != null) __params = __params.set('provider', params.provider.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    __body = params.body;
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticatePostParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticatePost(params: AuthService.AuthenticatePostParams): __Observable<AuthenticateResponse> {
    return this.AuthenticatePostResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }

  /**
   * @param params The `AuthService.AuthenticateDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateDeleteResponse(params: AuthService.AuthenticateDeleteParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.provider != null) __params = __params.set('provider', params.provider.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/auth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticateDeleteParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `provider`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateDelete(params: AuthService.AuthenticateDeleteParams): __Observable<AuthenticateResponse> {
    return this.AuthenticateDeleteResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }

  /**
   * @param params The `AuthService.AuthenticateproviderGetParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderGetResponse(params: AuthService.AuthenticateproviderGetParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth/${encodeURIComponent(String(params.provider))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticateproviderGetParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderGet(params: AuthService.AuthenticateproviderGetParams): __Observable<AuthenticateResponse> {
    return this.AuthenticateproviderGetResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }

  /**
   * @param params The `AuthService.AuthenticateproviderCreateParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderCreateResponse(params: AuthService.AuthenticateproviderCreateParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    __body = params.body;
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/auth/${encodeURIComponent(String(params.provider))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticateproviderCreateParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderCreate(params: AuthService.AuthenticateproviderCreateParams): __Observable<AuthenticateResponse> {
    return this.AuthenticateproviderCreateResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }

  /**
   * @param params The `AuthService.AuthenticateproviderPostParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderPostResponse(params: AuthService.AuthenticateproviderPostParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    __body = params.body;
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/${encodeURIComponent(String(params.provider))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticateproviderPostParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `body`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderPost(params: AuthService.AuthenticateproviderPostParams): __Observable<AuthenticateResponse> {
    return this.AuthenticateproviderPostResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }

  /**
   * @param params The `AuthService.AuthenticateproviderDeleteParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderDeleteResponse(params: AuthService.AuthenticateproviderDeleteParams): __Observable<__StrictHttpResponse<AuthenticateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.uri != null) __params = __params.set('uri', params.uri.toString());
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.response != null) __params = __params.set('response', params.response.toString());
    if (params.qop != null) __params = __params.set('qop', params.qop.toString());
    if (params.oauthVerifier != null) __params = __params.set('oauth_verifier', params.oauthVerifier.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.nc != null) __params = __params.set('nc', params.nc.toString());
    if (params.cnonce != null) __params = __params.set('cnonce', params.cnonce.toString());
    if (params.UserName != null) __params = __params.set('UserName', params.UserName.toString());
    if (params.UseTokenCookie != null) __params = __params.set('UseTokenCookie', params.UseTokenCookie.toString());
    if (params.State != null) __params = __params.set('State', params.State.toString());
    if (params.RememberMe != null) __params = __params.set('RememberMe', params.RememberMe.toString());
    if (params.Password != null) __params = __params.set('Password', params.Password.toString());
    if (params.Meta != null) __params = __params.set('Meta', params.Meta.toString());
    if (params.ErrorView != null) __params = __params.set('ErrorView', params.ErrorView.toString());
    if (params.Continue != null) __params = __params.set('Continue', params.Continue.toString());
    if (params.AccessTokenSecret != null) __params = __params.set('AccessTokenSecret', params.AccessTokenSecret.toString());
    if (params.AccessToken != null) __params = __params.set('AccessToken', params.AccessToken.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/auth/${encodeURIComponent(String(params.provider))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }
  /**
   * @param params The `AuthService.AuthenticateproviderDeleteParams` containing the following parameters:
   *
   * - `provider`:
   *
   * - `Accept`: Accept Header
   *
   * - `uri`:
   *
   * - `scope`:
   *
   * - `response`:
   *
   * - `qop`:
   *
   * - `oauth_verifier`:
   *
   * - `oauth_token`:
   *
   * - `nonce`:
   *
   * - `nc`:
   *
   * - `cnonce`:
   *
   * - `UserName`:
   *
   * - `UseTokenCookie`:
   *
   * - `State`:
   *
   * - `RememberMe`:
   *
   * - `Password`:
   *
   * - `Meta`:
   *
   * - `ErrorView`:
   *
   * - `Continue`:
   *
   * - `AccessTokenSecret`:
   *
   * - `AccessToken`:
   *
   * @return Success
   */
  AuthenticateproviderDelete(params: AuthService.AuthenticateproviderDeleteParams): __Observable<AuthenticateResponse> {
    return this.AuthenticateproviderDeleteResponse(params).pipe(
      __map(_r => _r.body as AuthenticateResponse)
    );
  }
}

module AuthService {

  /**
   * Parameters for AuthenticateGet
   */
  export interface AuthenticateGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    provider?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }

  /**
   * Parameters for AuthenticateCreate
   */
  export interface AuthenticateCreateParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    provider?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    body?: Authenticate;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }

  /**
   * Parameters for AuthenticatePost
   */
  export interface AuthenticatePostParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    provider?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    body?: Authenticate;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }

  /**
   * Parameters for AuthenticateDelete
   */
  export interface AuthenticateDeleteParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    provider?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }

  /**
   * Parameters for AuthenticateproviderGet
   */
  export interface AuthenticateproviderGetParams {
    provider: string;

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }

  /**
   * Parameters for AuthenticateproviderCreate
   */
  export interface AuthenticateproviderCreateParams {
    provider: string;

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    body?: Authenticate;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }

  /**
   * Parameters for AuthenticateproviderPost
   */
  export interface AuthenticateproviderPostParams {
    provider: string;

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    body?: Authenticate;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }

  /**
   * Parameters for AuthenticateproviderDelete
   */
  export interface AuthenticateproviderDeleteParams {
    provider: string;

    /**
     * Accept Header
     */
    Accept: 'application/json';
    uri?: string;
    scope?: string;
    response?: string;
    qop?: string;
    oauthVerifier?: string;
    oauthToken?: string;
    nonce?: string;
    nc?: string;
    cnonce?: string;
    UserName?: string;
    UseTokenCookie?: boolean;
    State?: string;
    RememberMe?: boolean;
    Password?: string;
    Meta?: string;
    ErrorView?: string;
    Continue?: string;
    AccessTokenSecret?: string;
    AccessToken?: string;
  }
}

export { AuthService }
