/* tslint:disable */
import { DiscussContentDto } from './discuss-content-dto';
import { ResponseStatus } from './response-status';

/**
 * SearchDiscussContentsResponse
 */
export interface SearchDiscussContentsResponse {

  /**
   * 一组讨论内容信息
   */
  contents?: Array<DiscussContentDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
