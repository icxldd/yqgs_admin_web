/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * GenerateGuildCodeResponse
 */
export interface GenerateGuildCodeResponse {

  /**
   * 邀请码
   */
  code?: string;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
