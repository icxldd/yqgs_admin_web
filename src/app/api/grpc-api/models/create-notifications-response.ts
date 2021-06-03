/* tslint:disable */
import { NotificationDto } from './notification-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateNotificationsResponse
 */
export interface CreateNotificationsResponse {

  /**
   * 通知信息列表
   */
  notifications?: Array<NotificationDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
