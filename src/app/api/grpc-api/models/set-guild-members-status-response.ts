/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { ResponseStatus } from './response-status';

/**
 * SetGuildMembersStatusResponse
 */
export interface SetGuildMembersStatusResponse {

  /**
   * 一组教会成员信息
   */
  members?: Array<GuildMemberDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
