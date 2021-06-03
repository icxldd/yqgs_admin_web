/* tslint:disable */
import { AccountDto } from './account-dto';
import { ResponseStatus } from './response-status';

/**
 * ChangeAccountDescriptionResponse
 */
export interface ChangeAccountDescriptionResponse {

  /**
   * 帐户信息
   */
  account?: AccountDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
