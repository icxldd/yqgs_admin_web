/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ApplicationApiDescriptionModel } from '../models/application-api-description-model';
@Injectable({
  providedIn: 'root',
})
class AbpApiDefinitionService extends __BaseService {
  static readonly AbpApiDefinitionGetPath = '/api/abp/api-definition';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param IncludeTypes undefined
   */
  AbpApiDefinitionGetResponse(IncludeTypes?: boolean): __Observable<__StrictHttpResponse<ApplicationApiDescriptionModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (IncludeTypes != null) __params = __params.set('IncludeTypes', IncludeTypes.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/abp/api-definition`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ApplicationApiDescriptionModel>;
      })
    );
  }
  /**
   * @param IncludeTypes undefined
   */
  AbpApiDefinitionGet(IncludeTypes?: boolean): __Observable<ApplicationApiDescriptionModel> {
    return this.AbpApiDefinitionGetResponse(IncludeTypes).pipe(
      __map(_r => _r.body as ApplicationApiDescriptionModel)
    );
  }
}

module AbpApiDefinitionService {
}

export { AbpApiDefinitionService }
