/* tslint:disable */
import { ResponseStatus } from './response-status';
import { GuildTotalFluxDto } from './guild-total-flux-dto';

/**
 * ShowGuildTotalFluxResponse
 */
export interface ShowGuildTotalFluxResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 总流量信息
   */
  totalFlux?: GuildTotalFluxDto;
}
