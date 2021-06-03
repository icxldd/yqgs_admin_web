/* tslint:disable */
import { ResponseStatus } from './response-status';
import { VersionDto } from './version-dto';

/**
 * ShowVersionResponse
 */
export interface ShowVersionResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 应用程序版本信息
   */
  version?: VersionDto;
}
