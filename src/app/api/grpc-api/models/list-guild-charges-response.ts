/* tslint:disable */
import { GuildChargeDto } from './guild-charge-dto';
import { ResponseStatus } from './response-status';

/**
 * ListGuildChargesResponse
 */
export interface ListGuildChargesResponse {

  /**
   * 一组教会充值信息
   */
  charges?: Array<GuildChargeDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
