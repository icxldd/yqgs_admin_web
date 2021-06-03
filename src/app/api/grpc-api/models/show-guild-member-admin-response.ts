/* tslint:disable */
import { GuildMemberAdminDto } from './guild-member-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildMemberAdminResponse
 */
export interface ShowGuildMemberAdminResponse {

  /**
   * 教会成员
   */
  guildMemberAdminDto?: Array<GuildMemberAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
