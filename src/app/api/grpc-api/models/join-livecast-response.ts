/* tslint:disable */
import { LivecastReceiverDto } from './livecast-receiver-dto';
import { ResponseStatus } from './response-status';

/**
 * JoinLivecastResponse
 */
export interface JoinLivecastResponse {

  /**
   * 直播接收者信息
   */
  receiver?: LivecastReceiverDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
