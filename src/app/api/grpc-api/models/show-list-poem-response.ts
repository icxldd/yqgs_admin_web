/* tslint:disable */
import { PoemDto } from './poem-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowListPoemResponse
 */
export interface ShowListPoemResponse {

  /**
   * 诗歌
   */
  poems?: Array<PoemDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
