/* tslint:disable */
import { ResponseStatus } from './response-status';
import { RoomDto } from './room-dto';

/**
 * ShowLivecastRoomInfoResponse
 */
export interface ShowLivecastRoomInfoResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 房间信息
   */
  roomDto?: RoomDto;
}
