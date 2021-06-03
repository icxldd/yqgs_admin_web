/* tslint:disable */
import { AccountDto } from './account-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowAccountResponse
 */
export interface ShowAccountResponse {

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
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
