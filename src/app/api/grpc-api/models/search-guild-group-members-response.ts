/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { ResponseStatus } from './response-status';

/**
 * SearchGuildGroupMembersResponse
 */
export interface SearchGuildGroupMembersResponse {

  /**
   * 一组教会成员信息
   */
  members?: Array<GuildMemberDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
