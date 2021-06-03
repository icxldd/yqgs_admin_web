/* tslint:disable */
import { ShowGuildDetailAdminDto } from './show-guild-detail-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildDetailAdminResponse
 */
export interface ShowGuildDetailAdminResponse {

  /**
   * 教会详情
   */
  guildDetail?: ShowGuildDetailAdminDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
