/* tslint:disable */
import { LivecastReceiverDto } from './livecast-receiver-dto';
import { ResponseStatus } from './response-status';

/**
 * LeaveLivecastResponse
 */
export interface LeaveLivecastResponse {

  /**
   * 直播接收者信息
   */
  receiver?: LivecastReceiverDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
