/* tslint:disable */
import { DiscussAdminDto } from './discuss-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowDiscussAdminResponse
 */
export interface ShowDiscussAdminResponse {

  /**
   * 讨论信息
   */
  discuss?: Array<DiscussAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
