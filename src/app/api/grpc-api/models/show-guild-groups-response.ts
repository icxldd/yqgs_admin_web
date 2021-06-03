/* tslint:disable */
import { GuildGroupDto } from './guild-group-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildGroupsResponse
 */
export interface ShowGuildGroupsResponse {

  /**
   * 一组教会小组信息
   */
  groups?: Array<GuildGroupDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
