/* tslint:disable */
import { DiscussReceiverDto } from './discuss-receiver-dto';
import { ResponseStatus } from './response-status';

/**
 * JoinDiscussResponse
 */
export interface JoinDiscussResponse {

  /**
   * 讨论接收者信息
   */
  receiver?: DiscussReceiverDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
