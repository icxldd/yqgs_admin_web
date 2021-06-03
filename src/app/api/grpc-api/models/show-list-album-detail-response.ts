/* tslint:disable */
import { AlbumDetailDto } from './album-detail-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowListAlbumDetailResponse
 */
export interface ShowListAlbumDetailResponse {

  /**
   * 诗歌详情
   */
  albumDetails?: Array<AlbumDetailDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
