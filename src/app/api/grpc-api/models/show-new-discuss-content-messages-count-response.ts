/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * ShowNewDiscussContentMessagesCountResponse
 */
export interface ShowNewDiscussContentMessagesCountResponse {

  /**
   * 消息总数
   */
  messagesCount?: number;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
