/* tslint:disable */
import { LivecastAdminDto } from './livecast-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowLivecastsLazyAdminResponse
 */
export interface ShowLivecastsLazyAdminResponse {

  /**
   * 直播信息
   */
  livecasts?: Array<LivecastAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 总共条数
   */
  totalRecords?: number;
}
