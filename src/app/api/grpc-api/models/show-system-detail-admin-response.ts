/* tslint:disable */
import { ResponseStatus } from './response-status';
import { ShowSystemDetailAdminDto } from './show-system-detail-admin-dto';

/**
 * ShowSystemDetailAdminResponse
 */
export interface ShowSystemDetailAdminResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 系统详情信息
   */
  systemDetailInfo?: ShowSystemDetailAdminDto;
}
