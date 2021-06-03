/* tslint:disable */
import { AccountAdminDto } from './account-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowAccountAdminResponse
 */
export interface ShowAccountAdminResponse {

  /**
   * 用戶信息
   */
  accounts?: Array<AccountAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
