/* tslint:disable */
import { GuildChargeDto } from './guild-charge-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateGuildChargeResponse
 */
export interface CreateGuildChargeResponse {

  /**
   * 教会充值信息
   */
  charge?: GuildChargeDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
