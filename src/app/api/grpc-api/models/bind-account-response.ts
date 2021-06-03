/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * BindAccountResponse
 */
export interface BindAccountResponse {

  /**
   * 当前绑定账号是否为新账号
   */
  bindAccountForNew?: boolean;
  phoneNumber?: string;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
  unionID?: string;
  userAuthId?: string;
  weChatOpenId?: string;
  weChatToken?: string;
}
