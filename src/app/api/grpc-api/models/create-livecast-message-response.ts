/* tslint:disable */
import { LivecastMessageDto } from './livecast-message-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateLivecastMessageResponse
 */
export interface CreateLivecastMessageResponse {

  /**
   * 直播消息信息
   */
  message?: LivecastMessageDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
