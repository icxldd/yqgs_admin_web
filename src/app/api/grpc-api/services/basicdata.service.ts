/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ShowAlbumSongResponse } from '../models/show-album-song-response';
import { ShowListAlbumDetailResponse } from '../models/show-list-album-detail-response';
import { ShowListAlbumResponse } from '../models/show-list-album-response';
import { ShowListPoemDetailResponse } from '../models/show-list-poem-detail-response';
import { ShowListPoemResponse } from '../models/show-list-poem-response';
@Injectable({
  providedIn: 'root',
})
class BasicdataService extends __BaseService {
  static readonly ShowAlbumSonglistalbumsongGetPath = '/basicdata/listalbum/song';
  static readonly ShowListAlbumDetaillistalbumdetailGetPath = '/basicdata/listalbum/detail';
  static readonly ShowListAlbumlistalbumGetPath = '/basicdata/listalbum';
  static readonly ShowListPoemDetaillistpoemdetailGetPath = '/basicdata/listpoemdetail';
  static readonly ShowListPoemlistpoemGetPath = '/basicdata/listpoem';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * 查询某个专辑歌曲
   *
   * 查询某个专辑歌曲
   * @param params The `BasicdataService.ShowAlbumSonglistalbumsongGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `songId`: songId
   *
   * @return Success
   */
  ShowAlbumSonglistalbumsongGetResponse(params: BasicdataService.ShowAlbumSonglistalbumsongGetParams): __Observable<__StrictHttpResponse<ShowAlbumSongResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.songId != null) __params = __params.set('songId', params.songId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/basicdata/listalbum/song`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowAlbumSongResponse>;
      })
    );
  }
  /**
   * 查询某个专辑歌曲
   *
   * 查询某个专辑歌曲
   * @param params The `BasicdataService.ShowAlbumSonglistalbumsongGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `songId`: songId
   *
   * @return Success
   */
  ShowAlbumSonglistalbumsongGet(params: BasicdataService.ShowAlbumSonglistalbumsongGetParams): __Observable<ShowAlbumSongResponse> {
    return this.ShowAlbumSonglistalbumsongGetResponse(params).pipe(
      __map(_r => _r.body as ShowAlbumSongResponse)
    );
  }

  /**
   * 查询一组专辑歌曲
   *
   * 查询一组专辑歌曲
   * @param params The `BasicdataService.ShowListAlbumDetaillistalbumdetailGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `search_Word`: 支持字段[songName,fristLetter,category]查询信息
   *
   * - `albumId`: albumId
   *
   * - `SortName`: 支持字段【timeStamp,orderId,fristLetter】排序。默认为orderId
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序。默认为false
   *
   * @return Success
   */
  ShowListAlbumDetaillistalbumdetailGetResponse(params: BasicdataService.ShowListAlbumDetaillistalbumdetailGetParams): __Observable<__StrictHttpResponse<ShowListAlbumDetailResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.searchWord != null) __params = __params.set('search_Word', params.searchWord.toString());
    if (params.albumId != null) __params = __params.set('albumId', params.albumId.toString());
    if (params.SortName != null) __params = __params.set('SortName', params.SortName.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/basicdata/listalbum/detail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowListAlbumDetailResponse>;
      })
    );
  }
  /**
   * 查询一组专辑歌曲
   *
   * 查询一组专辑歌曲
   * @param params The `BasicdataService.ShowListAlbumDetaillistalbumdetailGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `search_Word`: 支持字段[songName,fristLetter,category]查询信息
   *
   * - `albumId`: albumId
   *
   * - `SortName`: 支持字段【timeStamp,orderId,fristLetter】排序。默认为orderId
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序。默认为false
   *
   * @return Success
   */
  ShowListAlbumDetaillistalbumdetailGet(params: BasicdataService.ShowListAlbumDetaillistalbumdetailGetParams): __Observable<ShowListAlbumDetailResponse> {
    return this.ShowListAlbumDetaillistalbumdetailGetResponse(params).pipe(
      __map(_r => _r.body as ShowListAlbumDetailResponse)
    );
  }

  /**
   * 查询一组专辑
   *
   * 查询一组专辑
   * @param params The `BasicdataService.ShowListAlbumlistalbumGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `search_Word`: 支持字段[alibumName,alibumRemark]查询信息
   *
   * - `SortName`: 支持字段【timeStamp,orderId】排序。默认为orderId
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序。默认为false
   *
   * @return Success
   */
  ShowListAlbumlistalbumGetResponse(params: BasicdataService.ShowListAlbumlistalbumGetParams): __Observable<__StrictHttpResponse<ShowListAlbumResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.searchWord != null) __params = __params.set('search_Word', params.searchWord.toString());
    if (params.SortName != null) __params = __params.set('SortName', params.SortName.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/basicdata/listalbum`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowListAlbumResponse>;
      })
    );
  }
  /**
   * 查询一组专辑
   *
   * 查询一组专辑
   * @param params The `BasicdataService.ShowListAlbumlistalbumGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `search_Word`: 支持字段[alibumName,alibumRemark]查询信息
   *
   * - `SortName`: 支持字段【timeStamp,orderId】排序。默认为orderId
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序。默认为false
   *
   * @return Success
   */
  ShowListAlbumlistalbumGet(params: BasicdataService.ShowListAlbumlistalbumGetParams): __Observable<ShowListAlbumResponse> {
    return this.ShowListAlbumlistalbumGetResponse(params).pipe(
      __map(_r => _r.body as ShowListAlbumResponse)
    );
  }

  /**
   * 查询一组诗歌详情
   *
   * 查询一组诗歌详情
   * @param params The `BasicdataService.ShowListPoemDetaillistpoemdetailGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `searchWord`: searchWord
   *
   * - `poemId`: poemId
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序-index排序
   *
   * @return Success
   */
  ShowListPoemDetaillistpoemdetailGetResponse(params: BasicdataService.ShowListPoemDetaillistpoemdetailGetParams): __Observable<__StrictHttpResponse<ShowListPoemDetailResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.searchWord != null) __params = __params.set('searchWord', params.searchWord.toString());
    if (params.poemId != null) __params = __params.set('poemId', params.poemId.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/basicdata/listpoemdetail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowListPoemDetailResponse>;
      })
    );
  }
  /**
   * 查询一组诗歌详情
   *
   * 查询一组诗歌详情
   * @param params The `BasicdataService.ShowListPoemDetaillistpoemdetailGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `searchWord`: searchWord
   *
   * - `poemId`: poemId
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序-index排序
   *
   * @return Success
   */
  ShowListPoemDetaillistpoemdetailGet(params: BasicdataService.ShowListPoemDetaillistpoemdetailGetParams): __Observable<ShowListPoemDetailResponse> {
    return this.ShowListPoemDetaillistpoemdetailGetResponse(params).pipe(
      __map(_r => _r.body as ShowListPoemDetailResponse)
    );
  }

  /**
   * 查询一组诗歌
   *
   * 查询一组诗歌
   * @param params The `BasicdataService.ShowListPoemlistpoemGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序-时间排序
   *
   * - `BookName`: 查询信息
   *
   * @return Success
   */
  ShowListPoemlistpoemGetResponse(params: BasicdataService.ShowListPoemlistpoemGetParams): __Observable<__StrictHttpResponse<ShowListPoemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    if (params.Skip != null) __params = __params.set('Skip', params.Skip.toString());
    if (params.Limit != null) __params = __params.set('Limit', params.Limit.toString());
    if (params.Descending != null) __params = __params.set('Descending', params.Descending.toString());
    if (params.BookName != null) __params = __params.set('BookName', params.BookName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/basicdata/listpoem`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShowListPoemResponse>;
      })
    );
  }
  /**
   * 查询一组诗歌
   *
   * 查询一组诗歌
   * @param params The `BasicdataService.ShowListPoemlistpoemGetParams` containing the following parameters:
   *
   * - `Accept`: Accept Header
   *
   * - `Skip`: 忽略的行数
   *
   * - `Limit`: 获取的行数
   *
   * - `Descending`: 是否按降序排序-时间排序
   *
   * - `BookName`: 查询信息
   *
   * @return Success
   */
  ShowListPoemlistpoemGet(params: BasicdataService.ShowListPoemlistpoemGetParams): __Observable<ShowListPoemResponse> {
    return this.ShowListPoemlistpoemGetResponse(params).pipe(
      __map(_r => _r.body as ShowListPoemResponse)
    );
  }
}

module BasicdataService {

  /**
   * Parameters for ShowAlbumSonglistalbumsongGet
   */
  export interface ShowAlbumSonglistalbumsongGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * songId
     */
    songId?: number;
  }

  /**
   * Parameters for ShowListAlbumDetaillistalbumdetailGet
   */
  export interface ShowListAlbumDetaillistalbumdetailGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 支持字段[songName,fristLetter,category]查询信息
     */
    searchWord?: string;

    /**
     * albumId
     */
    albumId?: number;

    /**
     * 支持字段【timeStamp,orderId,fristLetter】排序。默认为orderId
     */
    SortName?: string;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 是否按降序排序。默认为false
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowListAlbumlistalbumGet
   */
  export interface ShowListAlbumlistalbumGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 支持字段[alibumName,alibumRemark]查询信息
     */
    searchWord?: string;

    /**
     * 支持字段【timeStamp,orderId】排序。默认为orderId
     */
    SortName?: string;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 是否按降序排序。默认为false
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowListPoemDetaillistpoemdetailGet
   */
  export interface ShowListPoemDetaillistpoemdetailGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * searchWord
     */
    searchWord?: string;

    /**
     * poemId
     */
    poemId?: number;

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 是否按降序排序-index排序
     */
    Descending?: boolean;
  }

  /**
   * Parameters for ShowListPoemlistpoemGet
   */
  export interface ShowListPoemlistpoemGetParams {

    /**
     * Accept Header
     */
    Accept: 'application/json';

    /**
     * 忽略的行数
     */
    Skip?: number;

    /**
     * 获取的行数
     */
    Limit?: number;

    /**
     * 是否按降序排序-时间排序
     */
    Descending?: boolean;

    /**
     * 查询信息
     */
    BookName?: string;
  }
}

export { BasicdataService }
