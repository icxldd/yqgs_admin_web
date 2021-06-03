/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * ShowCodeToSessionResponse
 */
export interface ShowCodeToSessionResponse {

  /**
   * 错误码
   */
  errcode?: string;

  /**
   * 错误信息
   */
  errmsg?: string;

  /**
   * openid
   */
  openid?: string;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * sessionkey
   */
  session_key?: string;

  /**
   * unionid
   */
  unionid?: string;
}
