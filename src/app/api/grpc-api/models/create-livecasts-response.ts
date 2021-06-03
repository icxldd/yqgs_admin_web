/* tslint:disable */
import { LivecastDto } from './livecast-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateLivecastsResponse
 */
export interface CreateLivecastsResponse {

  /**
   * 直播信息列表
   */
  livecasts?: Array<LivecastDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
