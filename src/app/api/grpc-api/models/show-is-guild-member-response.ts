/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * ShowIsGuildMemberResponse
 */
export interface ShowIsGuildMemberResponse {

  /**
   * 成员状态
   */
  memberStatus?: number;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
