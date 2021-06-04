/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DataDictionaryTreeDto } from '../models/data-dictionary-tree-dto';
import { CreateTreeDto } from '../models/create-tree-dto';
import { UpdateInputTree } from '../models/update-input-tree';
import { MoveToDto } from '../models/move-to-dto';
import { RegenerateDto } from '../models/regenerate-dto';
@Injectable({
  providedIn: 'root',
})
class BlocDataDictionaryTreeService extends __BaseService {
  static readonly BlocDataDictionaryTreeCreatePath = '/api/bloc/bloc-data-dictionary-tree';
  static readonly BlocDataDictionaryTreeUpdatePath = '/api/bloc/bloc-data-dictionary-tree';
  static readonly BlocDataDictionaryTreeGetPath = '/api/bloc/bloc-data-dictionary-tree/{id}';
  static readonly BlocDataDictionaryTreeDeletePath = '/api/bloc/bloc-data-dictionary-tree/{id}';
  static readonly BlocDataDictionaryTreeGetTreesPath = '/api/bloc/bloc-data-dictionary-tree/trees';
  static readonly BlocDataDictionaryTreeMoveUpPath = '/api/bloc/bloc-data-dictionary-tree/move-up';
  static readonly BlocDataDictionaryTreeMoveDownPath = '/api/bloc/bloc-data-dictionary-tree/move-down';
  static readonly BlocDataDictionaryTreeMoveToBeforePath = '/api/bloc/bloc-data-dictionary-tree/{id}/move-to-before/{beforeId}';
  static readonly BlocDataDictionaryTreeMoveToPath = '/api/bloc/bloc-data-dictionary-tree/move-to';
  static readonly BlocDataDictionaryTreeRegeneratePath = '/api/bloc/bloc-data-dictionary-tree/regenerate';
  static readonly BlocDataDictionaryTreeReseedPath = '/api/bloc/bloc-data-dictionary-tree/reseed';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param input undefined
   */
  BlocDataDictionaryTreeCreateResponse(input: CreateTreeDto): __Observable<__StrictHttpResponse<DataDictionaryTreeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DataDictionaryTreeDto>;
      })
    );
  }
  /**
   * @param input undefined
   */
  BlocDataDictionaryTreeCreate(input: CreateTreeDto): __Observable<DataDictionaryTreeDto> {
    return this.BlocDataDictionaryTreeCreateResponse(input).pipe(
      __map(_r => _r.body as DataDictionaryTreeDto)
    );
  }

  /**
   * @param inputTree undefined
   */
  BlocDataDictionaryTreeUpdateResponse(inputTree: UpdateInputTree): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = inputTree;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree`,
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
   * @param inputTree undefined
   */
  BlocDataDictionaryTreeUpdate(inputTree: UpdateInputTree): __Observable<null> {
    return this.BlocDataDictionaryTreeUpdateResponse(inputTree).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  BlocDataDictionaryTreeGetResponse(id: string): __Observable<__StrictHttpResponse<DataDictionaryTreeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DataDictionaryTreeDto>;
      })
    );
  }
  /**
   * @param id undefined
   */
  BlocDataDictionaryTreeGet(id: string): __Observable<DataDictionaryTreeDto> {
    return this.BlocDataDictionaryTreeGetResponse(id).pipe(
      __map(_r => _r.body as DataDictionaryTreeDto)
    );
  }

  /**
   * @param id undefined
   */
  BlocDataDictionaryTreeDeleteResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/${encodeURIComponent(String(id))}`,
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
  BlocDataDictionaryTreeDelete(id: string): __Observable<null> {
    return this.BlocDataDictionaryTreeDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param ParentId undefined
   */
  BlocDataDictionaryTreeGetTreesResponse(ParentId?: null | string): __Observable<__StrictHttpResponse<Array<DataDictionaryTreeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (ParentId != null) __params = __params.set('ParentId', ParentId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/trees`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DataDictionaryTreeDto>>;
      })
    );
  }
  /**
   * @param ParentId undefined
   */
  BlocDataDictionaryTreeGetTrees(ParentId?: null | string): __Observable<Array<DataDictionaryTreeDto>> {
    return this.BlocDataDictionaryTreeGetTreesResponse(ParentId).pipe(
      __map(_r => _r.body as Array<DataDictionaryTreeDto>)
    );
  }

  /**
   * @param dto undefined
   */
  BlocDataDictionaryTreeMoveUpResponse(dto: DataDictionaryTreeDto): __Observable<__StrictHttpResponse<Array<DataDictionaryTreeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/move-up`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DataDictionaryTreeDto>>;
      })
    );
  }
  /**
   * @param dto undefined
   */
  BlocDataDictionaryTreeMoveUp(dto: DataDictionaryTreeDto): __Observable<Array<DataDictionaryTreeDto>> {
    return this.BlocDataDictionaryTreeMoveUpResponse(dto).pipe(
      __map(_r => _r.body as Array<DataDictionaryTreeDto>)
    );
  }

  /**
   * @param dto undefined
   */
  BlocDataDictionaryTreeMoveDownResponse(dto: DataDictionaryTreeDto): __Observable<__StrictHttpResponse<Array<DataDictionaryTreeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/move-down`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DataDictionaryTreeDto>>;
      })
    );
  }
  /**
   * @param dto undefined
   */
  BlocDataDictionaryTreeMoveDown(dto: DataDictionaryTreeDto): __Observable<Array<DataDictionaryTreeDto>> {
    return this.BlocDataDictionaryTreeMoveDownResponse(dto).pipe(
      __map(_r => _r.body as Array<DataDictionaryTreeDto>)
    );
  }

  /**
   * @param params The `BlocDataDictionaryTreeService.BlocDataDictionaryTreeMoveToBeforeParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `beforeId`:
   */
  BlocDataDictionaryTreeMoveToBeforeResponse(params: BlocDataDictionaryTreeService.BlocDataDictionaryTreeMoveToBeforeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/${encodeURIComponent(String(params.id))}/move-to-before/${encodeURIComponent(String(params.beforeId))}`,
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
   * @param params The `BlocDataDictionaryTreeService.BlocDataDictionaryTreeMoveToBeforeParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `beforeId`:
   */
  BlocDataDictionaryTreeMoveToBefore(params: BlocDataDictionaryTreeService.BlocDataDictionaryTreeMoveToBeforeParams): __Observable<null> {
    return this.BlocDataDictionaryTreeMoveToBeforeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param input undefined
   */
  BlocDataDictionaryTreeMoveToResponse(input: MoveToDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/move-to`,
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
   * @param input undefined
   */
  BlocDataDictionaryTreeMoveTo(input: MoveToDto): __Observable<null> {
    return this.BlocDataDictionaryTreeMoveToResponse(input).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param input undefined
   */
  BlocDataDictionaryTreeRegenerateResponse(input: RegenerateDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/regenerate`,
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
   * @param input undefined
   */
  BlocDataDictionaryTreeRegenerate(input: RegenerateDto): __Observable<null> {
    return this.BlocDataDictionaryTreeRegenerateResponse(input).pipe(
      __map(_r => _r.body as null)
    );
  }
  BlocDataDictionaryTreeReseedResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bloc/bloc-data-dictionary-tree/reseed`,
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
  }  BlocDataDictionaryTreeReseed(): __Observable<null> {
    return this.BlocDataDictionaryTreeReseedResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module BlocDataDictionaryTreeService {

  /**
   * Parameters for BlocDataDictionaryTreeMoveToBefore
   */
  export interface BlocDataDictionaryTreeMoveToBeforeParams {
    id: string;
    beforeId: string;
  }
}

export { BlocDataDictionaryTreeService }
