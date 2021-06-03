/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * LoginAccountByWechatMiniProgramResponse
 */
export interface LoginAccountByWechatMiniProgramResponse {

  /**
   * 默认选中教会ID
   */
  defaultUsingGuildId?: string;

  /**
   * 默认选中教会名字
   */
  defaultUsingGuildName?: string;

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
