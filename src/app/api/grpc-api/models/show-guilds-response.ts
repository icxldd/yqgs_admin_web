/* tslint:disable */
import { GuildDto } from './guild-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildsResponse
 */
export interface ShowGuildsResponse {

  /**
   * 一组教会信息
   */
  guilds?: Array<GuildDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
