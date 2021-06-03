/* tslint:disable */
import { DiscussDto } from './discuss-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowDiscussResponse
 */
export interface ShowDiscussResponse {

  /**
   * 讨论信息
   */
  discuss?: DiscussDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
