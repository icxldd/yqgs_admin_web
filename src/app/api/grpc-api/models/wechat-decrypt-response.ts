/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * WechatDecryptResponse
 */
export interface WechatDecryptResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * unionId
   */
  unionId?: string;
}
