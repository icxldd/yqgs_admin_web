/* tslint:disable */
import { DiscussContentMessageDto } from './discuss-content-message-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowDiscussContentMessagesResponse
 */
export interface ShowDiscussContentMessagesResponse {

  /**
   * 一组讨论内容消息信息
   */
  messages?: Array<DiscussContentMessageDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
