/* tslint:disable */
import { LivecastRtmpDto } from './livecast-rtmp-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateLivecastRtmpUrlResponse
 */
export interface CreateLivecastRtmpUrlResponse {

  /**
   * 流地址
   */
  livecastRtmp?: LivecastRtmpDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
