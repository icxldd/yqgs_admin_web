/* tslint:disable */
import { GuildAdminDto } from './guild-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildsLazyAdminResponse
 */
export interface ShowGuildsLazyAdminResponse {

  /**
   * 教会信息
   */
  guilds?: Array<GuildAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 总共条数
   */
  totalRecords?: number;
}
