/* tslint:disable */
import { AccountDto } from './account-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowUserInfoByUnionIdResponse
 */
export interface ShowUserInfoByUnionIdResponse {

  /**
   * 帐户信息
   */
  account?: AccountDto;

  /**
   * 默认选中教会ID
   */
  defaultUsingGuildId?: string;

  /**
   * 默认选中教会名字
   */
  defaultUsingGuildName?: string;

  /**
   * 是否已注册
   */
  isRegisterOfWechat?: boolean;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
