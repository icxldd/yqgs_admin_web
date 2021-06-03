/* tslint:disable */
import { GuildTotalAmountDto } from './guild-total-amount-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildLivecastFluxAdminResponse
 */
export interface ShowGuildLivecastFluxAdminResponse {

  /**
   * 教会流量使用详情
   */
  guildLivecastFluxs?: Array<GuildTotalAmountDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
