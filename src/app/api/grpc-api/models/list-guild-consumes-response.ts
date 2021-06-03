/* tslint:disable */
import { GuildConsumeDto } from './guild-consume-dto';
import { ResponseStatus } from './response-status';

/**
 * ListGuildConsumesResponse
 */
export interface ListGuildConsumesResponse {

  /**
   * 一组教会消费信息
   */
  consumes?: Array<GuildConsumeDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
