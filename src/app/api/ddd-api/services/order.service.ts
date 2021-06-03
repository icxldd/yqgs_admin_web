/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OrderDto } from '../models/order-dto';
import { OrderCreateOrUpdate } from '../models/order-create-or-update';
import { PagedResultDtoOfOrderDto } from '../models/paged-result-dto-of-order-dto';
@Injectable({
  providedIn: 'root',
})
class OrderService extends __BaseService {
  static readonly OrderCreatePath = '/api/yqgs/order';
  static readonly OrderGetListPath = '/api/yqgs/order';
  static readonly OrderUpdatePath = '/api/yqgs/order/{id}';
  static readonly OrderDeletePath = '/api/yqgs/order/{id}';
  static readonly OrderGetPath = '/api/yqgs/order/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param input undefined
   */
  OrderCreateResponse(input: OrderCreateOrUpdate): __Observable<__StrictHttpResponse<OrderDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/yqgs/order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderDto>;
      })
    );
  }
  /**
   * @param input undefined
   */
  OrderCreate(input: OrderCreateOrUpdate): __Observable<OrderDto> {
    return this.OrderCreateResponse(input).pipe(
      __map(_r => _r.body as OrderDto)
    );
  }

  /**
   * @param params The `OrderService.OrderGetListParams` containing the following parameters:
   *
   * - `Sorting`:
   *
   * - `SkipCount`:
   *
   * - `MaxResultCount`: Maximum result count should be returned.
   *   This is generally used to limit result count on paging.
   */
  OrderGetListResponse(params: OrderService.OrderGetListParams): __Observable<__StrictHttpResponse<PagedResultDtoOfOrderDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Sorting != null) __params = __params.set('Sorting', params.Sorting.toString());
    if (params.SkipCount != null) __params = __params.set('SkipCount', params.SkipCount.toString());
    if (params.MaxResultCount != null) __params = __params.set('MaxResultCount', params.MaxResultCount.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/yqgs/order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PagedResultDtoOfOrderDto>;
      })
    );
  }
  /**
   * @param params The `OrderService.OrderGetListParams` containing the following parameters:
   *
   * - `Sorting`:
   *
   * - `SkipCount`:
   *
   * - `MaxResultCount`: Maximum result count should be returned.
   *   This is generally used to limit result count on paging.
   */
  OrderGetList(params: OrderService.OrderGetListParams): __Observable<PagedResultDtoOfOrderDto> {
    return this.OrderGetListResponse(params).pipe(
      __map(_r => _r.body as PagedResultDtoOfOrderDto)
    );
  }

  /**
   * @param params The `OrderService.OrderUpdateParams` containing the following parameters:
   *
   * - `input`:
   *
   * - `id`:
   */
  OrderUpdateResponse(params: OrderService.OrderUpdateParams): __Observable<__StrictHttpResponse<OrderDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/yqgs/order/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderDto>;
      })
    );
  }
  /**
   * @param params The `OrderService.OrderUpdateParams` containing the following parameters:
   *
   * - `input`:
   *
   * - `id`:
   */
  OrderUpdate(params: OrderService.OrderUpdateParams): __Observable<OrderDto> {
    return this.OrderUpdateResponse(params).pipe(
      __map(_r => _r.body as OrderDto)
    );
  }

  /**
   * @param id undefined
   */
  OrderDeleteResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/yqgs/order/${encodeURIComponent(String(id))}`,
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
  OrderDelete(id: string): __Observable<null> {
    return this.OrderDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  OrderGetResponse(id: string): __Observable<__StrictHttpResponse<OrderDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/yqgs/order/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderDto>;
      })
    );
  }
  /**
   * @param id undefined
   */
  OrderGet(id: string): __Observable<OrderDto> {
    return this.OrderGetResponse(id).pipe(
      __map(_r => _r.body as OrderDto)
    );
  }
}

module OrderService {

  /**
   * Parameters for OrderGetList
   */
  export interface OrderGetListParams {
    Sorting?: null | string;
    SkipCount?: number;

    /**
     * Maximum result count should be returned.
     * This is generally used to limit result count on paging.
     */
    MaxResultCount?: number;
  }

  /**
   * Parameters for OrderUpdate
   */
  export interface OrderUpdateParams {
    input: OrderCreateOrUpdate;
    id: string;
  }
}

export { OrderService }
