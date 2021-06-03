/* tslint:disable */
import { NotificationDto } from './notification-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowNotificationResponse
 */
export interface ShowNotificationResponse {

  /**
   * 通知信息
   */
  notification?: NotificationDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
