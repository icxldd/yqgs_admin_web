/* tslint:disable */
import { FavoriteDto } from './favorite-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateFavoriteResponse
 */
export interface CreateFavoriteResponse {

  /**
   * 收藏信息
   */
  favorite?: FavoriteDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
