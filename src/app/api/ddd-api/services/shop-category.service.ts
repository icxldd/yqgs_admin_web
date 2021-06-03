/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
import { CategoryCreateOrUpdate } from '../models/category-create-or-update';
import { PagedResultDtoOfCategoryDto } from '../models/paged-result-dto-of-category-dto';
@Injectable({
  providedIn: 'root',
})
class ShopCategoryService extends __BaseService {
  static readonly ShopCategoryGetDataPath = '/api/grpc/shop-category/data';
  static readonly ShopCategoryCreatePath = '/api/grpc/shop-category';
  static readonly ShopCategoryGetListPath = '/api/grpc/shop-category';
  static readonly ShopCategoryUpdatePath = '/api/grpc/shop-category/{id}';
  static readonly ShopCategoryDeletePath = '/api/grpc/shop-category/{id}';
  static readonly ShopCategoryGetPath = '/api/grpc/shop-category/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  ShopCategoryGetDataResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/grpc/shop-category/data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }  ShopCategoryGetData(): __Observable<string> {
    return this.ShopCategoryGetDataResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param input undefined
   */
  ShopCategoryCreateResponse(input: CategoryCreateOrUpdate): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/grpc/shop-category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param input undefined
   */
  ShopCategoryCreate(input: CategoryCreateOrUpdate): __Observable<CategoryDto> {
    return this.ShopCategoryCreateResponse(input).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @param params The `ShopCategoryService.ShopCategoryGetListParams` containing the following parameters:
   *
   * - `Sorting`:
   *
   * - `SkipCount`:
   *
   * - `MaxResultCount`: Maximum result count should be returned.
   *   This is generally used to limit result count on paging.
   */
  ShopCategoryGetListResponse(params: ShopCategoryService.ShopCategoryGetListParams): __Observable<__StrictHttpResponse<PagedResultDtoOfCategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Sorting != null) __params = __params.set('Sorting', params.Sorting.toString());
    if (params.SkipCount != null) __params = __params.set('SkipCount', params.SkipCount.toString());
    if (params.MaxResultCount != null) __params = __params.set('MaxResultCount', params.MaxResultCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/grpc/shop-category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PagedResultDtoOfCategoryDto>;
      })
    );
  }
  /**
   * @param params The `ShopCategoryService.ShopCategoryGetListParams` containing the following parameters:
   *
   * - `Sorting`:
   *
   * - `SkipCount`:
   *
   * - `MaxResultCount`: Maximum result count should be returned.
   *   This is generally used to limit result count on paging.
   */
  ShopCategoryGetList(params: ShopCategoryService.ShopCategoryGetListParams): __Observable<PagedResultDtoOfCategoryDto> {
    return this.ShopCategoryGetListResponse(params).pipe(
      __map(_r => _r.body as PagedResultDtoOfCategoryDto)
    );
  }

  /**
   * @param params The `ShopCategoryService.ShopCategoryUpdateParams` containing the following parameters:
   *
   * - `input`:
   *
   * - `id`:
   */
  ShopCategoryUpdateResponse(params: ShopCategoryService.ShopCategoryUpdateParams): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/grpc/shop-category/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param params The `ShopCategoryService.ShopCategoryUpdateParams` containing the following parameters:
   *
   * - `input`:
   *
   * - `id`:
   */
  ShopCategoryUpdate(params: ShopCategoryService.ShopCategoryUpdateParams): __Observable<CategoryDto> {
    return this.ShopCategoryUpdateResponse(params).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @param id undefined
   */
  ShopCategoryDeleteResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/grpc/shop-category/${encodeURIComponent(String(id))}`,
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
  ShopCategoryDelete(id: string): __Observable<null> {
    return this.ShopCategoryDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  ShopCategoryGetResponse(id: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/grpc/shop-category/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param id undefined
   */
  ShopCategoryGet(id: string): __Observable<CategoryDto> {
    return this.ShopCategoryGetResponse(id).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }
}

module ShopCategoryService {

  /**
   * Parameters for ShopCategoryGetList
   */
  export interface ShopCategoryGetListParams {
    Sorting?: null | string;
    SkipCount?: number;

    /**
     * Maximum result count should be returned.
     * This is generally used to limit result count on paging.
     */
    MaxResultCount?: number;
  }

  /**
   * Parameters for ShopCategoryUpdate
   */
  export interface ShopCategoryUpdateParams {
    input: CategoryCreateOrUpdate;
    id: string;
  }
}

export { ShopCategoryService }
