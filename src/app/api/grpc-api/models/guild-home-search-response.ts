/* tslint:disable */
import { GuildResourceDto } from './guild-resource-dto';
import { ResponseStatus } from './response-status';

/**
 * GuildHomeSearchResponse
 */
export interface GuildHomeSearchResponse {

  /**
   * 响应
   */
  guildResourceDtos?: Array<GuildResourceDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
