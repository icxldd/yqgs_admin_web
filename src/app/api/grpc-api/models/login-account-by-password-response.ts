/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * LoginAccountByPasswordResponse
 */
export interface LoginAccountByPasswordResponse {

  /**
   * 是否通过此登录创建了一个新帐户
   */
  newlyCreated?: boolean;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 登录会话编号
   */
  sessionId?: string;

  /**
   * 用户编号
   */
  userId?: number;
}
