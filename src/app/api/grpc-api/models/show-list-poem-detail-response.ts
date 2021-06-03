/* tslint:disable */
import { PoemDetailDto } from './poem-detail-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowListPoemDetailResponse
 */
export interface ShowListPoemDetailResponse {

  /**
   * 诗歌详情
   */
  poemDetails?: Array<PoemDetailDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
