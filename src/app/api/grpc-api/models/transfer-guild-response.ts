/* tslint:disable */
import { GuildDto } from './guild-dto';
import { ResponseStatus } from './response-status';

/**
 * TransferGuildResponse
 */
export interface TransferGuildResponse {

  /**
   * 教会信息
   */
  guild?: GuildDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
