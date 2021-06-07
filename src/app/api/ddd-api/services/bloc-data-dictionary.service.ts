/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DataDictionaryDto } from '../models/data-dictionary-dto';
import { DataDictionaryCreateOrUpdate } from '../models/data-dictionary-create-or-update';
import { PagedResultDtoOfDataDictionaryDto } from '../models/paged-result-dto-of-data-dictionary-dto';
import { GetAllDataDto } from '../models/get-all-data-dto';
@Injectable({
  providedIn: 'root',
})
class BlocDataDictionaryService extends __BaseService {
  static readonly BlocDataDictionaryCreatePath = '/api/bloc/bloc-data-dictionary';
  static readonly BlocDataDictionaryGetListPath = '/api/bloc/bloc-data-dictionary';
  static readonly BlocDataDictionaryUpdatePath = '/api/bloc/bloc-data-dictionary/{id}';
  static readonly BlocDataDictionaryDeletePath = '/api/bloc/bloc-data-dictionary/{id}';
  static readonly BlocDataDictionaryGetPath = '/api/bloc/bloc-data-dictionary/{id}';
  static readonly BlocDataDictionaryGetAllDataPath = '/api/bloc/bloc-data-dictionary/data';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param input undefined
   */
  BlocDataDictionaryCreateResponse(input: DataDictionaryCreateOrUpdate): __Observable<__StrictHttpResponse<DataDictionaryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DataDictionaryDto>;
      })
    );
  }
  /**
   * @param input undefined
   */
  BlocDataDictionaryCreate(input: DataDictionaryCreateOrUpdate): __Observable<DataDictionaryDto> {
    return this.BlocDataDictionaryCreateResponse(input).pipe(
      __map(_r => _r.body as DataDictionaryDto)
    );
  }

  /**
   * @param params The `BlocDataDictionaryService.BlocDataDictionaryGetListParams` containing the following parameters:
   *
   * - `Sorting`:
   *
   * - `SkipCount`:
   *
   * - `MaxResultCount`: Maximum result count should be returned.
   *   This is generally used to limit result count on paging.
   */
  BlocDataDictionaryGetListResponse(params: BlocDataDictionaryService.BlocDataDictionaryGetListParams): __Observable<__StrictHttpResponse<PagedResultDtoOfDataDictionaryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Sorting != null) __params = __params.set('Sorting', params.Sorting.toString());
    if (params.SkipCount != null) __params = __params.set('SkipCount', params.SkipCount.toString());
    if (params.MaxResultCount != null) __params = __params.set('MaxResultCount', params.MaxResultCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bloc/bloc-data-dictionary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PagedResultDtoOfDataDictionaryDto>;
      })
    );
  }
  /**
   * @param params The `BlocDataDictionaryService.BlocDataDictionaryGetListParams` containing the following parameters:
   *
   * - `Sorting`:
   *
   * - `SkipCount`:
   *
   * - `MaxResultCount`: Maximum result count should be returned.
   *   This is generally used to limit result count on paging.
   */
  BlocDataDictionaryGetList(params: BlocDataDictionaryService.BlocDataDictionaryGetListParams): __Observable<PagedResultDtoOfDataDictionaryDto> {
    return this.BlocDataDictionaryGetListResponse(params).pipe(
      __map(_r => _r.body as PagedResultDtoOfDataDictionaryDto)
    );
  }

  /**
   * @param params The `BlocDataDictionaryService.BlocDataDictionaryUpdateParams` containing the following parameters:
   *
   * - `input`:
   *
   * - `id`:
   */
  BlocDataDictionaryUpdateResponse(params: BlocDataDictionaryService.BlocDataDictionaryUpdateParams): __Observable<__StrictHttpResponse<DataDictionaryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/bloc/bloc-data-dictionary/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DataDictionaryDto>;
      })
    );
  }
  /**
   * @param params The `BlocDataDictionaryService.BlocDataDictionaryUpdateParams` containing the following parameters:
   *
   * - `input`:
   *
   * - `id`:
   */
  BlocDataDictionaryUpdate(params: BlocDataDictionaryService.BlocDataDictionaryUpdateParams): __Observable<DataDictionaryDto> {
    return this.BlocDataDictionaryUpdateResponse(params).pipe(
      __map(_r => _r.body as DataDictionaryDto)
    );
  }

  /**
   * @param id undefined
   */
  BlocDataDictionaryDeleteResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/bloc/bloc-data-dictionary/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  BlocDataDictionaryDelete(id: string): __Observable<null> {
    return this.BlocDataDictionaryDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  BlocDataDictionaryGetResponse(id: string): __Observable<__StrictHttpResponse<DataDictionaryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bloc/bloc-data-dictionary/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DataDictionaryDto>;
      })
    );
  }
  /**
   * @param id undefined
   */
  BlocDataDictionaryGet(id: string): __Observable<DataDictionaryDto> {
    return this.BlocDataDictionaryGetResponse(id).pipe(
      __map(_r => _r.body as DataDictionaryDto)
    );
  }

  /**
   * @param params The `BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams` containing the following parameters:
   *
   * - `take`:
   *
   * - `skip`:
   *
   * - `name`:
   *
   * - `categoryId`:
   */
  BlocDataDictionaryGetAllDataResponse(params: BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams): __Observable<__StrictHttpResponse<GetAllDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.take != null) __params = __params.set('take', params.take.toString());
    if (params.skip != null) __params = __params.set('skip', params.skip.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bloc/bloc-data-dictionary/data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetAllDataDto>;
      })
    );
  }
  /**
   * @param params The `BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams` containing the following parameters:
   *
   * - `take`:
   *
   * - `skip`:
   *
   * - `name`:
   *
   * - `categoryId`:
   */
  BlocDataDictionaryGetAllData(params: BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams): __Observable<GetAllDataDto> {
    return this.BlocDataDictionaryGetAllDataResponse(params).pipe(
      __map(_r => _r.body as GetAllDataDto)
    );
  }
}

module BlocDataDictionaryService {

  /**
   * Parameters for BlocDataDictionaryGetList
   */
  export interface BlocDataDictionaryGetListParams {
    Sorting?: null | string;
    SkipCount?: number;

    /**
     * Maximum result count should be returned.
     * This is generally used to limit result count on paging.
     */
    MaxResultCount?: number;
  }

  /**
   * Parameters for BlocDataDictionaryUpdate
   */
  export interface BlocDataDictionaryUpdateParams {
    input: DataDictionaryCreateOrUpdate;
    id: string;
  }

  /**
   * Parameters for BlocDataDictionaryGetAllData
   */
  export interface BlocDataDictionaryGetAllDataParams {
    take?: number;
    skip?: number;
    name?: null | string;
    categoryId?: null | string;
  }
}

export { BlocDataDictionaryService }
