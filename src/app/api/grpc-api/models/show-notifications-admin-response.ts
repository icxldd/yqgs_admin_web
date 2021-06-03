/* tslint:disable */
import { NotificationAdminDto } from './notification-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowNotificationsAdminResponse
 */
export interface ShowNotificationsAdminResponse {

  /**
   * 通知信息
   */
  notifications?: Array<NotificationAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
