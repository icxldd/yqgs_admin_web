/* tslint:disable */
import { DiscussDto } from './discuss-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateDiscussesResponse
 */
export interface CreateDiscussesResponse {

  /**
   * 讨论信息列表
   */
  discusses?: Array<DiscussDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
