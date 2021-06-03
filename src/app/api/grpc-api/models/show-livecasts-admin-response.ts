/* tslint:disable */
import { LivecastAdminDto } from './livecast-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowLivecastsAdminResponse
 */
export interface ShowLivecastsAdminResponse {

  /**
   * 直播信息
   */
  livecasts?: Array<LivecastAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
