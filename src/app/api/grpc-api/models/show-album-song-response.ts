/* tslint:disable */
import { AlbumDetailDto } from './album-detail-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowAlbumSongResponse
 */
export interface ShowAlbumSongResponse {

  /**
   * 诗歌详情
   */
  albumSong?: AlbumDetailDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
