/* tslint:disable */
import { GuildResource } from './guild-resource';
import { ResponseStatus } from './response-status';

/**
 * ShowTestResponse
 */
export interface ShowTestResponse {

  /**
   * 响应
   */
  data?: Array<GuildResource>;
  data2?: string;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
