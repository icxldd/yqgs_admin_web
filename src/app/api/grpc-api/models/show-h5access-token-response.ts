/* tslint:disable */
import { AccessTokenInfo } from './access-token-info';
import { ResponseStatus } from './response-status';
import { UserInfo } from './user-info';

/**
 * ShowH5AccessTokenResponse
 */
export interface ShowH5AccessTokenResponse {

  /**
   * accessInfo
   */
  accessInfo?: AccessTokenInfo;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * userInfo
   */
  userInfo?: UserInfo;
}
