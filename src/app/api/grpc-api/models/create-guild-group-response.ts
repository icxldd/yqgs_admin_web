/* tslint:disable */
import { GuildGroupDto } from './guild-group-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateGuildGroupResponse
 */
export interface CreateGuildGroupResponse {

  /**
   * 教会小组信息
   */
  group?: GuildGroupDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
