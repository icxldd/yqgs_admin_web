/* tslint:disable */
import { ResponseStatus } from './response-status';
import { ShowSystemAdminDto } from './show-system-admin-dto';

/**
 * ShowSystemAdminResponse
 */
export interface ShowSystemAdminResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 系统详情
   */
  systemDetail?: ShowSystemAdminDto;
}
