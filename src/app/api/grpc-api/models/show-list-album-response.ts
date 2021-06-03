/* tslint:disable */
import { AlbumDto } from './album-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowListAlbumResponse
 */
export interface ShowListAlbumResponse {

  /**
   * 诗歌
   */
  albums?: Array<AlbumDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
