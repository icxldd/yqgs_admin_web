/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateGuildResponse
 */
export interface CreateGuildResponse {

  /**
   * 教会成员信息
   */
  member?: GuildMemberDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
