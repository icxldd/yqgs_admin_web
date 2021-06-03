/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SearchAudioFilesResponse } from '../models/search-audio-files-response';
import { SearchImageFilesResponse } from '../models/search-image-files-response';
import { Object } from '../models/object';
import { ShowVersionResponse } from '../models/show-version-response';
@Injectable({
  providedIn: 'root',
})
class StorageService extends __BaseService {
  static readonly SearchAudioFilesaudiosGetPath = '/storage/audios';
  static readonly SearchImageFilesimagesGetPath = '/storage/images';
  static readonly ShowFilefileshowGetPath = '/storage/file/show';
  static readonly ShowVersionversionshowGetPath = '/storage/version/show';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 查询一组音频
   *
   * 查询一组音频
   * @param params The `StorageService.SearchAudioFilesaudiosGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息
   *
   * - `OrderBy`: 排序的字段（可选值：Name, Singer, ContentType, ContentLength, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  SearchAudioFilesaudiosGetResponse(params: StorageService.SearchAudioFilesaudiosGetParams): __Observable<__StrictHttpResponse<SearchAudioFilesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Query != null) __params = __params.set('Query', params.Query.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    if (params.Category != null) __params = __params.set('Category', params.Category.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/storage/audios`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SearchAudioFilesResponse>;
      })
    );
  }
  /**
   * 查询一组音频
   *
   * 查询一组音频
   * @param params The `StorageService.SearchAudioFilesaudiosGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息
   *
   * - `OrderBy`: 排序的字段（可选值：Name, Singer, ContentType, ContentLength, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  SearchAudioFilesaudiosGet(params: StorageService.SearchAudioFilesaudiosGetParams): __Observable<SearchAudioFilesResponse> {
    return this.SearchAudioFilesaudiosGetResponse(params).pipe(
      __map(_r => _r.body as SearchAudioFilesResponse)
    );
  }

  /**
   * 查询一组图像
   *
   * 查询一组图像
   * @param params The `StorageService.SearchImageFilesimagesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息
   *
   * - `OrderBy`: 排序的字段（可选值：Name, ContentType, ContentLength, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  SearchImageFilesimagesGetResponse(params: StorageService.SearchImageFilesimagesGetParams): __Observable<__StrictHttpResponse<SearchImageFilesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Query != null) __params = __params.set('Query', params.Query.toString());
    if (params.OrderBy != null) __params = __params.set('OrderBy', params.OrderBy.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    if (params.Category != null) __params = __params.set('Category', params.Category.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/storage/images`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SearchImageFilesResponse>;
      })
    );
  }
  /**
   * 查询一组图像
   *
   * 查询一组图像
   * @param params The `StorageService.SearchImageFilesimagesGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Query`: 查询信息
   *
   * - `OrderBy`: 排序的字段（可选值：Name, ContentType, ContentLength, CreatedDate, ModifiedDate
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序
   *
   * - `Category`: 分类
   *
   * @return Success
   */
  SearchImageFilesimagesGet(params: StorageService.SearchImageFilesimagesGetParams): __Observable<SearchImageFilesResponse> {
    return this.SearchImageFilesimagesGetResponse(params).pipe(
      __map(_r => _r.body as SearchImageFilesResponse)
    );
  }

  /**
   * 显示文件服务
   *
   * 显示文件服务
   * @param params The `StorageService.ShowFilefileshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `fileName`: 显示文件名
   *
   * @return Success
   */
  ShowFilefileshowGetResponse(params: StorageService.ShowFilefileshowGetParams): __Observable<__StrictHttpResponse<Object>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.fileName != null) __params = __params.set('fileName', params.fileName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/storage/file/show`,
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
   * 显示文件服务
   *
   * 显示文件服务
   * @param params The `StorageService.ShowFilefileshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `fileName`: 显示文件名
   *
   * @return Success
   */
  ShowFilefileshowGet(params: StorageService.ShowFilefileshowGetParams): __Observable<Object> {
    return this.ShowFilefileshowGetResponse(params).pipe(
      __map(_r => _r.body as Object)
    );
  }

  /**
   * 显示应用程序版本
   *
   * 显示应用程序版本
   * @param params The `StorageService.ShowVersionversionshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `VersionId`: 应用程序版本编号
   *
   * @return Success
   */
  ShowVersionversionshowGetResponse(params: StorageService.ShowVersionversionshowGetParams): __Observable<__StrictHttpResponse<ShowVersionResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.VersionId != null) __params = __params.set('VersionId', params.VersionId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/storage/version/show`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowVersionResponse>;
      })
    );
  }
  /**
   * 显示应用程序版本
   *
   * 显示应用程序版本
   * @param params The `StorageService.ShowVersionversionshowGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `VersionId`: 应用程序版本编号
   *
   * @return Success
   */
  ShowVersionversionshowGet(params: StorageService.ShowVersionversionshowGetParams): __Observable<ShowVersionResponse> {
    return this.ShowVersionversionshowGetResponse(params).pipe(
      __map(_r => _r.body as ShowVersionResponse)
    );
  }
}

module StorageService {

  /**
   * Parameters for SearchAudioFilesaudiosGet
   */
  export interface SearchAudioFilesaudiosGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 查询信息
     */
    Query?: string;

    /**
     * 排序的字段（可选值：Name, Singer, ContentType, ContentLength, CreatedDate, ModifiedDate
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
     * 分类
     */
    Category?: string;
  }

  /**
   * Parameters for SearchImageFilesimagesGet
   */
  export interface SearchImageFilesimagesGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 查询信息
     */
    Query?: string;

    /**
     * 排序的字段（可选值：Name, ContentType, ContentLength, CreatedDate, ModifiedDate
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
     * 分类
     */
    Category?: string;
  }

  /**
   * Parameters for ShowFilefileshowGet
   */
  export interface ShowFilefileshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 显示文件名
     */
    fileName?: string;
  }

  /**
   * Parameters for ShowVersionversionshowGet
   */
  export interface ShowVersionversionshowGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 应用程序版本编号
     */
    VersionId?: string;
  }
}

export { StorageService }
