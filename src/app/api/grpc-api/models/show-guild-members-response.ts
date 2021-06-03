/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildMembersResponse
 */
export interface ShowGuildMembersResponse {

  /**
   * 一组教会成员信息
   */
  members?: Array<GuildMemberDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
