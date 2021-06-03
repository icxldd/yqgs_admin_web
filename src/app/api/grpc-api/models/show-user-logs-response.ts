/* tslint:disable */
import { UserLogDto } from './user-log-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowUserLogsResponse
 */
export interface ShowUserLogsResponse {

  /**
   * 一组用户日志信息
   */
  logs?: Array<UserLogDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
