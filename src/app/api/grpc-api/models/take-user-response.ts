/* tslint:disable */
import { ResponseStatus } from './response-status';
import { UserDto } from './user-dto';

/**
 * TakeUserResponse
 */
export interface TakeUserResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 用户信息
   */
  user?: UserDto;
}
