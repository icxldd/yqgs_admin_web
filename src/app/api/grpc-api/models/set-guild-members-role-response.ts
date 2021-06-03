/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { ResponseStatus } from './response-status';

/**
 * SetGuildMembersRoleResponse
 */
export interface SetGuildMembersRoleResponse {

  /**
   * 一组教会成员信息
   */
  members?: Array<GuildMemberDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
