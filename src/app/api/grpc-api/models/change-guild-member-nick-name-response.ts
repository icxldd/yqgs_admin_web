/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { ResponseStatus } from './response-status';

/**
 * ChangeGuildMemberNickNameResponse
 */
export interface ChangeGuildMemberNickNameResponse {

  /**
   * 教会成员信息
   */
  member?: GuildMemberDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
