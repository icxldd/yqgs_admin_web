/* tslint:disable */
import { GuildAdminDto } from './guild-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildsAdminResponse
 */
export interface ShowGuildsAdminResponse {

  /**
   * 帖子信息
   */
  guilds?: Array<GuildAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
