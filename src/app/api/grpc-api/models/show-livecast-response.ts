/* tslint:disable */
import { LivecastDto } from './livecast-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowLivecastResponse
 */
export interface ShowLivecastResponse {

  /**
   * 直播信息
   */
  livecast?: LivecastDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
