/* tslint:disable */
import { Object } from './object';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildLivecastFluxDetailAdminResponse
 */
export interface ShowGuildLivecastFluxDetailAdminResponse {

  /**
   * 教会流量详情
   */
  objects?: Array<Object>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
