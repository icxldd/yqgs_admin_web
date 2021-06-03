/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { ResponseStatus } from './response-status';

/**
 * AuditGuildMemberResponse
 */
export interface AuditGuildMemberResponse {

  /**
   * 教会成员列表信息
   */
  guildMembers?: Array<GuildMemberDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
